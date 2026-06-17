import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import projetoZipUrl from "@/assets/projeto.zip?url";

export const Route = createFileRoute("/baixar")({
  head: () => ({
    meta: [
      { title: "Baixar projeto (ZIP)" },
      { name: "description", content: "Baixe o código-fonte completo do projeto em ZIP." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: BaixarPage,
});

const FILE_URL = projetoZipUrl;
const FILE_NAME = "projeto.zip";

function triggerDownload() {
  const a = document.createElement("a");
  a.href = FILE_URL;
  a.download = FILE_NAME;
  a.rel = "noopener";
  document.body.appendChild(a);
  a.click();
  a.remove();
}

function BaixarPage() {
  useEffect(() => {
    const t = window.setTimeout(triggerDownload, 300);
    return () => window.clearTimeout(t);
  }, []);

  return (
    <main className="min-h-screen flex items-center justify-center p-6 bg-background text-foreground">
      <div className="max-w-md w-full text-center space-y-4 border border-border rounded-2xl p-8 shadow-sm">
        <h1 className="text-2xl font-semibold">Baixar projeto</h1>
        <p className="text-sm text-muted-foreground">
          O download deve iniciar automaticamente. Caso não inicie, clique no botão abaixo.
        </p>
        <a
          href={FILE_URL}
          download={FILE_NAME}
          rel="noopener"
          className="inline-flex min-h-11 items-center justify-center rounded-full bg-primary px-5 py-2.5 font-medium text-primary-foreground transition hover:opacity-90"
        >
          Baixar projeto.zip
        </a>
      </div>
    </main>
  );
}
