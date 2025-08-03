

document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll('.section');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        entry.target.classList.remove('hidden');
       } else  {
        entry.target.classList.remove('show');
        entry.target.classList.add('hidden');
       }
    });
  }, {
    threshold: 0.251112 // Trigger when 20% of section is visible
  });
  

  sections.forEach(section => {
    observer.observe(section);
  });
});
