import React, { useEffect, useRef, useState } from "react";

/**
 * The hero demo: a prompt goes into a CLI on the left, and what it produces
 * shows up on the right. Each step gets its own view on the right, so the
 * canvas, the grant, the trace and the instance list all look like themselves.
 *
 * It plays through on load and loops. Clicking a step stops the playback and
 * freezes on that step's finished state.
 */

const PROMPT =
  "Every weekday at 9am, summarize new GitHub issues and post a draft to Discord.";

type Card = {
  kind: string;
  name: string;
  k: string;
  body: string;
  live: string;
  wide?: boolean;
};

/** the toplevels the agent writes, in the order it writes them */
const CARDS: Card[] = [
  {
    kind: "DB",
    name: "CustomerDigestState",
    k: "#a8a8b0",
    body:
      '<span class="d">all entries are keyed by `key`</span>\n' +
      'lastRun   <span class="t">DateTime</span>\n' +
      'lastId    <span class="t">Int</span>',
    live: "2 rows · last write 09:00",
  },
  {
    kind: "REPL",
    name: "Digest.summarize",
    k: "#d5839d",
    body:
      '<span class="k">let</span> themes = issues\n' +
      '  <span class="d">|&gt;</span> <span class="f">AI.cluster</span> <span class="s">"customer problems"</span>\n' +
      '  <span class="d">|&gt;</span> <span class="f">List.take</span> 7',
    live: "Digest(7 themes) · 2.1s",
  },
  {
    kind: "HTTP",
    name: "GET /digest",
    k: "#e6bd81",
    body: '<span class="f">CustomerDigest.preview</span> ()',
    live: "200 · Digest(7 themes) · 41ms",
  },
  {
    kind: "CRON",
    name: "weekdays 09:00",
    k: "#86c1b9",
    body:
      '<span class="f">GitHub.fetchIssues</span> repo\n' +
      '  <span class="d">|&gt;</span> <span class="f">Digest.summarize</span>\n' +
      '  <span class="d">|&gt;</span> <span class="f">emit</span> <span class="s">"postDraft"</span>',
    live: "last run ok · 2.4s · next 09:00",
  },
  {
    kind: "WORKER",
    name: "Discord.postDraft",
    k: "#8ac6d4",
    body:
      '<span class="k">let</span> d = <span class="f">Digest.render</span> event\n' +
      '<span class="f">Discord.post</span> webhook d',
    live: "draft posted · 88ms",
    wide: true,
  },
];

const ALLOW = [
  {
    s: "GET https://api.github.com/repos/acme/*",
    f: "for CRON weekdays 09:00",
    t: "READ",
    c: "#86c1b9",
  },
  {
    s: "POST https://discord.com/api/webhooks/*",
    f: "for WORKER Discord.postDraft",
    t: "WRITE",
    c: "#e6bd81",
  },
  {
    s: "db.write CustomerDigestState",
    f: "for DB CustomerDigestState",
    t: "WRITE",
    c: "#e6bd81",
  },
  {
    s: "ai.complete · summarize the issues",
    f: "for REPL Digest.summarize",
    t: "MODEL",
    c: "#d5839d",
  },
];

const DENY = [
  "local files",
  "subprocesses",
  "any other host",
  "any other repo",
];

const TRACE = [
  {
    n: "GitHub.fetchIssues",
    off: 0,
    w: 6,
    ms: "142ms",
    v: "41 issues",
    c: "#86c1b9",
  },
  {
    n: "Digest.summarize",
    off: 6,
    w: 87,
    ms: "2.1s",
    v: "Digest(7 themes)",
    c: "#d5839d",
  },
  {
    n: "AI.cluster",
    off: 9,
    w: 79,
    ms: "1.9s",
    v: "7 themes",
    c: "#b78ac9",
    nest: true,
  },
  {
    n: "Discord.postDraft",
    off: 93,
    w: 4,
    ms: "88ms",
    v: "draft posted",
    c: "#8ac6d4",
  },
];

const PEERS = [
  { n: "laptop", s: "already there", isNew: false },
  { n: "home-server", s: "sent 6 ops", isNew: true },
  { n: "vps-1", s: "sent 6 ops", isNew: true },
  { n: "agent-box", s: "sent 6 ops", isNew: true },
];

