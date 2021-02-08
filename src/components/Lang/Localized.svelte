<script>
    import { createLocalization } from '$components/Lang';
    import { getContext } from 'svelte';

    const lang = getContext('lang');
    const { localize } = createLocalization(lang);

    let key = '';
    let className = '';
    export { key, className as class };

    let innerHTML = '';

    /**
     * @type {HTMLElement[]}
     */
    let items = [];

    $: {
        let htmlString = localize(key);
        if (items[0]) {
            htmlString = htmlString.replaceAll('{0}', items[0].innerHTML);
        }
        if (items[1]) {
            htmlString = htmlString.replaceAll('{1}', items[1].innerHTML);
        }
        if (items[2]) {
            htmlString = htmlString.replaceAll('{2}', items[2].innerHTML);
        }
        innerHTML = htmlString;
    }
</script>

<div class="hidden">
    <span bind:this={items[0]}><slot name="0" /></span>
    <span bind:this={items[1]}><slot name="1" /></span>
    <span bind:this={items[2]}><slot name="2" /></span>
    <slot />
</div>
<div class={className}>{@html innerHTML}</div>
