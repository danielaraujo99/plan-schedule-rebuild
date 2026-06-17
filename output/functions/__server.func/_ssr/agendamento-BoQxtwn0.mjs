import { r as __toESM } from "../_runtime.mjs";
import { n as require_react, r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as GoldButton } from "./GoldButton-C9WoSJ5C.mjs";
import { d as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Check, i as ChevronLeft, n as Clock, o as ArrowLeft, r as ChevronRight, t as Search } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/agendamento-BoQxtwn0.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Logo({ className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `flex flex-col items-center text-foreground ${className}`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "font-display text-[13px] leading-none tracking-[0.4em] text-muted-foreground",
				children: "MAISON"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "font-display text-[22px] leading-tight tracking-[0.2em] italic text-gold",
				children: "ÉLAN"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "font-sans text-[9px] tracking-[0.5em] mt-1 text-muted-foreground",
				children: "BEAUTY"
			})
		]
	});
}
var heroNails = "/images/hero-nails.jpg";
function BookingShell({ children, onBack, showHeader = true }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-dvh w-full bg-background",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mx-auto flex min-h-dvh w-full max-w-[440px] flex-col px-5 pb-6 pt-5 md:hidden",
			children: [showHeader && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "relative mb-7 flex items-center justify-center",
				children: [onBack && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: onBack,
					"aria-label": "Voltar",
					className: "absolute left-0 top-1/2 -translate-y-1/2 rounded-full p-2 text-muted-foreground transition hover:text-foreground",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-5 w-5" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-1 flex-col",
				children
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "hidden md:flex min-h-dvh items-center justify-center px-10 py-10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid w-full max-w-[1080px] grid-cols-[1.05fr_1fr] items-stretch gap-10 lg:gap-14",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
					className: "relative overflow-hidden rounded-2xl border border-border bg-card",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: heroNails,
							alt: "Manicure delicada Maison Élan",
							width: 960,
							height: 1280,
							loading: "lazy",
							className: "absolute inset-0 h-full w-full object-cover opacity-70"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-b from-background/30 via-background/55 to-background/90" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative flex h-full min-h-[640px] flex-col justify-between p-10",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-sans text-[11px] uppercase tracking-[0.4em] text-muted-foreground",
									children: "Estúdio · Cachoeiro"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
									className: "mt-4 font-display text-[40px] leading-[1.05] text-foreground lg:text-[44px]",
									children: [
										"Reserve seu",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "italic text-gold",
											children: "horário"
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-4 max-w-[320px] text-[13.5px] leading-relaxed text-muted-foreground",
									children: "Atendimento atencioso, higiene rigorosa e acabamento delicado em cada detalhe."
								})
							] })]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "relative flex w-full flex-col rounded-2xl border border-border bg-card px-8 py-8 shadow-[var(--shadow-card)] lg:px-10",
					children: [showHeader && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
						className: "relative mb-6 flex items-center",
						children: onBack && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: onBack,
							"aria-label": "Voltar",
							className: "-ml-2 inline-flex items-center gap-2 rounded-full p-2 text-sm text-muted-foreground transition hover:text-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Voltar" })]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex min-h-[560px] flex-1 flex-col",
						children
					})]
				})]
			})
		})]
	});
}
function StepHeader({ title, subtitle }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mb-5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "font-display text-[24px] leading-tight text-foreground sm:text-[26px]",
			children: title
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-1 text-[13px] text-muted-foreground",
			children: subtitle
		})]
	});
}
var SERVICES = [
	{
		id: "alongamento",
		nome: "Alongamento em Gel",
		preco: 160,
		duracaoMin: 120,
		imagem: "/assets/svc-alongamento-BapVr8B1.jpg"
	},
	{
		id: "manicure",
		nome: "Manicure Completa",
		preco: 70,
		duracaoMin: 60,
		imagem: "/assets/svc-manicure-DlvYAUFW.jpg"
	},
	{
		id: "banho",
		nome: "Banho de Gel",
		preco: 90,
		duracaoMin: 90,
		imagem: "/assets/svc-banho-Bawy8M1w.jpg"
	},
	{
		id: "spa",
		nome: "Spa dos Pés",
		preco: 80,
		duracaoMin: 75,
		imagem: "/assets/svc-spa-DMSa16oA.jpg"
	}
];
var formatPreco = (v) => v.toLocaleString("pt-BR", {
	style: "currency",
	currency: "BRL"
});
var formatDuracao = (min) => {
	const h = Math.floor(min / 60);
	const m = min % 60;
	if (h && m) return `${h}h ${m}m`;
	if (h) return `${h}h`;
	return `${m}m`;
};
var WHATSAPP_NUMBER = "5527981359051";
function ServiceCard({ service, selected, onClick }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		onClick,
		className: `flex w-full items-center gap-4 rounded-xl border bg-card p-3 text-left transition ${selected ? "border-gold" : "border-border hover:border-gold/40"}`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: service.imagem,
				alt: service.nome,
				width: 52,
				height: 52,
				loading: "lazy",
				className: "h-13 w-13 shrink-0 rounded-lg object-cover",
				style: {
					height: 52,
					width: 52
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0 flex-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "truncate text-[14px] font-medium text-foreground",
					children: service.nome
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-1 flex items-center gap-3 text-[12px] text-muted-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-gold",
						children: formatPreco(service.preco)
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "flex items-center gap-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "h-3 w-3" }), formatDuracao(service.duracaoMin)]
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-4 w-4 shrink-0 text-muted-foreground" })
		]
	});
}
var MESES = [
	"Janeiro",
	"Fevereiro",
	"Março",
	"Abril",
	"Maio",
	"Junho",
	"Julho",
	"Agosto",
	"Setembro",
	"Outubro",
	"Novembro",
	"Dezembro"
];
var DIAS = [
	"D",
	"S",
	"T",
	"Q",
	"Q",
	"S",
	"S"
];
function MonthCalendar({ value, onChange }) {
	const [today, setToday] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		const d = /* @__PURE__ */ new Date();
		d.setHours(0, 0, 0, 0);
		setToday(d);
	}, []);
	const [cursor, setCursor] = (0, import_react.useState)((0, import_react.useMemo)(() => {
		const base = value ? /* @__PURE__ */ new Date(value + "T00:00:00") : /* @__PURE__ */ new Date();
		return new Date(base.getFullYear(), base.getMonth(), 1);
	}, [value]));
	const year = cursor.getFullYear();
	const month = cursor.getMonth();
	const firstWeekday = new Date(year, month, 1).getDay();
	const daysInMonth = new Date(year, month + 1, 0).getDate();
	const cells = [...Array(firstWeekday).fill(null), ...Array.from({ length: daysInMonth }, (_, i) => i + 1)];
	while (cells.length % 7 !== 0) cells.push(null);
	const toIso = (d) => `${year}-${String(month + 1).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
	const isPast = (d) => today ? new Date(year, month, d) < today : false;
	const canGoPrev = today ? new Date(year, month, 1) > new Date(today.getFullYear(), today.getMonth(), 1) : true;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-2xl border border-border bg-card p-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-3 flex items-center justify-between",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => canGoPrev && setCursor(new Date(year, month - 1, 1)),
						disabled: !canGoPrev,
						className: "rounded-full p-1.5 text-muted-foreground transition hover:text-foreground disabled:opacity-30",
						"aria-label": "Mês anterior",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "h-4 w-4" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "font-display text-base text-foreground",
						children: [
							MESES[month],
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-muted-foreground",
								children: year
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setCursor(new Date(year, month + 1, 1)),
						className: "rounded-full p-1.5 text-muted-foreground transition hover:text-foreground",
						"aria-label": "Próximo mês",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-4 w-4" })
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-7 gap-y-2 text-center text-[11px] uppercase tracking-wider text-muted-foreground",
				children: DIAS.map((d, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: d }, i))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-2 grid grid-cols-7 gap-y-1",
				children: cells.map((d, i) => {
					if (d === null) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {}, i);
					const iso = toIso(d);
					const past = isPast(d);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex items-center justify-center py-1",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							disabled: past,
							onClick: () => onChange(iso),
							className: `flex h-9 w-9 items-center justify-center rounded-full text-sm transition ${value === iso ? "bg-gold font-semibold" : past ? "cursor-not-allowed text-muted-foreground/30" : "text-foreground hover:bg-accent"}`,
							children: d
						})
					}, i);
				})
			})
		]
	});
}
var SLOTS = [
	"08:00",
	"09:00",
	"10:00",
	"11:00",
	"12:00",
	"13:00",
	"14:00",
	"15:00",
	"16:00",
	"17:00",
	"18:00",
	"19:00"
];
function TimeSlotGrid({ value, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid grid-cols-3 gap-2.5",
		children: SLOTS.map((s) => {
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: () => onChange(s),
				className: `flex h-12 items-center justify-center rounded-xl border text-[14px] font-medium transition ${value === s ? "border-gold bg-gold" : "border-border bg-card text-foreground hover:border-gold/60"}`,
				children: s
			}, s);
		})
	});
}
var formatData = (iso) => {
	const [y, m, d] = iso.split("-");
	return `${d}/${m}/${y}`;
};
function SummaryCard({ service, data, horario }) {
	const rows = [
		["Data", formatData(data)],
		["Horário", horario],
		["Duração", formatDuracao(service.duracaoMin)],
		["Valor", formatPreco(service.preco)]
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-2xl border border-border bg-card p-5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-4 border-b border-border pb-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: service.imagem,
				alt: service.nome,
				width: 56,
				height: 56,
				loading: "lazy",
				className: "h-14 w-14 rounded-full object-cover"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-xs text-muted-foreground",
					children: "Serviço"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "truncate text-[15px] font-semibold text-foreground",
					children: service.nome
				})]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
			className: "mt-4 space-y-3 text-sm",
			children: rows.map(([label, val]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-[80px_1fr] items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
					className: "text-muted-foreground",
					children: label
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
					className: "font-medium text-foreground",
					children: val
				})]
			}, label))
		})]
	});
}
function maskPhone(v) {
	const d = v.replace(/\D/g, "").slice(0, 11);
	if (d.length <= 2) return d;
	if (d.length <= 7) return `(${d.slice(0, 2)}) ${d.slice(2)}`;
	return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`;
}
function Agendamento() {
	const navigate = useNavigate();
	const [step, setStep] = (0, import_react.useState)(1);
	const [query, setQuery] = (0, import_react.useState)("");
	const [serviceId, setServiceId] = (0, import_react.useState)(null);
	const [data, setData] = (0, import_react.useState)(null);
	const [horario, setHorario] = (0, import_react.useState)(null);
	const [nome, setNome] = (0, import_react.useState)("");
	const [whats, setWhats] = (0, import_react.useState)("");
	const [insta, setInsta] = (0, import_react.useState)("");
	const [novidades, setNovidades] = (0, import_react.useState)(true);
	const service = (0, import_react.useMemo)(() => SERVICES.find((s) => s.id === serviceId) ?? null, [serviceId]);
	const filtered = (0, import_react.useMemo)(() => SERVICES.filter((s) => s.nome.toLowerCase().includes(query.toLowerCase())), [query]);
	const dataBR = data ? data.split("-").reverse().join("/") : "";
	const nomeValido = nome.trim().length >= 3;
	const whatsValido = whats.replace(/\D/g, "").length >= 10;
	const back = () => {
		if (step === 1) navigate({ to: "/" });
		else setStep((s) => s - 1);
	};
	const confirmar = () => {
		if (!service || !data || !horario) return;
		const horaFormatada = horario.replace(":", "h") + "0";
		const linhas = [
			"Olá! Acabei de fazer meu agendamento pelo site da Maison Élan.",
			"",
			"Segue o resumo:",
			"",
			`*Serviço:* ${service.nome}`,
			`*Data:* ${dataBR}`,
			`*Horário:* ${horaFormatada}`,
			`*Duração:* ${formatDuracao(service.duracaoMin)}`,
			`*Valor:* ${formatPreco(service.preco)}`,
			"",
			`*Nome:* ${nome}`,
			`*WhatsApp:* ${whats}`,
			insta ? `*Instagram:* ${insta}` : "",
			"",
			"Aguardo a confirmação, por favor.",
			"Obrigada!"
		].filter(Boolean).join("\n");
		const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(linhas)}`;
		window.open(url, "_blank");
		setStep(6);
	};
	if (step === 6) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookingShell, {
		showHeader: false,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-1 flex-col items-center justify-center text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-gold/60",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
						className: "h-7 w-7 text-gold",
						strokeWidth: 2
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-[28px] text-foreground",
					children: "Agendamento enviado"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 max-w-[300px] text-sm text-muted-foreground",
					children: "Você será redirecionada para o WhatsApp para concluir seu atendimento."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-10 w-full",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GoldButton, {
						onClick: confirmar,
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsIcon, {}),
						children: "Abrir WhatsApp"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => navigate({ to: "/" }),
						className: "mt-4 w-full text-xs text-muted-foreground hover:text-foreground",
						children: "Voltar ao início"
					})]
				})
			]
		})
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BookingShell, {
		onBack: back,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StepProgress, {
				current: step,
				total: 5
			}),
			step === 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StepHeader, {
					title: "Escolha o serviço",
					subtitle: "Selecione o que deseja agendar"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative mb-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "search",
						placeholder: "Buscar serviço",
						value: query,
						onChange: (e) => setQuery(e.target.value),
						className: "input-field pl-11 focus:[border-color:var(--gold)]"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-col gap-2.5",
					children: filtered.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ServiceCard, {
						service: s,
						selected: serviceId === s.id,
						onClick: () => setServiceId(s.id)
					}, s.id))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-auto pt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GoldButton, {
						disabled: !serviceId,
						onClick: () => setStep(2),
						children: "Continuar"
					})
				})
			] }),
			step === 2 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StepHeader, {
					title: "Escolha a data",
					subtitle: "Selecione o melhor dia"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MonthCalendar, {
					value: data,
					onChange: setData
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-auto pt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GoldButton, {
						disabled: !data,
						onClick: () => setStep(3),
						children: "Continuar"
					})
				})
			] }),
			step === 3 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StepHeader, {
					title: "Escolha o horário",
					subtitle: "Selecione o melhor horário"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TimeSlotGrid, {
					value: horario,
					onChange: setHorario
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-auto pt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GoldButton, {
						disabled: !horario,
						onClick: () => setStep(4),
						children: "Continuar"
					})
				})
			] }),
			step === 4 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StepHeader, {
					title: "Seus dados",
					subtitle: "Preencha para concluir"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Nome completo",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								value: nome,
								onChange: (e) => setNome(e.target.value),
								placeholder: "Como devemos te chamar",
								className: "input-field focus:[border-color:var(--gold)]"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "WhatsApp",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								value: whats,
								onChange: (e) => setWhats(maskPhone(e.target.value)),
								placeholder: "(28) 99999-0000",
								inputMode: "tel",
								className: "input-field focus:[border-color:var(--gold)]"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Instagram",
							optional: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								value: insta,
								onChange: (e) => setInsta(e.target.value),
								placeholder: "@seuinstagram",
								className: "input-field focus:[border-color:var(--gold)]"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "mt-2 flex cursor-pointer items-start gap-3 text-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "checkbox",
									checked: novidades,
									onChange: (e) => setNovidades(e.target.checked),
									className: "sr-only"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									"aria-hidden": true,
									className: `mt-0.5 flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded border transition ${novidades ? "border-gold bg-gold" : "border-border bg-input"}`,
									children: novidades && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
										className: "h-3 w-3 text-[color:var(--primary-foreground)]",
										strokeWidth: 3
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-muted-foreground",
									children: "Quero receber novidades e promoções da Maison Élan"
								})
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-auto pt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GoldButton, {
						disabled: !nomeValido || !whatsValido,
						onClick: () => setStep(5),
						children: "Continuar"
					})
				})
			] }),
			step === 5 && service && data && horario && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StepHeader, {
					title: "Confirme seu agendamento",
					subtitle: "Revise os detalhes antes de enviar"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SummaryCard, {
					service,
					data,
					horario
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-center text-xs leading-relaxed text-muted-foreground",
					children: "Ao confirmar, você será direcionada ao WhatsApp para finalizar."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-auto pt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GoldButton, {
						onClick: confirmar,
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsIcon, {}),
						children: "Confirmar no WhatsApp"
					})
				})
			] })
		]
	});
}
function StepProgress({ current, total }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mb-5 flex items-center gap-1.5",
		children: Array.from({ length: total }, (_, i) => i + 1).map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: `h-[2px] flex-1 rounded-full transition ${i <= current ? "bg-gold" : "bg-border"}` }, i))
	});
}
function Field({ label, optional, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "block",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "mb-1.5 block text-[11px] uppercase tracking-wider text-muted-foreground",
			children: [
				label,
				" ",
				optional && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "normal-case tracking-normal",
					children: "(opcional)"
				})
			]
		}), children]
	});
}
function WhatsIcon({ className = "h-4 w-4" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		viewBox: "0 0 24 24",
		className,
		fill: "currentColor",
		"aria-hidden": true,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M20.5 3.5A11 11 0 0 0 3.2 17l-1.2 4.4 4.5-1.2A11 11 0 1 0 20.5 3.5Zm-8.5 17a9 9 0 0 1-4.6-1.3l-.3-.2-2.7.7.7-2.6-.2-.3A9 9 0 1 1 12 20.5Zm5-6.7c-.3-.1-1.6-.8-1.9-.9-.3-.1-.4-.1-.6.1-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-1.6-.8-2.7-1.4-3.7-3.2-.3-.5.3-.5.8-1.5.1-.2 0-.4 0-.5 0-.1-.6-1.4-.8-1.9-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.3.3-1 1-1 2.3s1 2.7 1.1 2.9c.2.2 2 3.1 5 4.2 1.9.7 2.6.7 3.5.6.5-.1 1.6-.6 1.8-1.3.2-.6.2-1.2.2-1.3-.1-.1-.3-.2-.5-.3Z" })
	});
}
//#endregion
export { Agendamento as component };
