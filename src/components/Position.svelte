<script>
    const positionColors = {
        TL: 'bg-red-100 text-red-800 border-red-200',
        TLC: 'bg-yellow-100 text-yellow-800 border-yellow-200',
        ENC: 'bg-green-100 text-green-800 border-green-200',
        ED: 'bg-blue-100 text-blue-800 border-blue-200',
        TM: 'bg-indigo-100 text-indigo-800 border-indigo-200',
        TS: 'bg-purple-100 text-purple-800 border-purple-200',
        QC: 'bg-pink-100 text-pink-800 border-pink-200',
    };

    export let position;

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

    $: colors =
        positionColors[position.acronym] ||
        'bg-gray-100 text-gray-800 border-gray-200';
</script>

<div
    class="cursor-default group relative rounded border px-1 inline-block align-middle {colors}"
>
    <span>{position.acronym}</span>
    <!-- Tooltip -->
    <div
        class="block z-50 rounded-sm px-2 py-1 pointer-events-none opacity-0 group-hover:opacity-100 focus:opacity-100 transition-opacity shadow border text-xs absolute whitespace-nowrap left-1/2 transform bottom-6 text-center -translate-x-1/2 {colors}"
        use:clamp
    >
        {position.name}
    </div>
</div>
