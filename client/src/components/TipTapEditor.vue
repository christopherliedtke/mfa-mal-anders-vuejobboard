<template>
    <div class="editor">
        <editor-menu-bar :editor="editor" v-slot="{ commands, isActive }">
            <div class="menubar my-2">
                <b-button
                    variant="light"
                    class="menubar__button"
                    :class="{ 'is-active': isActive.bold() }"
                    @click="commands.bold"
                >
                    <b-icon class="" scale="1" icon="type-bold"></b-icon>
                </b-button>

                <b-button
                    variant="light"
                    class="menubar__button"
                    :class="{ 'is-active': isActive.italic() }"
                    @click="commands.italic"
                >
                    <b-icon class="" scale="1" icon="type-italic"></b-icon>
                </b-button>

                <b-button
                    variant="light"
                    class="menubar__button"
                    :class="{ 'is-active': isActive.paragraph() }"
                    @click="commands.paragraph"
                >
                    <b-icon class="" scale="1" icon="type"></b-icon>
                </b-button>

                <b-button
                    variant="light"
                    class="menubar__button"
                    :class="{ 'is-active': isActive.heading({ level: 2 }) }"
                    @click="commands.heading({ level: 2 })"
                >
                    <b-icon class="" scale="1" icon="type-h1"></b-icon>
                </b-button>

                <b-button
                    variant="light"
                    class="menubar__button"
                    :class="{ 'is-active': isActive.heading({ level: 3 }) }"
                    @click="commands.heading({ level: 3 })"
                >
                    <b-icon class="" scale="1" icon="type-h2"></b-icon>
                </b-button>

                <b-button
                    variant="light"
                    class="menubar__button"
                    :class="{ 'is-active': isActive.heading({ level: 4 }) }"
                    @click="commands.heading({ level: 4 })"
                >
                    <b-icon class="" scale="1" icon="type-h3"></b-icon>
                </b-button>

                <b-button
                    variant="light"
                    class="menubar__button"
                    :class="{ 'is-active': isActive.bullet_list() }"
                    @click="commands.bullet_list"
                >
                    <b-icon class="" scale="1" icon="list-ul"></b-icon>
                </b-button>

                <b-button
                    variant="light"
                    class="menubar__button"
                    :class="{ 'is-active': isActive.ordered_list() }"
                    @click="commands.ordered_list"
                >
                    <b-icon class="" scale="1" icon="list-ol"></b-icon>
                </b-button>

                <b-button
                    variant="light"
                    class="menubar__button"
                    @click="commands.horizontal_rule"
                >
                    <b-icon
                        class=""
                        scale="1"
                        icon="chevron-bar-contract
"
                    ></b-icon>
                </b-button>

                <b-button
                    variant="light"
                    class="menubar__button"
                    @click="commands.undo"
                >
                    <b-icon
                        class=""
                        scale="1"
                        icon="arrow-return-left"
                    ></b-icon>
                </b-button>

                <b-button
                    variant="light"
                    class="menubar__button"
                    @click="commands.redo"
                >
                    <b-icon
                        class=""
                        scale="1"
                        icon="arrow-return-right"
                    ></b-icon>
                </b-button>
            </div>
        </editor-menu-bar>

        <editor-content class="editor__content" :editor="editor" />
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
        props: ["content"],
        data() {
            return {
                editor: new Editor({
                    extensions: [
                        new BulletList(),
                        new HardBreak(),
                        new Heading({ levels: [2, 3, 4] }),
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
                            emptyNodeText: "Write something …",
                            showOnlyWhenEditable: true,
                            showOnlyCurrent: true
                        })
                    ],
                    // content: ``,
                    onUpdate: ({ getJSON, getHTML }) => {
                        this.json = getJSON();
                        this.html = getHTML();
                    }
                }),
                json: "",
                html: ""
            };
        },
        watch: {
            content: function() {
                if (this.content) {
                    this.setContent(this.content);
                }
            }
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
                this.editor.focus();
            }
        }
    };
</script>

<style lang="scss">
    .editor p.is-editor-empty:first-child::before {
        content: attr(data-empty-text);
        float: left;
        color: #777;
        pointer-events: none;
        height: 0;
    }

    .ProseMirror {
        border: 1px solid #ddd;
        border-radius: 0.25rem;
        padding: 0.5rem;
        min-height: 200px;
    }

    .ProseMirror-focused {
        color: #495057;
        background-color: #fff;
        border-color: #80bdff;
        outline: 0;
        box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
    }

    .is-active {
        background-color: #555;
        color: white;
    }
</style>
