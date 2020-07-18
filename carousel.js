document.addEventListener('DOMContentLoaded', () => {
  let options = {
    root: null,
    rootMargin: '0px -50px 0px 0px',
    threshold: 0,
  };
  const callback = (entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.src = entry.target.dataset.src;
        entry.target.classList.add('inactive');
      }
    });
  };

  let observer = new IntersectionObserver(callback, options);

  const container = document.querySelector('#root');
  fetch('https://picsum.photos/v2/list?page=2&limit=100')
    .then((response) => response.json())
    .then((data) => {
      data.forEach((element) => {
        let div = document.createElement('div');
        let img = document.createElement('img');
        img.dataset.src = element.download_url;
        img.classList.add('small-image');
        div.appendChild(img);
        container.append(div);
      });
      setTimeout(() => {
        let images = container.querySelectorAll('img');
        images.forEach((image) => observer.observe(image));
      }, 1000);
    });
});
