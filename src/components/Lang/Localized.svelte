<script>
    import { createLocalization } from '$components/Lang';
    import { getContext } from 'svelte';

    const lang = getContext('lang');

    let key = '';
    let fallbackKey = undefined;
    let className = '';
    export { key, fallbackKey, className as class };

    let innerHTML = '';

    /**
     * @type {HTMLElement[]}
     */
    let items = [];

    $: localization = createLocalization($lang);
    $: localize = localization.localize;
    $: {
        let htmlString = localize(key, fallbackKey);
        for (const key in items) {
            if (items[key]) {
                htmlString = htmlString.replaceAll(
                    `{${key}}`,
                    items[key].innerHTML
                );
            }
        }
        innerHTML = htmlString;
    }
</script>

<div class="hidden">
    <slot />
    <span bind:this={items[0]}><slot name="0" /></span>
    <span bind:this={items[1]}><slot name="1" /></span>
    <span bind:this={items[2]}><slot name="2" /></span>
</div>
<div class={className}>{@html innerHTML}</div>
