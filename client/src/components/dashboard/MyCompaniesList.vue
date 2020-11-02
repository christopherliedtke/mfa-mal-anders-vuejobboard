<template>
    <div>
        <h3>Meine Unternehmen</h3>
        <p>
            Hier können Sie Ihre erstellten Unternehmen bearbeiten, löschen bzw.
            neue Unternehmen erstellen.
        </p>
        <p>
            Sie können das selbe Unternehmen mit unterschiedlichen Standorten
            erstellen und diese gegebenenfalls für Ihre verschiedenen
            Stellenanzeigen nutzen. Ein Unternehmen können Sie auch direkt
            während des Erstellens einer Stellenanzeige im Reiter
            "Stellenanzeigen" einrichten. Bearbeiten Sie hier einzelne
            Unternehmen, wirkt sich dies direkt auf die verknüpften
            Stellenanzeigen aus.
        </p>
        <b-button
            class="mr-2 mb-2"
            to="/dashboard/new-company"
            variant="outline-primary"
            ><b-icon class="mr-2" scale="1" icon="plus-circle"></b-icon>Neues
            Unternehmen</b-button
        >
        <b-button
            class="mr-2 mb-2"
            to="/page/contact"
            variant="outline-secondary"
            target="_blank"
            >Fragen oder Hilfe benötigt?</b-button
        >
        <b-card v-for="company in myCompanies" :key="company._id" class="my-3">
            <b-card-text>
                <h4>{{ company.name }} | {{ company.location }}</h4>
                <div class="my-3">
                    <div>
                        Erstellt:
                        {{
                            new Date(
                                parseInt(company.createdAt)
                            ).toLocaleString()
                        }}
                    </div>
                    <!-- <div>
                        Aktualisiert:
                        {{
                            new Date(
                                parseInt(company.updatedAt)
                            ).toLocaleString()
                        }}
                    </div> -->
                </div>
                <div class="d-flex justify-content-between align-items-end">
                    <div>
                        <b-button
                            class="mr-2 mb-2 mb-md-0"
                            :to="`/dashboard/companies/${company._id}`"
                            variant="primary"
                            size="sm"
                            ><b-icon
                                class="mr-2"
                                scale="1"
                                icon="pencil-square"
                            ></b-icon>
                            Bearbeiten</b-button
                        >
                    </div>
                    <div>
                        <b-button
                            variant="outline-danger"
                            size="sm"
                            @click.prevent="$bvModal.show(company._id)"
                            ><b-icon
                                class="mr-2"
                                scale="1"
                                icon="trash"
                            ></b-icon>
                            Löschen</b-button
                        >
                    </div>
                </div>
            </b-card-text>
            <b-modal
                :id="company._id"
                :title="`Delete ${company.name}`"
                ok-title="Unternehmen löschen"
                cancel-title="Abbrechen"
                centered
                ok-variant="danger"
                footer-class="d-flex justify-content-between"
                @ok="deleteCompany(company._id)"
                ><p class="my-4">
                    Bist Du sicher, dass Du das Unternehmen löschen möchtest?
                </p></b-modal
            >
        </b-card>
        <b-alert
            v-model="error"
            class="position-fixed fixed-bottom m-0 rounded-0"
            style="z-index: 2000;"
            variant="warning"
            dismissible
        >
            Oh, da ist leider etwas schief gelaufen. Bitte probiere es noch
            einmal.
        </b-alert>
    </div>
</template>

<script>
    import axios from "@/axios";
    export default {
        name: "MyCompaniesList",
        data() {
            return {
                myCompanies: [],
                error: false
            };
        },
        methods: {
            async getCompaniesByUserId() {
                try {
                    const response = await axios.post(
                        "/api/companies/private",
                        {
                            query: `
                                query {
                                    companies {
                                        _id
                                        createdAt
                                        updatedAt
                                        name
                                        location
                                    }
                                }
                            `
                        }
                    );

                    this.myCompanies = response.data.data.companies;
                } catch (err) {
                    this.error = true;
                    console.log("err: ", err);
                }
            },
            async deleteCompany(companyId) {
                try {
                    const response = await axios.post(
                        "/api/companies/private",
                        {
                            query: `
                                mutation {
                                    deleteCompany(_id: "${companyId}") {
                                        name
                                    }
                                }
                            `
                        }
                    );

                    if (response.data.data.deleteCompany.name === "deleted") {
                        this.myCompanies.forEach((company, index) => {
                            if (company._id === companyId) {
                                this.myCompanies.splice(index, 1);
                            }
                        });
                    } else {
                        this.error = true;
                    }
                } catch (err) {
                    this.error = true;
                    console.log("err: ", err);
                }
            }
        },
        created: function() {
            this.getCompaniesByUserId();
        }
    };
</script>
