import { Editor } from "./components/Editor";

export function App() {
  return (
    <div className="min-h-screen p-8 text-zinc-900 bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400">
      <div className="bg-white w-[1100px] mx-auto rounded-xl min-h-[720px] border-black/20 overflow-hidden grid grid-cols-[16rem_1fr]">
        <aside className="bg-zinc-50 border-r border-r-zinc-100 p-4">
          <div className="flex gap-2">
            <button className="w-3 h-3 rounded-full bg-zinc-300 hover:bg-red-400" />
            <button className="w-3 h-3 rounded-full bg-zinc-300 hover:bg-yellow-400" />
            <button className="w-3 h-3 rounded-full bg-zinc-300 hover:bg-green-400" />
          </div>
        </aside>
        <main className="p-4">
          <Editor />
        </main>
      </div>
    </div>
  );
}
