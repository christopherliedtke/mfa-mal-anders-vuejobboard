<template>
    <div>
        <div class="d-flex">
            <b-form-file
                :id="id"
                ref="file-input"
                v-model="file"
                :state="validated ? (file ? true : null) : null"
                accept="image/jpeg, image/png"
                placeholder="Datei wählen/ablegen..."
                drop-placeholder="Datei hier ablegen..."
                browse-text="Durchsuchen"
                @input="uploadImage"
            />
            <b-button
                class="ml-2"
                variant="outline-danger"
                @click.prevent="resetFile"
                ><Fa icon="trash-alt"
            /></b-button>
        </div>
        <b-form-invalid-feedback :state="success">
            The image must be *.jpg or *.png and maximum 5MB.
        </b-form-invalid-feedback>
    </div>
</template>

<script>
    export default {
        name: "ImageUploader",
        props: ["id", "validated", "imageUrl", "width", "height", "fit"],
        data() {
            return {
                file: null,
                success: null
            };
        },
        methods: {
            async uploadImage(file) {
                this.success = null;

                if (!file) {
                    return;
                }

                this.$store.dispatch("setOverlay", true);

                try {
                    if (this.imageUrl) {
                        this.deleteImage();
                    }

                    const formData = new FormData();
                    formData.append("file", file);
                    formData.append("width", this.width);
                    formData.append("height", this.height);
                    formData.append("fit", this.fit);

                    const response = await this.$axios.post(
                        "/api/images/upload",
                        formData
                    );

                    if (response.data.success) {
                        this.$emit("update-url", response.data.url);
                    } else {
                        this.success = false;
                        this.$emit("update-url", "");
                    }
                } catch (err) {
                    console.log("err: ", err);
                }

                this.$store.dispatch("setOverlay", false);
            },
            async deleteImage() {
                try {
                    await this.$axios.post("/api/images/delete", {
                        imageUrl: this.imageUrl
                    });
                } catch (err) {
                    console.log("err: ", err);
                }
            },
            resetFile() {
                this.$store.dispatch("setOverlay", true);

                if (this.imageUrl) {
                    this.deleteImage();
                }

                this.$refs["file-input"].reset();
                this.$emit("update-url", "");

                this.$store.dispatch("setOverlay", false);
            }
        }
    };
</script>
