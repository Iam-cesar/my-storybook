"use strict";
(self.webpackChunkstorybook_components =
  self.webpackChunkstorybook_components || []).push([
  [893],
  {
    "./src/components/molecules/LexicalEditor/LexicalEditor.stories.ts": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Editor: () => LexicalEditor,
          default: () => LexicalEditor_stories,
        });
      var react = __webpack_require__("./node_modules/react/index.js"),
        LexicalCode = __webpack_require__(
          "./node_modules/@lexical/code/LexicalCode.js"
        ),
        LexicalLink = __webpack_require__(
          "./node_modules/@lexical/link/LexicalLink.js"
        ),
        LexicalList = __webpack_require__(
          "./node_modules/@lexical/list/LexicalList.js"
        ),
        LexicalMarkdown = __webpack_require__(
          "./node_modules/@lexical/markdown/LexicalMarkdown.js"
        ),
        LexicalRichText = __webpack_require__(
          "./node_modules/@lexical/rich-text/LexicalRichText.js"
        ),
        LexicalTable = __webpack_require__(
          "./node_modules/@lexical/table/LexicalTable.js"
        ),
        LexicalAutoFocusPlugin = __webpack_require__(
          "./node_modules/@lexical/react/LexicalAutoFocusPlugin.js"
        ),
        LexicalHistoryPlugin = __webpack_require__(
          "./node_modules/@lexical/react/LexicalHistoryPlugin.js"
        ),
        LexicalLinkPlugin = __webpack_require__(
          "./node_modules/@lexical/react/LexicalLinkPlugin.js"
        ),
        LexicalListPlugin = __webpack_require__(
          "./node_modules/@lexical/react/LexicalListPlugin.js"
        ),
        LexicalMarkdownShortcutPlugin = __webpack_require__(
          "./node_modules/@lexical/react/LexicalMarkdownShortcutPlugin.js"
        ),
        LexicalRichTextPlugin = __webpack_require__(
          "./node_modules/@lexical/react/LexicalRichTextPlugin.js"
        ),
        LexicalTabIndentationPlugin = __webpack_require__(
          "./node_modules/@lexical/react/LexicalTabIndentationPlugin.js"
        ),
        LexicalComposer = __webpack_require__(
          "./node_modules/@lexical/react/LexicalComposer.js"
        ),
        LexicalContentEditable = __webpack_require__(
          "./node_modules/@lexical/react/LexicalContentEditable.js"
        ),
        LexicalErrorBoundary = __webpack_require__(
          "./node_modules/@lexical/react/LexicalErrorBoundary.js"
        ),
        LexicalErrorBoundary_default =
          __webpack_require__.n(LexicalErrorBoundary);
      const theme = {
        ltr: "ltr",
        rtl: "rtl",
        paragraph: "editor-paragraph",
        quote: "editor-quote",
        heading: {
          h1: "editor-heading-h1",
          h2: "editor-heading-h2",
          h3: "editor-heading-h3",
          h4: "editor-heading-h4",
          h5: "editor-heading-h5",
          h6: "editor-heading-h6",
        },
        list: {
          nested: { listitem: "editor-nested-listitem" },
          ol: "editor-list-ol",
          ul: "editor-list-ul",
          listitem: "editor-listItem",
          listitemChecked: "editor-listItemChecked",
          listitemUnchecked: "editor-listItemUnchecked",
        },
        hashtag: "editor-hashtag",
        image: "editor-image",
        link: "editor-link",
        text: {
          bold: "editor-textBold",
          code: "editor-textCode",
          italic: "editor-textItalic",
          strikethrough: "editor-textStrikethrough",
          subscript: "editor-textSubscript",
          superscript: "editor-textSuperscript",
          underline: "editor-textUnderline",
          underlineStrikethrough: "editor-textUnderlineStrikethrough",
        },
        code: "editor-code",
        codeHighlight: {
          atrule: "editor-tokenAttr",
          attr: "editor-tokenAttr",
          boolean: "editor-tokenProperty",
          builtin: "editor-tokenSelector",
          cdata: "editor-tokenComment",
          char: "editor-tokenSelector",
          class: "editor-tokenFunction",
          "class-name": "editor-tokenFunction",
          comment: "editor-tokenComment",
          constant: "editor-tokenProperty",
          deleted: "editor-tokenProperty",
          doctype: "editor-tokenComment",
          entity: "editor-tokenOperator",
          function: "editor-tokenFunction",
          important: "editor-tokenVariable",
          inserted: "editor-tokenSelector",
          keyword: "editor-tokenAttr",
          namespace: "editor-tokenVariable",
          number: "editor-tokenProperty",
          operator: "editor-tokenOperator",
          prolog: "editor-tokenComment",
          property: "editor-tokenProperty",
          punctuation: "editor-tokenPunctuation",
          regex: "editor-tokenVariable",
          selector: "editor-tokenSelector",
          string: "editor-tokenSelector",
          symbol: "editor-tokenProperty",
          tag: "editor-tokenProperty",
          url: "editor-tokenOperator",
          variable: "editor-tokenVariable",
        },
      };
      var LexicalAutoLinkPlugin = __webpack_require__(
          "./node_modules/@lexical/react/LexicalAutoLinkPlugin.js"
        ),
        __jsx = react.createElement,
        URL_MATCHER =
          /((https?:\/\/(www\.)?)|(www\.))[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/,
        EMAIL_MATCHER =
          /(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/,
        MATCHERS = [
          function (text) {
            var match = URL_MATCHER.exec(text);
            return (
              match && {
                index: match.index,
                length: match[0].length,
                text: match[0],
                url: match[0],
              }
            );
          },
          function (text) {
            var match = EMAIL_MATCHER.exec(text);
            return (
              match && {
                index: match.index,
                length: match[0].length,
                text: match[0],
                url: "mailto:".concat(match[0]),
              }
            );
          },
        ];
      function PlaygroundAutoLinkPlugin() {
        return __jsx(LexicalAutoLinkPlugin.AutoLinkPlugin, {
          matchers: MATCHERS,
        });
      }
      (PlaygroundAutoLinkPlugin.displayName = "PlaygroundAutoLinkPlugin"),
        (PlaygroundAutoLinkPlugin.__docgenInfo = {
          description: "",
          methods: [],
          displayName: "PlaygroundAutoLinkPlugin",
        });
      var slicedToArray = __webpack_require__(
          "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"
        ),
        LexicalComposerContext = __webpack_require__(
          "./node_modules/@lexical/react/LexicalComposerContext.js"
        );
      function CodeHighlightPlugin() {
        var _useLexicalComposerCo = (0,
          LexicalComposerContext.useLexicalComposerContext)(),
          editor = (0, slicedToArray.Z)(_useLexicalComposerCo, 1)[0];
        return (
          (0, react.useEffect)(
            function () {
              return (0, LexicalCode.registerCodeHighlighting)(editor);
            },
            [editor]
          ),
          null
        );
      }
      var LexicalSelection = __webpack_require__(
          "./node_modules/@lexical/selection/LexicalSelection.js"
        ),
        LexicalUtils = __webpack_require__(
          "./node_modules/@lexical/utils/LexicalUtils.js"
        ),
        Lexical = __webpack_require__("./node_modules/lexical/Lexical.js"),
        react_dom = __webpack_require__("./node_modules/react-dom/index.js"),
        ArrowClockwise_jsx = react.createElement,
        ArrowClockwise = function ArrowClockwise() {
          return ArrowClockwise_jsx(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: "16",
              height: "16",
              fill: "currentColor",
              className: "bi bi-arrow-clockwise",
              viewBox: "0 0 16 16",
            },
            ArrowClockwise_jsx("path", {
              fillRule: "evenodd",
              d: "M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z",
            }),
            ArrowClockwise_jsx("path", {
              d: "M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z",
            })
          );
        };
      (ArrowClockwise.displayName = "ArrowClockwise"),
        (ArrowClockwise.__docgenInfo = {
          description: "",
          methods: [],
          displayName: "ArrowClockwise",
        });
      const icons_ArrowClockwise = ArrowClockwise;
      var ArrowCounterclockwise_jsx = react.createElement,
        ArrowCounterclockwise = function ArrowCounterclockwise() {
          return ArrowCounterclockwise_jsx(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: "16",
              height: "16",
              fill: "currentColor",
              className: "bi bi-arrow-counterclockwise",
              viewBox: "0 0 16 16",
            },
            ArrowCounterclockwise_jsx("path", {
              fillRule: "evenodd",
              d: "M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z",
            }),
            ArrowCounterclockwise_jsx("path", {
              d: "M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466z",
            })
          );
        };
      (ArrowCounterclockwise.displayName = "ArrowCounterclockwise"),
        (ArrowCounterclockwise.__docgenInfo = {
          description: "",
          methods: [],
          displayName: "ArrowCounterclockwise",
        });
      const icons_ArrowCounterclockwise = ArrowCounterclockwise;
      var ChatSquareQuote_jsx = react.createElement,
        ChatSquareQuote = function ChatSquareQuote() {
          return ChatSquareQuote_jsx(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: "16",
              height: "16",
              fill: "currentColor",
              className: "bi bi-chat-square-quote",
              viewBox: "0 0 16 16",
            },
            ChatSquareQuote_jsx("path", {
              d: "M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-2.5a2 2 0 0 0-1.6.8L8 14.333 6.1 11.8a2 2 0 0 0-1.6-.8H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2.5a1 1 0 0 1 .8.4l1.9 2.533a1 1 0 0 0 1.6 0l1.9-2.533a1 1 0 0 1 .8-.4H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z",
            }),
            ChatSquareQuote_jsx("path", {
              d: "M7.066 4.76A1.665 1.665 0 0 0 4 5.668a1.667 1.667 0 0 0 2.561 1.406c-.131.389-.375.804-.777 1.22a.417.417 0 1 0 .6.58c1.486-1.54 1.293-3.214.682-4.112zm4 0A1.665 1.665 0 0 0 8 5.668a1.667 1.667 0 0 0 2.561 1.406c-.131.389-.375.804-.777 1.22a.417.417 0 1 0 .6.58c1.486-1.54 1.293-3.214.682-4.112z",
            })
          );
        };
      (ChatSquareQuote.displayName = "ChatSquareQuote"),
        (ChatSquareQuote.__docgenInfo = {
          description: "",
          methods: [],
          displayName: "ChatSquareQuote",
        });
      const icons_ChatSquareQuote = ChatSquareQuote;
      var ChevronDown_jsx = react.createElement,
        ChevronDown = function ChevronDown() {
          return ChevronDown_jsx(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: "16",
              height: "16",
              fill: "currentColor",
              className: "bi bi-chevron-down",
              viewBox: "0 0 16 16",
            },
            ChevronDown_jsx("path", {
              fillRule: "evenodd",
              d: "M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z",
            })
          );
        };
      (ChevronDown.displayName = "ChevronDown"),
        (ChevronDown.__docgenInfo = {
          description: "",
          methods: [],
          displayName: "ChevronDown",
        });
      const icons_ChevronDown = ChevronDown;
      var Justify_jsx = react.createElement,
        Justify = function Justify() {
          return Justify_jsx(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: "16",
              height: "16",
              fill: "currentColor",
              className: "bi bi-justify",
              viewBox: "0 0 16 16",
            },
            Justify_jsx("path", {
              fillRule: "evenodd",
              d: "M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z",
            })
          );
        };
      (Justify.displayName = "Justify"),
        (Justify.__docgenInfo = {
          description: "",
          methods: [],
          displayName: "Justify",
        });
      const icons_Justify = Justify;
      var ListOl_jsx = react.createElement,
        ListOl = function ListOl() {
          return ListOl_jsx(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: "16",
              height: "16",
              fill: "currentColor",
              className: "bi bi-list-ol",
              viewBox: "0 0 16 16",
            },
            ListOl_jsx("path", {
              fillRule: "evenodd",
              d: "M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5z",
            }),
            ListOl_jsx("path", {
              d: "M1.713 11.865v-.474H2c.217 0 .363-.137.363-.317 0-.185-.158-.31-.361-.31-.223 0-.367.152-.373.31h-.59c.016-.467.373-.787.986-.787.588-.002.954.291.957.703a.595.595 0 0 1-.492.594v.033a.615.615 0 0 1 .569.631c.003.533-.502.8-1.051.8-.656 0-1-.37-1.008-.794h.582c.008.178.186.306.422.309.254 0 .424-.145.422-.35-.002-.195-.155-.348-.414-.348h-.3zm-.004-4.699h-.604v-.035c0-.408.295-.844.958-.844.583 0 .96.326.96.756 0 .389-.257.617-.476.848l-.537.572v.03h1.054V9H1.143v-.395l.957-.99c.138-.142.293-.304.293-.508 0-.18-.147-.32-.342-.32a.33.33 0 0 0-.342.338v.041zM2.564 5h-.635V2.924h-.031l-.598.42v-.567l.629-.443h.635V5z",
            })
          );
        };
      (ListOl.displayName = "ListOl"),
        (ListOl.__docgenInfo = {
          description: "",
          methods: [],
          displayName: "ListOl",
        });
      const icons_ListOl = ListOl;
      var ListUl_jsx = react.createElement,
        ListUl = function ListUl() {
          return ListUl_jsx(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: "16",
              height: "16",
              fill: "currentColor",
              className: "bi bi-list-ul",
              viewBox: "0 0 16 16",
            },
            ListUl_jsx("path", {
              fillRule: "evenodd",
              d: "M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm-3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2z",
            })
          );
        };
      (ListUl.displayName = "ListUl"),
        (ListUl.__docgenInfo = {
          description: "",
          methods: [],
          displayName: "ListUl",
        });
      const icons_ListUl = ListUl;
      var objectDestructuringEmpty = __webpack_require__(
          "./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js"
        ),
        esm_extends = __webpack_require__(
          "./node_modules/@babel/runtime/helpers/esm/extends.js"
        ),
        PencilFill_jsx = react.createElement,
        PencilFill = function PencilFill(_ref) {
          var props = (0, esm_extends.Z)(
            {},
            ((0, objectDestructuringEmpty.Z)(_ref), _ref)
          );
          return PencilFill_jsx(
            "svg",
            (0, esm_extends.Z)({}, props, {
              xmlns: "http://www.w3.org/2000/svg",
              width: "16",
              height: "16",
              fill: "currentColor",
              className: "bi bi-pencil-fill",
              viewBox: "0 0 16 16",
            }),
            PencilFill_jsx("path", {
              d: "M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z",
            })
          );
        };
      (PencilFill.displayName = "PencilFill"),
        (PencilFill.__docgenInfo = {
          description: "",
          methods: [],
          displayName: "PencilFill",
        });
      const icons_PencilFill = PencilFill;
      try {
        (PencilFill.displayName = "PencilFill"),
          (PencilFill.__docgenInfo = {
            description: "",
            displayName: "PencilFill",
            props: {},
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              "src/components/molecules/LexicalEditor/icons/PencilFill.tsx#PencilFill"
            ] = {
              docgenInfo: PencilFill.__docgenInfo,
              name: "PencilFill",
              path: "src/components/molecules/LexicalEditor/icons/PencilFill.tsx#PencilFill",
            });
      } catch (__react_docgen_typescript_loader_error) {}
      var TextCenter_jsx = react.createElement,
        TextCenter = function TextCenter() {
          return TextCenter_jsx(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: "16",
              height: "16",
              fill: "currentColor",
              className: "bi bi-text-center",
              viewBox: "0 0 16 16",
            },
            TextCenter_jsx("path", {
              fillRule: "evenodd",
              d: "M4 12.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z",
            })
          );
        };
      (TextCenter.displayName = "TextCenter"),
        (TextCenter.__docgenInfo = {
          description: "",
          methods: [],
          displayName: "TextCenter",
        });
      const icons_TextCenter = TextCenter;
      var TextLeft_jsx = react.createElement,
        TextLeft = function TextLeft() {
          return TextLeft_jsx(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: "16",
              height: "16",
              fill: "currentColor",
              className: "bi bi-text-left",
              viewBox: "0 0 16 16",
            },
            TextLeft_jsx("path", {
              fillRule: "evenodd",
              d: "M2 12.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z",
            })
          );
        };
      (TextLeft.displayName = "TextLeft"),
        (TextLeft.__docgenInfo = {
          description: "",
          methods: [],
          displayName: "TextLeft",
        });
      const icons_TextLeft = TextLeft;
      var TextParagraph_jsx = react.createElement,
        TextParagraph = function TextParagraph() {
          return TextParagraph_jsx(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: "16",
              height: "16",
              fill: "currentColor",
              className: "bi bi-text-paragraph",
              viewBox: "0 0 16 16",
            },
            TextParagraph_jsx("path", {
              fillRule: "evenodd",
              d: "M2 12.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm4-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5z",
            })
          );
        };
      (TextParagraph.displayName = "TextParagraph"),
        (TextParagraph.__docgenInfo = {
          description: "",
          methods: [],
          displayName: "TextParagraph",
        });
      const icons_TextParagraph = TextParagraph;
      var TextRight_jsx = react.createElement,
        TextRight = function TextRight() {
          return TextRight_jsx(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: "16",
              height: "16",
              fill: "currentColor",
              className: "bi bi-text-right",
              viewBox: "0 0 16 16",
            },
            TextRight_jsx("path", {
              fillRule: "evenodd",
              d: "M6 12.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-4-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm4-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-4-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z",
            })
          );
        };
      (TextRight.displayName = "TextRight"),
        (TextRight.__docgenInfo = {
          description: "",
          methods: [],
          displayName: "TextRight",
        });
      const icons_TextRight = TextRight;
      var TypeBold_jsx = react.createElement,
        TypeBold = function TypeBold() {
          return TypeBold_jsx(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: "16",
              height: "16",
              fill: "currentColor",
              className: "bi bi-type-bold",
              viewBox: "0 0 16 16",
            },
            TypeBold_jsx("path", {
              d: "M8.21 13c2.106 0 3.412-1.087 3.412-2.823 0-1.306-.984-2.283-2.324-2.386v-.055a2.176 2.176 0 0 0 1.852-2.14c0-1.51-1.162-2.46-3.014-2.46H3.843V13H8.21zM5.908 4.674h1.696c.963 0 1.517.451 1.517 1.244 0 .834-.629 1.32-1.73 1.32H5.908V4.673zm0 6.788V8.598h1.73c1.217 0 1.88.492 1.88 1.415 0 .943-.643 1.449-1.832 1.449H5.907z",
            })
          );
        };
      (TypeBold.displayName = "TypeBold"),
        (TypeBold.__docgenInfo = {
          description: "",
          methods: [],
          displayName: "TypeBold",
        });
      const icons_TypeBold = TypeBold;
      var TypeCode_jsx = react.createElement,
        TypeCode = function TypeCode() {
          return TypeCode_jsx(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: "16",
              height: "16",
              fill: "currentColor",
              className: "bi bi-code",
              viewBox: "0 0 16 16",
            },
            TypeCode_jsx("path", {
              d: "M5.854 4.854a.5.5 0 1 0-.708-.708l-3.5 3.5a.5.5 0 0 0 0 .708l3.5 3.5a.5.5 0 0 0 .708-.708L2.707 8l3.147-3.146zm4.292 0a.5.5 0 0 1 .708-.708l3.5 3.5a.5.5 0 0 1 0 .708l-3.5 3.5a.5.5 0 0 1-.708-.708L13.293 8l-3.147-3.146z",
            })
          );
        };
      (TypeCode.displayName = "TypeCode"),
        (TypeCode.__docgenInfo = {
          description: "",
          methods: [],
          displayName: "TypeCode",
        });
      const icons_TypeCode = TypeCode;
      var TypeH1_jsx = react.createElement,
        TypeH1 = function TypeH1() {
          return TypeH1_jsx(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: "16",
              height: "16",
              fill: "currentColor",
              className: "bi bi-type-h1",
              viewBox: "0 0 16 16",
            },
            TypeH1_jsx("path", {
              d: "M8.637 13V3.669H7.379V7.62H2.758V3.67H1.5V13h1.258V8.728h4.62V13h1.259zm5.329 0V3.669h-1.244L10.5 5.316v1.265l2.16-1.565h.062V13h1.244z",
            })
          );
        };
      (TypeH1.displayName = "TypeH1"),
        (TypeH1.__docgenInfo = {
          description: "",
          methods: [],
          displayName: "TypeH1",
        });
      const icons_TypeH1 = TypeH1;
      var TypeH2_jsx = react.createElement,
        TypeH2 = function TypeH2() {
          return TypeH2_jsx(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: "16",
              height: "16",
              fill: "currentColor",
              className: "bi bi-type-h2",
              viewBox: "0 0 16 16",
            },
            TypeH2_jsx("path", {
              d: "M7.638 13V3.669H6.38V7.62H1.759V3.67H.5V13h1.258V8.728h4.62V13h1.259zm3.022-6.733v-.048c0-.889.63-1.668 1.716-1.668.957 0 1.675.608 1.675 1.572 0 .855-.554 1.504-1.067 2.085l-3.513 3.999V13H15.5v-1.094h-4.245v-.075l2.481-2.844c.875-.998 1.586-1.784 1.586-2.953 0-1.463-1.155-2.556-2.919-2.556-1.941 0-2.966 1.326-2.966 2.74v.049h1.223z",
            })
          );
        };
      (TypeH2.displayName = "TypeH2"),
        (TypeH2.__docgenInfo = {
          description: "",
          methods: [],
          displayName: "TypeH2",
        });
      const icons_TypeH2 = TypeH2;
      var TypeItalic_jsx = react.createElement,
        TypeItalic = function TypeItalic() {
          return TypeItalic_jsx(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: "16",
              height: "16",
              fill: "currentColor",
              className: "bi bi-type-italic",
              viewBox: "0 0 16 16",
            },
            TypeItalic_jsx("path", {
              d: "M7.991 11.674 9.53 4.455c.123-.595.246-.71 1.347-.807l.11-.52H7.211l-.11.52c1.06.096 1.128.212 1.005.807L6.57 11.674c-.123.595-.246.71-1.346.806l-.11.52h3.774l.11-.52c-1.06-.095-1.129-.211-1.006-.806z",
            })
          );
        };
      (TypeItalic.displayName = "TypeItalic"),
        (TypeItalic.__docgenInfo = {
          description: "",
          methods: [],
          displayName: "TypeItalic",
        });
      const icons_TypeItalic = TypeItalic;
      var TypeLink_jsx = react.createElement,
        TypeLink = function TypeLink() {
          return TypeLink_jsx(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: "16",
              height: "16",
              fill: "currentColor",
              className: "bi bi-link",
              viewBox: "0 0 16 16",
            },
            TypeLink_jsx("path", {
              d: "M6.354 5.5H4a3 3 0 0 0 0 6h3a3 3 0 0 0 2.83-4H9c-.086 0-.17.01-.25.031A2 2 0 0 1 7 10.5H4a2 2 0 1 1 0-4h1.535c.218-.376.495-.714.82-1z",
            }),
            TypeLink_jsx("path", {
              d: "M9 5.5a3 3 0 0 0-2.83 4h1.098A2 2 0 0 1 9 6.5h3a2 2 0 1 1 0 4h-1.535a4.02 4.02 0 0 1-.82 1H12a3 3 0 1 0 0-6H9z",
            })
          );
        };
      (TypeLink.displayName = "TypeLink"),
        (TypeLink.__docgenInfo = {
          description: "",
          methods: [],
          displayName: "TypeLink",
        });
      const icons_TypeLink = TypeLink;
      var TypeStrikethrough_jsx = react.createElement,
        TypeStrikethrough = function TypeStrikethrough() {
          return TypeStrikethrough_jsx(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: "16",
              height: "16",
              fill: "currentColor",
              className: "bi bi-type-strikethrough",
              viewBox: "0 0 16 16",
            },
            TypeStrikethrough_jsx("path", {
              d: "M6.333 5.686c0 .31.083.581.27.814H5.166a2.776 2.776 0 0 1-.099-.76c0-1.627 1.436-2.768 3.48-2.768 1.969 0 3.39 1.175 3.445 2.85h-1.23c-.11-1.08-.964-1.743-2.25-1.743-1.23 0-2.18.602-2.18 1.607zm2.194 7.478c-2.153 0-3.589-1.107-3.705-2.81h1.23c.144 1.06 1.129 1.703 2.544 1.703 1.34 0 2.31-.705 2.31-1.675 0-.827-.547-1.374-1.914-1.675L8.046 8.5H1v-1h14v1h-3.504c.468.437.675.994.675 1.697 0 1.826-1.436 2.967-3.644 2.967z",
            })
          );
        };
      (TypeStrikethrough.displayName = "TypeStrikethrough"),
        (TypeStrikethrough.__docgenInfo = {
          description: "",
          methods: [],
          displayName: "TypeStrikethrough",
        });
      const icons_TypeStrikethrough = TypeStrikethrough;
      var TypeUnderline_jsx = react.createElement,
        TypeUnderline = function TypeUnderline() {
          return TypeUnderline_jsx(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: "16",
              height: "16",
              fill: "currentColor",
              className: "bi bi-type-underline",
              viewBox: "0 0 16 16",
            },
            TypeUnderline_jsx("path", {
              d: "M5.313 3.136h-1.23V9.54c0 2.105 1.47 3.623 3.917 3.623s3.917-1.518 3.917-3.623V3.136h-1.23v6.323c0 1.49-.978 2.57-2.687 2.57-1.709 0-2.687-1.08-2.687-2.57V3.136zM12.5 15h-9v-1h9v1z",
            })
          );
        };
      (TypeUnderline.displayName = "TypeUnderline"),
        (TypeUnderline.__docgenInfo = {
          description: "",
          methods: [],
          displayName: "TypeUnderline",
        });
      const icons_TypeUnderline = TypeUnderline;
      var _templateObject,
        _templateObject2,
        _templateObject3,
        _templateObject4,
        taggedTemplateLiteral = __webpack_require__(
          "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"
        ),
        styled_components_browser_esm = __webpack_require__(
          "./node_modules/styled-components/dist/styled-components.browser.esm.js"
        ),
        EditorContainer = styled_components_browser_esm.ZP.div(
          _templateObject ||
            (_templateObject = (0, taggedTemplateLiteral.Z)([
              "\n  margin: 20px auto 20px auto;\n  overflow: hidden;\n  min-width: 600px;\n  padding-left: 20px;\n  padding-right: 20px;\n  color: #000;\n  position: relative;\n  line-height: 20px;\n  font-weight: 400;\n  text-align: left;\n\n  h1 {\n    font-size: 24px;\n    color: #333;\n  }\n\n  .ltr {\n    text-align: left;\n  }\n\n  .rtl {\n    text-align: right;\n  }\n\n  .editor-inner {\n    background: #fff;\n    position: relative;\n    border-bottom-left-radius: 8px;\n    border-bottom-right-radius: 8px;\n  }\n\n  .editor-input {\n    min-height: 150px;\n    resize: none;\n    font-size: 15px;\n    caret-color: rgb(5, 5, 5);\n    position: relative;\n    tab-size: 1;\n    outline: 0;\n    padding: 15px 10px;\n    caret-color: #444;\n  }\n\n  .editor-placeholder {\n    color: #999;\n    overflow: hidden;\n    position: absolute;\n    text-overflow: ellipsis;\n    top: 15px;\n    left: 10px;\n    font-size: 15px;\n    user-select: none;\n    display: inline-block;\n    pointer-events: none;\n  }\n\n  .editor-text-bold {\n    font-weight: bold;\n  }\n\n  .editor-text-italic {\n    font-style: italic;\n  }\n\n  .editor-text-underline {\n    text-decoration: underline;\n  }\n\n  .editor-text-strikethrough {\n    text-decoration: line-through;\n  }\n\n  .editor-text-underlineStrikethrough {\n    text-decoration: underline line-through;\n  }\n\n  .editor-text-code {\n    background-color: rgb(240, 242, 245);\n    padding: 1px 0.25rem;\n    font-family: Menlo, Consolas, Monaco, monospace;\n    font-size: 94%;\n  }\n\n  .editor-link {\n    color: rgb(33, 111, 219);\n    text-decoration: none;\n  }\n\n  .tree-view-output {\n    display: block;\n    background: #222;\n    color: #fff;\n    padding: 5px;\n    font-size: 12px;\n    white-space: pre-wrap;\n    margin: 1px auto 10px auto;\n    max-height: 250px;\n    position: relative;\n    border-bottom-left-radius: 10px;\n    border-bottom-right-radius: 10px;\n    overflow: auto;\n    line-height: 14px;\n  }\n\n  .editor-code {\n    background-color: rgb(240, 242, 245);\n    font-family: Menlo, Consolas, Monaco, monospace;\n    display: block;\n    padding: 8px 8px 8px 52px;\n    line-height: 1.53;\n    font-size: 13px;\n    margin: 0;\n    margin-top: 8px;\n    margin-bottom: 8px;\n    tab-size: 2;\n    /* white-space: pre; */\n    overflow-x: auto;\n    position: relative;\n  }\n\n  .editor-code:before {\n    content: attr(data-gutter);\n    position: absolute;\n    background-color: #eee;\n    left: 0;\n    top: 0;\n    border-right: 1px solid #ccc;\n    padding: 8px;\n    color: #777;\n    white-space: pre-wrap;\n    text-align: right;\n    min-width: 25px;\n  }\n  .editor-code:after {\n    content: attr(data-highlight-language);\n    top: 0;\n    right: 3px;\n    padding: 3px;\n    font-size: 10px;\n    text-transform: uppercase;\n    position: absolute;\n    color: rgba(0, 0, 0, 0.5);\n  }\n\n  .editor-tokenComment {\n    color: slategray;\n  }\n\n  .editor-tokenPunctuation {\n    color: #999;\n  }\n\n  .editor-tokenProperty {\n    color: #905;\n  }\n\n  .editor-tokenSelector {\n    color: #690;\n  }\n\n  .editor-tokenOperator {\n    color: #9a6e3a;\n  }\n\n  .editor-tokenAttr {\n    color: #07a;\n  }\n\n  .editor-tokenVariable {\n    color: #e90;\n  }\n\n  .editor-tokenFunction {\n    color: #dd4a68;\n  }\n\n  .editor-paragraph {\n    margin: 0;\n    margin-bottom: 8px;\n    position: relative;\n  }\n\n  .editor-paragraph:last-child {\n    margin-bottom: 0;\n  }\n\n  .editor-heading-h1 {\n    font-size: 24px;\n    color: rgb(5, 5, 5);\n    font-weight: 400;\n    margin: 0;\n    margin-bottom: 12px;\n    padding: 0;\n  }\n\n  .editor-heading-h2 {\n    font-size: 15px;\n    color: rgb(101, 103, 107);\n    font-weight: 700;\n    margin: 0;\n    margin-top: 10px;\n    padding: 0;\n    text-transform: uppercase;\n  }\n\n  .editor-quote {\n    margin: 0;\n    margin-left: 20px;\n    font-size: 15px;\n    color: rgb(101, 103, 107);\n    border-left-color: rgb(206, 208, 212);\n    border-left-width: 4px;\n    border-left-style: solid;\n    padding-left: 16px;\n  }\n\n  .editor-list-ol {\n    padding: 0;\n    margin: 0;\n    margin-left: 16px;\n  }\n\n  .editor-list-ul {\n    padding: 0;\n    margin: 0;\n    margin-left: 16px;\n  }\n\n  .editor-listitem {\n    margin: 8px 32px 8px 32px;\n  }\n\n  .editor-nested-listitem {\n    list-style-type: none;\n  }\n\n  pre::-webkit-scrollbar {\n    background: transparent;\n    width: 10px;\n  }\n\n  pre::-webkit-scrollbar-thumb {\n    background: #999;\n  }\n\n  .debug-timetravel-panel {\n    overflow: hidden;\n    padding: 0 0 10px 0;\n    margin: auto;\n    display: flex;\n  }\n\n  .debug-timetravel-panel-slider {\n    padding: 0;\n    flex: 8;\n  }\n\n  .debug-timetravel-panel-button {\n    padding: 0;\n    border: 0;\n    background: none;\n    flex: 1;\n    color: #fff;\n    font-size: 12px;\n  }\n\n  .debug-timetravel-panel-button:hover {\n    text-decoration: underline;\n  }\n\n  .debug-timetravel-button {\n    border: 0;\n    padding: 0;\n    font-size: 12px;\n    top: 10px;\n    right: 15px;\n    position: absolute;\n    background: none;\n    color: #fff;\n  }\n\n  .debug-timetravel-button:hover {\n    text-decoration: underline;\n  }\n\n  .emoji {\n    color: transparent;\n    background-size: 16px 16px;\n    background-position: center;\n    background-repeat: no-repeat;\n    vertical-align: middle;\n    margin: 0 -1px;\n  }\n\n  .emoji-inner {\n    padding: 0 0.15em;\n  }\n\n  .emoji-inner::selection {\n    color: transparent;\n    background-color: rgba(150, 150, 150, 0.4);\n  }\n\n  .emoji-inner::moz-selection {\n    color: transparent;\n    background-color: rgba(150, 150, 150, 0.4);\n  }\n\n  .emoji.happysmile {\n    background-image: url(./images/emoji/1F642.png);\n  }\n",
            ]))
        ),
        EditorDropdown = styled_components_browser_esm.ZP.div(
          _templateObject2 ||
            (_templateObject2 = (0, taggedTemplateLiteral.Z)([
              "\n  z-index: 5;\n  display: block;\n  position: absolute;\n  box-shadow: 0 12px 28px 0 rgba(0, 0, 0, 0.2), 0 2px 4px 0 rgba(0, 0, 0, 0.1),\n    inset 0 0 0 1px rgba(255, 255, 255, 0.5);\n  border-radius: 8px;\n  min-width: 100px;\n  min-height: 40px;\n  background-color: #fff;\n\n  .item {\n    margin: 0 8px 0 8px;\n    padding: 8px;\n    color: #050505;\n    cursor: pointer;\n    line-height: 16px;\n    font-size: 15px;\n    display: flex;\n    align-content: center;\n    flex-direction: row;\n    flex-shrink: 0;\n    justify-content: space-between;\n    background-color: #fff;\n    border-radius: 8px;\n    border: 0;\n    min-width: 268px;\n  }\n\n  .item .active {\n    display: flex;\n    width: 20px;\n    height: 20px;\n    background-size: contain;\n  }\n\n  .item:first-child {\n    margin-top: 8px;\n  }\n\n  .item:last-child {\n    margin-bottom: 8px;\n  }\n\n  .item:hover {\n    background-color: #eee;\n  }\n\n  .item .text {\n    display: flex;\n    line-height: 20px;\n    flex-grow: 1;\n    width: 200px;\n  }\n\n  .item svg {\n    display: flex;\n    width: 20px;\n    height: 20px;\n    user-select: none;\n    margin-right: 12px;\n    line-height: 16px;\n    background-size: contain;\n  }\n",
            ]))
        ),
        EditorToolbar = styled_components_browser_esm.ZP.div(
          _templateObject3 ||
            (_templateObject3 = (0, taggedTemplateLiteral.Z)([
              "\n  display: flex;\n  margin-bottom: 1px;\n  background: #fff;\n  padding: 4px;\n  vertical-align: middle;\n  border-top-left-radius: 8px;\n  border-top-right-radius: 8px;\n  overflow: auto;\n\n  button.toolbar-item {\n    border: 0;\n    display: flex;\n    background: none;\n    border-radius: 10px;\n    padding: 8px;\n    cursor: pointer;\n    vertical-align: middle;\n  }\n\n  button.toolbar-item:disabled {\n    cursor: not-allowed;\n  }\n\n  button.toolbar-item.spaced {\n    margin-right: 2px;\n  }\n\n  button.toolbar-item.active {\n    background-color: rgba(223, 232, 250, 0.3);\n  }\n\n  button.toolbar-item.active i {\n    opacity: 1;\n  }\n\n  .toolbar-item:hover:not([disabled]) {\n    background-color: #eee;\n  }\n\n  .divider {\n    width: 1px;\n    background-color: #eee;\n    margin: 0 4px;\n  }\n\n  select.toolbar-item {\n    border: 0;\n    display: flex;\n    background: none;\n    border-radius: 10px;\n    padding: 8px;\n    vertical-align: middle;\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    width: auto;\n    font-size: 14px;\n    color: #777;\n    text-overflow: ellipsis;\n  }\n\n  select.code-language {\n    text-transform: capitalize;\n    width: 130px;\n    cursor: pointer;\n  }\n\n  .toolbar-item .text {\n    display: flex;\n    line-height: 20px;\n    width: 200px;\n    vertical-align: middle;\n    font-size: 14px;\n    color: #777;\n    text-overflow: ellipsis;\n    width: auto;\n    overflow: hidden;\n    height: 20px;\n    text-align: left;\n  }\n\n  .toolbar-item .icon {\n    display: flex;\n    width: 20px;\n    height: 20px;\n    user-select: none;\n    margin-right: 8px;\n    line-height: 16px;\n    background-size: contain;\n  }\n\n  .block-controls {\n    align-items: center;\n    display: flex;\n    gap: 0.5rem;\n  }\n\n  .block-controls button:hover {\n    background-color: #efefef;\n  }\n\n  .block-controls button:focus-visible {\n    border-color: blue;\n  }\n\n  .block-controls span.block-type {\n    background-size: contain;\n    display: block;\n    width: 18px;\n    height: 18px;\n    margin: 2px;\n  }\n",
            ]))
        ),
        LinkEditor = styled_components_browser_esm.ZP.div(
          _templateObject4 ||
            (_templateObject4 = (0, taggedTemplateLiteral.Z)([
              "\n  position: absolute;\n  z-index: 100;\n  top: -10000px;\n  left: -10000px;\n  margin-top: -6px;\n  max-width: 300px;\n  width: 100%;\n  opacity: 0;\n  background-color: #fff;\n  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.3);\n  border-radius: 8px;\n  transition: opacity 0.5s;\n\n  .link-input {\n    display: block;\n    width: calc(100% - 24px);\n    box-sizing: border-box;\n    margin: 8px 12px;\n    padding: 8px 12px;\n    border-radius: 15px;\n    background-color: #eee;\n    font-size: 15px;\n    color: rgb(5, 5, 5);\n    border: 0;\n    outline: 0;\n    position: relative;\n    font-family: inherit;\n    display: flex;\n    justify-content: space-between;\n  }\n\n  .link-edit {\n    background-size: 16px;\n    background-position: center;\n    background-repeat: no-repeat;\n    width: 35px;\n    vertical-align: -0.25em;\n    position: absolute;\n    right: 0;\n    top: 0;\n    bottom: 0;\n    cursor: pointer;\n  }\n\n  .link-input a {\n    color: rgb(33, 111, 219);\n    text-decoration: none;\n    width: 100%;\n    white-space: nowrap;\n    overflow: hidden;\n    margin-right: 30px;\n    text-overflow: ellipsis;\n  }\n\n  .link-input svg {\n    cursor: pointer;\n  }\n\n  .link-input a:hover {\n    text-decoration: underline;\n  }\n\n  .button {\n    width: 20px;\n    height: 20px;\n    display: inline-block;\n    padding: 6px;\n    border-radius: 8px;\n    cursor: pointer;\n    margin: 0 2px;\n  }\n\n  .button.hovered {\n    width: 20px;\n    height: 20px;\n    display: inline-block;\n    background-color: #eee;\n  }\n\n  .button i,\n  .actions i {\n    background-size: contain;\n    display: inline-block;\n    height: 20px;\n    width: 20px;\n    vertical-align: -0.25em;\n  }\n",
            ]))
        ),
        ToolbarPlugin_jsx = react.createElement,
        LowPriority = 1,
        supportedBlockTypes = new Set([
          "paragraph",
          "quote",
          "code",
          "h1",
          "h2",
          "ul",
          "ol",
        ]),
        blockTypeToBlockName = {
          code: "Code Block",
          h1: "Large Heading",
          h2: "Small Heading",
          h3: "Heading",
          h4: "Heading",
          h5: "Heading",
          ol: "Numbered List",
          paragraph: "Normal",
          quote: "Quote",
          ul: "Bulleted List",
        };
      function Divider() {
        return ToolbarPlugin_jsx("div", { className: "divider" });
      }
      function positionEditorElement(editor, rect) {
        null === rect
          ? ((editor.style.opacity = "0"),
            (editor.style.top = "-1000px"),
            (editor.style.left = "-1000px"))
          : ((editor.style.opacity = "1"),
            (editor.style.top = "".concat(
              rect.top + rect.height + window.pageYOffset + 10,
              "px"
            )),
            (editor.style.left = "".concat(
              rect.left +
                window.pageXOffset -
                editor.offsetWidth / 2 +
                rect.width / 2,
              "px"
            )));
      }
      function FloatingLinkEditor(_ref) {
        var editor = _ref.editor,
          editorRef = (0, react.useRef)(null),
          inputRef = (0, react.useRef)(null),
          mouseDownRef = (0, react.useRef)(!1),
          _useState = (0, react.useState)(""),
          linkUrl = _useState[0],
          setLinkUrl = _useState[1],
          _useState2 = (0, react.useState)(!1),
          isEditMode = _useState2[0],
          setEditMode = _useState2[1],
          _useState3 = (0, react.useState)(null),
          lastSelection = _useState3[0],
          setLastSelection = _useState3[1],
          updateLinkEditor = (0, react.useCallback)(
            function () {
              var selection = (0, Lexical.$getSelection)();
              if ((0, Lexical.$isRangeSelection)(selection)) {
                var node = getSelectedNode(selection),
                  parent = node.getParent();
                (0, LexicalLink.$isLinkNode)(parent)
                  ? setLinkUrl(parent.getURL())
                  : (0, LexicalLink.$isLinkNode)(node)
                  ? setLinkUrl(node.getURL())
                  : setLinkUrl("");
              }
              var editorElem = editorRef.current,
                nativeSelection = window.getSelection(),
                activeElement = document.activeElement;
              if (null !== editorElem) {
                var rootElement = editor.getRootElement();
                if (
                  null !== selection &&
                  !nativeSelection.isCollapsed &&
                  null !== rootElement &&
                  rootElement.contains(nativeSelection.anchorNode)
                ) {
                  var rect,
                    domRange = nativeSelection.getRangeAt(0);
                  if (nativeSelection.anchorNode === rootElement) {
                    for (
                      var inner = rootElement;
                      null != inner.firstElementChild;

                    )
                      inner = inner.firstElementChild;
                    rect = inner.getBoundingClientRect();
                  } else rect = domRange.getBoundingClientRect();
                  mouseDownRef.current ||
                    positionEditorElement(editorElem, rect),
                    setLastSelection(selection);
                } else
                  (activeElement && "link-input" === activeElement.className) ||
                    (positionEditorElement(editorElem, null),
                    setLastSelection(null),
                    setEditMode(!1),
                    setLinkUrl(""));
                return !0;
              }
            },
            [editor]
          );
        return (
          (0, react.useEffect)(
            function () {
              return (0, LexicalUtils.mergeRegister)(
                editor.registerUpdateListener(function (_ref2) {
                  _ref2.editorState.read(function () {
                    updateLinkEditor();
                  });
                }),
                editor.registerCommand(
                  Lexical.SELECTION_CHANGE_COMMAND,
                  function () {
                    return updateLinkEditor(), !0;
                  },
                  LowPriority
                )
              );
            },
            [editor, updateLinkEditor]
          ),
          (0, react.useEffect)(
            function () {
              editor.getEditorState().read(function () {
                updateLinkEditor();
              });
            },
            [editor, updateLinkEditor]
          ),
          (0, react.useEffect)(
            function () {
              isEditMode && inputRef.current && inputRef.current.focus();
            },
            [isEditMode]
          ),
          ToolbarPlugin_jsx(
            LinkEditor,
            { ref: editorRef },
            isEditMode
              ? ToolbarPlugin_jsx("input", {
                  ref: inputRef,
                  className: "link-input",
                  value: linkUrl,
                  onChange: function onChange(event) {
                    setLinkUrl(event.target.value);
                  },
                  onKeyDown: function onKeyDown(event) {
                    "Enter" === event.key
                      ? (event.preventDefault(),
                        null !== lastSelection &&
                          ("" !== linkUrl &&
                            editor.dispatchCommand(
                              LexicalLink.TOGGLE_LINK_COMMAND,
                              linkUrl
                            ),
                          setEditMode(!1)))
                      : "Escape" === event.key &&
                        (event.preventDefault(), setEditMode(!1));
                  },
                })
              : ToolbarPlugin_jsx(
                  react.Fragment,
                  null,
                  ToolbarPlugin_jsx(
                    "div",
                    { className: "link-input" },
                    ToolbarPlugin_jsx(
                      "a",
                      {
                        href: linkUrl,
                        target: "_blank",
                        rel: "noopener noreferrer",
                      },
                      linkUrl
                    ),
                    ToolbarPlugin_jsx(icons_PencilFill, {
                      className: "link-edit",
                      role: "button",
                      tabIndex: 0,
                      onMouseDown: function onMouseDown(event) {
                        return event.preventDefault();
                      },
                      onClick: function onClick() {
                        setEditMode(!0);
                      },
                    })
                  )
                )
          )
        );
      }
      function Select(_ref3) {
        var onChange = _ref3.onChange,
          className = _ref3.className,
          options = _ref3.options,
          value = _ref3.value;
        return ToolbarPlugin_jsx(
          "select",
          { className, onChange, value },
          ToolbarPlugin_jsx("option", { hidden: !0, value: "" }),
          options.map(function (option) {
            return ToolbarPlugin_jsx(
              "option",
              { key: option, value: option },
              option
            );
          })
        );
      }
      function getSelectedNode(selection) {
        var anchor = selection.anchor,
          focus = selection.focus,
          anchorNode = selection.anchor.getNode(),
          focusNode = selection.focus.getNode();
        return anchorNode === focusNode
          ? anchorNode
          : selection.isBackward()
          ? (0, LexicalSelection.$isAtNodeEnd)(focus)
            ? anchorNode
            : focusNode
          : (0, LexicalSelection.$isAtNodeEnd)(anchor)
          ? focusNode
          : anchorNode;
      }
      function BlockOptionsDropdownList(_ref4) {
        var editor = _ref4.editor,
          blockType = _ref4.blockType,
          toolbarRef = _ref4.toolbarRef,
          setShowBlockOptionsDropDown = _ref4.setShowBlockOptionsDropDown,
          dropDownRef = (0, react.useRef)(null);
        (0, react.useEffect)(
          function () {
            var toolbar = toolbarRef.current,
              dropDown = dropDownRef.current;
            if (null !== toolbar && null !== dropDown) {
              var _toolbar$getBoundingC = toolbar.getBoundingClientRect(),
                top = _toolbar$getBoundingC.top,
                left = _toolbar$getBoundingC.left;
              (dropDown.style.top = "".concat(top + 40, "px")),
                (dropDown.style.left = "".concat(left, "px"));
            }
          },
          [dropDownRef, toolbarRef]
        ),
          (0, react.useEffect)(
            function () {
              var dropDown = dropDownRef.current,
                toolbar = toolbarRef.current;
              if (null !== dropDown && null !== toolbar) {
                var handle = function handle(event) {
                  var target = event.target;
                  dropDown.contains(target) ||
                    toolbar.contains(target) ||
                    setShowBlockOptionsDropDown(!1);
                };
                return (
                  document.addEventListener("click", handle),
                  function () {
                    document.removeEventListener("click", handle);
                  }
                );
              }
            },
            [dropDownRef, setShowBlockOptionsDropDown, toolbarRef]
          );
        return ToolbarPlugin_jsx(
          EditorDropdown,
          { ref: dropDownRef },
          ToolbarPlugin_jsx(
            "button",
            {
              className: "item",
              onClick: function formatParagraph() {
                "paragraph" !== blockType &&
                  editor.update(function () {
                    var selection = (0, Lexical.$getSelection)();
                    (0, Lexical.$isRangeSelection)(selection) &&
                      (0, LexicalSelection.$wrapNodes)(selection, function () {
                        return (0, Lexical.$createParagraphNode)();
                      });
                  }),
                  setShowBlockOptionsDropDown(!1);
              },
            },
            ToolbarPlugin_jsx(icons_TextParagraph, null),
            ToolbarPlugin_jsx("span", { className: "text" }, "Normal"),
            "paragraph" === blockType &&
              ToolbarPlugin_jsx("span", { className: "active" })
          ),
          ToolbarPlugin_jsx(
            "button",
            {
              className: "item",
              onClick: function formatLargeHeading() {
                "h1" !== blockType &&
                  editor.update(function () {
                    var selection = (0, Lexical.$getSelection)();
                    (0, Lexical.$isRangeSelection)(selection) &&
                      (0, LexicalSelection.$wrapNodes)(selection, function () {
                        return (0, LexicalRichText.$createHeadingNode)("h1");
                      });
                  }),
                  setShowBlockOptionsDropDown(!1);
              },
            },
            ToolbarPlugin_jsx(icons_TypeH1, null),
            ToolbarPlugin_jsx("span", { className: "text" }, "Large Heading"),
            "h1" === blockType &&
              ToolbarPlugin_jsx("span", { className: "active" })
          ),
          ToolbarPlugin_jsx(
            "button",
            {
              className: "item",
              onClick: function formatSmallHeading() {
                "h2" !== blockType &&
                  editor.update(function () {
                    var selection = (0, Lexical.$getSelection)();
                    (0, Lexical.$isRangeSelection)(selection) &&
                      (0, LexicalSelection.$wrapNodes)(selection, function () {
                        return (0, LexicalRichText.$createHeadingNode)("h2");
                      });
                  }),
                  setShowBlockOptionsDropDown(!1);
              },
            },
            ToolbarPlugin_jsx(icons_TypeH2, null),
            ToolbarPlugin_jsx("span", { className: "text" }, "Small Heading"),
            "h2" === blockType &&
              ToolbarPlugin_jsx("span", { className: "active" })
          ),
          ToolbarPlugin_jsx(
            "button",
            {
              className: "item",
              onClick: function formatBulletList() {
                "ul" !== blockType
                  ? editor.dispatchCommand(
                      LexicalList.INSERT_UNORDERED_LIST_COMMAND
                    )
                  : editor.dispatchCommand(LexicalList.REMOVE_LIST_COMMAND),
                  setShowBlockOptionsDropDown(!1);
              },
            },
            ToolbarPlugin_jsx(icons_ListUl, null),
            ToolbarPlugin_jsx("span", { className: "text" }, "Bullet List"),
            "ul" === blockType &&
              ToolbarPlugin_jsx("span", { className: "active" })
          ),
          ToolbarPlugin_jsx(
            "button",
            {
              className: "item",
              onClick: function formatNumberedList() {
                "ol" !== blockType
                  ? editor.dispatchCommand(
                      LexicalList.INSERT_ORDERED_LIST_COMMAND
                    )
                  : editor.dispatchCommand(LexicalList.REMOVE_LIST_COMMAND),
                  setShowBlockOptionsDropDown(!1);
              },
            },
            ToolbarPlugin_jsx(icons_ListOl, null),
            ToolbarPlugin_jsx("span", { className: "text" }, "Numbered List"),
            "ol" === blockType &&
              ToolbarPlugin_jsx("span", { className: "active" })
          ),
          ToolbarPlugin_jsx(
            "button",
            {
              className: "item",
              onClick: function formatQuote() {
                "quote" !== blockType &&
                  editor.update(function () {
                    var selection = (0, Lexical.$getSelection)();
                    (0, Lexical.$isRangeSelection)(selection) &&
                      (0, LexicalSelection.$wrapNodes)(selection, function () {
                        return (0, LexicalRichText.$createQuoteNode)();
                      });
                  }),
                  setShowBlockOptionsDropDown(!1);
              },
            },
            ToolbarPlugin_jsx(icons_ChatSquareQuote, null),
            ToolbarPlugin_jsx("span", { className: "text" }, "Quote"),
            "quote" === blockType &&
              ToolbarPlugin_jsx("span", { className: "active" })
          ),
          ToolbarPlugin_jsx(
            "button",
            {
              className: "item",
              onClick: function formatCode() {
                "code" !== blockType &&
                  editor.update(function () {
                    var selection = (0, Lexical.$getSelection)();
                    (0, Lexical.$isRangeSelection)(selection) &&
                      (0, LexicalSelection.$wrapNodes)(selection, function () {
                        return (0, LexicalCode.$createCodeNode)();
                      });
                  }),
                  setShowBlockOptionsDropDown(!1);
              },
            },
            ToolbarPlugin_jsx(icons_TypeCode, null),
            ToolbarPlugin_jsx("span", { className: "text" }, "Code Block"),
            "code" === blockType &&
              ToolbarPlugin_jsx("span", { className: "active" })
          )
        );
      }
      function ToolbarPlugin() {
        var _useLexicalComposerCo = (0,
          LexicalComposerContext.useLexicalComposerContext)(),
          editor = (0, slicedToArray.Z)(_useLexicalComposerCo, 1)[0],
          toolbarRef = (0, react.useRef)(null),
          _useState4 = (0, react.useState)(!1),
          canUndo = _useState4[0],
          setCanUndo = _useState4[1],
          _useState5 = (0, react.useState)(!1),
          canRedo = _useState5[0],
          setCanRedo = _useState5[1],
          _useState6 = (0, react.useState)("paragraph"),
          blockType = _useState6[0],
          setBlockType = _useState6[1],
          _useState7 = (0, react.useState)(null),
          selectedElementKey = _useState7[0],
          setSelectedElementKey = _useState7[1],
          _useState8 = (0, react.useState)(!1),
          showBlockOptionsDropDown = _useState8[0],
          setShowBlockOptionsDropDown = _useState8[1],
          _useState9 = (0, react.useState)(""),
          codeLanguage = _useState9[0],
          setCodeLanguage = _useState9[1],
          _useState10 = (0, react.useState)(!1),
          setIsRTL = (_useState10[0], _useState10[1]),
          _useState11 = (0, react.useState)(!1),
          isLink = _useState11[0],
          setIsLink = _useState11[1],
          _useState12 = (0, react.useState)(!1),
          isBold = _useState12[0],
          setIsBold = _useState12[1],
          _useState13 = (0, react.useState)(!1),
          isItalic = _useState13[0],
          setIsItalic = _useState13[1],
          _useState14 = (0, react.useState)(!1),
          isUnderline = _useState14[0],
          setIsUnderline = _useState14[1],
          _useState15 = (0, react.useState)(!1),
          isStrikethrough = _useState15[0],
          setIsStrikethrough = _useState15[1],
          _useState16 = (0, react.useState)(!1),
          isCode = _useState16[0],
          setIsCode = _useState16[1],
          updateToolbar = (0, react.useCallback)(
            function () {
              var selection = (0, Lexical.$getSelection)();
              if ((0, Lexical.$isRangeSelection)(selection)) {
                var anchorNode = selection.anchor.getNode(),
                  element =
                    "root" === anchorNode.getKey()
                      ? anchorNode
                      : anchorNode.getTopLevelElementOrThrow(),
                  elementKey = element.getKey();
                if (null !== editor.getElementByKey(elementKey))
                  if (
                    (setSelectedElementKey(elementKey),
                    (0, LexicalList.$isListNode)(element))
                  ) {
                    var parentList = (0, LexicalUtils.$getNearestNodeOfType)(
                        anchorNode,
                        LexicalList.ListNode
                      ),
                      type = parentList
                        ? parentList.getTag()
                        : element.getTag();
                    setBlockType(type);
                  } else {
                    var _type = (0, LexicalRichText.$isHeadingNode)(element)
                      ? element.getTag()
                      : element.getType();
                    setBlockType(_type),
                      (0, LexicalCode.$isCodeNode)(element) &&
                        setCodeLanguage(
                          element.getLanguage() ||
                            (0, LexicalCode.getDefaultCodeLanguage)()
                        );
                  }
                setIsBold(selection.hasFormat("bold")),
                  setIsItalic(selection.hasFormat("italic")),
                  setIsUnderline(selection.hasFormat("underline")),
                  setIsStrikethrough(selection.hasFormat("strikethrough")),
                  setIsCode(selection.hasFormat("code")),
                  setIsRTL(
                    (0, LexicalSelection.$isParentElementRTL)(selection)
                  );
                var node = getSelectedNode(selection),
                  parent = node.getParent();
                (0, LexicalLink.$isLinkNode)(parent) ||
                (0, LexicalLink.$isLinkNode)(node)
                  ? setIsLink(!0)
                  : setIsLink(!1);
              }
            },
            [editor]
          );
        (0, react.useEffect)(
          function () {
            return (0, LexicalUtils.mergeRegister)(
              editor.registerUpdateListener(function (_ref5) {
                _ref5.editorState.read(function () {
                  updateToolbar();
                });
              }),
              editor.registerCommand(
                Lexical.SELECTION_CHANGE_COMMAND,
                function (_payload, newEditor) {
                  return updateToolbar(), !1;
                },
                LowPriority
              ),
              editor.registerCommand(
                Lexical.CAN_UNDO_COMMAND,
                function (payload) {
                  return setCanUndo(payload), !1;
                },
                LowPriority
              ),
              editor.registerCommand(
                Lexical.CAN_REDO_COMMAND,
                function (payload) {
                  return setCanRedo(payload), !1;
                },
                LowPriority
              )
            );
          },
          [editor, updateToolbar]
        );
        var codeLanguges = (0, react.useMemo)(function () {
            return (0, LexicalCode.getCodeLanguages)();
          }, []),
          onCodeLanguageSelect = (0, react.useCallback)(
            function (e) {
              editor.update(function () {
                if (null !== selectedElementKey) {
                  var node = (0, Lexical.$getNodeByKey)(selectedElementKey);
                  (0, LexicalCode.$isCodeNode)(node) &&
                    node.setLanguage(e.target.value);
                }
              });
            },
            [editor, selectedElementKey]
          ),
          insertLink = (0, react.useCallback)(
            function () {
              isLink
                ? editor.dispatchCommand(LexicalLink.TOGGLE_LINK_COMMAND, null)
                : editor.dispatchCommand(
                    LexicalLink.TOGGLE_LINK_COMMAND,
                    "https://"
                  );
            },
            [editor, isLink]
          );
        return ToolbarPlugin_jsx(
          EditorToolbar,
          { ref: toolbarRef },
          ToolbarPlugin_jsx(
            "button",
            {
              disabled: !canUndo,
              onClick: function onClick() {
                editor.dispatchCommand(Lexical.UNDO_COMMAND);
              },
              className: "toolbar-item spaced",
              "aria-label": "Undo",
            },
            ToolbarPlugin_jsx(icons_ArrowCounterclockwise, null)
          ),
          ToolbarPlugin_jsx(
            "button",
            {
              disabled: !canRedo,
              onClick: function onClick() {
                editor.dispatchCommand(Lexical.REDO_COMMAND);
              },
              className: "toolbar-item",
              "aria-label": "Redo",
            },
            ToolbarPlugin_jsx(icons_ArrowClockwise, null)
          ),
          ToolbarPlugin_jsx(Divider, null),
          supportedBlockTypes.has(blockType) &&
            ToolbarPlugin_jsx(
              react.Fragment,
              null,
              ToolbarPlugin_jsx(
                "button",
                {
                  className: "toolbar-item block-controls",
                  onClick: function onClick() {
                    return setShowBlockOptionsDropDown(
                      !showBlockOptionsDropDown
                    );
                  },
                  "aria-label": "Formatting Options",
                },
                ToolbarPlugin_jsx(icons_TextParagraph, null),
                ToolbarPlugin_jsx(
                  "span",
                  { className: "text" },
                  blockTypeToBlockName[blockType]
                ),
                ToolbarPlugin_jsx(icons_ChevronDown, null)
              ),
              showBlockOptionsDropDown &&
                (0, react_dom.createPortal)(
                  ToolbarPlugin_jsx(BlockOptionsDropdownList, {
                    editor,
                    blockType,
                    toolbarRef,
                    setShowBlockOptionsDropDown,
                  }),
                  document.body
                ),
              ToolbarPlugin_jsx(Divider, null)
            ),
          "code" === blockType
            ? ToolbarPlugin_jsx(
                react.Fragment,
                null,
                ToolbarPlugin_jsx(Select, {
                  className: "toolbar-item code-language",
                  onChange: onCodeLanguageSelect,
                  options: codeLanguges,
                  value: codeLanguage,
                })
              )
            : ToolbarPlugin_jsx(
                react.Fragment,
                null,
                ToolbarPlugin_jsx(
                  "button",
                  {
                    onClick: function onClick() {
                      editor.dispatchCommand(
                        Lexical.FORMAT_TEXT_COMMAND,
                        "bold"
                      );
                    },
                    className:
                      "toolbar-item spaced " + (isBold ? "active" : ""),
                    "aria-label": "Format Bold",
                  },
                  ToolbarPlugin_jsx(icons_TypeBold, null)
                ),
                ToolbarPlugin_jsx(
                  "button",
                  {
                    onClick: function onClick() {
                      editor.dispatchCommand(
                        Lexical.FORMAT_TEXT_COMMAND,
                        "italic"
                      );
                    },
                    className:
                      "toolbar-item spaced " + (isItalic ? "active" : ""),
                    "aria-label": "Format Italics",
                  },
                  ToolbarPlugin_jsx(icons_TypeItalic, null)
                ),
                ToolbarPlugin_jsx(
                  "button",
                  {
                    onClick: function onClick() {
                      editor.dispatchCommand(
                        Lexical.FORMAT_TEXT_COMMAND,
                        "underline"
                      );
                    },
                    className:
                      "toolbar-item spaced " + (isUnderline ? "active" : ""),
                    "aria-label": "Format Underline",
                  },
                  ToolbarPlugin_jsx(icons_TypeUnderline, null)
                ),
                ToolbarPlugin_jsx(
                  "button",
                  {
                    onClick: function onClick() {
                      editor.dispatchCommand(
                        Lexical.FORMAT_TEXT_COMMAND,
                        "strikethrough"
                      );
                    },
                    className:
                      "toolbar-item spaced " +
                      (isStrikethrough ? "active" : ""),
                    "aria-label": "Format Strikethrough",
                  },
                  ToolbarPlugin_jsx(icons_TypeStrikethrough, null)
                ),
                ToolbarPlugin_jsx(
                  "button",
                  {
                    onClick: function onClick() {
                      editor.dispatchCommand(
                        Lexical.FORMAT_TEXT_COMMAND,
                        "code"
                      );
                    },
                    className:
                      "toolbar-item spaced " + (isCode ? "active" : ""),
                    "aria-label": "Insert Code",
                  },
                  ToolbarPlugin_jsx(icons_TypeCode, null)
                ),
                ToolbarPlugin_jsx(
                  "button",
                  {
                    onClick: insertLink,
                    className:
                      "toolbar-item spaced " + (isLink ? "active" : ""),
                    "aria-label": "Insert Link",
                  },
                  ToolbarPlugin_jsx(icons_TypeLink, null)
                ),
                isLink &&
                  (0, react_dom.createPortal)(
                    ToolbarPlugin_jsx(FloatingLinkEditor, { editor }),
                    document.body
                  ),
                ToolbarPlugin_jsx(Divider, null),
                ToolbarPlugin_jsx(
                  "button",
                  {
                    onClick: function onClick() {
                      editor.dispatchCommand(
                        Lexical.FORMAT_ELEMENT_COMMAND,
                        "left"
                      );
                    },
                    className: "toolbar-item spaced",
                    "aria-label": "Left Align",
                  },
                  ToolbarPlugin_jsx(icons_TextLeft, null)
                ),
                ToolbarPlugin_jsx(
                  "button",
                  {
                    onClick: function onClick() {
                      editor.dispatchCommand(
                        Lexical.FORMAT_ELEMENT_COMMAND,
                        "center"
                      );
                    },
                    className: "toolbar-item spaced",
                    "aria-label": "Center Align",
                  },
                  ToolbarPlugin_jsx(icons_TextCenter, null)
                ),
                ToolbarPlugin_jsx(
                  "button",
                  {
                    onClick: function onClick() {
                      editor.dispatchCommand(
                        Lexical.FORMAT_ELEMENT_COMMAND,
                        "right"
                      );
                    },
                    className: "toolbar-item spaced",
                    "aria-label": "Right Align",
                  },
                  ToolbarPlugin_jsx(icons_TextRight, null)
                ),
                ToolbarPlugin_jsx(
                  "button",
                  {
                    onClick: function onClick() {
                      editor.dispatchCommand(
                        Lexical.FORMAT_ELEMENT_COMMAND,
                        "justify"
                      );
                    },
                    className: "toolbar-item",
                    "aria-label": "Justify Align",
                  },
                  ToolbarPlugin_jsx(icons_Justify, null)
                )
              )
        );
      }
      (Divider.displayName = "Divider"),
        (FloatingLinkEditor.displayName = "FloatingLinkEditor"),
        (Select.displayName = "Select"),
        (BlockOptionsDropdownList.displayName = "BlockOptionsDropdownList"),
        (ToolbarPlugin.displayName = "ToolbarPlugin"),
        (ToolbarPlugin.__docgenInfo = {
          description: "",
          methods: [],
          displayName: "ToolbarPlugin",
        });
      var format = __webpack_require__(
        "./node_modules/date-fns/esm/format/index.js"
      );
      function textDailyStandup() {
        var root = (0, Lexical.$getRoot)(),
          paragraphParent = (0, Lexical.$createParagraphNode)(),
          currentDate = new Date(),
          todayStandupDate = (0, format.Z)(currentDate, "ddMMyyyy");
        paragraphParent.append(
          (0, Lexical.$createTextNode)("/".concat(todayStandupDate))
        );
        var paragraphTwo = (0, Lexical.$createParagraphNode)();
        paragraphTwo.append((0, Lexical.$createTextNode)("#focusing"));
        var listForParagraphTwo = (0, LexicalList.$createListNode)("bullet");
        listForParagraphTwo.append(
          (0, LexicalList.$createListItemNode)().append(
            (0, Lexical.$createTextNode)("..")
          )
        );
        var paragraphThree = (0, Lexical.$createParagraphNode)();
        paragraphThree.append((0, Lexical.$createTextNode)("#queue")),
          (0, LexicalList.$createListNode)("bullet").append(
            (0, LexicalList.$createListItemNode)().append(
              (0, Lexical.$createTextNode)("..")
            )
          );
        var paragraphFour = (0, Lexical.$createParagraphNode)();
        paragraphFour.append((0, Lexical.$createTextNode)("#achieved")),
          (0, LexicalList.$createListNode)("bullet").append(
            (0, LexicalList.$createListItemNode)().append(
              (0, Lexical.$createTextNode)("..")
            )
          ),
          root.append(paragraphParent),
          root.append(paragraphTwo),
          root.append(listForParagraphTwo),
          root.append(paragraphThree),
          root.append(paragraphFour);
      }
      try {
        (textDailyStandup.displayName = "textDailyStandup"),
          (textDailyStandup.__docgenInfo = {
            description:
              "docs: https://lexical.dev/docs/demos/plugins/markdown",
            displayName: "textDailyStandup",
            props: {},
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              "src/components/molecules/LexicalEditor/utils/text-daily-standup.tsx#textDailyStandup"
            ] = {
              docgenInfo: textDailyStandup.__docgenInfo,
              name: "textDailyStandup",
              path: "src/components/molecules/LexicalEditor/utils/text-daily-standup.tsx#textDailyStandup",
            });
      } catch (__react_docgen_typescript_loader_error) {}
      var LexicalEditor_jsx = react.createElement;
      function Placeholder() {
        return LexicalEditor_jsx(
          "div",
          { className: "editor-placeholder" },
          "Enter some rich text..."
        );
      }
      Placeholder.displayName = "Placeholder";
      var editorConfig = {
        theme,
        namespace: "daily-standup-editor",
        editorState: textDailyStandup,
        onError: function onError(error) {
          throw error;
        },
        nodes: [
          LexicalRichText.HeadingNode,
          LexicalList.ListNode,
          LexicalList.ListItemNode,
          LexicalRichText.QuoteNode,
          LexicalCode.CodeNode,
          LexicalCode.CodeHighlightNode,
          LexicalTable.TableNode,
          LexicalTable.TableCellNode,
          LexicalTable.TableRowNode,
          LexicalLink.AutoLinkNode,
          LexicalLink.LinkNode,
        ],
      };
      function Editor() {
        var _useState = (0, react.useState)(!1),
          isMounted = _useState[0],
          setIsMounted = _useState[1];
        return (
          (0, react.useEffect)(function () {
            setIsMounted(!0);
          }, []),
          isMounted
            ? LexicalEditor_jsx(
                LexicalComposer.LexicalComposer,
                { initialConfig: editorConfig },
                LexicalEditor_jsx(
                  EditorContainer,
                  null,
                  LexicalEditor_jsx(ToolbarPlugin, null),
                  LexicalEditor_jsx(
                    "div",
                    { className: "editor-inner" },
                    LexicalEditor_jsx(LexicalRichTextPlugin.RichTextPlugin, {
                      contentEditable: LexicalEditor_jsx(
                        LexicalContentEditable.ContentEditable,
                        { className: "editor-input" }
                      ),
                      placeholder: LexicalEditor_jsx(Placeholder, null),
                      ErrorBoundary: LexicalErrorBoundary_default(),
                    }),
                    LexicalEditor_jsx(LexicalListPlugin.ListPlugin, null),
                    LexicalEditor_jsx(LexicalHistoryPlugin.HistoryPlugin, null),
                    LexicalEditor_jsx(
                      LexicalAutoFocusPlugin.AutoFocusPlugin,
                      null
                    ),
                    LexicalEditor_jsx(CodeHighlightPlugin, null),
                    LexicalEditor_jsx(LexicalLinkPlugin.LinkPlugin, null),
                    LexicalEditor_jsx(
                      LexicalTabIndentationPlugin.TabIndentationPlugin,
                      null
                    ),
                    LexicalEditor_jsx(PlaygroundAutoLinkPlugin, null),
                    LexicalEditor_jsx(
                      LexicalMarkdownShortcutPlugin.MarkdownShortcutPlugin,
                      { transformers: LexicalMarkdown.TRANSFORMERS }
                    )
                  )
                )
              )
            : null
        );
      }
      (Editor.displayName = "Editor"),
        (Editor.__docgenInfo = {
          description: "",
          methods: [],
          displayName: "Editor",
        });
      const LexicalEditor = Editor;
      const LexicalEditor_stories = {
        title: "components/editor/Editor",
        component: Editor,
      };
    },
  },
]);
