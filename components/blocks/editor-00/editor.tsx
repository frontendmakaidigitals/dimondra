"use client";
import React from "react";
import { ListItemNode, ListNode } from "@lexical/list";
import { CheckListPlugin } from "@lexical/react/LexicalCheckListPlugin";
import {
  InitialConfigType,
  LexicalComposer,
} from "@lexical/react/LexicalComposer";

import { EditorState, SerializedEditorState } from "lexical";
import { ClearEditorPlugin } from "@lexical/react/LexicalClearEditorPlugin";
import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";
import { LexicalErrorBoundary } from "@lexical/react/LexicalErrorBoundary";
import { ListPlugin } from "@lexical/react/LexicalListPlugin";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { HeadingNode, QuoteNode } from "@lexical/rich-text";
import { ParagraphNode, TextNode } from "lexical";
import { ElementFormatToolbarPlugin } from "@/components/editor/plugins/toolbar/element-format-toolbar-plugin";
import { ContentEditable } from "@/components/editor/editor-ui/content-editable";
import { BlockFormatDropDown } from "@/components/editor/plugins/toolbar/block-format-toolbar-plugin";
import { FormatBulletedList } from "@/components/editor/plugins/toolbar/block-format/format-bulleted-list";
import { FormatCheckList } from "@/components/editor/plugins/toolbar/block-format/format-check-list";
import { FormatHeading } from "@/components/editor/plugins/toolbar/block-format/format-heading";
import { FormatNumberedList } from "@/components/editor/plugins/toolbar/block-format/format-numbered-list";
import { FormatParagraph } from "@/components/editor/plugins/toolbar/block-format/format-paragraph";
import { FormatQuote } from "@/components/editor/plugins/toolbar/block-format/format-quote";
import { ToolbarPlugin } from "@/components/editor/plugins/toolbar/toolbar-plugin";
import { editorTheme } from "@/components/editor/themes/editor-theme";
import { TooltipProvider } from "@/components/ui/tooltip";
import { FontColorToolbarPlugin } from "@/components/editor/plugins/toolbar/font-color-toolbar-plugin";
import { FontBackgroundToolbarPlugin } from "@/components/editor/plugins/toolbar/font-background-toolbar-plugin";
import { FontFamilyToolbarPlugin } from "@/components/editor/plugins/toolbar/font-family-toolbar-plugin";
import { FontFormatToolbarPlugin } from "@/components/editor/plugins/toolbar/font-format-toolbar-plugin";
import { FontSizeToolbarPlugin } from "@/components/editor/plugins/toolbar/font-size-toolbar-plugin";

import { ActionsPlugin } from "@/components/editor/plugins/actions/actions-plugin";
import { ClearEditorActionPlugin } from "@/components/editor/plugins/actions/clear-editor-plugin";
import { CounterCharacterPlugin } from "@/components/editor/plugins/actions/counter-character-plugin";

const editorConfig: InitialConfigType = {
  namespace: "Editor",
  theme: editorTheme,
  nodes: [
    HeadingNode,
    ParagraphNode,
    TextNode,
    QuoteNode,
    ListNode,
    ListItemNode,
  ],
  onError: (error: Error) => {
    console.error(error);
  },
};

export function Editor({
  editorState,
  editorSerializedState,
  onChange,
  onSerializedChange,
  readOnly = false,
  clampLines = 2,
  blogPage = false,
  text = "text-slate-900",
}: {
  editorState?: EditorState;
  editorSerializedState?: SerializedEditorState;
  onChange?: (editorState: EditorState) => void;
  onSerializedChange?: (editorSerializedState: SerializedEditorState) => void;
  readOnly?: boolean;
  clampLines?: number;
  blogPage?: boolean;
  text?: string;
}) {
  return (
    <div
      className={`${readOnly ? "bg-transparent" : "bg-background"} overflow-hidden ${readOnly ? "" : "rounded-lg border shadow"} `}
    >
      <LexicalComposer
        initialConfig={{
          ...editorConfig,
          editable: !readOnly,
          ...(editorState ? { editorState } : {}),
          ...(editorSerializedState
            ? { editorState: JSON.stringify(editorSerializedState) }
            : {}),
        }}
      >
        <TooltipProvider>
          <Plugins
            readOnly={readOnly}
            serialized={editorSerializedState}
            clampLines={clampLines}
            blogPage={blogPage}
            text={text}
          />
          <OnChangePlugin
            ignoreSelectionChange={true}
            onChange={(editorState) => {
              onChange?.(editorState);
              onSerializedChange?.(editorState.toJSON());
            }}
          />
        </TooltipProvider>
      </LexicalComposer>
    </div>
  );
}