const SCENES = [
  { label: "prompt", title: "dark agent · ask" },
  { label: "build", title: "dark agent · agent/digest" },
  { label: "access", title: "dark grant · CustomerDigest" },
  { label: "run", title: "dark run · trace #8812" },
  { label: "sync", title: "dark sync · 4 instances" },
  { label: "app", title: "dark canvas · vps-1" },
];

const BANNER =
  '<div class="hs-sub" style="padding-left:0">✻ darklang agent · instance <b>laptop</b> · branch <b>main</b></div>';
const WORKING =
  '<div class="hs-work"><span class="star">✻</span> Working<span class="hs-el"><i>.</i><i>.</i><i>.</i></span></div>';

const bullet = (html: string) =>
  `<div class="hs-line"><span class="b">●</span><span>${html}</span></div>`;
const sub = (html: string) => `<div class="hs-sub">${html}</div>`;
const echo = (text: string) =>
  `<div class="hs-user"><span class="p">&gt;</span><span>${text}</span></div>`;

/** each line the agent prints while writing, and how many toplevels exist by then */
const WRITE: { h: string; card: number }[] = [
  { h: bullet("Reading this instance"), card: 0 },
  { h: sub("1 285 packages · branch <b>main</b>"), card: 0 },
  { h: bullet("Writing on branch <b>agent/digest</b>"), card: 0 },
  { h: sub("2 types · Issue, Digest"), card: 0 },
  { h: sub("db CustomerDigestState"), card: 1 },
  { h: sub("fn Digest.summarize"), card: 2 },
  { h: sub("http GET /digest"), card: 3 },
  { h: sub("cron weekdays 09:00"), card: 4 },
  { h: sub("worker Discord.postDraft"), card: 5 },
  { h: bullet("Done. Nothing has run yet."), card: 5 },
];

const ACCESS = [
  bullet("It needs access to"),
  sub("GET https://api.github.com/repos/acme/*"),
  sub("POST https://discord.com/api/webhooks/*"),
  sub("DB write CustomerDigestState"),
  sub("AI summarize the issues"),
  bullet("It cannot read files, run programs, or reach any other host"),
  sub("approve · edit scopes · run once first"),
];

const RUN = [
  bullet("Running once, on this machine"),
  sub("GitHub.fetchIssues&nbsp;&nbsp;142ms&nbsp;&nbsp;41 issues"),
  sub(
    "Digest.summarize&nbsp;&nbsp;&nbsp;&nbsp;2.1s&nbsp;&nbsp;&nbsp;Digest(7 themes)",
  ),
  sub("Discord.postDraft&nbsp;&nbsp;&nbsp;88ms&nbsp;&nbsp;&nbsp;draft posted"),
  bullet("trace #8812 saved · used 2 of 4 permissions"),
];

const SYNC = [
  bullet("Merged agent/digest into main, clean"),
  sub("different definitions, nothing to resolve"),
  bullet("Synced ops #1839..#1844 over plain HTTP"),
  sub("home-server, vps-1, agent-box now at #1844"),
  sub("grants and secrets stay on each machine"),
  bullet("Installed on vps-1"),
];

const APP = [
  bullet("Live on vps-1"),
  sub("http, cron, worker and db are up"),
  sub("every run records hashes, values and permissions used"),
  bullet("Ask me to change it, or roll back to any earlier version"),
];

const cardHtml = (c: Card, withLive: boolean, synced: boolean, i: number) =>
  `<div class="hs-tl${c.wide ? " wide" : ""}" style="--k: ${c.k}; animation-delay: ${i * 0.06}s">` +
  `<div class="hs-tl-head"><span class="hs-tl-kind">${c.kind}</span>` +
  `<span class="hs-tl-name">${c.name}</span><span class="hs-tl-icons">⟳ ☰</span></div>` +
  `<div class="hs-tl-body">${c.body}</div>` +
  (withLive
    ? `<div class="hs-tl-live">${c.live}${synced ? '<span class="sync">synced</span>' : ""}</div>`
    : "") +
  `</div>`;

const sleep = (ms: number) => new Promise(r => setTimeout(r, ms));

