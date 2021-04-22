<script>
    export let title = "title";
    export let icon = undefined;
    export let textIcon = undefined;
</script>

<article class="card card--transparent">
    {#if icon}
        <div class="card__icon" aria-hidden="true"><slot name="icon"><svelte:component this={icon}/></slot></div>
    {:else}
        <div class="card__icon card__icon--text" aria-hidden="true">{textIcon}</div>
    {/if}
    <h2 class="card__title">{title}</h2>
    <slot/>
</article>

<style lang="less" global>
    @import "css/_variables";

    .card {
        padding: @card-padding;
        margin-bottom: @box-space;
        border-radius: @border-radius;

        &__icon {
            height: 60px;
            color: @primary-color;

            svg { width: auto; }
            &--text {
                font-size: 1.5rem;
                font-weight: bold;
                user-select: none;
                line-height: 1;
                border: @border-width-sm solid currentColor;
                display: inline-flex;
                align-items: center;
                padding: 0 @space;
                border-radius: @border-radius;
                box-sizing: border-box;
            }
        }

        &__title {
            border-radius: @border-radius @border-radius 0 0;
            margin-top: 0;
            margin-bottom: 0;
            
            &:not(:first-child) { margin-top: @box-space; }
        }

        &__links {
            display: flex;
            align-items: center;

            a { color: inherit; }
            a + a { margin-left: @space-text; }
        }

        &__footer {
            margin-top: @box-space;
        }

        &--transparent { padding: 0; margin-bottom: (@space*2); background-color: transparent; }

        &:last-child { margin-bottom: 0; }
        & > p:last-child { margin-bottom: 0; }
    }

    @media @med-md {
        .card--transparent { margin-bottom: @box-space*2; }
    }
</style>