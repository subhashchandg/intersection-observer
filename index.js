document.addEventListener('DOMContentLoaded', () => {
  let callThisBack = (entries, ob) => {
    entries.forEach((element) => {
      if (element.isIntersecting) {
        element.target.classList.remove('inactive');
      } else {
        element.target.classList.add('inactive');
      }
    });
  };
  let options = {
    rootMargin: '-100px 0px -50px 0px',
    threshold: 0,
  };
  let observer = new IntersectionObserver(callThisBack, options);
  document.querySelectorAll('#root > p').forEach((el) => {
    observer.observe(el);
  });
});
