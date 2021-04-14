<script lang="ts">
    import Anchor from '$lib/Anchor.svelte';

    export let id = "";
</script>

<Anchor id="{id}"/>
<h1 class="section__title"><slot/></h1>

<style lang="less">
    @import "css/_variables";

    .section__title {
      display: inline-block;
      margin-top: 0;
      margin-bottom: (@section-y-margin/2);
      position: relative;
      align-self: center;

      &::before {
        content: '';
        position: absolute;
        height: @border-width;
        width: 38%;
        border-radius: @border-radius;
        background-color: @accent-color;
        z-index: -1;
        left: 0;
        bottom: 0;
      }
    }
</style>