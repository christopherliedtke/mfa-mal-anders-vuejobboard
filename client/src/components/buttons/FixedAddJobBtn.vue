<template>
    <transition appear name="fade">
        <b-button
            to="/register"
            class="position-fixed shadow1 d-none d-lg-block"
            style="bottom: 5vw; right: 5vw; z-index: 999"
            variant="secondary"
        >
            Stellenanzeige schalten
        </b-button>
    </transition>
</template>

<script>
    export default {
        name: "FixedAddJobBtn"
    };
</script>
