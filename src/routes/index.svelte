<script>
    import Bg from '$lib/assets/bg7.svelte';
    import LinkedinIcon from '$lib/assets/linkedin.svelte';
    import GithubIcon from '$lib/assets/github.svelte';
    import TwitterIcon from '$lib/assets/twitter.svelte';
    import EmailIcon from '$lib/assets/email.svelte';
    import CodeIcon from '$lib/assets/code.svelte';
    import DesignIcon from '$lib/assets/design.svelte';
    import ConceptIcon from '$lib/assets/concept.svelte';
    import ScienceIcon from '$lib/assets/science.svelte';
    import TradingIcon from '$lib/assets/trading.svelte';
    import LanguageIcon from '$lib/assets/language.svelte';

    import Anchor from '$lib/Anchor.svelte';
	import Section from '$lib/Section.svelte';
    import SectionTitle from '$lib/SectionTitle.svelte';
    import Button from '$lib/Button.svelte';
	import CardList from '$lib/CardList.svelte';
	import Card from '$lib/Card.svelte';
    import CardEx from '$lib/CardEx.svelte';
    import Contact from '$lib/Contact.svelte';
</script>

<svelte:head>
	<title>Développeur web full stack - Baptiste Rouxel</title>
</svelte:head>

<main>
	<Section class="intro">
		<div class="intro__text">
            <h1 class="intro__title"><span class="intro__hello">Hello world !</span><br>Je conçois des applications web modernes et intuitives</h1>
            <p class="intro__subtitle">À la recherche d'opportunités au Japon à partir de mars/avril 2021 (au plus tôt)<span class="muted">&nbsp;-&nbsp;Baptiste Rouxel, développeur web full stack</span></p>
        </div>
        <div class="intro__img" aria-hidden="true"><Bg/></div>
        <Anchor id="contact"/>
		<Contact>
            <Button href="https://www.linkedin.com/in/baptiste-rouxel" transparent>
                <span class="icon color-linkedin" aria-hidden="true"><LinkedinIcon/></span>
                <span>LinkedIn</span>
            </Button>
            <Button href="https://github.com/bappun" transparent>
                <span class="icon color-black" aria-hidden="true"><GithubIcon/></span>
                <span>GitHub</span>
            </Button>
            <Button href="https://twitter.com/baptiste_rouxel" transparent>
                <span class="icon color-twitter" aria-hidden="true"><TwitterIcon/></span>
                <span>Twitter</span>
            </Button>
            <Button href="mailto:hello@baptiste-rouxel.com" transparent>
                <span class="icon color-black" aria-hidden="true"><EmailIcon/></span>
                <span>E-mail</span>
            </Button>
        </Contact>
	</Section>
	<Section>
        <SectionTitle id="skills">Compétences</SectionTitle>
		<CardList>
			<Card title="Développement" icon="{CodeIcon}">Programmation en Django, Python, JavaScript, Vue.js<br>Utilisation de Git, Docker et Webpack</Card>
			<Card title="Interfaces utilisateur" icon="{DesignIcon}">Design et développement d'interfaces utilisateur</Card>
			<Card title="Conseil & conception" icon="{ConceptIcon}">Aide à la définition des besoins et conception d'applications en fonction de ceux-ci</Card>
			<Card title="Anglais" textIcon="EN">Niveau avancé - TOEIC 920/990<br>4 semaines de summer school au Pays de Galles</Card>
			<Card title="Japonais" textIcon="日本語">Niveau intermédiaire<br>3 semaines d'échange dans un lycée à Tokyo</Card>
			<Card title="Espagnol" textIcon="ES">Notions élémentaires</Card>
		</CardList>
	</Section>
    <Section>
        <SectionTitle id="career">Expérience</SectionTitle>
        <CardEx date="2019-2021" title="Développeur web full stack" tags="{['git', 'django', 'python', 'vuejs', 'docker', 'webpack']}">
            <svelte:fragment slot="subtitle">
                <a href="https://cdsp.sciences-po.fr/fr">Sciences Po</a>
                <a href="https://www.cnrs.fr">CNRS</a>
            </svelte:fragment>
            <p>Travail collaboratif pour la construction d'un entrepôt de données respectant certaines normes.</p>
            <p>Participation au développement d'une application de gestion d'échantillons pour des questionnaires en ligne réalisés sur Qualtrics. Conception et développement de l'interface utilisateur. Cette application est développée dans le cadre de SSHOC, une plateforme en ligne européenne regroupant des outils pour la recherche en sciences humaines et sociales.</p>
        </CardEx>
        <CardEx date="2017-2019" title="Apprenti développeur web full stack" tags="{['git', 'django', 'python', 'javascript', 'vuejs', 'docker', 'webpack']}">
            <svelte:fragment slot="subtitle">
                <a href="https://cdsp.sciences-po.fr/fr">Sciences Po</a>
                <a href="https://www.cnrs.fr">CNRS</a>
            </svelte:fragment>
            <p>Je suis intervenu dans le développement d'applications au service de la recherche et l'aide à l'archivage et au traitement des données en sciences sociales&nbsp;:</p>
            <ul>
                <li>application web de dépôt et d'exploration de données de recherche, aussi utilisée dans le cadre de formations&nbsp;;</li>
                <li>application web et mobile permettant de répondre à des questionnaires sur tablette. Gestion des répondants et de leur matériel, planification et développement des questionnaires, développement de questions interactives sur tablette (exemples&nbsp;:  lecteur vidéo, carte interactive).</li>
            </ul>
            <p>Dans le cadre de cette deuxième application, j'ai également traité des paradonnées sur les actions réalisées par les répondants et les autres utilisateurs de la plateforme. J'ai aussi effectué une refonte de l'interface mobile pour la rendre plus moderne et accessible.</p>
            <p>Mon mémoire de fin d'études avait pour sujet l'intégration de composants d'interface dynamiques (Vue.js) dans des pages statiques (Django) tout en utilisant la technologie Docker. Ce travail de recherche a été fondamental pour la création d'une application web dans le contexte d'un nouveau projet européen.</p>
        </CardEx>
        <CardEx date="2016-2017" title="Apprenti développeur logiciel" tags="{['windev']}">
            <svelte:fragment slot="subtitle">
                <a href="http://www.computer-engineering.fr">Computer Engineering</a>
            </svelte:fragment>
            <p>Chargé du développement d’un module de gestion de blocs opératoires pour un progiciel médical utilisé dans des hôpitaux français. Création de nouvelles fonctionnalités et migration vers une nouvelle interface utilisateur en suivant une charte graphique.</p>
        </CardEx>
    </Section>
    <Section>
        <SectionTitle id="education">Formation</SectionTitle>
        <CardEx date="2016-2019" title="Ingénieur informatique">
            <svelte:fragment slot="subtitle">
                <a href="https://www.esiea.fr">ESIEA</a>
                <a href="https://cfa-ite.fr">CFA-ITE</a>
            </svelte:fragment>
            <p>L’ESIEA forme des ingénieurs généralistes des Sciences et Technologies du Numérique, adaptables à leur environnement technique et humain, ainsi qu’aux exigences de secteurs d’activité très diversifiés en France et à l'international.</p>
        </CardEx>
        <CardEx date="2016" title="Les principes fondamentaux du marketing numérique">
            <svelte:fragment slot="subtitle">
                <a href="https://learndigital.withgoogle.com/ateliersnumeriques">Google Ateliers Numériques</a>
            </svelte:fragment>
            <p>La formation Google Ateliers Numériques consiste en 26 modules couvrant de nombreux thèmes du marketing digital&nbsp;: recherche emailing, médias sociaux, display, vidéo, e-commerce, ciblage, analyse d'audience, et bien plus.</p>
        </CardEx>
        <CardEx date="2014-2016" title="DUT informatique">
            <svelte:fragment slot="subtitle">
                <a href="http://www.iut-velizy.uvsq.fr">IUT de Vélizy</a>
            </svelte:fragment>
            <p>Les étudiants formés doivent être capables de participer à la conception, la réalisation et la mise en œuvre de systèmes informatiques correspondant aux besoins des utilisateurs. Pour assumer ces responsabilités, les informaticiens doivent être compétents sur le plan technologique, connaître l'environnement socio-économique dans lequel ils auront à exercer leur profession, posséder une bonne culture générale et se montrer aptes à la communication.</p>
        </CardEx>
    </Section>
    <Section>
        <SectionTitle id="hobbies">Centres d'intérêt</SectionTitle>
        <CardList>
			<Card title="Sciences" icon="{ScienceIcon}">Veille quotidienne dans divers domaines&nbsp;: physique, technologique, biologique</Card>
			<Card title="Investissements" icon="{TradingIcon}">Lecture des courbes, prédiction et gestion des risques</Card>
			<Card title="Langues" icon="{LanguageIcon}">Apprentissage des langues, conversation avec des natifs</Card>
		</CardList>
    </Section>
</main>