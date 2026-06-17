import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useEffect, useState } from "react";
import projetoZipDataUrl from "@/assets/projeto.zip?inline";

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

const FILE_NAME = "projeto.zip";

function dataUrlToBlob(dataUrl: string) {
  const commaIndex = dataUrl.indexOf(",");
  if (commaIndex === -1) throw new Error("ZIP inválido");

  const meta = dataUrl.slice(0, commaIndex);
  const payload = dataUrl.slice(commaIndex + 1);
  const mime = meta.match(/^data:([^;,]+)/)?.[1] ?? "application/zip";

  if (!meta.includes(";base64")) {
    return new Blob([decodeURIComponent(payload)], { type: mime });
  }

  const binary = atob(payload);
  const bytes = new Uint8Array(binary.length);
  for (let index = 0; index < binary.length; index += 1) {
    bytes[index] = binary.charCodeAt(index);
  }
  return new Blob([bytes], { type: mime });
}

function BaixarPage() {
  const [status, setStatus] = useState<"idle" | "downloading" | "ready" | "error">("idle");

  const downloadZip = useCallback(async () => {
    try {
      setStatus("downloading");
      const blob = dataUrlToBlob(projetoZipDataUrl);
      const objectUrl = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = objectUrl;
      a.download = FILE_NAME;
      a.rel = "noopener";
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.setTimeout(() => URL.revokeObjectURL(objectUrl), 2000);
      setStatus("ready");
    } catch (error) {
      console.error("Falha ao baixar o ZIP", error);
      setStatus("error");
    }
  }, []);

  useEffect(() => {
    const timer = window.setTimeout(downloadZip, 300);
    return () => window.clearTimeout(timer);
  }, [downloadZip]);

  return (
    <main className="min-h-screen flex items-center justify-center p-6 bg-background text-foreground">
      <div className="max-w-md w-full text-center space-y-4 border border-border rounded-2xl p-8 shadow-sm">
        <h1 className="text-2xl font-semibold">Baixar projeto</h1>
        <p className="text-sm text-muted-foreground">
          O download deve iniciar automaticamente. Caso não inicie, clique no botão abaixo.
        </p>
        {status === "error" && (
          <p className="text-sm text-destructive">Não foi possível iniciar automaticamente. Clique novamente.</p>
        )}
        <button
          type="button"
          onClick={downloadZip}
          disabled={status === "downloading"}
          className="inline-flex min-h-11 items-center justify-center rounded-full bg-primary px-5 py-2.5 font-medium text-primary-foreground transition hover:opacity-90 disabled:cursor-wait disabled:opacity-70"
        >
          {status === "downloading" ? "Preparando ZIP..." : "Baixar projeto.zip"}
        </button>
      </div>
    </main>
  );
}
