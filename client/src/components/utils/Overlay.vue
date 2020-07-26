<template>
    <b-overlay :show="show" variant="transparent" blur="none" no-wrap>
    </b-overlay>
</template>

<script>
    export default {
        name: "Overlay",
        props: ["show"]
    };
</script>

<style scoped lang="scss"></style>
