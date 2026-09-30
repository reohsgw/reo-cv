const button = document.getElementById('presentation');
button.addEventListener('click', () => {
  const enabled = document.body.classList.toggle('presenting');
  button.setAttribute('aria-pressed', String(enabled));
  button.textContent = enabled ? '발표 모드 종료' : '발표 모드';
});
const links = [...document.querySelectorAll('nav a')];
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        links.forEach(link => {
          const active = link.hash === '#' + entry.target.id;
          link.classList.toggle('active', active);
          if (active) link.setAttribute('aria-current', 'location');
          else link.removeAttribute('aria-current');
        });
      }
    }
  }, { rootMargin: '-15% 0px -55% 0px', threshold: 0 });
  links.forEach(link => observer.observe(document.querySelector(link.hash)));
}
