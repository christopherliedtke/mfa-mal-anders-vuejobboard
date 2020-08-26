<template
    ><b-link :to="`/jobboard/job/${job._id}`">
        <b-card no-body class="my-3">
            <b-card-text>
                <div class="card-head">
                    <h4>
                        {{ job.title }}
                    </h4>
                    <div class="img-container">
                        <b-img-lazy
                            :src="job.company.logoUrl"
                            blank-src="@/assets/logo.png"
                        />
                    </div>
                </div>
                <div class="card-content">
                    <div
                        v-html="
                            $sanitize(job.description, {
                                allowedTags: [],
                                textFilter: function(text, tagName) {
                                    return ' ' + text;
                                }
                            }).substring(0, 200) + '...'
                        "
                    ></div>
                </div>
                <hr />
                <div class="card-foot">
                    <div>
                        <font-awesome-icon
                            class="mr-2"
                            :icon="['fas', 'map-marker']"
                            size="lg"
                        />
                        {{ job.company.location }}
                    </div>
                    <div>
                        <font-awesome-icon
                            class="mr-2"
                            :icon="['fas', 'building']"
                            size="lg"
                        />
                        {{ job.company.name }}
                    </div>
                    <div>
                        <font-awesome-icon
                            class="mr-2"
                            :icon="['fas', 'calendar-alt']"
                            size="lg"
                        />
                        Veröffentlicht:
                        {{
                            new Date(parseInt(job.paidAt)).toLocaleDateString()
                        }}
                    </div>
                    <div>
                        <font-awesome-icon
                            class="mr-2"
                            :icon="['fas', 'clock']"
                            size="lg"
                        />
                        {{
                            employmentTypeOptions.filter(
                                option => option.value === job.employmentType
                            )[0].text
                        }}
                    </div>
                    <div v-if="job.simpleApplication">
                        <b-badge pill variant="secondary"
                            ><font-awesome-icon
                                class="mr-1"
                                :icon="['fas', 'hashtag']"
                            />Einfach bewerben</b-badge
                        >
                    </div>
                </div>
            </b-card-text>
        </b-card>
    </b-link>
</template>

<script>
    import {
        employmentTypeOptions,
        companySizeOptions
    } from "@/utils/jobDataConfig.json";
    export default {
        name: "JobCard",
        props: ["job"],
        data() {
            return {
                employmentTypeOptions,
                companySizeOptions
            };
        }
    };
</script>

<style scoped lang="scss">
    @import "@/styles/custom_bootstrap.scss";

    .card {
        // border: none;
        background-color: darken($light, $amount: 2%);

        hr {
            margin: 0;
        }

        .card-head {
            display: flex;
            justify-content: space-between;
            align-items: stretch;
            background-color: lighten($primary, $amount: 0%);
            color: $light;
            border-radius: 5px 5px 0 0;

            h4 {
                margin: 0;
                padding: 1rem;
            }

            .img-container {
                display: flex;
                justify-content: center;
                align-items: center;
                background-color: darken($light, $amount: 1%);
                padding: 1rem;
                width: 150px;
                border-radius: 0 5px 0 0;

                img {
                    max-height: 90%;
                    max-width: 90%;
                }
            }
        }

        .card-content {
            padding: 1rem;
        }

        .card-foot {
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            padding: 1rem;

            div {
                margin-top: 0.5rem;
                margin-right: 1rem;
            }

            .badge {
                font-size: inherit;
                font-weight: inherit;
                color: $light;
                padding: 0.3rem 0.7rem;
            }
        }
    }
</style>
