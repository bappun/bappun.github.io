<script lang="ts">
    import TagList from '$lib/TagList.svelte';
    import Tag from '$lib/Tag.svelte';

    export let date = "20XX-20XX";
    export let title = "title";
    export let subtitle = "subtitle";
    export let tags = undefined;
</script>

<article class="card card--border card--linked">
    <span class="muted">{date}</span>
    <h2 class="card__title">{title}</h2>
    <span class="card__subtitle card__links"><slot name="subtitle">{subtitle}</slot></span>
    <slot/>
    {#if tags}
        <footer class="card__footer">
            <TagList>
                {#each tags as tag}
                    <Tag>{tag}</Tag>
                {/each}
            </TagList>
        </footer>
    {/if}
</article>

<style lang="less">
    @import "css/_variables";

    .card {
        padding: @card-padding;
        margin-bottom: @box-space;
        border-radius: @border-radius;

        &__title {
            border-radius: @border-radius @border-radius 0 0;
            margin-top: 0;
            margin-bottom: 0;
            
            &:not(:first-child) { margin-top: @box-space; }
        }

        &__subtitle {
            margin-top: (@space/2);
            margin-bottom: @box-space;
            color: @font-color-lighter;
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

        &--border { border: @border-width solid @bg-color-dark; }
        &--linked {
            & + &:not(:last-child) { border-radius: 0; }
            &:not(:last-child) { margin-bottom: -@border-width; }
        }

        &:last-child { margin-bottom: 0; }
        & > p:last-child { margin-bottom: 0; }
    }
</style>