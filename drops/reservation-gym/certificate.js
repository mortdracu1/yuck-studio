(function (global) {
  "use strict";

  function clamp(n, min, max) {
    return Math.max(min, Math.min(max, n));
  }

  function formatSeconds(seconds) {
    const rounded = Math.round(seconds * 10) / 10;
    return `${rounded.toFixed(1)}s`;
  }

  function computeTier(seconds, mode) {
    const isHard = mode === "hard";
    const hardBonus = isHard ? 6 : 0;
    // A touch generous for hard-mode chaos.
    if (seconds <= 25) return { tier: "S", probability: clamp(92 + hardBonus, 0, 99) };
    if (seconds <= 40) return { tier: "A", probability: clamp(78 + hardBonus, 0, 99) };
    if (seconds <= 60) return { tier: "B", probability: clamp(55 + hardBonus, 0, 99) };
    if (seconds <= 90) return { tier: "C", probability: clamp(33 + hardBonus, 0, 99) };
    return { tier: "D", probability: clamp(12 + hardBonus, 0, 99) };
  }

  function pickRoast(tier, restaurantName) {
    const rn = restaurantName || "that place";
    const restaurantSpecific = {
      "Naru Noodle Bar": {
        C: [
          `Bro just eat Maggi. Naru is beyond you.`,
          `Naru drops are a sport. You’re currently stretching.`,
        ],
        D: [
          `Naru? Please. Start with instant noodles and work your way up.`,
          `You’d lose a Naru drop to someone typing with their elbow.`,
        ],
      },
      "Papu's": {
        C: [
          `At this pace, Papu’s will turn into a memory before you hit “Submit”.`,
          `Papu’s is calling… and you’re sending it to voicemail.`,
        ],
        D: [
          `Papu’s isn’t hard. You’re just slow.`,
          `Try booking confidence first. Then Papu’s.`,
        ],
      },
      "Guerrilla Diner": {
        C: [
          `Guerrilla Diner is guerilla. You’re… stationary.`,
          `By the time you finished, the gorilla booked your table.`,
        ],
        D: [
          `Guerrilla Diner takes no prisoners. Including your time.`,
          `That form smoked you. The gorilla’s laughing.`,
        ],
      },
      "IRCTC Tatkal": {
        C: [
          `Tatkal eats hesitation for breakfast. You served a buffet.`,
          `IRCTC laughed, timed out, and logged you out.`,
        ],
        D: [
          `Tatkal? You’re not booking a ticket. You’re writing a novel.`,
          `IRCTC: “Session expired.” You: “Fair.”`,
        ],
      },
    };

    const roastsByTier = {
      S: [
        `You’re built for the drop.`,
        `That form didn’t stand a chance.`,
        `Okay speedrunner. Respect.`,
      ],
      A: [
        `Fast. Not flawless. Still dangerous.`,
        `You’ll eat well tonight.`,
        `Strong hands. Minor hesitation.`,
      ],
      B: [
        `Decent. But the drop is ruthless.`,
        `You’re mid—but recoverable.`,
        `Not bad. Not “${rn}” good either.`,
      ],
      C: [
        `Bro just eat Maggi. ${rn} is beyond you.`,
        `You hesitated. The table vanished.`,
        `By the time you typed your email, it was sold out.`,
      ],
      D: [
        `Respectfully… stay home.`,
        `You’re not late. You’re next week.`,
        `Maybe try a walk-in. Anywhere. Literally.`,
      ],
    };

    const specific = restaurantSpecific[rn] && restaurantSpecific[rn][tier];
    const list = (specific && specific.length ? specific : null) || roastsByTier[tier] || roastsByTier.D;
    return list[Math.floor(Math.random() * list.length)];
  }

  function drawCertificatePng({
    title,
    name,
    seconds,
    tier,
    probability,
    mode,
    restaurantName,
  }) {
    const width = 1200;
    const height = 675; // 16:9

    const canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext("2d");
    if (!ctx) {
      throw new Error("Canvas not supported.");
    }

    // Background
    const grad = ctx.createLinearGradient(0, 0, width, height);
    grad.addColorStop(0, "#0b1020");
    grad.addColorStop(1, "#161a2a");
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, width, height);

    // Accent glow
    ctx.globalAlpha = 0.35;
    ctx.fillStyle = "#7c3aed";
    ctx.beginPath();
    ctx.ellipse(width * 0.78, height * 0.32, 340, 240, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.globalAlpha = 1;

    // Border
    ctx.strokeStyle = "rgba(255,255,255,0.16)";
    ctx.lineWidth = 2;
    roundRect(ctx, 44, 44, width - 88, height - 88, 22);
    ctx.stroke();

    // Header
    ctx.fillStyle = "rgba(255,255,255,0.85)";
    ctx.font = "600 26px system-ui, -apple-system, Segoe UI, Roboto, Arial";
    ctx.fillText(title, 84, 120);

    ctx.fillStyle = "rgba(255,255,255,0.60)";
    ctx.font = "500 18px system-ui, -apple-system, Segoe UI, Roboto, Arial";
    ctx.fillText(`Mode: ${mode === "hard" ? "Hard" : "Normal"} · Target: ${restaurantName}`, 84, 154);

    // Main numbers
    ctx.fillStyle = "#ffffff";
    ctx.font = "800 92px system-ui, -apple-system, Segoe UI, Roboto, Arial";
    ctx.fillText(`${probability}%`, 84, 280);

    ctx.fillStyle = "rgba(255,255,255,0.70)";
    ctx.font = "700 34px system-ui, -apple-system, Segoe UI, Roboto, Arial";
    ctx.fillText(`Reservation Probability`, 84, 328);

    // Meta
    ctx.fillStyle = "rgba(255,255,255,0.82)";
    ctx.font = "700 34px system-ui, -apple-system, Segoe UI, Roboto, Arial";
    ctx.fillText(`Tier ${tier}`, 84, 420);

    ctx.fillStyle = "rgba(255,255,255,0.65)";
    ctx.font = "600 22px system-ui, -apple-system, Segoe UI, Roboto, Arial";
    ctx.fillText(`Time: ${formatSeconds(seconds)}`, 84, 458);
    ctx.fillText(`Name: ${name || "Anonymous"}`, 84, 492);

    // Roast line
    const roast = pickRoast(tier, restaurantName);
    ctx.fillStyle = "rgba(255,255,255,0.88)";
    ctx.font = "650 28px system-ui, -apple-system, Segoe UI, Roboto, Arial";
    wrapText(ctx, roast, 84, 560, width - 168, 36);

    // Footer
    ctx.fillStyle = "rgba(255,255,255,0.45)";
    ctx.font = "500 18px system-ui, -apple-system, Segoe UI, Roboto, Arial";
    ctx.fillText("reservationgym.in (share link sends people to the test)", 84, height - 86);

    return canvas.toDataURL("image/png");
  }

  function roundRect(ctx, x, y, w, h, r) {
    const radius = Math.min(r, w / 2, h / 2);
    ctx.beginPath();
    ctx.moveTo(x + radius, y);
    ctx.arcTo(x + w, y, x + w, y + h, radius);
    ctx.arcTo(x + w, y + h, x, y + h, radius);
    ctx.arcTo(x, y + h, x, y, radius);
    ctx.arcTo(x, y, x + w, y, radius);
    ctx.closePath();
  }

  function wrapText(ctx, text, x, y, maxWidth, lineHeight) {
    const words = String(text).split(/\s+/g);
    let line = "";
    let currentY = y;
    for (let i = 0; i < words.length; i += 1) {
      const testLine = line ? `${line} ${words[i]}` : words[i];
      const metrics = ctx.measureText(testLine);
      if (metrics.width > maxWidth && line) {
        ctx.fillText(line, x, currentY);
        line = words[i];
        currentY += lineHeight;
      } else {
        line = testLine;
      }
    }
    if (line) {
      ctx.fillText(line, x, currentY);
    }
  }

  global.ReservationGymCertificate = {
    computeTier,
    formatSeconds,
    drawCertificatePng,
  };
})(typeof window !== "undefined" ? window : globalThis);
