import {
  useEditor,
  EditorContent,
  BubbleMenu,
  FloatingMenu,
} from "@tiptap/react";
import { initialContent } from "./InitialContent";
import { lowlight } from "lowlight";
import {
  RxFontBold,
  RxFontItalic,
  RxStrikethrough,
  RxCode,
  RxChevronDown,
  RxChatBubble,
} from "react-icons/rx";
import StarterKit from "@tiptap/starter-kit";
import CodeBlockLowLight from "@tiptap/extension-code-block-lowlight";
import js from "highlight.js/lib/languages/javascript";
import "highlight.js/styles/tokyo-night-dark.css";
import { BubbleButton } from "./BubbleButton";

lowlight.registerLanguage("js", js);

export function Editor() {
  const editor = useEditor({
    extensions: [StarterKit, CodeBlockLowLight.configure({ lowlight })],
    content: initialContent,
    editorProps: {
      attributes: {
        class: "outline-none",
      },
    },
  });

  return (
    <>
      <EditorContent
        className="max-w-[700px] mx-auto pt-16 prose prose-sky"
        editor={editor}
      />
      {editor && (
        <FloatingMenu
          className="bg-white p-1.5 shadow-xl gap-1 border border-zinc-600 shadow-black/20 rounded-md overflow-hidden flex flex-col"
          editor={editor}
          shouldShow={({ state }) => {
            const { $from } = state.selection;
            const currentLineText = $from.nodeBefore?.textContent;

            return currentLineText === "/";
          }}
        >
          <button className="flex items-center gap-2 p-1 rounded min-w-[280px] hover:bg-zinc-200">
            <img
              src="http://www.notion.so/images/blocks/text/en-US.png"
              alt="Text Icon"
              className="w-12 border border-zinc-600 rounded"
            />
            <div className="flex flex-col text-left">
              <span className="text-sm font-semibold">Text</span>
              <span className="text-xs text-zinc-400">
                Just Start writing with plain text.
              </span>
            </div>
          </button>

          <button
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 1 }).run()
            }
            className="flex items-center gap-2 p-1 rounded min-w-[280px] hover:bg-zinc-200"
          >
            <img
              src="http://www.notion.so/images/blocks/header.57a7576a.png"
              alt="Heading Level 1 Icon"
              className="w-12 border border-zinc-600 rounded"
            />
            <div className="flex flex-col text-left">
              <span className="text-sm font-semibold">Heading 1</span>
              <span className="text-xs text-zinc-400">
                Big Section Heading.
              </span>
            </div>
          </button>

          <button
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 2 }).run()
            }
            className="flex items-center gap-2 p-1 rounded min-w-[280px] hover:bg-zinc-200"
          >
            <img
              src="http://www.notion.so/images/blocks/subheader.9aab4769.png"
              alt="Heading Level 2 Icon"
              className="w-12 border border-zinc-600 rounded"
            />
            <div className="flex flex-col text-left">
              <span className="text-sm font-semibold">Heading 2</span>
              <span className="text-xs text-zinc-400">
                Medium Section Heading.
              </span>
            </div>
          </button>

          <button
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 3 }).run()
            }
            className="flex items-center gap-2 p-1 rounded min-w-[280px] hover:bg-zinc-200"
          >
            <img
              src="http://www.notion.so/images/blocks/subsubheader.d0ed0bb3.png"
              alt="Heading Level 3 Icon"
              className="w-12 border border-zinc-600 rounded"
            />
            <div className="flex flex-col text-left">
              <span className="text-sm font-semibold">Heading 3</span>
              <span className="text-xs text-zinc-400">
                Small Section Heading.
              </span>
            </div>
          </button>

          <button
            onClick={() => editor.chain().focus().toggleBulletList().run()}
            className="flex items-center gap-2 p-1 rounded min-w-[280px] hover:bg-zinc-200"
          >
            <img
              src="http://www.notion.so/images/blocks/bulleted-list.0e87e917.png"
              alt="Bulleted List Icon"
              className="w-12 border border-zinc-600 rounded"
            />
            <div className="flex flex-col text-left">
              <span className="text-sm font-semibold">Bulleted list</span>
              <span className="text-xs text-zinc-400">
                Create a simple bulleted list.
              </span>
            </div>
          </button>

          <button
            onClick={() => editor.chain().focus().toggleCodeBlock().run()}
            className="flex items-center gap-2 p-1 rounded min-w-[280px] hover:bg-zinc-200"
          >
            <img
              src="http://www.notion.so/images/blocks/code.a8b201f4.png"
              alt="Code Block Icon"
              className="w-12 border border-zinc-600 rounded"
            />
            <div className="flex flex-col text-left">
              <span className="text-sm font-semibold">Code Block</span>
              <span className="text-xs text-zinc-400">
                Capture a code snippet.
              </span>
            </div>
          </button>
        </FloatingMenu>
      )}
      {editor && (
        <BubbleMenu
          className="bg-white shadow-xl border border-zinc-600 shadow-black/20 rounded-md overflow-hidden flex divide-x-[1px] divide-zinc-600"
          editor={editor}
        >
          <BubbleButton>
            Text
            <RxChevronDown className="w-4 h-4" />
          </BubbleButton>

          <BubbleButton>
            <RxChatBubble className="w-4 h-4" />
            Comment
          </BubbleButton>

          <div className="flex items-center">
            <BubbleButton
              onClick={() => editor.chain().focus().toggleBold().run()}
              data-isActive={editor.isActive("bold")}
            >
              <RxFontBold className="w-4 h-4" />
            </BubbleButton>

            <BubbleButton
              onClick={() => editor.chain().focus().toggleItalic().run()}
              data-isActive={editor.isActive("italic")}
            >
              <RxFontItalic className="w-4 h-4" />
            </BubbleButton>

            <BubbleButton
              onClick={() => editor.chain().focus().toggleStrike().run()}
              data-isActive={editor.isActive("strike")}
            >
              <RxStrikethrough className="w-4 h-4" />
            </BubbleButton>

            <BubbleButton
              onClick={() => editor.chain().focus().toggleCode().run()}
              data-isActive={editor.isActive("code")}
            >
              <RxCode className="w-4 h-4" />
            </BubbleButton>
          </div>
        </BubbleMenu>
      )}
    </>
  );
}
