"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Search,
  ShieldCheck,
  Menu,
  X,
  ChevronRight,
  ChevronDown,
  BookOpen,
  Crosshair,
  Users,
  Scale,
  FileText,
  Clock3,
  AlertTriangle,
  CheckCircle2,
  Hash,
  ArrowUpRight,
  Sun,
  Moon,
} from "lucide-react";

import { ruleSections } from "@/data/rules";

const iconMap: Record<string, React.ElementType> = {
  shield: ShieldCheck,
  handcuffs: Clock3,
  crosshair: Crosshair,
  target: Crosshair,
  skull: AlertTriangle,
  "disc-3": Crosshair,
  medal: ShieldCheck,
  users: Users,
  car: ShieldCheck,
  helicopter: ShieldCheck,
  route: ArrowUpRight,
  "shield-check": ShieldCheck,
  handshake: Users,
  scale: Scale,
  "book-open": BookOpen,
};

type Theme = "dark" | "light";

export default function RulesApp() {
  const [active, setActive] = useState(ruleSections[0].id);
  const [query, setQuery] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expanded, setExpanded] = useState<string[]>([]);
  const [showAll, setShowAll] = useState(false);
  const [theme, setTheme] = useState<Theme>("dark");
  const [themeReady, setThemeReady] = useState(false);

  // Cargar tema guardado
  useEffect(() => {
    const savedTheme = localStorage.getItem("pzrp-theme");

    if (savedTheme === "light" || savedTheme === "dark") {
      setTheme(savedTheme);
    }

    setThemeReady(true);
  }, []);

  // Aplicar tema y guardar preferencia
  useEffect(() => {
    if (!themeReady) return;

    document.documentElement.dataset.theme = theme;
    localStorage.setItem("pzrp-theme", theme);
  }, [theme, themeReady]);

  const toggleTheme = () => {
    setTheme((current) => (current === "dark" ? "light" : "dark"));
  };

  const activeSection =
    ruleSections.find((section) => section.id === active) ?? ruleSections[0];

  const results = useMemo(() => {
    const normalized = query.trim().toLocaleLowerCase("es");

    if (!normalized) return [];

    return ruleSections.flatMap((section) =>
      section.rules
        .filter((rule) =>
          `${section.title} ${rule.title} ${rule.content}`
            .toLocaleLowerCase("es")
            .includes(normalized)
        )
        .map((rule) => ({
          ...rule,
          sectionId: section.id,
          sectionTitle: section.title,
        }))
    );
  }, [query]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (
        (event.ctrlKey || event.metaKey) &&
        event.key.toLowerCase() === "k"
      ) {
        event.preventDefault();
        document.getElementById("rule-search")?.focus();
      }

      if (event.key === "Escape") {
        setQuery("");
        setMobileOpen(false);
      }
    };

    window.addEventListener("keydown", onKey);

    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const selectSection = (id: string) => {
    setActive(id);
    setQuery("");
    setMobileOpen(false);
    setExpanded([]);
    setShowAll(false);
  };

  const toggleRule = (title: string) => {
    setExpanded((current) =>
      current.includes(title)
        ? current.filter((item) => item !== title)
        : [...current, title]
    );
  };

  const sidebar = (
    <div className="flex h-full flex-col">
      {/* LOGO */}
      <div className="border-b border-white/[0.07] p-5">
        <div className="flex items-center gap-3">
          <div className="grid h-11 w-11 shrink-0 place-items-center overflow-hidden rounded-xl bg-transparent shadow-[0_0_20px_rgba(255,213,0,0.10)]">
            <img
              src="/la_plaza_247.png"
              alt="La Plaza 247"
              className="h-full w-full object-contain"
            />
          </div>

          <div>
            <div className="font-gaming text-sm font-black tracking-[0.22em] text-white">
              LA PLAZA 24/7
            </div>

            <div className="mt-0.5 text-[9px] font-semibold tracking-[0.2em] text-slate-500">
              REGLAS OFICIALES
            </div>
          </div>
        </div>
      </div>

      {/* NAVIGATION */}
      <div className="px-4 pb-2 pt-5 text-[10px] font-bold uppercase tracking-[0.2em] text-yellow-500/70">
        Navegación
      </div>

      <nav className="flex-1 space-y-1 overflow-y-auto px-3 pb-5">
        {ruleSections.map((section, index) => {
          const Icon = iconMap[section.icon] ?? FileText;
          const selected = active === section.id && !query;

          return (
            <button
              key={section.id}
              onClick={() => selectSection(section.id)}
              className={`group flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left transition-all duration-200 ${
                selected
                  ? "border border-yellow-400/20 bg-yellow-400/[0.09] text-yellow-200 shadow-[inset_3px_0_0_#FFD500]"
                  : "border border-transparent text-slate-400 hover:border-white/[0.06] hover:bg-white/[0.04] hover:text-white"
              }`}
            >
              <Icon
                size={16}
                className={
                  selected
                    ? "text-yellow-400"
                    : "text-slate-500 group-hover:text-yellow-300"
                }
              />

              <span className="min-w-0 flex-1 text-xs font-medium">
                {section.title}
              </span>

              <span
                className={`text-[10px] ${
                  selected ? "text-yellow-400" : "text-slate-600"
                }`}
              >
                {String(index + 1).padStart(2, "0")}
              </span>
            </button>
          );
        })}
      </nav>

      {/* SIDEBAR FOOTER */}
      <div className="border-t border-white/[0.07] p-4">
        <div className="rounded-xl border border-yellow-400/10 bg-yellow-400/[0.025] p-3">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-300">
            <CheckCircle2 size={14} className="text-yellow-400" />
            Reglamento oficial
          </div>

          <p className="mt-1.5 text-[10px] leading-relaxed text-slate-500">
            Consulta las normas vigentes del servidor.
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <main className="theme-root min-h-screen overflow-hidden bg-[#080808] text-slate-100">
      {/* BACKGROUND EFFECTS */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-yellow-400/[0.045] blur-[120px]" />

        <div className="absolute right-[-180px] top-[30%] h-[420px] w-[420px] rounded-full bg-yellow-500/[0.025] blur-[120px]" />

        <div className="absolute inset-0 opacity-[0.035] [background-image:linear-gradient(rgba(255,255,255,.2)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.2)_1px,transparent_1px)] [background-size:42px_42px]" />
      </div>

      <div className="relative mx-auto min-h-screen max-w-[1600px]">
        {/* DESKTOP SIDEBAR */}
        <aside className="fixed inset-y-0 left-0 z-40 hidden h-screen w-[290px] border-r border-white/[0.07] bg-[#101010]/95 backdrop-blur-xl lg:block">
          {sidebar}
        </aside>

        {/* MOBILE SIDEBAR */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              className="fixed inset-0 z-50 flex lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <button
                className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                onClick={() => setMobileOpen(false)}
                aria-label="Cerrar menú"
              />

              <motion.aside
                className="relative h-full w-[min(86vw,320px)] border-r border-yellow-400/10 bg-[#101010]"
                initial={{ x: -320 }}
                animate={{ x: 0 }}
                exit={{ x: -320 }}
              >
                <button
                  onClick={() => setMobileOpen(false)}
                  className="absolute right-4 top-4 z-10 rounded-lg p-2 text-slate-400 transition hover:bg-white/5 hover:text-yellow-400"
                >
                  <X size={18} />
                </button>

                {sidebar}
              </motion.aside>
            </motion.div>
          )}
        </AnimatePresence>

        {/* MAIN CONTENT */}
        <section className="min-w-0 lg:ml-[290px]">
          {/* HEADER */}
          <header className="sticky top-0 z-30 border-b border-white/[0.07] bg-[#080808]/90 backdrop-blur-xl">
            <div className="flex h-[72px] items-center gap-3 px-4 sm:px-7 lg:px-10">
              <button
                onClick={() => setMobileOpen(true)}
                className="rounded-lg border border-white/10 p-2 text-slate-300 transition hover:border-yellow-400/30 hover:text-yellow-400 lg:hidden"
                aria-label="Abrir menú"
              >
                <Menu size={18} />
              </button>

              <div className="hidden items-center gap-2 text-xs text-slate-500 sm:flex">
                <span>Centro de información</span>
                <ChevronRight size={13} />
                <span className="text-yellow-400">Reglamento</span>
              </div>

              <div className="flex-1" />

              {/* THEME TOGGLE */}
              <button
                onClick={toggleTheme}
                aria-label={
                  theme === "dark"
                    ? "Activar modo claro"
                    : "Activar modo oscuro"
                }
                title={
                  theme === "dark"
                    ? "Activar modo claro"
                    : "Activar modo oscuro"
                }
                className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-white/10 bg-white/[0.035] text-yellow-400 transition-all duration-200 hover:border-yellow-400/40 hover:bg-yellow-400/10 hover:shadow-[0_0_18px_rgba(255,213,0,0.08)]"
              >
                {theme === "dark" ? <Sun size={17} /> : <Moon size={17} />}
              </button>

              {/* SEARCH */}
              <div className="relative w-full max-w-[420px]">
                <Search
                  size={16}
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500"
                />

                <input
                  id="rule-search"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Buscar reglas, armas, permisos..."
                  className="h-10 w-full rounded-xl border border-white/[0.09] bg-white/[0.035] pl-10 pr-16 text-xs text-white outline-none transition placeholder:text-slate-600 focus:border-yellow-400/40 focus:bg-white/[0.055] focus:shadow-[0_0_20px_rgba(255,213,0,0.06)]"
                />

                <kbd className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md border border-white/10 px-1.5 py-1 text-[9px] text-slate-500">
                  ⌘ K
                </kbd>
              </div>
            </div>
          </header>

          <div className="mx-auto max-w-[1100px] px-4 pb-16 pt-8 sm:px-7 lg:px-10 lg:pt-12">
            {/* HERO */}
            <div className="group relative mb-8 overflow-hidden rounded-2xl border border-yellow-400/15 bg-gradient-to-br from-[#24200c] via-[#141414] to-[#0b0b0b] p-6 shadow-glow sm:p-9">
              <div className="pointer-events-none absolute -right-20 -top-28 h-72 w-72 rounded-full border border-yellow-400/[0.06] transition-transform duration-700 group-hover:scale-110" />

              <div className="pointer-events-none absolute -right-10 -top-16 h-52 w-52 rounded-full border border-yellow-400/[0.06]" />

              <div className="pointer-events-none absolute inset-0 opacity-[0.035] [background-image:linear-gradient(135deg,rgba(255,213,0,.8)_1px,transparent_1px)] [background-size:22px_22px]" />

              <div className="relative flex flex-col justify-between gap-7 sm:flex-row sm:items-end">
                <div className="max-w-2xl">
                  <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-yellow-400/20 bg-yellow-400/[0.08] px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.2em] text-yellow-200">
                    <span className="h-1.5 w-1.5 rounded-full bg-yellow-400 shadow-[0_0_10px_#FFD500]" />
                    Centro de información oficial
                  </div>

                  <h1 className="font-gaming text-3xl font-black tracking-tight text-white sm:text-5xl">
                    REGLAMENTO
                  </h1>

                  <p className="mt-3 max-w-xl text-sm leading-6 text-slate-400">
                    Todas las normas del servidor organizadas en un solo
                    lugar. Consulta permisos, restricciones y excepciones de
                    cada facción.
                  </p>
                </div>

                {/* STATISTICS */}
                <div className="grid grid-cols-2 gap-2 sm:min-w-[230px]">
                  <div className="rounded-xl border border-white/[0.07] bg-black/40 p-3">
                    <div className="font-gaming text-2xl font-bold text-yellow-400">
                      {ruleSections.length}
                    </div>

                    <div className="mt-1 text-[9px] uppercase tracking-wider text-slate-500">
                      Secciones
                    </div>
                  </div>

                  <div className="rounded-xl border border-white/[0.07] bg-black/40 p-3">
                    <div className="font-gaming text-2xl font-bold text-yellow-400">
                      {ruleSections.reduce(
                        (sum, section) => sum + section.rules.length,
                        0
                      )}
                    </div>

                    <div className="mt-1 text-[9px] uppercase tracking-wider text-slate-500">
                      Reglas
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* SEARCH RESULTS */}
            {query.trim() ? (
              <div>
                <div className="mb-5 flex items-end justify-between gap-3">
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-yellow-400">
                      Resultados de búsqueda
                    </div>

                    <h2 className="mt-2 text-2xl font-bold text-white">
                      Coincidencias
                    </h2>

                    <p className="mt-1 text-xs text-slate-500">
                      {results.length} resultado(s) para “{query}”
                    </p>
                  </div>

                  <button
                    onClick={() => setQuery("")}
                    className="text-xs text-slate-400 transition hover:text-yellow-400"
                  >
                    Limpiar búsqueda
                  </button>
                </div>

                {results.length ? (
                  <div className="space-y-3">
                    {results.map((result, index) => (
                      <motion.article
                        key={`${result.sectionId}-${result.title}`}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          delay: Math.min(index * 0.025, 0.2),
                        }}
                        className="rounded-xl border border-white/[0.08] bg-[#141414]/90 p-5 transition hover:border-yellow-400/20"
                      >
                        <div className="mb-2 text-[10px] font-bold uppercase tracking-wider text-yellow-400">
                          {result.sectionTitle}
                        </div>

                        <h3 className="text-sm font-bold text-white">
                          {result.title}
                        </h3>

                        <p className="mt-2 text-sm leading-6 text-slate-400">
                          {result.content}
                        </p>

                        <button
                          onClick={() => selectSection(result.sectionId)}
                          className="mt-3 inline-flex items-center gap-1 text-[11px] font-semibold text-yellow-400 transition hover:text-yellow-200"
                        >
                          Ver sección
                          <ArrowUpRight size={13} />
                        </button>
                      </motion.article>
                    ))}
                  </div>
                ) : (
                  <div className="rounded-2xl border border-dashed border-white/10 py-16 text-center">
                    <Search
                      className="mx-auto text-slate-600"
                      size={28}
                    />

                    <p className="mt-3 text-sm font-semibold text-slate-300">
                      No encontramos esa regla
                    </p>

                    <p className="mt-1 text-xs text-slate-500">
                      Prueba con otra palabra o nombre de equipamiento.
                    </p>
                  </div>
                )}
              </div>
            ) : (
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSection.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                >
                  {/* SECTION HEADER */}
                  <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
                    <div>
                      <div className="mb-2 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-yellow-400">
                        <Hash size={13} />

                        {String(
                          ruleSections.findIndex(
                            (s) => s.id === activeSection.id
                          ) + 1
                        ).padStart(2, "0")}{" "}
                        / {String(ruleSections.length).padStart(2, "0")}
                      </div>

                      <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                        {activeSection.title}
                      </h2>

                      <p className="mt-2 text-xs text-slate-500">
                        {activeSection.rules.length} disposiciones en esta
                        sección
                      </p>
                    </div>

                    {/* EXPAND ALL */}
                    <button
                      onClick={() => {
                        setShowAll((value) => !value);
                        setExpanded(
                          showAll
                            ? []
                            : activeSection.rules.map((rule) => rule.title)
                        );
                      }}
                      className="rounded-lg border border-white/10 px-3 py-2 text-[11px] font-semibold text-slate-300 transition hover:border-yellow-400/30 hover:bg-yellow-400/[0.05] hover:text-yellow-200"
                    >
                      {showAll ? "Contraer todo" : "Expandir todo"}
                    </button>
                  </div>

                  {/* RULE ACCORDIONS */}
                  <div className="space-y-3">
                    {activeSection.rules.map((rule, index) => {
                      const isOpen = expanded.includes(rule.title);

                      return (
                        <motion.article
                          key={rule.title}
                          layout
                          className={`overflow-hidden rounded-xl border transition-all duration-200 ${
                            isOpen
                              ? "border-yellow-400/25 bg-[#1c1c1c] shadow-[0_0_25px_rgba(255,213,0,0.035)]"
                              : "border-white/[0.08] bg-[#141414]/90 hover:border-yellow-400/20"
                          }`}
                        >
                          <button
                            onClick={() => toggleRule(rule.title)}
                            className="flex w-full items-center gap-4 px-4 py-4 text-left sm:px-5"
                          >
                            <span
                              className={`grid h-9 w-9 shrink-0 place-items-center rounded-lg text-xs font-bold transition ${
                                isOpen
                                  ? "bg-yellow-400/10 text-yellow-400"
                                  : "bg-white/[0.04] text-slate-500"
                              }`}
                            >
                              {String(index + 1).padStart(2, "0")}
                            </span>

                            <span className="flex-1 text-sm font-semibold text-slate-100">
                              {rule.title}
                            </span>

                            <ChevronDown
                              size={17}
                              className={`shrink-0 text-slate-500 transition-transform ${
                                isOpen
                                  ? "rotate-180 text-yellow-400"
                                  : ""
                              }`}
                            />
                          </button>

                          <AnimatePresence initial={false}>
                            {isOpen && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.22 }}
                                className="overflow-hidden"
                              >
                                <div className="border-t border-white/[0.06] px-5 pb-5 pt-4 pl-[68px]">
                                  <p className="whitespace-pre-line text-sm leading-7 text-slate-400">
                                    {rule.content}
                                  </p>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </motion.article>
                      );
                    })}
                  </div>

                  {/* SECTION NAVIGATION */}
                  <div className="mt-8 flex flex-col justify-between gap-3 rounded-xl border border-white/[0.07] bg-white/[0.025] p-4 sm:flex-row sm:items-center">
                    <div className="flex items-center gap-2 text-xs text-slate-400">
                      <BookOpen size={15} className="text-yellow-400" />
                      Consulta las demás secciones del reglamento.
                    </div>

                    <div className="flex gap-2">
                      <button
                        disabled={
                          ruleSections.findIndex((s) => s.id === active) === 0
                        }
                        onClick={() =>
                          selectSection(
                            ruleSections[
                              ruleSections.findIndex((s) => s.id === active) -
                                1
                            ].id
                          )
                        }
                        className="rounded-lg border border-white/10 px-3 py-2 text-xs text-slate-300 transition hover:border-yellow-400/30 hover:bg-white/5 disabled:opacity-30"
                      >
                        Anterior
                      </button>

                      <button
                        disabled={
                          ruleSections.findIndex((s) => s.id === active) ===
                          ruleSections.length - 1
                        }
                        onClick={() =>
                          selectSection(
                            ruleSections[
                              ruleSections.findIndex((s) => s.id === active) +
                                1
                            ].id
                          )
                        }
                        className="rounded-lg border border-yellow-400/30 bg-yellow-400 px-3 py-2 text-xs font-bold text-black transition hover:bg-yellow-300 disabled:opacity-30"
                      >
                        Siguiente
                      </button>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            )}

            {/* FOOTER */}
            <footer className="mt-14 border-t border-white/[0.07] pt-6">
              <div className="flex flex-col justify-between gap-2 text-[10px] text-slate-600 sm:flex-row">
                <span>
                  © {new Date().getFullYear()} PZRP · Reglamento oficial del
                  servidor
                </span>

                <span>
                  Las disposiciones oficiales son responsabilidad de la
                  administración.
                </span>
              </div>
            </footer>
          </div>
        </section>
      </div>
    </main>
  );
}
