import MainSlider from "./modules/slider/slider-main";
import MiniSlider from "./modules/slider/slider-mini";
import VideoPlayer from "./modules/playVideo";
import Differenc from "./modules/differenc";
import Form from "./modules/forms";


window.addEventListener('DOMContentLoaded', () => {
  'use strict';

  const slider = new MainSlider({ btns: '.next', container: '.page' });
  slider.render();

  const modulePageSlider = new MainSlider({ btns: '.next', container: '.moduleapp' });
  modulePageSlider.render();

  const showUpSlider = new MiniSlider({
    container: '.showup__content-slider',
    prev: '.showup__prev',
    next: '.showup__next',
    activeClass: 'card-active',
    animate: true
  });
  showUpSlider.init();

  const moduleSlider = new MiniSlider({
    container: '.modules__content-slider',
    prev: '.modules__info-btns .slick-prev',
    next: '.modules__info-btns .slick-next',
    activeClass: 'card-active',
    animate: true,
    autoplay: true
  });
  moduleSlider.init();

  const feedSlider = new MiniSlider({
    container: '.feed__slider',
    prev: '.feed__slider .slick-prev',
    next: '.feed__slider .slick-next',
    activeClass: 'feed__item-active'
  });
  feedSlider.init();

  const player = new VideoPlayer('.showup .play', '.overlay');
  player.init();

  new Differenc('.officerold', '.officernew', '.officer__card-item').init();

  new Form('.form').init();
});