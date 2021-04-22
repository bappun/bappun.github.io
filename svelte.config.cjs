const sveltePreprocess = require('svelte-preprocess');
const adapterStatic = require('@sveltejs/adapter-static');
const pkg = require('./package.json');

/****/
const { extname } = require('path');
const { createFilter } = require('@rollup/pluginutils');
const image = require('@rollup/plugin-image');
const svelteSVG = require('rollup-plugin-svelte-svg');

const mode = process.env.NODE_ENV;
const dev = mode === "development";

const svgPlugin = svelteSVG({ dev });
const origSvgPluginTransform = svgPlugin.transform;
const filter = createFilter();
svgPlugin.transform = (source, id) => {
  if (!filter(id) || extname(id) !== ".svg") {
    return null;
  }
  // @rollup/plugin-image the code that this plugin generate
  // is looks like
  // var img = ".."; export default img;
  // We need to remove that in order to make SVG
  // works as expected for rollup-plugin-svelte-svg;
  // otherwise this string will appears on
  // the frontend
  source = decodeURIComponent(source)
    .replace('</svg>";', "</svg>")
    .replace(`export default img;`, "");
  const { code: transformed, map } = origSvgPluginTransform(source, id);
  // regex to findout the tranformed class
  // export default {LookAtThiString};
  const className = transformed.match("export default (.*);")[1];
  // render '' for on the SSR
  return {
    code: transformed.replace(
      `export default ${className};`,
      `${className}.$$$render = () => '';export default ${className};`
    ),
    map,
  };
};
/****/

/** @type {import('@sveltejs/kit').Config} */
module.exports = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: sveltePreprocess(),

	kit: {
		// By default, `npm run build` will create a standard Node app.
		// You can create optimized builds for different platforms by
		// specifying a different adapter
		adapter: adapterStatic(),

		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',

    router: false,
    // hydrate: false,

		vite: {
			ssr: {
				noExternal: Object.keys(pkg.dependencies || {})
			},
			plugins: [
				{
					...image(),
					enforce: "pre",
				},
				svgPlugin,
			]
		}
	}
};
