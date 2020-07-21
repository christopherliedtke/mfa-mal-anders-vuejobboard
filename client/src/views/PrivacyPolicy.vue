<template>
    <b-container class="privacy-policy py-5">
        <h2>Privacy Policy</h2>
    </b-container>
</template>

<script>
    export default {
        name: "PrivacyPolicy",
        head: {
            title: function() {
                return {
                    inner: "Privacy Policy"
                };
            },
            meta: function() {
                return [
                    {
                        name: "description",
                        content: "This is the meta of Privacy Policy...",
                        id: "desc"
                    }
                ];
            }
        }
    };
</script>

<style scoped lang="scss"></style>
