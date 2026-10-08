(function () {
  'use strict';

  var toggle = document.querySelector('.navbar__toggle');
  var menu = document.getElementById('primary-nav');
  if (!toggle || !menu) return;

  var desktop = window.matchMedia('(min-width: 1200px)');

  function isOpen() {
    return toggle.getAttribute('aria-expanded') === 'true';
  }

  function setOpen(open) {
    toggle.setAttribute('aria-expanded', String(open));
    menu.classList.toggle('is-open', open);
  }

  toggle.addEventListener('click', function () {
    setOpen(!isOpen());
  });

  menu.addEventListener('click', function (e) {
    if (e.target.closest('a')) setOpen(false);
  });

  document.addEventListener('click', function (e) {
    if (isOpen() && !menu.contains(e.target) && !toggle.contains(e.target)) setOpen(false);
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && isOpen()) {
      setOpen(false);
      toggle.focus();
    }
  });

  desktop.addEventListener('change', function (e) {
    if (e.matches) setOpen(false);
  });
})();
