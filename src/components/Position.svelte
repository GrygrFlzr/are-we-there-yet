<script>
    import { session } from '$app/stores';

    const colorPalette = [
        'bg-red-100 text-red-800 border-red-200',
        'bg-yellow-100 text-yellow-800 border-yellow-200',
        'bg-green-100 text-green-800 border-green-200',
        'bg-blue-100 text-blue-800 border-blue-200',
        'bg-indigo-100 text-indigo-800 border-indigo-200',
        'bg-purple-100 text-purple-800 border-purple-200',
        'bg-pink-100 text-pink-800 border-pink-200',
    ];

    export let position;
    let colors = '';

    /**
     * @type {HTMLElement | undefined}
     */
    let tooltip;

    /**
     * @param {HTMLElement} node
     */
    function clamp(node) {
        // reset baseline
        node.style.setProperty('--tw-translate-x', '-50%');
        const { scrollWidth } = document.body;
        const { left, right } = node.getBoundingClientRect();

        if (left < 16) {
            node.style.setProperty(
                '--tw-translate-x',
                `calc(-50% + ${16 - left}px)`
            );
        } else if (right > scrollWidth - 16) {
            node.style.setProperty(
                '--tw-translate-x',
                `calc(-50% - ${right - (scrollWidth - 16)}px)`
            );
        }
    }

    function computeColor() {
        const paletteIndex = corePositions.indexOf(position.acronym);
        if (paletteIndex < 0) {
            colors = 'bg-gray-100 text-gray-800 border-gray-200';
        } else {
            colors = colorPalette[paletteIndex];
        }
    }

    $: corePositions = $session.corePositions || [];
    $: corePositions, computeColor();
    $: if (tooltip) {
        clamp(tooltip);
    }
</script>

<div
    class="cursor-default group relative rounded border px-1 inline-block align-middle {colors}"
>
    <span>{position.acronym}</span>
    <!-- Tooltip -->
    <div
        class="block z-50 rounded-sm px-2 py-1 pointer-events-none opacity-0 group-hover:opacity-100 focus:opacity-100 transition-opacity shadow border text-xs absolute whitespace-nowrap left-1/2 transform bottom-6 text-center -translate-x-1/2 {colors}"
        bind:this={tooltip}
    >
        {position.name}
    </div>
</div>
