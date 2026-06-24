/* =====================================================================
   main.js — 포트폴리오 동작 로직
   (프로젝트/블로그 내용은 data.js 에서 관리합니다)
   ===================================================================== */

/* ---------- 유틸 ---------- */
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];
const esc = (s = "") =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

/* 본문 텍스트(간단 마크다운: ##제목 / -목록 / 빈줄=문단)를 HTML 로 변환 */
function renderContent(text) {
  const lines = text.replace(/\r/g, "").split("\n");
  let html = "";
  let inList = false;
  let paragraph = [];

  const flushP = () => {
    if (paragraph.length) {
      html += `<p>${paragraph.map(esc).join("<br>")}</p>`;
      paragraph = [];
    }
  };
  const closeList = () => {
    if (inList) { html += "</ul>"; inList = false; }
  };

  for (const raw of lines) {
    const line = raw.trim();
    if (!line) { flushP(); closeList(); continue; }
    if (line.startsWith("## ")) {
      flushP(); closeList();
      html += `<h3>${esc(line.slice(3))}</h3>`;
    } else if (line.startsWith("- ")) {
      flushP();
      if (!inList) { html += "<ul>"; inList = true; }
      html += `<li>${esc(line.slice(2))}</li>`;
    } else {
      closeList();
      paragraph.push(line);
    }
  }
  flushP(); closeList();
  return html;
}

/* ---------- 썸네일 ---------- */
function thumbMarkup(p) {
  if (p.thumb) {
    return `<div class="card-thumb"><img src="${p.thumb}" alt="${esc(p.title)}" loading="lazy"></div>`;
  }
  const accent = p.accent || "#ff3f3f";
  return `<div class="card-thumb placeholder" style="--accent:${accent}">
            <span class="thumb-emoji">${p.emoji || "💡"}</span>
          </div>`;
}

/* ====================================================================
   프로젝트 렌더링 (썸네일 카드)
   ==================================================================== */
function renderProjects() {
  const grid = $("#project-grid");
  if (!grid || typeof PROJECTS === "undefined") return;

  grid.innerHTML = PROJECTS.map((p, i) => `
    <article class="project-card reveal" data-index="${i}" tabindex="0" role="button" aria-label="${esc(p.title)} 상세 보기">
      ${thumbMarkup(p)}
      <div class="project-body">
        <div class="project-meta">
          <span class="project-period">${esc(p.period || "")}</span>
        </div>
        <h3>${esc(p.title)}</h3>
        <p class="project-summary">${esc(p.summary || "")}</p>
        <div class="project-stack">
          ${(p.stack || []).slice(0, 4).map(s => `<span class="stack-chip">${esc(s)}</span>`).join("")}
          ${(p.stack || []).length > 4 ? `<span class="stack-chip more">+${p.stack.length - 4}</span>` : ""}
        </div>
        <span class="project-more">상세 보기 →</span>
      </div>
    </article>
  `).join("");

  $$(".project-card", grid).forEach(card => {
    const open = () => openProjectModal(+card.dataset.index);
    card.addEventListener("click", open);
    card.addEventListener("keydown", e => {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); open(); }
    });
  });
  observeReveal();
}

function openProjectModal(i) {
  const p = PROJECTS[i];
  if (!p) return;
  const body = `
    <div class="modal-hero" style="--accent:${p.accent || "#ff3f3f"}">
      ${p.thumb
        ? `<img src="${p.thumb}" alt="${esc(p.title)}">`
        : `<span class="modal-hero-emoji">${p.emoji || "💡"}</span>`}
    </div>
    <div class="modal-content">
      <div class="modal-tagline">
        <span>${esc(p.period || "")}</span> · <span>${esc(p.role || "")}</span>
      </div>
      <h2>${esc(p.title)}</h2>
      <p class="modal-summary">${esc(p.summary || "")}</p>

      <h4 class="modal-h">기술 스택</h4>
      <div class="project-stack">
        ${(p.stack || []).map(s => `<span class="stack-chip">${esc(s)}</span>`).join("")}
      </div>

      <h4 class="modal-h">소개</h4>
      <p class="modal-desc">${esc(p.description || "")}</p>

      ${(p.features && p.features.length) ? `
        <h4 class="modal-h">주요 기능</h4>
        <ul class="modal-features">
          ${p.features.map(f => `<li>${esc(f)}</li>`).join("")}
        </ul>` : ""}

      ${(p.links && p.links.length) ? `
        <div class="modal-links">
          ${p.links.map(l => {
            const live = /demo|live/i.test(l.label);
            return `<a href="${l.url}" target="_blank" rel="noopener" class="link-btn ${live ? "" : "outline"}">${esc(l.label)}</a>`;
          }).join("")}
        </div>` : ""}
    </div>`;
  openModal(body);
}

