import styled from "styled-components";

export const EditorContainer = styled.div`
  margin: 20px auto 20px auto;
  overflow: hidden;
  min-width: 600px;
  padding-left: 20px;
  padding-right: 20px;
  color: #000;
  position: relative;
  line-height: 20px;
  font-weight: 400;
  text-align: left;

  h1 {
    font-size: 24px;
    color: #333;
  }

  .ltr {
    text-align: left;
  }

  .rtl {
    text-align: right;
  }

  .editor-inner {
    background: #fff;
    position: relative;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
  }

  .editor-input {
    min-height: 150px;
    resize: none;
    font-size: 15px;
    caret-color: rgb(5, 5, 5);
    position: relative;
    tab-size: 1;
    outline: 0;
    padding: 15px 10px;
    caret-color: #444;
  }

  .editor-placeholder {
    color: #999;
    overflow: hidden;
    position: absolute;
    text-overflow: ellipsis;
    top: 15px;
    left: 10px;
    font-size: 15px;
    user-select: none;
    display: inline-block;
    pointer-events: none;
  }

  .editor-text-bold {
    font-weight: bold;
  }

  .editor-text-italic {
    font-style: italic;
  }

  .editor-text-underline {
    text-decoration: underline;
  }

  .editor-text-strikethrough {
    text-decoration: line-through;
  }

  .editor-text-underlineStrikethrough {
    text-decoration: underline line-through;
  }

  .editor-text-code {
    background-color: rgb(240, 242, 245);
    padding: 1px 0.25rem;
    font-family: Menlo, Consolas, Monaco, monospace;
    font-size: 94%;
  }

  .editor-link {
    color: rgb(33, 111, 219);
    text-decoration: none;
  }

  .tree-view-output {
    display: block;
    background: #222;
    color: #fff;
    padding: 5px;
    font-size: 12px;
    white-space: pre-wrap;
    margin: 1px auto 10px auto;
    max-height: 250px;
    position: relative;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    overflow: auto;
    line-height: 14px;
  }

  .editor-code {
    background-color: rgb(240, 242, 245);
    font-family: Menlo, Consolas, Monaco, monospace;
    display: block;
    padding: 8px 8px 8px 52px;
    line-height: 1.53;
    font-size: 13px;
    margin: 0;
    margin-top: 8px;
    margin-bottom: 8px;
    tab-size: 2;
    /* white-space: pre; */
    overflow-x: auto;
    position: relative;
  }

  .editor-code:before {
    content: attr(data-gutter);
    position: absolute;
    background-color: #eee;
    left: 0;
    top: 0;
    border-right: 1px solid #ccc;
    padding: 8px;
    color: #777;
    white-space: pre-wrap;
    text-align: right;
    min-width: 25px;
  }
  .editor-code:after {
    content: attr(data-highlight-language);
    top: 0;
    right: 3px;
    padding: 3px;
    font-size: 10px;
    text-transform: uppercase;
    position: absolute;
    color: rgba(0, 0, 0, 0.5);
  }

  .editor-tokenComment {
    color: slategray;
  }

  .editor-tokenPunctuation {
    color: #999;
  }

  .editor-tokenProperty {
    color: #905;
  }

  .editor-tokenSelector {
    color: #690;
  }

  .editor-tokenOperator {
    color: #9a6e3a;
  }

  .editor-tokenAttr {
    color: #07a;
  }

  .editor-tokenVariable {
    color: #e90;
  }

  .editor-tokenFunction {
    color: #dd4a68;
  }

  .editor-paragraph {
    margin: 0;
    margin-bottom: 8px;
    position: relative;
  }

  .editor-paragraph:last-child {
    margin-bottom: 0;
  }

  .editor-heading-h1 {
    font-size: 24px;
    color: rgb(5, 5, 5);
    font-weight: 400;
    margin: 0;
    margin-bottom: 12px;
    padding: 0;
  }

  .editor-heading-h2 {
    font-size: 15px;
    color: rgb(101, 103, 107);
    font-weight: 700;
    margin: 0;
    margin-top: 10px;
    padding: 0;
    text-transform: uppercase;
  }

  .editor-quote {
    margin: 0;
    margin-left: 20px;
    font-size: 15px;
    color: rgb(101, 103, 107);
    border-left-color: rgb(206, 208, 212);
    border-left-width: 4px;
    border-left-style: solid;
    padding-left: 16px;
  }

  .editor-list-ol {
    padding: 0;
    margin: 0;
    margin-left: 16px;
  }

  .editor-list-ul {
    padding: 0;
    margin: 0;
    margin-left: 16px;
  }

  .editor-listitem {
    margin: 8px 32px 8px 32px;
  }

  .editor-nested-listitem {
    list-style-type: none;
  }

  pre::-webkit-scrollbar {
    background: transparent;
    width: 10px;
  }

  pre::-webkit-scrollbar-thumb {
    background: #999;
  }

  .debug-timetravel-panel {
    overflow: hidden;
    padding: 0 0 10px 0;
    margin: auto;
    display: flex;
  }

  .debug-timetravel-panel-slider {
    padding: 0;
    flex: 8;
  }

  .debug-timetravel-panel-button {
    padding: 0;
    border: 0;
    background: none;
    flex: 1;
    color: #fff;
    font-size: 12px;
  }

  .debug-timetravel-panel-button:hover {
    text-decoration: underline;
  }

  .debug-timetravel-button {
    border: 0;
    padding: 0;
    font-size: 12px;
    top: 10px;
    right: 15px;
    position: absolute;
    background: none;
    color: #fff;
  }

  .debug-timetravel-button:hover {
    text-decoration: underline;
  }

  .emoji {
    color: transparent;
    background-size: 16px 16px;
    background-position: center;
    background-repeat: no-repeat;
    vertical-align: middle;
    margin: 0 -1px;
  }

  .emoji-inner {
    padding: 0 0.15em;
  }

  .emoji-inner::selection {
    color: transparent;
    background-color: rgba(150, 150, 150, 0.4);
  }

  .emoji-inner::moz-selection {
    color: transparent;
    background-color: rgba(150, 150, 150, 0.4);
  }

  .emoji.happysmile {
    background-image: url(./images/emoji/1F642.png);
  }
`;

