<span class="tag"><slot/></span>

<style lang="less" global>
    @import "css/_variables";

    .tag {
        display: inline-block;
        background-color: @primary-color-light;
        border-radius: @border-radius;
        padding: (@space/3) (@space/2);
        font-family: monospace;
        color: @primary-color-dark;
    }
</style>