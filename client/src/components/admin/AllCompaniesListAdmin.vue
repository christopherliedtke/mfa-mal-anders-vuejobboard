<template>
    <div>
        <b-form id="company-filter" inline @submit.prevent>
            <b-input-group class="my-2 mr-2">
                <b-form-input
                    type="text"
                    v-model="filter.searchTerm"
                    placeholder="Enter search term ..."
                />
                <b-input-group-append>
                    <b-button
                        ><b-icon
                            icon="x"
                            @click.prevent="filter.searchTerm = ''"
                    /></b-button>
                </b-input-group-append>
            </b-input-group>
            <div class="inline-block ml-3">
                Number of Companies:
                <strong>{{ computedCompanies.length }}</strong>
            </div>
        </b-form>
        <b-table
            responsive
            striped
            hover
            sticky-header="80vh"
            :items="computedCompanies"
            :fields="fields"
            primary-key="_id"
        >
            <template v-slot:cell(user)="row">
                {{
                    row.item.userId.lastName + ", " + row.item.userId.firstName
                }}
                <a :href="`mailto:${row.item.userId.email}`">
                    {{ row.item.userId.email }}</a
                >
            </template>
            <template v-slot:cell(createdAt)="row">
                {{ new Date(row.value).toLocaleString() }}
            </template>
            <template v-slot:cell(updatedAt)="row">
                {{ new Date(row.value).toLocaleString() }}
            </template>
            <template v-slot:cell(location)="row">
                {{
                    row.item.street +
                        " " +
                        row.item.location +
                        " " +
                        row.item.zipCode +
                        " " +
                        row.item.state +
                        " " +
                        row.item.country
                }}
            </template>
            <template v-slot:cell(actions)="row">
                <b-button
                    class="mr-2 mb-2"
                    :to="`/admin/companies/${row.item._id}`"
                    variant="primary"
                    size="sm"
                    ><b-icon icon="pencil-square"></b-icon>
                </b-button>
                <b-button
                    size="sm"
                    variant="danger"
                    @click="showDeleteCompanyModal(row.item)"
                >
                    <b-icon class="mr-2" icon="trash"></b-icon>Delete
                </b-button>
            </template>
        </b-table>
        <b-modal
            id="deleteCompanyModal"
            :title="`Delete ${companyToDelete.name}`"
            ok-title="Delete Company"
            centered
            ok-variant="danger"
            footer-class="d-flex justify-content-between"
            @ok="deleteCompany(companyToDelete._id)"
            ><p class="my-4">
                Are you sure to delete this company?
            </p></b-modal
        >
        <b-alert
            v-model="error"
            class="position-fixed fixed-bottom m-0 rounded-0"
            style="z-index: 2000;"
            variant="warning"
            dismissible
        >
            Oh, something went wrong. Please try again later.
        </b-alert>
    </div>
</template>

<script>
    import axios from "@/axios";
    export default {
        name: "AllCompaniesListAdmin",
        data() {
            return {
                companies: [],
                companyToDelete: Object,
                error: false,
                filter: {
                    searchTerm: ""
                },
                fields: [
                    {
                        key: "_id",
                        label: "Company ID",
                        sortable: false
                    },
                    {
                        key: "name",
                        sortable: true
                    },
                    {
                        key: "createdAt",
                        sortable: true
                    },
                    {
                        key: "updatedAt",
                        sortable: true
                    },
                    {
                        key: "location",
                        sortable: true
                    },
                    {
                        key: "userId._id",
                        label: "User ID",
                        sortable: false
                    },
                    {
                        key: "user",
                        sortable: true
                    },
                    {
                        key: "actions",
                        sortable: false
                    }
                ]
            };
        },
        computed: {
            computedCompanies: function() {
                let companies = [...this.companies];

                // filter search term
                if (this.filter.searchTerm) {
                    companies = companies.filter(company => {
                        if (
                            this.checkForSearchTerm(
                                [
                                    company._id,
                                    company.name,
                                    company.street,
                                    company.location,
                                    company.zipCode,
                                    company.state,
                                    company.country,
                                    company.userId._id,
                                    company.userId.lastName,
                                    company.userId.firstName,
                                    company.userId.email
                                ],
                                this.filter.searchTerm
                            )
                        ) {
                            return company;
                        } else {
                            return;
                        }
                    });
                }

                return companies;
            }
        },
        created() {
            this.getAllCompanies();
        },
        methods: {
            checkForSearchTerm(arrOfValues, searchTerm) {
                let result = false;
                arrOfValues.forEach(value => {
                    if (
                        value &&
                        value.toLowerCase().includes(searchTerm.toLowerCase())
                    ) {
                        result = true;
                    }
                });
                return result;
            },
            async getAllCompanies() {
                try {
                    const response = await axios.post("/api/companies/admin", {
                        query: `
                            query {
                                companies {
                                    _id
                                    createdAt
                                    updatedAt
                                    name
                                    street
                                    location
                                    state
                                    zipCode
                                    country
                                    userId {
                                        _id
                                        createdAt
                                        firstName
                                        lastName
                                        email
                                    }
                                }
                            }
                        `
                    });

                    this.companies = response.data.data.companies;
                } catch (err) {
                    this.error = true;
                    console.log("err: ", err);
                }
            },
            async updateCompany(id, key, value) {
                try {
                    const response = await axios.post("/api/companies/admin", {
                        query: `
                            mutation {
                                updateCompany (_id: "${id}", ${key}: ${
                            typeof value === "string" ? `"${value}"` : value
                        }) {
                                    _id
                                    createdAt
                                    updatedAt
                                    name
                                    street
                                    location
                                    state
                                    zipCode
                                    country                         
                                    userId {
                                        _id
                                        createdAt
                                        firstName
                                        lastName
                                        email
                                    }
                                }
                            }
                        `
                    });

                    if (response.data.data.updateCompany._id) {
                        this.companies = this.companies.map(company => {
                            if (
                                company._id ===
                                response.data.data.updateCompany._id
                            ) {
                                return response.data.data.updateCompany;
                            } else {
                                return company;
                            }
                        });
                    }
                } catch (err) {
                    console.log("Error on updateJob(): ", err);
                }
            },
            showDeleteCompanyModal(job) {
                this.companyToDelete = job;
                this.$bvModal.show("deleteCompanyModal");
            },
            async deleteCompany(companyId) {
                try {
                    const response = await axios.post("/api/companies/admin", {
                        query: `
                            mutation {
                                deleteCompany(_id: "${companyId}") {
                                    name
                                }
                            }
                        `
                    });

                    if (response.data.data.deleteCompany.name === "deleted") {
                        this.companies.forEach((company, index) => {
                            if (company._id === companyId) {
                                this.companies.splice(index, 1);
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
        }
    };
</script>

<style></style>
