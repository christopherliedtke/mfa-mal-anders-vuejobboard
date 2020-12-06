<template>
    <b-modal
        id="subscribe-newsletter-modal"
        hide-footer
        hide-header
        centered
        :visible="modalVisible"
    >
        <span
            @click="closePopUp"
            class="position-absolute"
            style="right: 15px; top: 15px; cursor: pointer"
        >
            <Fa icon="times" />
        </span>
        <NewsletterSignUpForm
            class="p-3"
            :defaultState="state"
            intro="Erhalte unsere aktuellen Stellenangebote wöchentlich direkt in Dein Postfach."
            :social="true"
        />
    </b-modal>
</template>

<script>
    import NewsletterSignUpForm from "@/components/forms/NewsletterSignUpForm.vue";
    export default {
        name: "NewsletterSignUpPopUp",
        components: {
            NewsletterSignUpForm
        },
        props: {
            state: {
                type: String,
                default: null
            }
        },
        data() {
            return {
                modalVisible: false
            };
        },
        mounted() {
            if (
                !localStorage.getItem("nl-pop") &&
                this.$route.path != "/page/fuer-arbeitgeber"
            ) {
                setTimeout(() => {
                    this.modalVisible = true;
                }, 10000);
            }
        },
        methods: {
            closePopUp() {
                localStorage.setItem("nl-pop", "false");
                this.modalVisible = false;
            }
        }
    };
</script>
