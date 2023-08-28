import View from './view';

class SliderView extends View {
	_curSlide = 0;
  _parentElement = document.querySelector('.slider');
  _slides = document.querySelectorAll('.slide');
  _currentlyActiveSlideOfSlider = 'slide--studios';
	_maxSlide = this._slides.length;

  addHandlerWheel(handler) {
    this._parentElement.addEventListener('wheel', function (e) {
      handler(e);
    });
  }

  constructor() {
    super();
    this._slides.forEach(
      (s, i) => (s.style.transform = `translateX(${i * 100}%)`)
    );
  }

  goToSlide(slide) {
    this._curSlide = slide;
    this._currentlyActiveSlideOfSlider =
      slide === 1 ? 'slide--events' : 'slide--studios';
    this._slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  }

  changeSlide(dir) {
    this._curSlide =
      dir === 'left'
        ? this._curSlide === 0
          ? this._maxSlide - 1
          : this._curSlide - 1
        : this._curSlide === this._maxSlide - 1
        ? 0
        : this._curSlide + 1;
    this._slides.scrollTop = 0;
    this.goToSlide(this._curSlide);
  }

  scrollToPosition(position, slide) {
    this._parentElement.scrollTop += position;
    this.goToSlide(slide);
  }

  stopsTheWheel(e) {
    if (e.deltaY > 0) {
      const topCoord = [].slice
        .call(
          document.querySelector(`.${this._currentlyActiveSlideOfSlider}`)
            .children
        )
        .slice(-1)[0]
        .getBoundingClientRect().top;
      if (topCoord <= this._parentElement.getBoundingClientRect().top) {
        e.preventDefault();
      }
    }
  }

  scrollToTheTop() {
    this._parentElement.scrollTop = 0;
  }
}

export default new SliderView();
