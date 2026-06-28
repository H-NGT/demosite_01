export default function App() {
  return (
    <main className="min-h-screen bg-zinc-50 text-zinc-950">
      <section className="mx-auto flex min-h-screen max-w-5xl flex-col justify-center px-6 py-16">
        <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-emerald-700">
          Demo Site
        </p>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          オークボデンキ デモサイト
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-700">
          Claudeから出力されたHTMLコードを受け入れるためのVite + React +
          Tailwind CSS環境です。サイト本体はこのファイルのJSXを差し替えて構築できます。
        </p>
        <div className="mt-10 rounded-lg border border-zinc-200 bg-white p-6 shadow-sm">
          <h2 className="text-base font-semibold text-zinc-900">
            受け入れ先
          </h2>
          <p className="mt-2 text-sm leading-6 text-zinc-600">
            ClaudeのHTMLをReact JSXとして貼り付ける場合は
            <code className="mx-1 rounded bg-zinc-100 px-1.5 py-0.5 font-mono text-xs">
              src/App.jsx
            </code>
            を編集してください。純粋な静的HTMLとして扱う場合は
            <code className="mx-1 rounded bg-zinc-100 px-1.5 py-0.5 font-mono text-xs">
              index.html
            </code>
            を中心に移植できます。
          </p>
        </div>
      </section>
    </main>
  )
}
