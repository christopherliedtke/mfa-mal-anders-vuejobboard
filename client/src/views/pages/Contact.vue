<template>
    <div>
        <h1 class="title">{{ title }}</h1>
        <b-container class="contact py-5">
            <ContactForm
                title="Nimm Kontakt auf!"
                intro="Hast Du Fragen, Anregungen oder Hinweise zur Webseite, suchst
                Austausch zum Thema “Jobs und Karriere für MFAs” oder benötigst
                Hilfe bei der Jobsuche bzw. Personalsuche? Dann schreibe uns
                gern und nutze dazu das Kontaktformular."
            />
        </b-container>
        <Head
            :title="title"
            desc="Du hast ein Anliegen, dass Du mit uns besprechen möchtest? Nimm noch heute Kontakt zu uns auf."
            img=""
            :script="snippet"
        />
    </div>
</template>

<script>
    import ContactForm from "@/components/forms/ContactForm.vue";
    export default {
        name: "Contact",
        components: {
            ContactForm
        },
        data() {
            return {
                title: "Kontakt",
                snippet: [
                    {
                        type: "application/ld+json",
                        inner: `{
                            "@context": "http://schema.org",
                            "@type" : "BreadcrumbList",
                            "itemListElement": [{
                                "@type": "ListItem",
                                "position": 1,
                                "name": "MFA mal anders",
                                "item": "https://www.mfa-mal-anders.de"
                            },{
                                "@type": "ListItem",
                                "position": 2,
                                "name": "Kontakt",
                                "item": "https://www.mfa-mal-anders.de/page/contact"
                            }]
                        }`
                    }
                ]
            };
        }
    };
</script>
