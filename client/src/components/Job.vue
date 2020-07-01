<template>
    <div class="job">
        <h2>{{ job.title }}</h2>
        <p>{{ job.description }}</p>
    </div>
</template>

<script>
    export default {
        name: "Job",
        props: ["job"]
    };
</script>

<style scoped lang="scss"></style>
