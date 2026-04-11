(function () {
  "use strict";

  const { RESTAURANTS, APP_COPY, HARD_MODE_COPY } = window.ReservationGymConfig;
  const { computeTier, formatSeconds, drawCertificatePng } = window.ReservationGymCertificate;

  const appEl = document.getElementById("app");
  if (!appEl) {
    throw new Error("Missing #app root");
  }

  const state = {
    view: "landing", // landing | form | result
    mode: "normal", // normal | hard
    startedAt: null,
    finishedAt: null,
    seconds: null,
    lastRestaurantKey: null,
    name: "",
    result: null,
    pickedRestaurant: null,
    wizardStep: 0, // 0 date, 1 table, 2 details
    formDraft: {
      date: "",
      slot: "",
      party: "",
      tableType: "",
      name: "",
      email: "",
      phone: "",
      occasion: "",
      notes: "",
      policy: false,
    },
    landingTargetIdx: 0,
  };

  const LANDING_TARGETS = [
    { key: "naru", name: "Naru", heroEmoji: "🍜", emojis: ["🥢", "🌶️", "🍜", "🥟"], theme: "naru" },
    { key: "guerrilla", name: "Guerilla Diner", heroEmoji: "🍔", emojis: ["🍟", "🥤", "🍔", "🔥"], theme: "guerrilla" },
    { key: "papus", name: "Papa's", heroEmoji: "🍽️", emojis: ["🍷", "🧈", "🫒", "✨"], theme: "papus" },
    { key: "masque", name: "Masque", heroEmoji: "🎭", emojis: ["🥂", "🌿", "🍽️", "✨"], theme: "masque" },
  ];

  function now() {
    return performance.now();
  }

  function setView(view) {
    state.view = view;
    render();
  }

  function h(tag, attrs = {}, children = []) {
    const el = document.createElement(tag);
    Object.entries(attrs).forEach(([k, v]) => {
      if (k === "class") {
        el.className = v;
        return;
      }
      if (k === "text") {
        el.textContent = v;
        return;
      }
      if (k.startsWith("on") && typeof v === "function") {
        el.addEventListener(k.slice(2).toLowerCase(), v);
        return;
      }
      if (v === false || v === null || typeof v === "undefined") {
        return;
      }
      if (v === true) {
        el.setAttribute(k, "");
        return;
      }
      el.setAttribute(k, String(v));
    });

    children.forEach((child) => {
      if (child === null || typeof child === "undefined") return;
      el.appendChild(typeof child === "string" ? document.createTextNode(child) : child);
    });
    return el;
  }

  function parseBragFromUrl() {
    const url = new URL(window.location.href);
    const name = url.searchParams.get("bragName");
    const time = url.searchParams.get("bragTime");
    const tier = url.searchParams.get("bragTier");
    const mode = url.searchParams.get("bragMode");
    if (!name || !time || !tier) return null;
    const seconds = Number(time);
    if (!Number.isFinite(seconds)) return null;
    return { name, seconds, tier, mode: mode === "hard" ? "hard" : "normal" };
  }

  function logoTicker() {
    const trackItems = RESTAURANTS.map((r) =>
      h(
        "div",
        { class: "tickerItem", title: r.name, "aria-label": r.name, role: "img" },
        [
          h("img", {
            class: "tickerLogo",
            alt: r.name,
            src: r.logoSrc,
            loading: "lazy",
            onerror: (e) => {
              const img = e.currentTarget;
              if (img && img.getAttribute("src") !== "./assets/logos/placeholder.svg") {
                img.setAttribute("src", "./assets/logos/placeholder.svg");
              }
            },
          }),
        ],
      ),
    );
    // Duplicate track for seamless loop
    const track = h("div", { class: "tickerTrack" }, [...trackItems, ...trackItems.map((n) => n.cloneNode(true))]);
    return h("section", { class: "ticker", "aria-label": "Brands" }, [track]);
  }

  function landingView() {
    const brag = parseBragFromUrl();
    const bragBanner =
      brag &&
      h("div", { class: "brag" }, [
        h("div", { class: "bragTitle", text: "Your friend just flexed." }),
        h("div", {
          class: "bragSub",
          text: `${brag.name} finished in ${formatSeconds(brag.seconds)} (Tier ${brag.tier}). Think you can beat them?`,
        }),
      ]);

    const target = LANDING_TARGETS[state.landingTargetIdx % LANDING_TARGETS.length];
    const bg = landingEmojiBg(target);
    const visual = landingHeroVisual(target);

    const modeToggle = h("div", { class: "modeToggle", role: "group", "aria-label": "Mode" }, [
      h("button", {
        class: `chip ${state.mode === "normal" ? "active" : ""}`,
        type: "button",
        onclick: () => {
          state.mode = "normal";
          render();
        },
        text: "Normal",
      }),
      h("button", {
        class: `chip ${state.mode === "hard" ? "active" : ""}`,
        type: "button",
        onclick: () => {
          state.mode = "hard";
          render();
        },
        text: "Hard mode",
      }),
    ]);

    const cta = h(
      "button",
      {
        class: "cta",
        type: "button",
        onclick: () => startRun(),
      },
      [APP_COPY.cta],
    );

    return h("main", { class: "page" }, [
      h("header", { class: "topbar" }, [
        h("div", { class: "brand" }, [
          h("div", { class: "brandMark", text: "RG" }),
          h("div", { class: "brandText", text: APP_COPY.title }),
        ]),
        modeToggle,
      ]),
      h("section", { class: `hero heroTheme_${target.theme}` }, [
        bg,
        h("div", { class: "heroGrid" }, [
          h("div", { class: "heroLeft" }, [
            bragBanner,
            h("h1", { class: "heroTitle" }, [
              h("span", { class: "heroKicker", text: "Practise for" }),
              h("span", { class: "heroTarget", text: target.name }),
            ]),
            h("p", { class: "heroSub", text: APP_COPY.subtitle }),
            h("div", { class: "heroActions" }, [cta]),
            h("p", {
              class: "heroNote",
              text:
                state.mode === "hard"
                  ? "Hard mode throws WhatsApp notifications + sketchy ads at you."
                  : "Normal mode is pure speed + accuracy.",
            }),
          ]),
          h("div", { class: "heroRight" }, [visual]),
        ]),
      ]),
      h("section", { class: "belowFold" }, [
        h("div", { class: "sectionLabel", text: "Train for drops at" }),
        logoTicker(),
      ]),
      h("footer", { class: "footer" }, []),
    ]);
  }

  function landingEmojiBg(target) {
    const emojis = (target && target.emojis) || ["✨"];
    const placements = [
      { x: 8, y: 18, s: 48, o: 0.26, r: -10, a: 8.5 },
      { x: 88, y: 20, s: 56, o: 0.22, r: 12, a: 9.2 },
      { x: 16, y: 78, s: 62, o: 0.18, r: 10, a: 10.2 },
      { x: 78, y: 82, s: 46, o: 0.15, r: -8, a: 11.0 },
      { x: 56, y: 52, s: 98, o: 0.10, r: -6, a: 13.0 },
      { x: 34, y: 26, s: 42, o: 0.14, r: 14, a: 8.8 },
    ];

    return h(
      "div",
      { class: "heroBg", "aria-hidden": "true" },
      placements.map((p, i) => {
        const em = emojis[i % emojis.length];
        return h("span", {
          class: "heroEmoji",
          style: `--x:${p.x}%;--y:${p.y}%;--s:${p.s}px;--o:${p.o};--r:${p.r}deg;--a:${p.a}s;`,
          "aria-hidden": "true",
          text: em,
        });
      }),
    );
  }

  function landingHeroVisual(target) {
    const heroEmoji = (target && target.heroEmoji) || "✨";
    const stickers = ((target && target.emojis) || ["✨"]).slice(0, 3);
    return h("div", { class: "heroVisual", "aria-hidden": "true" }, [
      h("div", { class: "heroFrame" }, [
        h("div", { class: "heroFrameTop" }, [
          h("div", { class: "heroBadge", text: "DROP TRAINING" }),
          h("div", { class: "heroBadge2", text: state.mode === "hard" ? "HARD MODE" : "NORMAL" }),
        ]),
        h("div", { class: "heroSticker" }, [
          h("div", { class: "heroEmojiBig", text: heroEmoji }),
          h("div", { class: "heroStickerRow" }, stickers.map((e) => h("span", { class: "heroStickerMini", text: e }))),
        ]),
        h("div", { class: "heroFrameBottom" }, [
          h("div", { class: "heroMetaLine", text: "Speed + accuracy. No excuses." }),
        ]),
      ]),
    ]);
  }

  function startRun() {
    // Pick a restaurant for this run (also used for roast lines).
    state.pickedRestaurant = RESTAURANTS[Math.floor(Math.random() * RESTAURANTS.length)];
    state.startedAt = now();
    state.finishedAt = null;
    state.seconds = null;
    state.lastRestaurantKey = null;
    state.result = null;
    state.wizardStep = 0;
    setView("form");
    if (state.mode === "hard") {
      initAudio();
      startDistractions();
    } else {
      stopDistractions();
    }
  }

  function buildSlots() {
    const slots = [];
    const startHour = 18;
    const endHour = 23;
    for (let hour = startHour; hour <= endHour; hour += 1) {
      for (let min = 0; min <= 30; min += 30) {
        const h12 = hour % 12 === 0 ? 12 : hour % 12;
        const suffix = hour >= 12 ? "PM" : "AM";
        const mm = String(min).padStart(2, "0");
        slots.push(`${h12}:${mm} ${suffix}`);
      }
    }
    return slots;
  }

  function todayIso() {
    const d = new Date();
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    return `${y}-${m}-${day}`;
  }

  function formView() {
    const timerEl = h("span", { class: "timerValue", text: "0.0s" });
    const timer = window.setInterval(() => {
      if (state.view !== "form") {
        window.clearInterval(timer);
        return;
      }
      const elapsed = (now() - (state.startedAt || now())) / 1000;
      timerEl.textContent = formatSeconds(elapsed);
    }, 50);

    const slots = buildSlots();
    const restaurant = state.pickedRestaurant || RESTAURANTS[0];
    state.lastRestaurantKey = restaurant.key;

    const form = h("form", { class: "form", novalidate: true, autocomplete: "on" }, [
      h("div", { class: "formHeader" }, [
        h("div", { class: "formTitleWrap" }, [
          h("div", { class: "formTitle", text: "Reservation Form" }),
          h("div", { class: "formMeta", text: `Target: ${restaurant.name}` }),
        ]),
        h("div", { class: "timer" }, [h("span", { class: "timerLabel", text: "Time" }), timerEl]),
      ]),

      h("div", { class: "wizard" }, [
        wizardHeader(),
        wizardStepDate(),
        wizardStepTable(slots),
        wizardStepDetails(),
      ]),

      h("div", { class: "formActions" }, [
        h("button", { class: "btnGhost", type: "button", onclick: () => onWizardBack() }, [state.wizardStep === 0 ? "Back" : "Previous"]),
        h("button", { class: "btnPrimary", type: "submit" }, [state.wizardStep === 2 ? "Submit" : "Next"]),
      ]),

      h("div", {
        class: "formHint",
        text:
          state.wizardStep === 0
            ? "Pick the date first. Clock’s running."
            : state.wizardStep === 1
              ? "Lock the table details. No typos."
              : "Finish strong. Validation is enforced.",
      }),
    ]);

    form.addEventListener("input", (e) => {
      const target = e.target;
      if (!(target instanceof HTMLElement)) return;
      const name = target.getAttribute("name");
      if (!name) return;
      if (target instanceof HTMLInputElement && target.type === "checkbox") {
        state.formDraft[name] = target.checked;
      } else {
        state.formDraft[name] = target.value;
      }
    });

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      if (state.wizardStep < 2) {
        if (!enforceStepValidity(form, state.wizardStep)) return;
        state.wizardStep += 1;
        render();
        return;
      }
      if (!enforceAllValidity(form)) return;
      finishRun(form, restaurant);
    });

    return h("main", { class: "page" }, [form, h("div", { id: "overlays" })]);
  }

  function enforceStepValidity(form, stepIdx) {
    // Custom messages (minimal; keep it fast).
    const phoneEl = form.querySelector('input[name="phone"]');
    if (phoneEl) {
      phoneEl.setCustomValidity("");
      if (phoneEl.value && !new RegExp(phoneEl.getAttribute("pattern") || "").test(phoneEl.value)) {
        phoneEl.setCustomValidity("Enter a valid phone number.");
      }
    }

    const stepContainer = form.querySelector(`[data-step="${stepIdx}"]`);
    if (!stepContainer) return false;

    // Temporarily disable unrelated required fields so reportValidity only checks the current step.
    const allControls = Array.from(form.querySelectorAll("input, select, textarea"));
    const outside = allControls.filter((el) => !stepContainer.contains(el));
    const touched = [];
    outside.forEach((el) => {
      if (el.hasAttribute("required")) {
        touched.push(el);
        el.dataset._wasRequired = "1";
        el.removeAttribute("required");
      }
    });

    const ok = form.reportValidity();
    if (!ok) {
      const firstInvalid = form.querySelector(":invalid");
      if (firstInvalid && typeof firstInvalid.focus === "function") {
        firstInvalid.focus();
      }
    }

    // restore required attrs
    touched.forEach((el) => {
      if (el.dataset._wasRequired) {
        el.setAttribute("required", "");
        delete el.dataset._wasRequired;
      }
    });
    return ok;
  }

  function enforceAllValidity(form) {
    const phoneEl = form.querySelector('input[name="phone"]');
    if (phoneEl) {
      phoneEl.setCustomValidity("");
      if (phoneEl.value && !new RegExp(phoneEl.getAttribute("pattern") || "").test(phoneEl.value)) {
        phoneEl.setCustomValidity("Enter a valid phone number.");
      }
    }
    const ok = form.reportValidity();
    if (!ok) {
      const firstInvalid = form.querySelector(":invalid");
      if (firstInvalid && typeof firstInvalid.focus === "function") {
        firstInvalid.focus();
      }
    }
    return ok;
  }

  function finishRun(form, restaurant) {
    stopDistractions();
    state.finishedAt = now();
    state.seconds = (state.finishedAt - (state.startedAt || state.finishedAt)) / 1000;
    const name = String(new FormData(form).get("name") || "").trim();
    state.name = name;

    const { tier, probability } = computeTier(state.seconds, state.mode);
    const png = drawCertificatePng({
      title: APP_COPY.title,
      name,
      seconds: state.seconds,
      tier,
      probability,
      mode: state.mode,
      restaurantName: restaurant.name,
    });

    state.result = { tier, probability, png };
    setView("result");
  }

  function renderResult({ tier, probability, png }) {
    const url = new URL(window.location.href);
    url.searchParams.set("bragName", state.name ? state.name.split(/\s+/)[0] : "Someone");
    url.searchParams.set("bragTime", String(Math.round((state.seconds || 0) * 10) / 10));
    url.searchParams.set("bragTier", tier);
    url.searchParams.set("bragMode", state.mode);
    // Share link always points to landing experience.
    url.hash = "";
    const shareLink = url.toString();

    const resultEl = appEl.querySelector('[data-view="result"]');
    if (!resultEl) return;

    const img = resultEl.querySelector("img");
    if (img) img.src = png;

    const probEl = resultEl.querySelector("[data-prob]");
    if (probEl) probEl.textContent = `${probability}%`;

    const tierEl = resultEl.querySelector("[data-tier]");
    if (tierEl) tierEl.textContent = `Tier ${tier}`;

    const timeEl = resultEl.querySelector("[data-time]");
    if (timeEl) timeEl.textContent = formatSeconds(state.seconds || 0);

    const linkEl = resultEl.querySelector("[data-sharelink]");
    if (linkEl) linkEl.value = shareLink;

    const dlBtn = resultEl.querySelector("[data-download]");
    if (dlBtn) {
      dlBtn.onclick = () => downloadDataUrl(png, `reservation-gym-${tier}-${Math.round((state.seconds || 0) * 10) / 10}s.png`);
    }

    const copyBtn = resultEl.querySelector("[data-copy]");
    if (copyBtn) {
      copyBtn.onclick = async () => {
        try {
          await navigator.clipboard.writeText(shareLink);
          copyBtn.textContent = "Copied";
          window.setTimeout(() => (copyBtn.textContent = "Copy share link"), 1200);
        } catch {
          // fallback: select input
          if (linkEl) {
            linkEl.focus();
            linkEl.select();
          }
        }
      };
    }

    const waBtn = resultEl.querySelector("[data-whatsapp]");
    if (waBtn) {
      const msg = `I got ${tier} in ${formatSeconds(state.seconds || 0)} on Reservation Gym. Try beating me: ${shareLink}`;
      waBtn.href = `https://wa.me/?text=${encodeURIComponent(msg)}`;
    }
  }

  function resultView() {
    return h("main", { class: "page", "data-view": "result" }, [
      h("header", { class: "topbar" }, [
        h("div", { class: "brand" }, [
          h("div", { class: "brandMark", text: "RG" }),
          h("div", { class: "brandText", text: APP_COPY.title }),
        ]),
        h("button", { class: "btnGhost", type: "button", onclick: () => setView("landing") }, ["Home"]),
      ]),
      h("section", { class: "resultCard" }, [
        h("div", { class: "resultMeta" }, [
          h("div", { class: "resultProb" }, [
            h("div", { class: "resultProbLabel", text: "Reservation Probability" }),
            h("div", { class: "resultProbValue", "data-prob": true, text: "—" }),
          ]),
          h("div", { class: "resultStats" }, [
            h("div", { class: "stat" }, [h("div", { class: "statLabel", text: "Tier" }), h("div", { class: "statValue", "data-tier": true, text: "—" })]),
            h("div", { class: "stat" }, [h("div", { class: "statLabel", text: "Time" }), h("div", { class: "statValue", "data-time": true, text: "—" })]),
            h("div", { class: "stat" }, [h("div", { class: "statLabel", text: "Mode" }), h("div", { class: "statValue", text: state.mode === "hard" ? "Hard" : "Normal" })]),
          ]),
        ]),
        h("div", { class: "certWrap" }, [h("img", { class: "certImg", alt: "Certificate preview" })]),
        h("div", { class: "resultActions" }, [
          h("button", { class: "btnPrimary", type: "button", "data-download": true }, ["Download certificate"]),
          h("button", { class: "btnGhost", type: "button", onclick: () => startRun() }, ["Retry"]),
        ]),
        h("div", { class: "shareBox" }, [
          h("div", { class: "shareLabel", text: "Share link (sends people to the test)" }),
          h("div", { class: "shareRow" }, [
            h("input", { class: "shareInput", type: "text", readonly: true, "data-sharelink": true }),
            h("button", { class: "btnGhost", type: "button", "data-copy": true }, ["Copy share link"]),
          ]),
          h("a", { class: "btnWhatsapp", target: "_blank", rel: "noreferrer", "data-whatsapp": true }, ["Share on WhatsApp"]),
        ]),
      ]),
    ]);
  }

  function fieldRow(children) {
    return h("div", { class: "row2" }, children);
  }

  function field(id, label, inputs) {
    return h("div", { class: "field" }, [h("div", { class: "label", text: label }), ...inputs]);
  }

  function downloadDataUrl(dataUrl, filename) {
    const a = document.createElement("a");
    a.href = dataUrl;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    a.remove();
  }

  // --- Hard mode distractions ---
  let distractionTimer = null;
  let popupTimer = null;

  const TOASTS = (HARD_MODE_COPY && HARD_MODE_COPY.whatsappToasts) || [];
  const ADS = (HARD_MODE_COPY && HARD_MODE_COPY.ads) || [];

  let audioCtx = null;

  function initAudio() {
    if (audioCtx) return;
    try {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      if (audioCtx && audioCtx.state === "suspended") {
        // Resume will succeed after a user gesture (startRun is one).
        audioCtx.resume().catch(() => {});
      }
    } catch {
      audioCtx = null;
    }
  }

  function playNotifSound() {
    if (!audioCtx) return;
    const t0 = audioCtx.currentTime;
    const o = audioCtx.createOscillator();
    const g = audioCtx.createGain();
    o.type = "sine";
    o.frequency.setValueAtTime(880, t0);
    o.frequency.exponentialRampToValueAtTime(740, t0 + 0.08);
    g.gain.setValueAtTime(0.0001, t0);
    g.gain.exponentialRampToValueAtTime(0.04, t0 + 0.01);
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + 0.12);
    o.connect(g);
    g.connect(audioCtx.destination);
    o.start(t0);
    o.stop(t0 + 0.14);
  }

  function startDistractions() {
    stopDistractions();
    distractionTimer = window.setInterval(() => pushToast(), 2400 + Math.random() * 1800);
    popupTimer = window.setInterval(() => maybeSpawnPopup(), 5400 + Math.random() * 3400);
  }

  function stopDistractions() {
    if (distractionTimer) window.clearInterval(distractionTimer);
    if (popupTimer) window.clearInterval(popupTimer);
    distractionTimer = null;
    popupTimer = null;
    const container = document.getElementById("toastDock");
    if (container) container.remove();
    document.querySelectorAll(".adPopup").forEach((el) => el.remove());
  }

  function toastDock() {
    let dock = document.getElementById("toastDock");
    if (dock) return dock;
    dock = document.createElement("div");
    dock.id = "toastDock";
    dock.className = "toastDock";
    document.body.appendChild(dock);
    return dock;
  }

  function pushToast() {
    if (state.view !== "form" || state.mode !== "hard") return;
    const dock = toastDock();
    const t =
      TOASTS && TOASTS.length
        ? TOASTS[Math.floor(Math.random() * TOASTS.length)]
        : { title: "WhatsApp", body: "New message" };
    const el = document.createElement("div");
    el.className = "toast";
    el.innerHTML = `
      <div class="toastRow">
        <div class="waIcon" aria-hidden="true"></div>
        <div class="toastContent">
          <div class="toastTop">
            <div class="toastTitle">${escapeHtml(t.title)}</div>
            <div class="toastTime">now</div>
          </div>
          <div class="toastBody">${escapeHtml(t.body)}</div>
        </div>
      </div>
    `;
    dock.appendChild(el);
    playNotifSound();
    window.setTimeout(() => {
      el.classList.add("hide");
      window.setTimeout(() => el.remove(), 280);
    }, 2400 + Math.random() * 1200);
  }

  function maybeSpawnPopup() {
    if (state.view !== "form" || state.mode !== "hard") return;
    if (document.querySelectorAll(".adPopup").length >= 2) return;
    if (Math.random() < 0.35) return;
    const a =
      ADS && ADS.length ? ADS[Math.floor(Math.random() * ADS.length)] : { title: "AD", body: "Click now." };
    const el = document.createElement("div");
    el.className = "adPopup";
    const closeCorner = ["tl", "tr", "bl", "br"][Math.floor(Math.random() * 4)];
    const imgHtml =
      a && a.imageSrc
        ? `<img class="adImg" src="${escapeHtml(a.imageSrc)}" alt="${escapeHtml(a.title || "Ad")}" loading="lazy" />`
        : "";
    el.innerHTML = `
      <div class="adHeader">
        <div class="adTitle">${escapeHtml(a.title)}</div>
        <button class="adClose ${closeCorner}" type="button" aria-label="Close ad">×</button>
      </div>
      ${imgHtml}
      <div class="adBody">${escapeHtml(a.body)}</div>
      <div class="adActions">
        <button class="adBtn" type="button">Claim</button>
        <button class="adBtn ghost" type="button">Later</button>
      </div>
    `;
    el.style.left = `${10 + Math.random() * 60}vw`;
    el.style.top = `${12 + Math.random() * 55}vh`;
    document.body.appendChild(el);
    const close = el.querySelector(".adClose");
    const buttons = Array.from(el.querySelectorAll("button"));
    buttons.forEach((b) => b.addEventListener("click", () => el.remove()));
    close?.addEventListener("click", () => el.remove());
  }

  function escapeHtml(s) {
    return String(s)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function render() {
    appEl.innerHTML = "";
    if (state.view === "landing") {
      appEl.appendChild(landingView());
      return;
    }
    if (state.view === "form") {
      appEl.appendChild(formView());
      return;
    }
    if (state.view === "result") {
      appEl.appendChild(resultView());
      if (state.result) {
        window.setTimeout(() => renderResult(state.result), 0);
      }
      return;
    }
  }

  // --- Wizard helpers ---
  function wizardHeader() {
    const steps = ["Date", "Table", "Details"];
    return h(
      "div",
      { class: "wizardHeader", role: "navigation", "aria-label": "Form steps" },
      steps.map((label, idx) =>
        h("div", { class: `wizStep ${idx === state.wizardStep ? "active" : idx < state.wizardStep ? "done" : ""}` }, [
          h("div", { class: "wizDot", text: String(idx + 1) }),
          h("div", { class: "wizLabel", text: label }),
        ]),
      ),
    );
  }

  function wizardStepDate() {
    const selected = state.formDraft.date || "";
    return h("section", { class: `wizPanel ${state.wizardStep === 0 ? "show" : ""}`, "data-step": "0" }, [
      h("div", { class: "panelTitle", text: "Pick a date" }),
      calendarPicker(selected, (iso) => {
        state.formDraft.date = iso;
        render();
      }),
      // hidden input for validation/form submission
      h("input", { type: "text", name: "date", required: true, value: selected, class: "srOnly", readonly: true }),
    ]);
  }

  function wizardStepTable(slots) {
    return h("section", { class: `wizPanel ${state.wizardStep === 1 ? "show" : ""}`, "data-step": "1" }, [
      h("div", { class: "panelTitle", text: "Table details" }),
      fieldRow([
        field("slot", "Slot", [
          h(
            "select",
            { name: "slot", required: true },
            [h("option", { value: "", text: "Select a slot", disabled: true, selected: !state.formDraft.slot })].concat(
              slots.map((s) =>
                h("option", { value: s, text: s, selected: state.formDraft.slot === s }),
              ),
            ),
          ),
        ]),
        field("party", "How many people", [
          h("input", {
            name: "party",
            type: "number",
            min: 1,
            max: 10,
            step: 1,
            required: true,
            inputmode: "numeric",
            value: state.formDraft.party,
          }),
        ]),
      ]),
      field("table", "Table type", [
        h(
          "div",
          { class: "pillGrid", role: "radiogroup", "aria-label": "Table type" },
          [
            { v: "any", t: "Any" },
            { v: "indoor", t: "Indoor" },
            { v: "outdoor", t: "Outdoor" },
            { v: "counter", t: "Counter / Bar" },
          ].map((opt) =>
            h(
              "button",
              {
                type: "button",
                class: `pill ${state.formDraft.tableType === opt.v ? "active" : ""}`,
                role: "radio",
                "aria-checked": state.formDraft.tableType === opt.v ? "true" : "false",
                onclick: () => {
                  state.formDraft.tableType = opt.v;
                  const hidden = document.querySelector('input[name="tableType"]');
                  if (hidden) hidden.value = opt.v;
                  render();
                },
              },
              [opt.t],
            ),
          ),
        ),
      ]),
      h("input", {
        type: "text",
        name: "tableType",
        required: true,
        value: state.formDraft.tableType,
        class: "srOnly",
        readonly: true,
      }),
    ]);
  }

  function wizardStepDetails() {
    return h("section", { class: `wizPanel ${state.wizardStep === 2 ? "show" : ""}`, "data-step": "2" }, [
      h("div", { class: "panelTitle", text: "Your details" }),
      fieldRow([
        field("name", "Name", [
          h("input", { name: "name", type: "text", required: true, autocomplete: "name", value: state.formDraft.name }),
        ]),
        field("email", "Email", [
          h("input", { name: "email", type: "email", required: true, autocomplete: "email", value: state.formDraft.email }),
        ]),
      ]),
      fieldRow([
        field("phone", "Phone", [
          h("input", {
            name: "phone",
            type: "tel",
            required: true,
            inputmode: "tel",
            autocomplete: "tel",
            placeholder: "+91 98xxxxxxx",
            pattern: "^\\+?[0-9][0-9\\s-]{7,}$",
            value: state.formDraft.phone,
          }),
        ]),
        field("occasion", "Occasion (optional)", [
          h(
            "select",
            { name: "occasion" },
            [
              h("option", { value: "", text: "None", selected: !state.formDraft.occasion }),
              h("option", { value: "birthday", text: "Birthday", selected: state.formDraft.occasion === "birthday" }),
              h("option", { value: "anniversary", text: "Anniversary", selected: state.formDraft.occasion === "anniversary" }),
              h("option", { value: "date", text: "Date night", selected: state.formDraft.occasion === "date" }),
              h("option", { value: "business", text: "Business", selected: state.formDraft.occasion === "business" }),
            ],
          ),
        ]),
      ]),
      field("notes", "Special requests (optional)", [
        h("textarea", {
          name: "notes",
          rows: "3",
          placeholder: "Allergies, seating preferences, etc.",
          text: state.formDraft.notes,
        }),
      ]),
      h("label", { class: "policy" }, [
        h("input", { type: "checkbox", name: "policy", required: true, checked: state.formDraft.policy ? true : false }),
        h("span", { text: "I agree to the cancellation policy." }),
      ]),
    ]);
  }

  function onWizardBack() {
    if (state.wizardStep === 0) {
      stopDistractions();
      setView("landing");
      return;
    }
    state.wizardStep -= 1;
    render();
  }

  function calendarPicker(selectedIso, onPick) {
    const today = new Date();
    const minIso = todayIso();
    const selected = selectedIso ? parseIsoDate(selectedIso) : null;
    const base = selected || today;
    const ym = { y: base.getFullYear(), m: base.getMonth() };

    const wrapper = h("div", { class: "cal" }, []);
    const view = { y: ym.y, m: ym.m };

    function renderCal() {
      wrapper.innerHTML = "";
      const header = h("div", { class: "calHeader" }, [
        h("button", {
          type: "button",
          class: "calNav",
          onclick: () => {
            const d = new Date(view.y, view.m - 1, 1);
            view.y = d.getFullYear();
            view.m = d.getMonth();
            renderCal();
          },
          text: "‹",
        }),
        h("div", { class: "calMonth", text: monthLabel(view.y, view.m) }),
        h("button", {
          type: "button",
          class: "calNav",
          onclick: () => {
            const d = new Date(view.y, view.m + 1, 1);
            view.y = d.getFullYear();
            view.m = d.getMonth();
            renderCal();
          },
          text: "›",
        }),
      ]);

      const dow = h("div", { class: "calDow" }, ["S", "M", "T", "W", "T", "F", "S"].map((d) => h("div", { class: "calDowCell", text: d })));
      const grid = h("div", { class: "calGrid" }, []);

      const first = new Date(view.y, view.m, 1);
      const startDay = first.getDay();
      const daysInMonth = new Date(view.y, view.m + 1, 0).getDate();

      for (let i = 0; i < startDay; i += 1) {
        grid.appendChild(h("div", { class: "calCell empty" }));
      }

      for (let day = 1; day <= daysInMonth; day += 1) {
        const d = new Date(view.y, view.m, day);
        const iso = toIsoDate(d);
        const disabled = iso < minIso;
        const isSelected = selectedIso === iso;
        grid.appendChild(
          h(
            "button",
            {
              type: "button",
              class: `calCell ${isSelected ? "selected" : ""}`,
              disabled: disabled ? true : false,
              onclick: () => {
                onPick(iso);
              },
              text: String(day),
            },
            [],
          ),
        );
      }

      wrapper.appendChild(header);
      wrapper.appendChild(dow);
      wrapper.appendChild(grid);
    }

    renderCal();
    return wrapper;
  }

  function monthLabel(y, m) {
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return `${monthNames[m]} ${y}`;
  }

  function toIsoDate(d) {
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    return `${y}-${m}-${day}`;
  }

  function parseIsoDate(iso) {
    const m = String(iso || "").match(/^(\d{4})-(\d{2})-(\d{2})$/);
    if (!m) return null;
    const y = Number(m[1]);
    const mo = Number(m[2]) - 1;
    const d = Number(m[3]);
    const date = new Date(y, mo, d);
    if (Number.isNaN(date.getTime())) return null;
    return date;
  }

  // Init
  document.title = APP_COPY.title;
  render();

  window.setInterval(() => {
    if (state.view !== "landing") return;
    state.landingTargetIdx = (state.landingTargetIdx + 1) % LANDING_TARGETS.length;
    render();
  }, 3000);
})();
