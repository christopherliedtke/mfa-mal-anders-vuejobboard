<template>
    <div class="jobcard">
        <b-link :to="`/jobboard/job/${job._id}`">
            <b-card no-body class="mb-3 mt-3 mt-lg-0">
                <b-card-text>
                    <div class="card-head">
                        <h2
                            :class="
                                job.company.logoUrl
                                    ? 'mobile-max-width-75 h4'
                                    : 'h4'
                            "
                        >
                            {{ job.title }}
                        </h2>
                        <div v-if="job.company.logoUrl" class="img-container">
                            <b-img-lazy
                                :src="job.company.logoUrl"
                                blank-src="@/assets/img/logo_800.png"
                                :alt="`Logo - ${job.company.name}`"
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
                            <Fa
                                class="mr-2"
                                :icon="['fas', 'map-marker']"
                                size="lg"
                            />
                            {{
                                job.company.state != job.company.location
                                    ? `${job.company.location}, ${job.company.state}`
                                    : job.company.location
                            }}
                        </div>
                        <div>
                            <Fa
                                class="mr-2"
                                :icon="['fas', 'building']"
                                size="lg"
                            />
                            {{ job.company.name }}
                        </div>
                        <div>
                            <Fa
                                class="mr-2"
                                :icon="['fas', 'clock']"
                                size="lg"
                            />
                            {{
                                employmentTypeOptions.filter(
                                    option =>
                                        option.value === job.employmentType
                                )[0].text
                            }}
                        </div>
                        <div>
                            <Fa
                                class="mr-2"
                                :icon="['fas', 'calendar-alt']"
                                size="lg"
                            />
                            Veröffentlicht:
                            {{
                                new Date(
                                    parseInt(job.paidAt)
                                ).toLocaleDateString()
                            }}
                        </div>
                        <div
                            v-if="job.simpleApplication"
                            v-b-tooltip.bottom.hover
                            title="Lebenslauf genügt für Bewerbung"
                        >
                            <b-badge pill variant="secondary"
                                ><Fa
                                    class="mr-1"
                                    :icon="['fas', 'hashtag']"
                                />Einfach bewerben</b-badge
                            >
                        </div>
                    </div>
                </b-card-text>
            </b-card>
        </b-link>
    </div>
</template>

<script>
    import {
        employmentTypeOptions,
        companySizeOptions
    } from "@/config/formDataConfig.json";
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
