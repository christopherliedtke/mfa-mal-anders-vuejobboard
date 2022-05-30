<template>
  <div class="tip-tap-editor">
    <!-- <editor-menu-bar v-slot="{ commands, isActive }" :editor="editor"> -->
    <div v-if="editor" class="menubar my-2">
      <b-button
        variant="light"
        class="menubar__button"
        :class="{ active: editor.isActive('bold') }"
        @click="
          editor
            .chain()
            .focus()
            .toggleBold()
            .run()
        "
      >
        <strong>F</strong>
      </b-button>

      <b-button
        variant="light"
        class="menubar__button"
        :class="{ active: editor.isActive('italic') }"
        @click="
          editor
            .chain()
            .focus()
            .toggleItalic()
            .run()
        "
      >
        <em>K</em>
      </b-button>

      <b-button
        variant="light"
        class="menubar__button"
        :class="{ active: editor.isActive('paragraph') }"
        @click="
          editor
            .chain()
            .focus()
            .setParagraph()
            .run()
        "
      >
        Aa
      </b-button>

      <b-button
        variant="light"
        class="menubar__button"
        :class="{ active: editor.isActive('heading', { level: 3 }) }"
        @click="
          editor
            .chain()
            .focus()
            .toggleHeading({ level: 3 })
            .run()
        "
      >
        <strong>Ü1</strong>
      </b-button>

      <b-button
        variant="light"
        class="menubar__button"
        :class="{ active: editor.isActive('heading', { level: 4 }) }"
        @click="
          editor
            .chain()
            .focus()
            .toggleHeading({ level: 4 })
            .run()
        "
      >
        <strong>Ü2</strong>
      </b-button>

      <b-button
        variant="light"
        class="menubar__button"
        :class="{ active: editor.isActive('heading', { level: 5 }) }"
        @click="
          editor
            .chain()
            .focus()
            .toggleHeading({ level: 5 })
            .run()
        "
      >
        <strong>Ü3</strong>
      </b-button>

      <b-button
        variant="light"
        class="menubar__button"
        :class="{ active: editor.isActive('bulletList') }"
        @click="
          editor
            .chain()
            .focus()
            .toggleBulletList()
            .run()
        "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          class="bi bi-list-ul"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm-3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
          />
        </svg>
      </b-button>

      <b-button
        variant="light"
        class="menubar__button"
        :class="{ active: editor.isActive('orderedList') }"
        @click="
          editor
            .chain()
            .focus()
            .toggleOrderedList()
            .run()
        "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          class="bi bi-list-ol"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5z"
          />
          <path
            d="M1.713 11.865v-.474H2c.217 0 .363-.137.363-.317 0-.185-.158-.31-.361-.31-.223 0-.367.152-.373.31h-.59c.016-.467.373-.787.986-.787.588-.002.954.291.957.703a.595.595 0 0 1-.492.594v.033a.615.615 0 0 1 .569.631c.003.533-.502.8-1.051.8-.656 0-1-.37-1.008-.794h.582c.008.178.186.306.422.309.254 0 .424-.145.422-.35-.002-.195-.155-.348-.414-.348h-.3zm-.004-4.699h-.604v-.035c0-.408.295-.844.958-.844.583 0 .96.326.96.756 0 .389-.257.617-.476.848l-.537.572v.03h1.054V9H1.143v-.395l.957-.99c.138-.142.293-.304.293-.508 0-.18-.147-.32-.342-.32a.33.33 0 0 0-.342.338v.041zM2.564 5h-.635V2.924h-.031l-.598.42v-.567l.629-.443h.635V5z"
          />
        </svg>
      </b-button>

      <b-button
        variant="light"
        class="menubar__button"
        @click="
          editor
            .chain()
            .focus()
            .setHorizontalRule()
            .run()
        "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          class="bi bi-dash-lg"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"
          />
        </svg>
      </b-button>

      <b-button
        variant="light"
        class="menubar__button"
        @click="
          editor
            .chain()
            .focus()
            .undo()
            .run()
        "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          class="bi bi-arrow-return-left"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5z"
          />
        </svg>
      </b-button>

      <b-button
        variant="light"
        class="menubar__button"
        @click="
          editor
            .chain()
            .focus()
            .redo()
            .run()
        "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          class="bi bi-arrow-return-right"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M1.5 1.5A.5.5 0 0 0 1 2v4.8a2.5 2.5 0 0 0 2.5 2.5h9.793l-3.347 3.346a.5.5 0 0 0 .708.708l4.2-4.2a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 8.3H3.5A1.5 1.5 0 0 1 2 6.8V2a.5.5 0 0 0-.5-.5z"
          />
        </svg>
      </b-button>
    </div>
    <!-- </editor-menu-bar> -->

    <editor-content
      :class="{
        'editor__content': true,
        'is-invalid': validated && content.length < minLength,
        'is-valid': validated && content.length >= minLength
      }"
      :editor="editor"
    />
  </div>
</template>

<script>
  import { Editor, EditorContent } from "@tiptap/vue-2";
  import StarterKit from "@tiptap/starter-kit";
  import Link from "@tiptap/extension-link";
  import Placeholder from "@tiptap/extension-placeholder";
  export default {
    name: "TipTapEditor",
    components: {
      EditorContent
    },
    props: {
      content: {
        type: String,
        default: ""
      },
      placeholder: {
        type: String,
        default: "Schreiben Sie etwas..."
      },
      validated: Boolean,
      minLength: {
        type: Number,
        default: 10
      }
    },
    data() {
      return {
        editor: null,
        // json: "",
        // html: "",
        watchCounter: 0
      };
    },
    watch: {
      content() {
        if (this.content && this.watchCounter === 0) {
          this.watchCounter++;
          this.setContent(this.content);
          // this.html = this.content;
        }
      }
    },
    mounted() {
      this.editor = new Editor({
        extensions: [
          StarterKit,
          Link,
          Placeholder.configure({
            emptyEditorClass: "is-editor-empty",
            emptyNodeClass: "is-empty",
            placeholder: this.placeholder,
            showOnlyWhenEditable: true,
            showOnlyCurrent: true
          })
        ],
        content: this.content,
        onUpdate: ({ editor }) => {
          if (editor.getHTML() == "<p></p>") {
            this.$emit("update-content", "");
          } else {
            this.$emit("update-content", editor.getHTML());
          }
        }
      });

      this.setContent(this.content);
    },
    beforeUnmount() {
      this.editor.destroy();
    },
    methods: {
      setContent(content) {
        // JSON
        // this.editor.commands.setContent({
        //   "type": "doc",
        //   "content": [
        //     {
        //       "type": "paragraph",
        //       "content": [
        //         {
        //           "type": "text",
        //           "text": "Example Text"
        //         }
        //       ]
        //     }
        //   ]
        // })

        // HTML
        this.editor.commands.setContent(content);
      }
    }
  };
</script>

<style lang="scss">
  .tip-tap-editor {
    p.is-editor-empty:first-child::before {
      content: attr(data-placeholder);
      float: left;
      color: #999;
      pointer-events: none;
      height: 0;
    }

    .menubar {
      display: flex;
      flex-wrap: wrap;

      & > .btn {
        background-color: $light-shade;

        &:hover {
          border-color: $secondary;
        }

        &.active {
          background-color: $secondary;
          color: $light;
        }
      }
    }
  }
</style>
