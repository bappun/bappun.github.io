<script>
    const extraCssClass = $$props.class ? ` ${$$props.class}` : '';
</script>

<article class={`section${extraCssClass}`}>
    <slot/>
</article>

<style lang="less" global>
    @import "css/_variables";
    @import "css/_animations";

    .section {
        max-width: @max-document-width;
        margin: @section-y-margin auto;
        padding: 0 (@box-space/2);
        display: flex;
        flex-direction: column;
    
        &:last-child { margin-bottom: (@section-y-margin*2); }
    
        @media @med-md { padding: 0 @box-space; }
    
        a {
            transition: opacity @transition-duration;
            &:hover { opacity: @transition-opacity; }
        }
    }
    .intro {
        animation: unset;
        margin: (@section-y-margin*0.75) auto @section-y-margin auto;

        &__title {
            margin-top: 0;
            margin-bottom: 0;
            animation: scalein @transition-duration*2;
        }
        &__hello {
            font-weight: normal;
            font-size: x-large;
        }
        &__subtitle {
            margin-top: @box-space;
            margin-bottom: 0;
        }
        &__img, &__subtitle {
            @animations: fadein, moveup;
            @duration: @transition-duration*5, @transition-duration*5;
            @delay: @transition-duration*1.25, @transition-duration*1.25;
            .delayAnimation(@delay, @duration, @animations);
        }
        &__img svg {
            overflow: visible;

            .float {
            animation: float (@transition-duration*30) ease-in-out infinite;
            }
        }

        @media @med-under-md {
            margin-bottom: @section-y-margin; margin-top: @box-space;
            &__img {
            position: absolute;
            margin: (@body-border-height+@box-space/2) (@box-space/2) 0 0;
            top: 0;
            right: 0;
            max-height: 7rem; max-width: 7rem;
            }
        }

        @media @med-md {
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: space-between;
            align-items: center;
            &__text, &__img { flex-basis: 45%; }
        }
    }
</style>