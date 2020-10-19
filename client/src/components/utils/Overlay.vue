<template>
    <b-overlay :show="show" bg-color="#00000066" blur="1px" no-wrap fixed>
    </b-overlay>
</template>

<script>
    export default {
        name: "Overlay",
        props: ["show"]
    };
</script>
