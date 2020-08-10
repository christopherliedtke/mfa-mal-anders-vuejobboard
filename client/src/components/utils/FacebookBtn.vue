<template>
    <b-button
        class="facebook-btn"
        variant="primary"
        :href="`https://www.facebook.com/${config.fb.path}`"
        target="_blank"
    >
        <svg
            width="20"
            aria-hidden="true"
            focusable="false"
            class="mr-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
        >
            <path
                fill="currentColor"
                d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"
            ></path>
        </svg>
        Facebook
    </b-button>
</template>

<script>
    import config from "@/utils/config.json";
    export default {
        name: "FacebookBtn",
        data() {
            return {
                config
            };
        }
    };
</script>

<style scoped lang="scss"></style>
