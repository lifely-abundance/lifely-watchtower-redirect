(() => {
  function revealActiveNavigation() {
    document.querySelectorAll('.wt-nav__inner').forEach((nav) => {
      const active = nav.querySelector('[aria-current="page"]');
      if (!active || nav.scrollWidth <= nav.clientWidth + 2) return;
      nav.scrollLeft = Math.max(0, active.offsetLeft - (nav.clientWidth - active.offsetWidth) / 2);
    });
  }

  function activateStatusSemantics() {
    const errorPattern = /failed|error|could not|unavailable/i;
    document.querySelectorAll('.wt-status').forEach((status) => {
      const update = () => {
        const text = status.textContent.trim();
        status.classList.toggle('wt-status--error', errorPattern.test(text));
        status.title = text;
      };
      update();
      new MutationObserver(update).observe(status, { childList: true, characterData: true, subtree: true });
    });
  }

  window.addEventListener('DOMContentLoaded', () => {
    activateStatusSemantics();
    requestAnimationFrame(revealActiveNavigation);
  }, { once: true });
  window.addEventListener('pageshow', () => requestAnimationFrame(revealActiveNavigation), { once: true });

  let resizeFrame = 0;
  window.addEventListener('resize', () => {
    cancelAnimationFrame(resizeFrame);
    resizeFrame = requestAnimationFrame(revealActiveNavigation);
  }, { passive: true });
})();
