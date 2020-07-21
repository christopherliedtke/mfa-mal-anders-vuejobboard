<template>
    <b-container class="impressum py-5">
        <h2>Impressum</h2>
    </b-container>
</template>

<script>
    export default {
        name: "Impressum",
        head: {
            title: function() {
                return {
                    inner: "Impressum"
                };
            },
            meta: function() {
                return [
                    {
                        name: "description",
                        content: "This is the meta of Impressum...",
                        id: "desc"
                    }
                ];
            }
        }
    };
</script>

<style scoped lang="scss"></style>
