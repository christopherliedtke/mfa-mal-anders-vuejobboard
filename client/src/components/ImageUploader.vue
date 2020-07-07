<template>
    <div>
        <div class="d-flex">
            <Overlay :show="showOverlay"></Overlay>
            <b-form-file
                :id="id"
                ref="file-input"
                v-model="file"
                :state="validated ? (file ? true : null) : null"
                accept="image/jpeg, image/png"
                placeholder="Choose/Drop a file ..."
                drop-placeholder="Drop file here ..."
                @input="uploadImage"
            ></b-form-file>
            <b-button
                class="ml-2"
                variant="outline-danger"
                @click.prevent="resetFile"
                ><b-icon icon="trash"></b-icon
            ></b-button>
        </div>
        <b-form-invalid-feedback :state="success">
            The image must be *.jpg or *.png and maximum 5MB.
        </b-form-invalid-feedback>
    </div>
</template>

<script>
    import axios from "@/axios";
    import Overlay from "@/components/Overlay";
    export default {
        name: "ImageUploader",
        components: {
            Overlay
        },
        props: ["id", "validated", "imageUrl", "width", "height"],
        data() {
            return {
                file: null,
                showOverlay: false,
                success: null
            };
        },
        methods: {
            async uploadImage(file) {
                this.success = null;

                if (!file) {
                    return;
                }

                this.showOverlay = true;

                try {
                    if (this.imageUrl) {
                        this.deleteImage();
                    }

                    const formData = new FormData();
                    formData.append("file", file);
                    formData.append("width", this.width);
                    formData.append("height", this.height);

                    const response = await axios.post(
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

                this.showOverlay = false;
            },
            async deleteImage() {
                try {
                    await axios.post("/api/images/delete", {
                        imageUrl: this.imageUrl
                    });
                } catch (err) {
                    console.log("err: ", err);
                }
            },
            resetFile() {
                this.showOverlay = true;

                if (this.imageUrl) {
                    this.deleteImage();
                }

                this.$refs["file-input"].reset();
                this.$emit("update-url", "");

                this.showOverlay = false;
            }
        }
    };
</script>

<style scoped lang="scss"></style>
