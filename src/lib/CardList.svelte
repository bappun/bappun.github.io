<div class="list list--card align-center">
    <slot/>
</div>

<style lang="less" global>
    @import "css/_variables";

    @media @med-under-md {
        .list--card {
            .card + .card { margin-top: @box-space*2; }
        }
    }

    @media @med-md {
        .list--card {
            display: grid;
            gap: @box-space*2;
            grid-template-columns: repeat(auto-fill, minmax(calc(33% - (@box-space*2)), 1fr));
            .card { margin: 0; }
        }
    }
</style>