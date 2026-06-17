import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/GoldButton-C9WoSJ5C.js
var import_jsx_runtime = require_jsx_runtime();
function GoldButton({ children, icon, variant = "primary", className = "", ...rest }) {
	const base = "flex h-12 w-full items-center justify-center gap-2 rounded-xl text-[14px] font-medium tracking-wide transition active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-40";
	const styles = variant === "primary" ? "bg-gold hover:opacity-90" : "border border-border bg-transparent text-foreground hover:border-gold";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		...rest,
		className: `${base} ${styles} ${className}`,
		children: [icon, children]
	});
}
//#endregion
export { GoldButton as t };
