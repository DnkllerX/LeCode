
  // Slider
  let current = 0;
  const total = 3;
  const slidesEl = document.getElementById('slides');
  const dots = document.querySelectorAll('.dot');
  function goSlide(n) {
    current = ((n % total) + total) % total;
    slidesEl.style.transform = 'translateX(-' + (current * 33.333) + '%)';
    dots.forEach((d, i) => d.classList.toggle('active', i === current));
  }
  function changeSlide(dir) { goSlide(current + dir); }
  setInterval(() => changeSlide(1), 5500);

  // Countdown to Sep 1 2025
  function updateCountdown() {
    const target = new Date('2025-09-01T00:00:00+07:00');
    const now = new Date();
    const diff = target - now;
    if (diff <= 0) {
      ['cd-days','cd-hrs','cd-min'].forEach(id => document.getElementById(id).textContent = '00');
      return;
    }
    document.getElementById('cd-days').textContent = String(Math.floor(diff / 86400000)).padStart(2,'0');
    document.getElementById('cd-hrs').textContent = String(Math.floor((diff % 86400000) / 3600000)).padStart(2,'0');
    document.getElementById('cd-min').textContent = String(Math.floor((diff % 3600000) / 60000)).padStart(2,'0');
  }
  updateCountdown();
  setInterval(updateCountdown, 30000);

  // Responsive
  function checkLayout() {
    const el = document.querySelector('.events-layout');
    if (el) el.style.gridTemplateColumns = window.innerWidth < 900 ? '1fr' : '1fr 360px';
  }
  checkLayout();
  window.addEventListener('resize', checkLayout);
