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
            <b-icon icon="x"></b-icon>
        </span>
        <NewsletterSignUpForm
            class="p-3"
            :defaultState="state"
            intro="Erhalte unsere aktuellen Stellenangebote wöchentlich direkt in Dein Postfach."
        />
    </b-modal>
</template>

<script>
    import NewsletterSignUpForm from "@/components/utils/NewsletterSignUpForm.vue";
    export default {
        name: "SubscribeNewsletterBtn",
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
        methods: {
            closePopUp() {
                localStorage.setItem("nl-pop", "false");
                this.modalVisible = false;
            }
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
        }
    };
</script>
