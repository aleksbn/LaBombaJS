class SliderArrowsView {
  _curSlide = 0;
  _slides = document.querySelectorAll('.slide');
  _leftArrow = document.querySelector('.slider__arrow--left');
  _rightArrow = document.querySelector('.slider__arrow--right');
  _maxSlide = this._slides.length;

  addHandlerArrowClick(handler, direction) {
    if (direction === 'left') {
      this._leftArrow.addEventListener('click', function () {
        handler('left');
      });
    } else {
      this._rightArrow.addEventListener('click', function () {
        handler('right');
      });
    }
  }
}

export default new SliderArrowsView();