export const EditorDropdown = styled.div`
  z-index: 5;
  display: block;
  position: absolute;
  box-shadow: 0 12px 28px 0 rgba(0, 0, 0, 0.2), 0 2px 4px 0 rgba(0, 0, 0, 0.1),
    inset 0 0 0 1px rgba(255, 255, 255, 0.5);
  border-radius: 8px;
  min-width: 100px;
  min-height: 40px;
  background-color: #fff;

  .item {
    margin: 0 8px 0 8px;
    padding: 8px;
    color: #050505;
    cursor: pointer;
    line-height: 16px;
    font-size: 15px;
    display: flex;
    align-content: center;
    flex-direction: row;
    flex-shrink: 0;
    justify-content: space-between;
    background-color: #fff;
    border-radius: 8px;
    border: 0;
    min-width: 268px;
  }

  .item .active {
    display: flex;
    width: 20px;
    height: 20px;
    background-size: contain;
  }

  .item:first-child {
    margin-top: 8px;
  }

  .item:last-child {
    margin-bottom: 8px;
  }

  .item:hover {
    background-color: #eee;
  }

  .item .text {
    display: flex;
    line-height: 20px;
    flex-grow: 1;
    width: 200px;
  }

  .item svg {
    display: flex;
    width: 20px;
    height: 20px;
    user-select: none;
    margin-right: 12px;
    line-height: 16px;
    background-size: contain;
  }
`;

export const EditorToolbar = styled.div`
  display: flex;
  margin-bottom: 1px;
  background: #fff;
  padding: 4px;
  vertical-align: middle;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  overflow: auto;

  button.toolbar-item {
    align-items: center;
    border: 0;
    display: flex;
    background: none;
    border-radius: 10px;
    padding: 8px;
    cursor: pointer;
    vertical-align: middle;
  }

  button.toolbar-item:disabled {
    cursor: not-allowed;
  }

  button.toolbar-item.spaced {
    margin-right: 2px;
  }

  button.toolbar-item.active {
    background-color: rgba(223, 232, 250, 0.3);
  }

  button.toolbar-item.active i {
    opacity: 1;
  }

  .toolbar-item:hover:not([disabled]) {
    background-color: #eee;
  }

  .divider {
    width: 1px;
    background-color: #eee;
    margin: 0 4px;
  }

  select.toolbar-item {
    border: 0;
    display: flex;
    background: none;
    border-radius: 10px;
    padding: 8px;
    vertical-align: middle;
    -webkit-appearance: none;
    -moz-appearance: none;
    width: auto;
    font-size: 14px;
    color: #777;
    text-overflow: ellipsis;
  }

  select.code-language {
    text-transform: capitalize;
    width: 130px;
    cursor: pointer;
  }

  .toolbar-item .text {
    display: flex;
    line-height: 20px;
    width: 200px;
    vertical-align: middle;
    font-size: 14px;
    color: #777;
    text-overflow: ellipsis;
    width: auto;
    overflow: hidden;
    height: 20px;
    text-align: left;
  }

  .toolbar-item .icon {
    display: flex;
    width: 20px;
    height: 20px;
    user-select: none;
    margin-right: 8px;
    line-height: 16px;
    background-size: contain;
  }

  .block-controls {
    align-items: center;
    display: flex;
    gap: 0.5rem;
  }

  .block-controls button:hover {
    background-color: #efefef;
  }

  .block-controls button:focus-visible {
    border-color: blue;
  }

  .block-controls span.block-type {
    background-size: contain;
    display: block;
    width: 18px;
    height: 18px;
    margin: 2px;
  }
`;

export const LinkEditor = styled.div`
  position: absolute;
  z-index: 100;
  top: -10000px;
  left: -10000px;
  margin-top: -6px;
  max-width: 300px;
  width: 100%;
  opacity: 0;
  background-color: #fff;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.3);
  border-radius: 8px;
  transition: opacity 0.5s;

  .link-input {
    display: block;
    width: calc(100% - 24px);
    box-sizing: border-box;
    margin: 8px 12px;
    padding: 8px 12px;
    border-radius: 15px;
    background-color: #eee;
    font-size: 15px;
    color: rgb(5, 5, 5);
    border: 0;
    outline: 0;
    position: relative;
    font-family: inherit;
    display: flex;
    justify-content: space-between;
  }

  .link-edit {
    background-size: 16px;
    background-position: center;
    background-repeat: no-repeat;
    width: 35px;
    vertical-align: -0.25em;
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    cursor: pointer;
  }

  .link-input a {
    color: rgb(33, 111, 219);
    text-decoration: none;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    margin-right: 30px;
    text-overflow: ellipsis;
  }

  .link-input svg {
    cursor: pointer;
  }

  .link-input a:hover {
    text-decoration: underline;
  }

  .button {
    width: 20px;
    height: 20px;
    display: inline-block;
    padding: 6px;
    border-radius: 8px;
    cursor: pointer;
    margin: 0 2px;
  }

  .button.hovered {
    width: 20px;
    height: 20px;
    display: inline-block;
    background-color: #eee;
  }

  .button i,
  .actions i {
    background-size: contain;
    display: inline-block;
    height: 20px;
    width: 20px;
    vertical-align: -0.25em;
  }
`;