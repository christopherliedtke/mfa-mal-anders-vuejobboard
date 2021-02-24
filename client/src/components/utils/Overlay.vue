<template>
    <b-overlay
        :show="$store.state.utils.overlay"
        style="z-index:9999"
        variant="dark"
        opacity="0.6"
        blur="1px"
        no-wrap
        fixed
        spinner-variant="primary"
        spinner-type="grow"
    >
    </b-overlay>
</template>

<script>
    export default {
        name: "Overlay"
    };
</script>
