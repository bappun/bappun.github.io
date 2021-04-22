<article class="card card--bg contact">
    <slot/>
</article>

<style lang="less" global>
    @import "css/_variables";
    @import "css/_animations";

    .card {
        padding: @card-padding;
        margin-bottom: @box-space;
        border-radius: @border-radius;

        &--bg { background-color: @primary-color-light; }

        &:last-child { margin-bottom: 0; }
        & > p:last-child { margin-bottom: 0; }
    }

    .contact {
        flex-basis: 100%;
        text-align: center;
        margin-top: (@section-y-margin/2);
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        padding: @box-space;

        @animations: fadein, moveup;
        @duration: @transition-duration*5, @transition-duration*5;
        @delay: @transition-duration*2.5, @transition-duration*2.5;
        .delayAnimation(@delay, @duration, @animations);

        &__link { margin: @space; }

        @media @med-under-md {
            padding: @space;
            margin-top: @box-space;
        }
    }
</style>