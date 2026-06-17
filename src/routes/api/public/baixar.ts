import { createFileRoute } from "@tanstack/react-router";
import zipUrl from "@/assets/projeto.zip?url";

export const Route = createFileRoute("/api/public/baixar")({
  server: {
    handlers: {
      GET: async ({ request }) => {
        const origin = new URL(request.url).origin;
        const res = await fetch(new URL(zipUrl, origin).toString());
        if (!res.ok) return new Response("Arquivo não encontrado", { status: 404 });
        const buf = await res.arrayBuffer();
        return new Response(buf, {
          status: 200,
          headers: {
            "Content-Type": "application/zip",
            "Content-Disposition": 'attachment; filename="projeto.zip"',
            "Content-Length": String(buf.byteLength),
            "Cache-Control": "public, max-age=300",
          },
        });
      },
    },
  },
});
