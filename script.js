// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Build the signature "session availability" grid of squares
(function(){
  const grid = document.getElementById('gridSignature');
  if(!grid) return;

  const total = 36;
  // A handful of cells are "filled" to suggest booked/available sessions
  const filledGold = new Set([2, 9, 14, 21, 27, 30]);
  const filledSage = new Set([7, 16, 24]);

  for(let i = 0; i < total; i++){
    const cell = document.createElement('span');
    if(filledGold.has(i)) cell.classList.add('filled');
    if(filledSage.has(i)) cell.classList.add('filled-sage');
    cell.style.animationDelay = (i * 22) + 'ms';
    grid.appendChild(cell);
  }
})();

// Gentle reveal-on-scroll for sections
(function(){
  const targets = document.querySelectorAll('.practice-block, .service-card, .credential-item');
  if(!('IntersectionObserver' in window)){
    return;
  }
  targets.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(14px)';
    el.style.transition = 'opacity .5s ease, transform .5s ease';
  });

  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  targets.forEach(el => io.observe(el));
})();
