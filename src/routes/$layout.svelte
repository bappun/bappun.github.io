<script>
    import SkillIcon from '$lib/assets/skills.svg';
    import CareerIcon from '$lib/assets/career.svg';
    import EducationIcon from '$lib/assets/education.svg';
    import ContactIcon from '$lib/assets/contact.svg';
    import ArrowupIcon from '$lib/assets/arrow-up.svg';
	import Button from '$lib/Button.svelte';
</script>

<header class="header menu">
    <span class="brand" aria-hidden="true"></span>
    <nav class="menu__links">
        <a class="menu__link" href="#skills"><span class="icon" aria-hidden="true"><SkillIcon/></span>Compétences</a>
        <a class="menu__link" href="#career"><span class="icon" aria-hidden="true"><CareerIcon/></span>Expérience</a>
        <a class="menu__link" href="#education"><span class="icon" aria-hidden="true"><EducationIcon/></span>Formation</a>
        <a class="menu__link d-none-under-md" href="#hobbies">Centres d'intérêt</a>
        <a class="menu__link d-none-md" href="#contact"><span class="icon" aria-hidden="true"><ContactIcon/></span>Contact</a>
    </nav>
</header>
<slot/>
<footer class="footer">
    <div class="footer__content">
        <p aria-hidden="true"><span class="brand"></span><br>Baptiste Rouxel</p>
        <Button href="#top"><span class="icon" aria-hidden="true"><ArrowupIcon/></span><span>Haut de page</span></Button>
    </div>
</footer>

<style global lang="less">
    @import "../lib/css/style";
</style>