const header = document.querySelector("[data-header]");
const nav = document.querySelector("[data-nav]");
const navToggle = document.querySelector("[data-nav-toggle]");

if (window.lucide) {
  window.lucide.createIcons();
}

const syncHeader = () => {
  if (!header) return;
  header.classList.toggle("is-scrolled", window.scrollY > 10);
};

syncHeader();
window.addEventListener("scroll", syncHeader, { passive: true });

if (navToggle && nav) {
  navToggle.addEventListener("click", () => {
    const nextState = !nav.classList.contains("is-open");
    nav.classList.toggle("is-open", nextState);
    document.body.classList.toggle("nav-open", nextState);
    navToggle.setAttribute("aria-expanded", String(nextState));
    navToggle.setAttribute("aria-label", nextState ? "Close navigation" : "Open navigation");
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("is-open");
      document.body.classList.remove("nav-open");
      navToggle.setAttribute("aria-expanded", "false");
      navToggle.setAttribute("aria-label", "Open navigation");
    });
  });
}

const revealItems = document.querySelectorAll("[data-reveal]");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.16 }
  );

  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}

const countItems = document.querySelectorAll("[data-count]");

if ("IntersectionObserver" in window) {
  const counterObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const node = entry.target;
        const target = Number(node.dataset.count || 0);
        const suffix = node.textContent.includes("+") ? "%+" : "%";
        const duration = 900;
        const start = performance.now();

        const tick = (now) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          const value = Math.round(target * eased);
          node.textContent = `${value}${suffix}`;

          if (progress < 1) {
            requestAnimationFrame(tick);
          } else {
            node.textContent = `${target}${suffix}`;
          }
        };

        requestAnimationFrame(tick);
        counterObserver.unobserve(node);
      });
    },
    { threshold: 0.6 }
  );

  countItems.forEach((item) => counterObserver.observe(item));
}
