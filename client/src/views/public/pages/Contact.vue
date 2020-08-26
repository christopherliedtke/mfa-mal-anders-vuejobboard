<template>
    <div>
        <h1 class="title">{{ title }}</h1>
        <b-container class="contact py-5">
            <h2>Nimm Kontakt auf!</h2>
            <p>
                Hast Du Fragen, Anregungen oder Hinweise zur Webseite, suchst
                Austausch zum Thema “Jobs und Karriere für MFAs” oder benötigst
                Hilfe bei der Jobsuche bzw. Personalsuche? Dann schreibe uns
                gern und nutze dazu das Kontaktformular.
            </p>
            <ContactForm />
        </b-container>
        <Head
            :title="title"
            desc="Du hast ein Anliegen, dass Du mit uns besprechen möchtest? Nimm noch heute Kontakt zu uns auf."
            img=""
        />
    </div>
</template>

<script>
    import Head from "@/components/utils/Head.vue";
    import ContactForm from "@/components/utils/ContactForm.vue";
    export default {
        name: "Contact",
        components: {
            Head,
            ContactForm
        },
        data() {
            return {
                title: "Kontakt"
            };
        }
    };
</script>

<style scoped lang="scss">
    @import "@/styles/custom_bootstrap.scss";

    .contact {
        background: url("~@/assets/new_message.svg") center center no-repeat
            transparentize($light, $amount: 0.3);
        background-size: 50vh;
        background-blend-mode: lighten;
    }
</style>
