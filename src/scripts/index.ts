(async () => {
  const owner = "maxhu08";
  const repo = "mtab";
  const url = `https://api.github.com/repos/${owner}/${repo}/releases/latest`;

  try {
    const res = await fetch(url, {
      headers: { Accept: "application/vnd.github+json" }
    });
    if (!res.ok) throw new Error(`GitHub API error: ${res.status}`);

    const data = await res.json();
    const tag = (data.tag_name || "").trim();
    const version = tag.replace(/^v/i, "") || "unknown";

    const textEl = document.getElementById("release-text");
    const badgeEl = document.getElementById("release-badge");

    if (textEl && badgeEl) {
      textEl.textContent = `RELEASE ${version}`;

      // next frame so transition triggers
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
  const el = document.getElementById("preview");
  if (!el) return;

  requestAnimationFrame(() => {
    el.classList.remove("opacity-0", "translate-y-4");
    el.classList.add("opacity-100", "translate-y-0");
  });
})();
