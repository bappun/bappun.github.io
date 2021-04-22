<div class="list list--tag">
    <slot/>
</div>

<style lang="less" global>
    @import "css/_variables";

    .list--tag {
        margin: (-@space/2);
        .tag { margin: (@space/2); }
    }
</style>