const placeholder = "Start typing...";

export function Plugins({
  readOnly,
  serialized,
  clampLines = 2,
  blogPage = false,
  text = "text-slate-900",
}: {
  readOnly?: boolean;
  serialized?: SerializedEditorState;
  clampLines?: number;
  blogPage?: boolean;
  text?: string;
}) {
  return (
    <div className="relative">
      {/* toolbar plugins */}
      {!readOnly && (
        <ToolbarPlugin>
          {({ blockType }) => (
            <div className="vertical-align-middle sticky top-0 z-10 flex gap-2 overflow-auto border-b p-1">
              <BlockFormatDropDown>
                <FormatParagraph />
                <FormatHeading levels={["h1", "h2", "h3"]} />
                <FormatNumberedList />
                <FormatBulletedList />
                <FormatCheckList />
                <FormatQuote />
              </BlockFormatDropDown>
              <FontFamilyToolbarPlugin />
              <ElementFormatToolbarPlugin />
              <FontColorToolbarPlugin />
              <FontBackgroundToolbarPlugin />
              <FontSizeToolbarPlugin />
              <FontFormatToolbarPlugin format="bold" />
              <FontFormatToolbarPlugin format="italic" />
              <FontFormatToolbarPlugin format="underline" />
              <FontFormatToolbarPlugin format="strikethrough" />
            </div>
          )}
        </ToolbarPlugin>
      )}
      <div className="relative">
        {readOnly && blogPage === false ? (
          <div
            className={`${blogPage ? "" : `line-clamp-${clampLines}`} text-sm ${text}`}
          >
            {renderPlainTextFromEditorState(serialized)}
          </div>
        ) : blogPage ? (
          <RichTextPlugin
            contentEditable={
              <ContentEditable
                placeholder={placeholder}
                className={`ContentEditable__root relative block ${
                  readOnly ? "" : "h-72 min-h-96 overflow-auto px-8 py-4"
                } focus:outline-none`}
              />
            }
            ErrorBoundary={LexicalErrorBoundary}
          />
        ) : (
          <RichTextPlugin
            contentEditable={
              <ContentEditable
                placeholder={placeholder}
                className={`ContentEditable__root relative block ${
                  readOnly ? "" : "h-72 min-h-96 overflow-auto px-8 py-4"
                } focus:outline-none`}
              />
            }
            ErrorBoundary={LexicalErrorBoundary}
          />
        )}
        <ListPlugin />
        <CheckListPlugin />
      </div>
      {!readOnly && (
        <ActionsPlugin>
          <div
            className={`clear-both flex items-center justify-between gap-2 overflow-auto border-t p-1`}
          >
            <div className="flex flex-1 justify-start">
              {/* left side action buttons */}
            </div>
            <>
              <CounterCharacterPlugin charset="UTF-16" />
            </>
            <div className="flex flex-1  justify-end">
              <>
                <ClearEditorActionPlugin />
                <ClearEditorPlugin />
              </>
            </div>
          </div>
        </ActionsPlugin>
      )}
    </div>
  );
}
// Render plain text for preview
function renderPlainTextFromEditorState(
  serialized: SerializedEditorState | undefined
) {
  if (!serialized) return "";
  try {
    const root = serialized.root;
    if (!root || !root.children) return "";
    return root.children
      .map(
        (node: any) =>
          node.children?.map((child: any) => child.text).join(" ") ?? ""
      )
      .join(" ");
  } catch (e) {
    return "";
  }
}
