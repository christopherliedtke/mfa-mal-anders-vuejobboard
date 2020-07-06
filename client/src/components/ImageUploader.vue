<template>
    <div class="d-flex">
        <b-overlay
            :show="showOverlay"
            variant="transparent"
            blur="none"
            no-wrap
        >
        </b-overlay>
        <b-form-file
            id="file"
            ref="file-input"
            v-model="file"
            :state="validated ? (file ? true : null) : null"
            accept="image/jpeg, image/png"
            placeholder="Choose/Drop a file (png, jpg) ..."
            drop-placeholder="Drop file here (png, jpg) ..."
            @input="uploadImage"
        ></b-form-file>
        <b-button
            class="ml-2"
            variant="outline-danger"
            @click.prevent="resetFile"
            ><b-icon icon="x"></b-icon
        ></b-button>
    </div>
</template>

<script>
    import axios from "@/axios";
    export default {
        name: "ImageUploader",
        props: ["validated", "imageUrl"],
        data() {
            return {
                file: null,
                showOverlay: false
            };
        },
        methods: {
            async uploadImage(file) {
                if (!file) {
                    return;
                }

                this.showOverlay = true;

                try {
                    if (this.imageUrl) {
                        this.deleteImage("update");
                    }

                    const formData = new FormData();
                    formData.append("file", file);

                    const response = await axios.post(
                        "/api/images/upload",
                        formData
                    );

                    if (response.data.success) {
                        this.$emit("update-url", response.data.url);
                    } else {
                        this.$emit("update-url", null);
                    }
                } catch (err) {
                    console.log("err: ", err);
                }

                this.showOverlay = false;
            },
            async deleteImage(status = null) {
                try {
                    const response = await axios.post("/api/images/delete", {
                        imageUrl: this.imageUrl
                    });

                    if (response.data.success && !status) {
                        this.$refs["file-input"].reset();
                        this.$emit("update-url", "");
                    }
                } catch (err) {
                    console.log("err: ", err);
                }
            },
            resetFile() {
                this.showOverlay = true;

                if (this.imageUrl) {
                    this.deleteImage();
                }

                this.showOverlay = false;
            }
        }
    };
</script>

<style scoped lang="scss"></style>
