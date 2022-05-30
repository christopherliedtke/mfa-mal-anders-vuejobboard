<template>
  <div>
    <div class="d-flex">
      <BFormFile
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
      <b-button class="ml-2" variant="outline-danger" @click.prevent="resetFile"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-trash-fill"
          viewBox="0 0 16 16"
        >
          <path
            d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"
          /></svg
      ></b-button>
    </div>
    <b-form-invalid-feedback :state="success">
      Das Bild muss im Format *.jpg oder *.png hochgeladen werden und darf
      maximal 5MB groß sein.
    </b-form-invalid-feedback>
  </div>
</template>

<script>
  import Vue from "vue";
  import { BFormFile } from "bootstrap-vue";
  Vue.component("BFormFile", BFormFile);
  export default {
    name: "ImageUploader",
    props: {
      id: { type: String, default: "" },
      validated: { type: Boolean },
      imageUrl: { type: String, default: "" },
      width: { type: Number, default: 0 },
      height: { type: Number, default: 0 },
      fit: { type: String, default: "outside" }
    },
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
          this.$root.$bvToast.toast(
            `Das Bild konnte nicht gespeichert werden.`,
            {
              title: `Fehler beim Speichern`,
              variant: "danger",
              toaster: "b-toaster-bottom-right",
              solid: true,
              noAutoHide: false
            }
          );
        }

        this.$store.dispatch("setOverlay", false);
      },
      async deleteImage() {
        this.$store.dispatch("setOverlay", true);
        try {
          await this.$axios.post("/api/images/delete", {
            imageUrl: this.imageUrl
          });
        } catch (err) {
          () => {};
        }
        this.$store.dispatch("setOverlay", false);
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

<style lang="scss">
  .custom-file-label {
    border-radius: $border-radius2;
    margin-left: 0;
  }
</style>
