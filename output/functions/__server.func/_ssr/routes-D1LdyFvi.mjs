import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { n as hero_nails_default, t as GoldButton } from "./GoldButton-CIj4nNzI.mjs";
import { d as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-D1LdyFvi.js
var import_jsx_runtime = require_jsx_runtime();
function Wordmark({ size = "sm" }) {
	const isLg = size === "lg";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col items-center text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "font-display leading-none text-muted-foreground",
				style: {
					fontSize: isLg ? 16 : 14,
					letterSpacing: "0.42em"
				},
				children: "MAISON"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "font-display italic text-gold leading-tight",
				style: {
					fontSize: isLg ? 56 : 40,
					letterSpacing: "0.18em"
				},
				children: "ÉLAN"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "font-sans mt-1 text-muted-foreground",
				style: {
					fontSize: isLg ? 11 : 10,
					letterSpacing: "0.55em"
				},
				children: "BEAUTY"
			})
		]
	});
}
function Index() {
	const navigate = useNavigate();
	const go = () => navigate({ to: "/agendamento" });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-dvh w-full bg-background",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex min-h-dvh w-full max-w-[440px] flex-col px-5 pb-6 pt-8 md:hidden",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-col items-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wordmark, {})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 overflow-hidden rounded-2xl border border-border",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: hero_nails_default,
						alt: "Manicure delicada feita no Maison Élan Beauty",
						width: 900,
						height: 1200,
						fetchPriority: "high",
						className: "aspect-[3/4] w-full object-cover"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "font-display text-[30px] leading-[1.1] text-foreground",
						children: ["Agende sua ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "italic text-gold",
							children: "experiência"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 max-w-[320px] text-sm leading-relaxed text-muted-foreground",
						children: "Manicure, alongamento em gel e spa dos pés com acabamento delicado e atendimento atencioso."
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-auto pt-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GoldButton, {
						onClick: go,
						children: "Começar agendamento"
					})
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "hidden md:flex min-h-dvh items-center justify-center px-10 py-12",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid w-full max-w-[1180px] grid-cols-2 items-stretch gap-10 lg:gap-16",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col justify-between py-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex justify-start",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wordmark, { size: "lg" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-12",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-sans text-[11px] uppercase tracking-[0.4em] text-muted-foreground",
									children: "Estúdio de Beleza · Cachoeiro"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
									className: "mt-5 font-display text-[58px] leading-[1.02] text-foreground lg:text-[68px]",
									children: [
										"Agende sua",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "italic text-gold",
											children: "experiência"
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-6 max-w-[440px] text-[15px] leading-relaxed text-muted-foreground",
									children: "Estúdio dedicado ao cuidado das suas unhas. Manicure detalhada, alongamento em gel e spa dos pés feitos com calma, higiene rigorosa e acabamento delicado."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-9 flex items-center gap-5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "w-[220px]",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GoldButton, {
											onClick: go,
											children: "Começar agendamento"
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "hidden lg:block text-xs leading-relaxed text-muted-foreground",
										children: [
											"Confirmação rápida",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-foreground",
												children: "via WhatsApp"
											})
										]
									})]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-12 flex items-center border-t border-border pt-6 text-[11px] uppercase tracking-[0.3em] text-muted-foreground",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Nails, sobrancelhas e cuidados faciais" })
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "overflow-hidden rounded-2xl border border-border shadow-[var(--shadow-card)]",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: hero_nails_default,
								alt: "Manicure delicada feita no Maison Élan Beauty",
								width: 960,
								height: 1280,
								fetchPriority: "high",
								className: "h-full max-h-[640px] w-full object-cover"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -bottom-3 -right-3 h-24 w-24 rounded-tl-2xl border-b border-r border-gold/40" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -top-3 -left-3 h-24 w-24 rounded-br-2xl border-t border-l border-gold/40" })
					]
				})]
			})
		})]
	});
}
//#endregion
export { Index as component };
