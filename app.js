(function () {
  "use strict";

  const { contact, watches } = window.TREN;

  const T = {
    hr: {
      "doc.title": "Tren by Nikoleta — Satovi",
      "nav.watches": "Satovi",
      "nav.custom": "Custom",
      "nav.contact": "Kontakt",
      "hero.title": "Uhvati <em>tren.</em>",
      "hero.lede": "Ručno rađeni satovi od smole i kamena. Svaki je unikat.",
      "col.title": "Kolekcija",
      "price.ask": "Cijena na upit",
      "sold": "Prodano",
      "mto": "Po narudžbi",
      "tile.cta": "Opiši svoj sat",
      "custom.title": "Sat po tvojoj želji",
      "custom.lede": "Imaš boje, prostor ili prigodu na umu? Opiši sat kakav želiš i javit ćemo se s prijedlogom i cijenom.",
      "step1.t": "Opiši", "step1.d": "Napiši što zamišljaš. Što više detalja, to bolje.",
      "step2.t": "Dogovor", "step2.d": "Javimo se s prijedlogom, cijenom i rokom.",
      "step3.t": "Izrada", "step3.d": "Kad potvrdiš, tvoj sat kreće u izradu.",
      "custom.field": "Opiši svoj sat",
      "custom.ph": "Boje, oblik, veličina, kamenje, brojke, prostor u koji ide… sve što ti je važno.",
      "contact.title": "Javi nam se",
      "contact.lede": "Sviđa ti se neki sat? Dostupnost, plaćanje i dostavu dogovaramo porukom.",
      "form.watch": "Sat",
      "form.watch.none": "Općeniti upit",
      "form.message": "Poruka",
      "form.name": "Ime",
      "form.contact": "E-mail ili telefon",
      "send": "Pošalji upit",
      "send.email": "Pošalji e-mailom",
      "send.whatsapp": "Pošalji na WhatsApp",
      "status.opened": "Poruka je spremna — samo je još pošalji iz svoje aplikacije.",
      "status.sending": "Šaljemo…",
      "status.sent": "Hvala! Javit ćemo se uskoro.",
      "status.error": "Nešto nije uspjelo. Pokušaj ponovno ili nam piši izravno.",
      "status.missing": "Molimo ispuni označena polja.",
      "subject.product": "Upit",
      "subject.custom": "Custom sat",
      "subject.general": "Upit",
      "product.inquire": "Pošalji upit za ovaj sat",
      "product.note": "Kupnja ide dogovorom: javimo se s dostupnošću, plaćanjem i dostavom.",
      "close": "Zatvori",
      "footer.top": "Na vrh",
    },
    en: {
      "doc.title": "Tren by Nikoleta — Clocks",
      "nav.watches": "Clocks",
      "nav.custom": "Custom",
      "nav.contact": "Contact",
      "hero.title": "Catch the <em>moment.</em>",
      "hero.lede": "Clocks handmade from resin and stone. Each one is one of a kind.",
      "col.title": "Collection",
      "price.ask": "Price on request",
      "sold": "Sold",
      "mto": "Made to order",
      "tile.cta": "Describe your clock",
      "custom.title": "A clock made your way",
      "custom.lede": "Have colours, a room or an occasion in mind? Describe the clock you want and we'll come back with a proposal and a price.",
      "step1.t": "Describe", "step1.d": "Tell us what you have in mind. The more detail, the better.",
      "step2.t": "Agree", "step2.d": "We reply with a proposal, price and timing.",
      "step3.t": "Make", "step3.d": "Once you confirm, we start making your clock.",
      "custom.field": "Describe your clock",
      "custom.ph": "Colours, shape, size, stones, numerals, the room it's for… anything that matters to you.",
      "contact.title": "Get in touch",
      "contact.lede": "Like one of the clocks? We arrange availability, payment and delivery by message.",
      "form.watch": "Clock",
      "form.watch.none": "General enquiry",
      "form.message": "Message",
      "form.name": "Name",
      "form.contact": "Email or phone",
      "send": "Send enquiry",
      "send.email": "Send by email",
      "send.whatsapp": "Send on WhatsApp",
      "status.opened": "Your message is ready — just hit send in your app.",
      "status.sending": "Sending…",
      "status.sent": "Thank you! We'll be in touch soon.",
      "status.error": "Something went wrong. Try again or write to us directly.",
      "status.missing": "Please fill in the highlighted fields.",
      "subject.product": "Enquiry",
      "subject.custom": "Custom clock",
      "subject.general": "Enquiry",
      "product.inquire": "Enquire about this clock",
      "product.note": "Buying is by arrangement: we'll reply with availability, payment and delivery.",
      "close": "Close",
      "footer.top": "Back to top",
    },
  };

  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

  function el(tag, props, ...children) {
    const node = Object.assign(document.createElement(tag), props || {});
    node.append(...children);
    return node;
  }

  /* ───────── Language ───────── */

  function initialLang() {
    try {
      const saved = localStorage.getItem("tren-lang");
      if (saved === "hr" || saved === "en") return saved;
    } catch (_) {}
    return "hr";
  }

  let lang = initialLang();
  const t = (key) => T[lang][key] ?? key;
  const localized = (value) => (value && typeof value === "object" ? value[lang] ?? value.hr ?? "" : value || "");

  function applyLang() {
    document.documentElement.lang = lang;
    document.title = t("doc.title");
    $$("[data-i18n]").forEach((n) => (n.textContent = t(n.dataset.i18n)));
    $$("[data-i18n-html]").forEach((n) => (n.innerHTML = t(n.dataset.i18nHtml)));
    $$("[data-i18n-ph]").forEach((n) => (n.placeholder = t(n.dataset.i18nPh)));
    $$("[data-i18n-aria]").forEach((n) => n.setAttribute("aria-label", t(n.dataset.i18nAria)));
    $("#lang").textContent = lang === "hr" ? "EN" : "HR";
    renderGrid();
    renderSelect();
    renderActions();
    if (current) fillProduct(current);
  }

  $("#lang").addEventListener("click", () => {
    lang = lang === "hr" ? "en" : "hr";
    try { localStorage.setItem("tren-lang", lang); } catch (_) {}
    applyLang();
  });

  /* ───────── Images ───────── */

  // Drawn stand-in shown until real photos are added in products.js.
  function placeholder(i) {
    const tones = [
      ["#e9e4da", "#f6f2ea", "#2b2926"],
      ["#dde2df", "#f1f4f2", "#27302f"],
      ["#ecdfd8", "#f8f0ec", "#3a2a25"],
      ["#e1e0e9", "#f3f2f8", "#2a2833"],
      ["#e4e7da", "#f4f6ee", "#2c3024"],
      ["#efe6d4", "#faf5ea", "#3a3020"],
    ];
    const [bg, dial, ink] = tones[i % tones.length];
    const hour = (310 + i * 47) % 360;
    const minute = (60 + i * 83) % 360;
    let ticks = "";
    for (let k = 0; k < 12; k++) {
      ticks += `<line x1="400" y1="${k % 3 ? 372 : 366}" x2="400" y2="384" transform="rotate(${k * 30} 400 500)"/>`;
    }
    const svg =
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 1000">` +
      `<rect width="800" height="1000" fill="${bg}"/>` +
      `<circle cx="400" cy="500" r="152" fill="${dial}" stroke="${ink}" stroke-width="3"/>` +
      `<g stroke="${ink}" stroke-width="2.5" stroke-linecap="round" opacity=".7">${ticks}</g>` +
      `<g stroke="${ink}" stroke-linecap="round">` +
      `<line x1="400" y1="500" x2="400" y2="424" stroke-width="5" transform="rotate(${hour} 400 500)"/>` +
      `<line x1="400" y1="500" x2="400" y2="392" stroke-width="3" transform="rotate(${minute} 400 500)"/>` +
      `</g><circle cx="400" cy="500" r="5" fill="${ink}"/></svg>`;
    return "data:image/svg+xml," + encodeURIComponent(svg);
  }

  function photo(watch, n) {
    const fallback = placeholder(watches.indexOf(watch));
    const img = el("img", { alt: watch.name, decoding: "async" });
    img.onerror = () => { img.onerror = null; img.src = fallback; };
    img.src = (watch.images && watch.images[n]) || fallback;
    return img;
  }

  /* ───────── Collection grid ───────── */

  const priceLabel = (w) =>
    w.sold ? t("sold")
    : w.madeToOrder ? t("mto") + (w.price ? " · " + w.price : "")
    : w.price || t("price.ask");

  function renderGrid() {
    const cards = watches.map((w) =>
      el("a", { className: "card", href: "#/" + encodeURIComponent(w.id) },
        el("figure", null, photo(w, 0)),
        el("div", { className: "card-meta" },
          el("h3", null, w.name),
          el("span", null, priceLabel(w))))
    );
    cards.push(
      el("a", { className: "card card-custom", href: "#custom" },
        el("figure", null, el("figcaption", null, "Custom")),
        el("div", { className: "card-meta" },
          el("h3", null, t("custom.title")),
          el("span", null, t("tile.cta") + " →")))
    );
    $("#grid").replaceChildren(...cards);
  }

  /* ───────── Product dialog ───────── */

  const dialog = $("#product");
  let current = null;

  function showPhoto(watch, n) {
    $("#p-figure").replaceChildren(photo(watch, n));
    $$("#p-thumbs button").forEach((b, i) => b.setAttribute("aria-current", String(i === n)));
  }

  function fillProduct(watch) {
    $("#p-name").textContent = watch.name;
    $("#p-price").textContent = priceLabel(watch);
    $("#p-desc").textContent = localized(watch.desc);
    const count = (watch.images || []).length;
    $("#p-thumbs").replaceChildren(
      ...(count > 1
        ? watch.images.map((_, n) => {
            const b = el("button", { type: "button", ariaLabel: `${watch.name} ${n + 1}` }, photo(watch, n));
            b.addEventListener("click", () => showPhoto(watch, n));
            return b;
          })
        : [])
    );
    showPhoto(watch, 0);
  }

  function openProduct(id) {
    const watch = watches.find((w) => w.id === id);
    if (!watch) return false;
    current = watch;
    fillProduct(watch);
    if (!dialog.open) dialog.showModal();
    dialog.scrollTop = 0;
    return true;
  }

  function clearProductHash() {
    if (location.hash.startsWith("#/")) {
      history.replaceState(null, "", location.pathname + location.search);
    }
  }

  function route() {
    let hash = location.hash;
    try { hash = decodeURIComponent(hash); } catch (_) {}
    if (hash.startsWith("#/")) {
      if (!openProduct(hash.slice(2))) clearProductHash();
    } else if (dialog.open) {
      dialog.close();
    }
  }

  dialog.addEventListener("close", () => { current = null; clearProductHash(); });
  dialog.addEventListener("click", (e) => { if (e.target === dialog) dialog.close(); });
  $("#p-close").addEventListener("click", () => dialog.close());
  window.addEventListener("hashchange", route);

  $("#p-inquire").addEventListener("click", () => {
    const id = current && current.id;
    dialog.close();
    if (id) $("#watch-select").value = id;
    $("#kontakt").scrollIntoView();
    setTimeout(() => $("#contact-message").focus({ preventScroll: true }), 500);
  });

  /* ───────── Contact ───────── */

  const whatsappNumber = (contact.whatsapp || "").replace(/\D/g, "");
  const instagramHandle = (contact.instagram || "").replace(/^@/, "");

  function renderSelect() {
    const select = $("#watch-select");
    const value = select.value;
    select.replaceChildren(
      el("option", { value: "" }, t("form.watch.none")),
      ...watches.map((w) => el("option", { value: w.id }, w.name))
    );
    select.value = value;
  }

  function renderActions() {
    $$(".inquiry .actions").forEach((box) => {
      const buttons = [];
      if (contact.formEndpoint) {
        buttons.push(el("button", { className: "btn", type: "submit", value: "form" }, t("send")));
      } else {
        if (contact.email) {
          buttons.push(el("button", { className: "btn", type: "submit", value: "email" }, t("send.email")));
        }
        if (whatsappNumber) {
          buttons.push(el("button", { className: "btn" + (buttons.length ? " ghost" : ""), type: "submit", value: "whatsapp" }, t("send.whatsapp")));
        }
      }
      box.replaceChildren(...buttons);
    });
  }

  function renderLinks() {
    const rows = [];
    if (contact.email) rows.push(["E-mail", contact.email, "mailto:" + contact.email]);
    if (instagramHandle) rows.push(["Instagram", "@" + instagramHandle, "https://instagram.com/" + instagramHandle]);
    if (whatsappNumber) rows.push(["WhatsApp", "+" + whatsappNumber, "https://wa.me/" + whatsappNumber]);
    $("#links").replaceChildren(
      ...rows.map(([label, text, href]) => {
        const a = el("a", { href }, el("span", null, label), el("span", null, text));
        if (href.startsWith("http")) { a.target = "_blank"; a.rel = "noopener"; }
        return el("li", null, a);
      })
    );
  }

  // Without a form endpoint the visitor's own mail / WhatsApp carries their
  // contact details, so the extra field only appears when we send directly.
  if (contact.formEndpoint) {
    $$("[data-reach]").forEach((field) => {
      field.hidden = false;
      $("input", field).required = true;
    });
  }

  async function onSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const status = $(".status", form);
    form.classList.add("touched");
    if (!form.checkValidity()) {
      status.textContent = t("status.missing");
      const firstInvalid = $(":invalid", form);
      if (firstInvalid) firstInvalid.focus();
      return;
    }

    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const message = String(data.get("message") || "").trim();
    const reach = String(data.get("contact") || "").trim();
    const watch = watches.find((w) => w.id === data.get("watch"));

    const subject =
      form.dataset.kind === "custom" ? t("subject.custom")
      : watch ? `${t("subject.product")}: ${watch.name}`
      : t("subject.general");
    const lines = [];
    if (watch) lines.push(`${t("form.watch")}: ${watch.name}`, "");
    lines.push(message, "", "— " + name);
    if (reach) lines.push(reach);
    const body = lines.join("\n");

    const via = (e.submitter && e.submitter.value) || (contact.formEndpoint ? "form" : contact.email ? "email" : "whatsapp");

    if (via === "form") {
      const buttons = $$("button", form);
      buttons.forEach((b) => (b.disabled = true));
      status.textContent = t("status.sending");
      try {
        const res = await fetch(contact.formEndpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({ subject, name, contact: reach, message: body }),
        });
        if (!res.ok) throw new Error(String(res.status));
        form.reset();
        form.classList.remove("touched");
        status.textContent = t("status.sent");
      } catch (_) {
        status.textContent = t("status.error");
      } finally {
        buttons.forEach((b) => (b.disabled = false));
      }
      return;
    }

    if (via === "whatsapp") {
      window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(subject + "\n\n" + body)}`, "_blank", "noopener");
    } else {
      location.href = `mailto:${contact.email}?subject=${encodeURIComponent("Tren — " + subject)}&body=${encodeURIComponent(body)}`;
    }
    status.textContent = t("status.opened");
  }

  $$(".inquiry").forEach((form) => form.addEventListener("submit", onSubmit));

  /* ───────── Start ───────── */

  $("#year").textContent = new Date().getFullYear();
  renderLinks();
  applyLang();
  route();
})();