const HeroStage: React.FC = () => {
  const [scene, setScene] = useState(0);
  const outRef = useRef<HTMLDivElement>(null);
  const boxRef = useRef<HTMLDivElement>(null);
  const txtRef = useRef<HTMLSpanElement>(null);
  const hintRef = useRef<HTMLDivElement>(null);
  const viewRef = useRef<HTMLDivElement>(null);
  const token = useRef(0);

  useEffect(() => {
    const alive = (my: number) => my === token.current;

    const paintCli = (items: string[]) => {
      const el = outRef.current;
      if (!el) return;
      el.innerHTML = items.join("");
      el.scrollTop = el.scrollHeight;
    };
    const typed = (text: string, caret: boolean) => {
      boxRef.current?.classList.remove("idle");
      if (txtRef.current)
        txtRef.current.innerHTML =
          text + (caret ? '<span class="hs-caret"></span>' : "");
    };
    const idle = () => {
      boxRef.current?.classList.add("idle");
      if (txtRef.current) txtRef.current.textContent = "ask for anything";
    };
    const hint = (text: string) => {
      if (hintRef.current) hintRef.current.textContent = text;
    };
    const setView = (cls: string, html: string) => {
      const el = viewRef.current;
      if (!el) return;
      el.className = `hs-view ${cls}`;
      el.innerHTML = html;
      el.scrollTop = 0;
    };

    const viewCanvas = (n: number, live = false, synced = false) => {
      if (!n) {
        setView(
          "hs-canvas empty",
          '<div class="hs-empty">your toplevels appear here</div>',
        );
        return;
      }
      setView(
        "hs-canvas",
        CARDS.slice(0, n)
          .map((c, i) => cardHtml(c, live, synced, i))
          .join(""),
      );
    };

    const viewGrant = () => {
      const allow = ALLOW.map(
        (a, i) =>
          `<div class="hs-gr allow" style="animation-delay:${i * 0.07}s">` +
          `<span class="mk">✓</span><span class="hs-gr-scope">${a.s}` +
          `<span class="hs-gr-for">${a.f}</span></span>` +
          `<span class="hs-gr-tag" style="--tc:${a.c}">${a.t}</span></div>`,
      ).join("");
      const deny = DENY.map(
        (d, i) =>
          `<div class="hs-gr deny" style="animation-delay:${0.28 + i * 0.05}s">` +
          `<span class="mk">✕</span><span class="hs-gr-scope">${d}</span>` +
          `<span class="hs-gr-tag" style="--tc:#6f6f78">NONE</span></div>`,
      ).join("");
      setView(
        "hs-grant",
        '<div class="hs-view-title">GRANT <b>CustomerDigest</b>' +
          '<span class="right">default: nothing</span></div>' +
          allow +
          '<div class="hs-gr-split">CANNOT</div>' +
          deny +
          '<div class="hs-keys"><span class="hs-key go">[a] approve</span>' +
          '<span class="hs-key">[e] edit scopes</span>' +
          '<span class="hs-key">[r] run once first</span></div>',
      );
    };

    const viewTrace = () => {
      const rows = TRACE.map(
        (t, i) =>
          `<div class="hs-tr${t.nest ? " nest" : ""}"><span class="nm">${t.n}</span>` +
          `<span class="hs-track"><span class="hs-bar" style="left:${t.off}%; width:${t.w}%; --bc:${t.c}; animation-delay:${i * 0.12}s"></span></span>` +
          `<span class="ms">${t.ms}</span></div>` +
          `<div class="hs-tr-val">→ ${t.v}</div>`,
      ).join("");
      setView(
        "hs-trace",
        '<div class="hs-view-title">TRACE <b>#8812</b><span class="right">2.4s total</span></div>' +
          '<div class="hs-foot" style="margin:0 0 0.6rem; padding:0 0 0.55rem; border-top:0; border-bottom:1px solid #2c2c31">' +
          'in repo = "acme/project"</div>' +
          rows +
          '<div class="hs-foot"><span>permissions used <span class="on">2 of 4</span></span>' +
          "<span>saved for replay</span><span>0 errors</span></div>",
      );
    };

    const viewPeers = () => {
      const branches = [12, 37, 62]
        .map(
          (y, i) =>
            `<path d="M34 37 C 90 37, 120 ${y}, 176 ${y}" stroke="#3a3a42" stroke-width="1"/>` +
            `<circle r="3" fill="#62c2b8"><animateMotion dur="1.9s" repeatCount="indefinite" begin="${i * 0.45}s" path="M34 37 C 90 37, 120 ${y}, 176 ${y}"/></circle>` +
            `<circle cx="182" cy="${y}" r="4.5" fill="#2b2b2e" stroke="#62c2b8" stroke-width="1.5"/>`,
        )
        .join("");
      const map =
        '<svg viewBox="0 0 300 74" width="100%" height="84" preserveAspectRatio="xMinYMid meet" fill="none" aria-hidden="true">' +
        '<circle cx="26" cy="37" r="5" fill="#c9a2d6"/>' +
        '<text x="14" y="57" font-family="monospace" font-size="8" fill="#7d7d86">laptop</text>' +
        branches +
        '<text x="196" y="15" font-family="monospace" font-size="8" fill="#7d7d86">home-server</text>' +
        '<text x="196" y="40" font-family="monospace" font-size="8" fill="#7d7d86">vps-1</text>' +
        '<text x="196" y="65" font-family="monospace" font-size="8" fill="#7d7d86">agent-box</text>' +
        "</svg>";
      const rows = PEERS.map(
        (p, i) =>
          `<div class="hs-pr"><span>${p.n}</span>` +
          `<span class="hs-pr-track"><span class="hs-pr-fill" style="animation-delay:${i * 0.12}s"></span></span>` +
          `<span class="hs-pr-state${p.isNew ? " new" : ""}">${p.s}</span></div>`,
      ).join("");
      setView(
        "hs-peers",
        '<div class="hs-view-title">OP LOG <b>#1844</b><span class="right">ops 1839..1844</span></div>' +
          map +
          rows +
          '<div class="hs-note">plain HTTP, one cursor per log<br>grants and secrets stay on each machine</div>',
      );
    };

    /** one empty toplevel, ready to be written into */
    const appendCard = (c: Card) => {
      const holder = document.createElement("div");
      holder.innerHTML =
        `<div class="hs-tl writing${c.wide ? " wide" : ""}" style="--k: ${c.k}">` +
        `<div class="hs-tl-head"><span class="hs-tl-kind">${c.kind}</span>` +
        `<span class="hs-tl-name">${c.name}</span><span class="hs-tl-icons">⟳ ☰</span></div>` +
        `<div class="hs-tl-body"></div></div>`;
      const el = holder.firstChild as HTMLElement;
      viewRef.current?.appendChild(el);
      if (viewRef.current)
        viewRef.current.scrollTop = viewRef.current.scrollHeight;
      return el;
    };

    const writeInto = async (el: HTMLElement, c: Card, my: number) => {
      const body = el.querySelector(".hs-tl-body") as HTMLElement;
      const lines = c.body.split("\n");
      const acc: string[] = [];
      for (const line of lines) {
        if (!alive(my)) return false;
        acc.push(line);
        body.innerHTML = acc.join("\n");
        if (viewRef.current)
          viewRef.current.scrollTop = viewRef.current.scrollHeight;
        await sleep(130);
      }
      if (!alive(my)) return false;
      el.classList.remove("writing");
      return true;
    };

    const stream = async (
      items: string[],
      my: number,
      pace: (n: number) => number,
    ) => {
      const shown: string[] = [];
      for (let i = 0; i < items.length; i++) {
        if (!alive(my)) return false;
        shown.push(items[i]);
        paintCli(shown);
        await sleep(pace(i));
      }
      return true;
    };

    /** the finished state of a step, with nothing in motion */
    const show = (i: number) => {
      setScene(i);
      const k = SCENES[i].label;
      if (k === "prompt") {
        idle();
        hint("esc to interrupt");
        paintCli([BANNER, echo(PROMPT), WORKING]);
        viewCanvas(0);
        return;
      }
      idle();
      hint("esc to interrupt · /branch to switch");
      if (k === "build") {
        paintCli([BANNER, echo(PROMPT), ...WRITE.map(w => w.h)]);
        viewCanvas(CARDS.length);
      } else if (k === "access") {
        paintCli(ACCESS);
        viewGrant();
      } else if (k === "run") {
        paintCli(RUN);
        viewTrace();
      } else if (k === "sync") {
        paintCli(SYNC);
        viewPeers();
      } else {
        paintCli(APP);
        viewCanvas(CARDS.length, true, true);
      }
    };

    const playFrom = async (from: number) => {
      const my = ++token.current;
      for (let i = from; i < SCENES.length; i++) {
        if (!alive(my)) return;
        setScene(i);
        const k = SCENES[i].label;

        if (k === "prompt") {
          paintCli([BANNER]);
          viewCanvas(0);
          hint("⏵⏵ auto-accept edits · shift+tab to cycle");
          for (let c = 1; c <= PROMPT.length; c++) {
            if (!alive(my)) return;
            typed(PROMPT.slice(0, c), true);
            await sleep(26);
          }
          await sleep(650);
          // send it: the box flashes, empties, and the message joins the transcript
          boxRef.current?.classList.add("sending");
          await sleep(170);
          if (!alive(my)) return;
          boxRef.current?.classList.remove("sending");
          idle();
          hint("esc to interrupt");
          paintCli([BANNER, echo(PROMPT), WORKING]);
          await sleep(1100);
        } else if (k === "build") {
          idle();
          hint("esc to interrupt · /branch to switch");
          setView("hs-canvas", "");
          const shown = [BANNER, echo(PROMPT)];
          let made = 0;
          for (let w = 0; w < WRITE.length; w++) {
            if (!alive(my)) return;
            shown.push(WRITE[w].h);
            paintCli(shown);
            if (WRITE[w].card > made) {
              // the toplevel appears empty, then fills in line by line
              const el = appendCard(CARDS[made]);
              if (!(await writeInto(el, CARDS[made], my))) return;
              made++;
              await sleep(200);
            } else {
              await sleep(w === 0 ? 480 : 380);
            }
          }
          await sleep(1600);
        } else if (k === "access") {
          viewGrant();
          if (!(await stream(ACCESS, my, n => (n === 5 ? 700 : 380)))) return;
          await sleep(2200);
        } else if (k === "run") {
          viewTrace();
          const pace = [500, 700, 950, 620, 500];
          if (!(await stream(RUN, my, n => pace[n] || 400))) return;
          await sleep(1800);
        } else if (k === "sync") {
          viewPeers();
          if (!(await stream(SYNC, my, n => (n === 2 ? 620 : 420)))) return;
          await sleep(1800);
        } else {
          viewCanvas(CARDS.length, true, true);
          if (!(await stream(APP, my, () => 420))) return;
          await sleep(4200);
        }
      }
      if (!alive(my)) return;
      playFrom(0);
    };

    const reduce = window.matchMedia?.(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    // clicking a step stops playback and freezes there
    const onTab = (e: Event) => {
      const i = Number((e.currentTarget as HTMLElement).dataset.scene);
      token.current++;
      show(i);
    };
    const tabs = Array.from(
      document.querySelectorAll<HTMLElement>("[data-scene]"),
    );
    tabs.forEach(t => t.addEventListener("click", onTab));

    if (reduce) {
      show(5);
    } else {
      show(0);
      playFrom(0);
    }

    return () => {
      token.current++;
      tabs.forEach(t => t.removeEventListener("click", onTab));
    };
  }, []);

  return (
    <div
      className="hs-panel shadow-sm"
      aria-label="A prompt in the CLI becomes Darklang toplevels: a db, a function, an endpoint, a cron and a worker"
    >
      <div className="hs-head">
        <span className="hs-dot"></span>
        <span className="hs-dot"></span>
        <span className="hs-dot"></span>
        <span className="hs-title">{SCENES[scene].title}</span>
        <span className="flex gap-0.5 flex-wrap">
          {SCENES.map((s, i) => (
            <button
              key={s.label}
              type="button"
              data-scene={i}
              aria-current={i === scene}
              className="hs-tab"
            >
              {s.label}
            </button>
          ))}
        </span>
      </div>

      <div className="hs-body">
        <div className="hs-cli">
          <div className="hs-out" ref={outRef}></div>
          <div className="hs-box" ref={boxRef}>
            <span className="p">&gt;</span>
            <span className="txt" ref={txtRef}></span>
          </div>
          <div className="hs-hint" ref={hintRef}>
            ⏵⏵ auto-accept edits · shift+tab to cycle
          </div>
        </div>

        <div className="hs-arrow" aria-hidden="true">
          <svg
            width="34"
            height="18"
            viewBox="0 0 34 18"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path className="dash" d="M1 9 H 26" />
            <path d="M22 4 L 27 9 L 22 14" />
          </svg>
        </div>

        <div className="hs-view" ref={viewRef}></div>
      </div>
    </div>
  );
};

export default HeroStage;