/* ====================================================================
   블로그 렌더링
   ==================================================================== */
function formatDate(d) {
  const dt = new Date(d + "T00:00:00");
  if (isNaN(dt)) return d;
  return `${dt.getFullYear()}. ${dt.getMonth() + 1}. ${dt.getDate()}`;
}

function renderBlog() {
  const list = $("#blog-list");
  if (!list || typeof BLOG_POSTS === "undefined") return;

  if (!BLOG_POSTS.length) {
    list.innerHTML = `<p class="empty-msg">아직 작성된 글이 없어요.</p>`;
    return;
  }

  // 최신순 정렬 후 블록(카드)형으로 렌더 (클릭 시 실제 블로그 글로 이동)
  const posts = [...BLOG_POSTS].sort((a, b) => (a.date < b.date ? 1 : -1));

  list.innerHTML = posts.map(post => `
    <a class="blog-card reveal" href="${post.url || "https://ilove-ya.tistory.com/"}" target="_blank" rel="noopener">
      <div class="blog-card-top">
        <time class="blog-card-date">${formatDate(post.date)}</time>
        <span class="blog-card-arrow">↗</span>
      </div>
      <h3>${esc(post.title)}</h3>
      <p class="blog-excerpt">${esc(post.excerpt || "")}</p>
      <div class="blog-tags">
        ${(post.tags || []).slice(0, 3).map(t => `<span class="blog-tag">#${esc(t)}</span>`).join("")}
      </div>
    </a>
  `).join("");

  observeReveal();
}

/* ====================================================================
   모달 공통
   ==================================================================== */
const overlay = $("#modal-overlay");
const modalBody = $("#modal-body");

function openModal(html) {
  modalBody.innerHTML = html;
  overlay.classList.add("open");
  document.body.style.overflow = "hidden";
  $("#modal").scrollTop = 0;
}
function closeModal() {
  overlay.classList.remove("open");
  document.body.style.overflow = "";
}
$("#modal-close")?.addEventListener("click", closeModal);
overlay?.addEventListener("click", e => { if (e.target === overlay) closeModal(); });
document.addEventListener("keydown", e => { if (e.key === "Escape") closeModal(); });

/* ====================================================================
   Contact (Web3Forms)
   ==================================================================== */
function initContact() {
  const form = $("#contact-form");
  if (!form) return;
  const status = $("#form-status");
  const btn = $(".submit-btn", form);
  const btnText = $(".btn-text", btn);

  form.addEventListener("submit", async e => {
    e.preventDefault();
    const key = form.access_key.value;

    if (!key || key === "YOUR_ACCESS_KEY_HERE") {
      status.textContent =
        "⚠️ 메일 전송 설정이 필요해요. web3forms.com 에서 Access Key를 발급받아 index.html에 넣어주세요.";
      status.className = "form-status error";
      return;
    }

    btn.disabled = true;
    btnText.textContent = "보내는 중…";
    status.textContent = "";
    status.className = "form-status";

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      });
      const data = await res.json();
      if (data.success) {
        status.textContent = "✅ 메시지가 전송되었어요. 빠르게 답장 드릴게요!";
        status.className = "form-status success";
        form.reset();
      } else {
        throw new Error(data.message || "전송 실패");
      }
    } catch (err) {
      status.textContent = "❌ 전송에 실패했어요. 잠시 후 다시 시도해 주세요.";
      status.className = "form-status error";
    } finally {
      btn.disabled = false;
      btnText.textContent = "메시지 보내기";
    }
  });
}

/* ====================================================================
   인터랙션 (스크롤 등장 / 스포트라이트)
   ==================================================================== */
let revealObserver;
function observeReveal() {
  if (!revealObserver) {
    revealObserver = new IntersectionObserver(entries => {
      entries.forEach(en => {
        if (en.isIntersecting) {
          en.target.classList.add("visible");
          revealObserver.unobserve(en.target);
        }
      });
    }, { threshold: 0.12 });
  }
  $$(".reveal:not(.visible)").forEach(el => revealObserver.observe(el));
}

function initSpotlight() {
  $$("[data-spotlight]").forEach(card => {
    card.addEventListener("mousemove", e => {
      const r = card.getBoundingClientRect();
      card.style.setProperty("--mx", `${e.clientX - r.left}px`);
      card.style.setProperty("--my", `${e.clientY - r.top}px`);
    });
  });
}

/* ---------- 부팅 ---------- */
document.addEventListener("DOMContentLoaded", () => {
  renderProjects();
  renderBlog();
  initContact();
  initSpotlight();
  observeReveal();
});
