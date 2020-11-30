<template>
    <div>
        <b-button variant="danger" type="submit" v-b-modal.delete-account
            ><b-icon class="mr-2" icon="trash"></b-icon>Account
            löschen</b-button
        >
        <b-modal
            id="delete-account"
            title="Account löschen"
            ok-title="Jetzt löschen"
            cancel-title="Abbrechen"
            centered
            ok-variant="danger"
            footer-class="d-flex justify-content-between"
            @ok="deleteAccount"
        >
            <b-overlay
                :show="showOverlay"
                variant="transparent"
                blur="none"
                z-index="9999"
            >
                <p class="my-4">
                    Bist Du sicher, dass Du Deinen Account löschen möchtest?
                </p>
                <b-form>
                    <label for="password">Passwort</label>
                    <b-input-group>
                        <b-form-input
                            :type="passwordType"
                            v-model="password"
                            id="password"
                            placeholder="Passwort eingeben..."
                            autocomplete="current-password"
                        ></b-form-input>
                        <b-input-group-append is-text>
                            <b-icon
                                :icon="
                                    passwordType === 'text'
                                        ? 'eye-fill'
                                        : 'eye-slash-fill'
                                "
                                font-scale="1.2"
                                @click="togglePasswordType"
                            ></b-icon>
                        </b-input-group-append>
                    </b-input-group>

                    <div class="error mt-3" v-if="error">
                        <b-alert show dismissible variant="warning">{{
                            error
                        }}</b-alert>
                    </div>
                </b-form>
            </b-overlay>
        </b-modal>
    </div>
</template>

<script>
    import axios from "@/axios";
    export default {
        name: "DeleteAccountButton",
        methods: {
            async deleteAccount(e) {
                e.preventDefault();
                this.showOverlay = true;
                this.error = null;

                const response = await axios.post("/api/auth/delete-account", {
                    password: this.password
                });
                this.showOverlay = false;

                if (!response.data.success) {
                    this.error = response.data.error;
                } else {
                    localStorage.clear();
                    this.$store.commit("setUserId", null);
                    this.$store.commit("setUserRole", null);
                    this.$store.commit("setUserStatus", null);
                    this.$router.push({ path: "/login" });
                }
            },
            togglePasswordType() {
                this.passwordType === "text"
                    ? (this.passwordType = "password")
                    : (this.passwordType = "text");
            }
        },
        data() {
            return {
                password: "",
                passwordType: "password",
                showOverlay: false,
                error: null
            };
        }
    };
</script>

<style scoped lang="scss">
    .b-icon {
        cursor: pointer;
    }
</style>
