<template>
    <b-overlay
        :show="$store.state.utils.overlay"
        style="z-index:9999"
        bg-color="#00000066"
        blur="1px"
        no-wrap
        fixed
    >
    </b-overlay>
</template>

<script>
    export default {
        name: "Overlay"
    };
</script>
