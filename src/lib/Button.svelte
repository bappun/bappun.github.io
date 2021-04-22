<script>
    export let href = "#";
    export let transparent = false;
</script>

<a href="{href}" class="{transparent ? 'button button--transparent' : 'button'}">
    <slot/>
</a>

<style lang="less" global>
    @import "css/_variables";

    .button {
        cursor: pointer;
        justify-content: center;
        align-items: center;
        display: inline-flex;
        height: @button-height;
        padding: 0 @button-padding;
        border-radius: 9999999px;
        background-color: @bg-color-dark;
        color: inherit;

        transition: opacity @transition-duration;
        &:hover { opacity: @transition-opacity; }

        &--transparent { background-color: transparent; padding: 0; height: auto; }
    }
</style>