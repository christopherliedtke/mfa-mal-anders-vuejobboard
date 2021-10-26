<template>
  <div class="tip-tap-editor">
    <editor-menu-bar v-slot="{ commands, isActive }" :editor="editor">
      <div class="menubar my-2">
        <b-button
          variant="light"
          class="menubar__button"
          :class="{ active: isActive.bold() }"
          @click="commands.bold"
        >
          <strong>F</strong>
        </b-button>

        <b-button
          variant="light"
          class="menubar__button"
          :class="{ active: isActive.italic() }"
          @click="commands.italic"
        >
          <em>K</em>
        </b-button>

        <b-button
          variant="light"
          class="menubar__button"
          :class="{ active: isActive.paragraph() }"
          @click="commands.paragraph"
        >
          Aa
        </b-button>

        <b-button
          variant="light"
          class="menubar__button"
          :class="{ active: isActive.heading({ level: 3 }) }"
          @click="commands.heading({ level: 3 })"
        >
          <strong>Ü1</strong>
        </b-button>

        <b-button
          variant="light"
          class="menubar__button"
          :class="{ active: isActive.heading({ level: 4 }) }"
          @click="commands.heading({ level: 4 })"
        >
          <strong>Ü2</strong>
        </b-button>

        <b-button
          variant="light"
          class="menubar__button"
          :class="{ active: isActive.heading({ level: 5 }) }"
          @click="commands.heading({ level: 5 })"
        >
          <strong>Ü3</strong>
        </b-button>

        <b-button
          variant="light"
          class="menubar__button"
          :class="{ active: isActive.bullet_list() }"
          @click="commands.bullet_list"
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
          :class="{ active: isActive.ordered_list() }"
          @click="commands.ordered_list"
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
          @click="commands.horizontal_rule"
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
          @click="commands.undo"
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
          @click="commands.redo"
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
    </editor-menu-bar>

    <editor-content
      :class="{
        'editor__content': true,
        'is-invalid': validated && html.length < 10,
        'is-valid': validated && html.length >= 10
      }"
      :editor="editor"
    />
  </div>
</template>

<script>
  import { Editor, EditorContent, EditorMenuBar } from "tiptap";
  import {
    HardBreak,
    Heading,
    HorizontalRule,
    OrderedList,
    BulletList,
    ListItem,
    Bold,
    Italic,
    Link,
    History,
    Placeholder
  } from "tiptap-extensions";
  export default {
    components: {
      EditorContent,
      EditorMenuBar
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
      validated: Boolean
    },
    data() {
      return {
        editor: new Editor({
          extensions: [
            new BulletList(),
            new HardBreak(),
            new Heading({ levels: [3, 4, 5] }),
            new HorizontalRule(),
            new ListItem(),
            new OrderedList(),
            new Link(),
            new Bold(),
            new Italic(),
            new History(),
            new Placeholder({
              emptyEditorClass: "is-editor-empty",
              emptyNodeClass: "is-empty",
              // emptyNodeText: "Schreiben Sie etwas...",
              emptyNodeText: this.placeholder,
              showOnlyWhenEditable: true,
              showOnlyCurrent: true
            })
          ],
          // content: ``,
          onUpdate: ({ getHTML }) => {
            // this.json = getJSON();
            this.html = getHTML();

            this.$emit("update-content", this.html);
          }
        }),
        // json: "",
        html: "",
        watchCounter: 0
      };
    },
    watch: {
      content() {
        if (this.content && this.watchCounter === 0) {
          this.watchCounter++;
          this.setContent(this.content);
          this.html = this.content;
        }
      }
    },
    mounted() {
      this.setContent(this.content);
    },
    beforeDestroy() {
      this.editor.destroy();
    },
    methods: {
      setContent(content) {
        // you can pass a json document
        //   this.editor.setContent({
        //     type: 'doc',
        //     content: [{
        //       type: 'paragraph',
        //       content: [
        //         {
        //           type: 'text',
        //           text: 'This is some inserted text. 👋',
        //         },
        //       ],
        //     }],
        //   }, true)

        // HTML string is also supported
        this.editor.setContent(content);

        // this.editor.focus();
      }
    }
  };
</script>

<style lang="scss">
  .tip-tap-editor {
    p.is-editor-empty:first-child::before {
      content: attr(data-empty-text);
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
