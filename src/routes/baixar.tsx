import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

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

const FILE_URL = "/projeto.zip";

function BaixarPage() {
  useEffect(() => {
    const a = document.createElement("a");
    a.href = FILE_URL;
    a.download = "projeto.zip";
    document.body.appendChild(a);
    a.click();
    a.remove();
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
          download="projeto.zip"
          className="inline-block px-5 py-2.5 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition"
        >
          Baixar projeto.zip
        </a>
      </div>
    </main>
  );
}
