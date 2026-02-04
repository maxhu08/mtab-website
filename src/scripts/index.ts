(async () => {
  const owner = "maxhu08";
  const repo = "mtab";
  const apiUrl = `https://api.github.com/repos/${owner}/${repo}/releases/latest`;

  try {
    const res = await fetch(apiUrl, {
      headers: { Accept: "application/vnd.github+json" }
    });
    if (!res.ok) throw new Error(`GitHub API error: ${res.status}`);

    const data = await res.json();
    const tag = (data.tag_name || "").trim();
    const version = tag || "unknown";
    const releaseUrl = data.html_url;

    const textEl = document.getElementById("release-text");
    const badgeEl = document.getElementById("release-badge");

    if (textEl && badgeEl) {
      textEl.textContent = `RELEASE ${version}`;

      if (releaseUrl) {
        badgeEl.addEventListener("click", () => {
          window.open(releaseUrl, "_blank");
        });
      }

      requestAnimationFrame(() => {
        badgeEl.classList.remove("opacity-0", "translate-y-2");
        badgeEl.classList.add("opacity-100", "translate-y-0");
      });
    }
  } catch (e) {
    console.error(e);
  }
})();

(() => {
  const el = document.getElementById("rotating-text");
  if (!el) return;

  const messages = [
    '🧠 the <span class="text-emerald-500">modern</span> new tab',
    '🔒 <span class="text-lime-500">privacy</span> focused',
    '🎨 customized to <span class="text-pink-500">you</span>',
    '⚙️ <span class="text-yellow-500">endless</span> customizations',
    '⚙️ <span class="text-teal-300">qol</span> features'
  ];

  let i = 0;

  const show = () => {
    el.innerHTML = messages[i];
    el.classList.remove("opacity-0", "translate-y-4");
    el.classList.add("opacity-100", "translate-y-0");
  };

  const hide = (cb: () => void) => {
    el.classList.remove("opacity-100", "translate-y-0");
    el.classList.add("opacity-0", "translate-y-4");

    const onEnd = (e: TransitionEvent) => {
      if (e.target !== el) return;
      el.removeEventListener("transitionend", onEnd);
      cb();
    };

    el.addEventListener("transitionend", onEnd);
  };

  requestAnimationFrame(show);

  setInterval(() => {
    hide(() => {
      i = (i + 1) % messages.length;
      requestAnimationFrame(show);
    });
  }, 3000);
})();

(() => {
  const el = document.getElementById("preview");
  if (!el) return;

  requestAnimationFrame(() => {
    el.classList.remove("opacity-0", "translate-y-4");
    el.classList.add("opacity-100", "translate-y-0");
  });
})();
