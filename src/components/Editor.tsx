import { initialContent } from "./InitialContent";
import { useEditor, EditorContent } from "@tiptap/react";
import { lowlight } from "lowlight";
import StarterKit from "@tiptap/starter-kit";
import CodeBlockLowLight from "@tiptap/extension-code-block-lowlight";
import html from "highlight.js/lib/languages/xml";

lowlight.registerLanguage("html", html);

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
    <EditorContent
      className="max-w-[700px] mx-auto pt-16 prose prose-sky"
      editor={editor}
    />
  );
}
