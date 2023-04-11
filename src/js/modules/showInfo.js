export default class ShowInfo {
  constructor(triggers) {
    this.btns = document.querySelectorAll(triggers);
  }

  init() {
    this.btns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        try {
          const sibling = btn.closest('.module__info-show').nextElementSibling;

          if (sibling.style.display == 'block') {
            sibling.classList.remove('fadeInDown');
            sibling.classList.add('fadeOutUp');

            btn.style.cssText = `
            transition: all 700ms ease;
            background: #9ec73d;
          `;

            setTimeout(() => {
              sibling.style.display = 'none';
              sibling.classList.remove('animated', 'fadeOutUp');
            }, 1000);
          } else {

            btn.style.cssText = `
            transition: all 700ms ease;
            background: #bf1919;
          `;

            sibling.style.display = 'block';
            sibling.classList.add('animated', 'fadeInDown');
          }
        } catch (e) { }
      });
    });
  }
}