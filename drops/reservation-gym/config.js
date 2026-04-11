(function (global) {
  "use strict";

  const RESTAURANTS = [
    // `logoSrc` can be a local path (recommended) or a remote URL.
    // If local files are missing, the UI falls back to `assets/logos/placeholder.svg`.
    { key: "naru", name: "Naru Noodle Bar", logoSrc: "./assets/logos/naru.png" },
    { key: "papus", name: "Papu's", logoSrc: "./assets/logos/papus.png" },
    { key: "guerrilla", name: "Guerrilla Diner", logoSrc: "./assets/logos/guerrilla-diner.png" },
    { key: "irctc", name: "IRCTC Tatkal", logoSrc: "./assets/logos/irctc.png" },
  ];

  const APP_COPY = {
    title: "Reservation Gym",
    subtitle: "Train for the reservation drop: fill fast, stay calm, get the table.",
    cta: "Take test now",
  };

  // Placeholders — you said you’ll provide final copy.
  // Keep these arrays short and punchy so they feel like real notifications/ads.
  const HARD_MODE_COPY = {
    whatsappToasts: [
      { title: "WhatsApp", body: "Group: “Tonight?” — 23 unread" },
      { title: "WhatsApp", body: "Mom: “Call me when free.”" },
      { title: "WhatsApp", body: "Friend: “Slots open in 5… 4… 3…”" },
      { title: "WhatsApp", body: "“Where are you?” — 7 missed calls" },
      { title: "WhatsApp", body: "New message: “Send screenshot.”" },
    ],
    ads: [
      { title: "LIMITED TIME", body: "Unlock VIP reservations in 2 minutes. Definitely not a scam." },
      { title: "CONGRATS!", body: "You’ve been selected for an exclusive deal (click fast)." },
      { title: "HOT DEAL", body: "Buy 1 get 1… anxiety." },
      { title: "CRYPTO ALERT", body: "Your wallet is… wait, wrong tab." },
    ],
  };

  global.ReservationGymConfig = {
    RESTAURANTS,
    APP_COPY,
    HARD_MODE_COPY,
  };
})(typeof window !== "undefined" ? window : globalThis);
