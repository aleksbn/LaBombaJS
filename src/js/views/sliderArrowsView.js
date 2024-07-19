class SliderArrowsView {
  _curSlide = 0;
  _slides = document.querySelectorAll('.slide');
  _leftArrow = document.querySelector('.slider__arrow--left');
  _rightArrow = document.querySelector('.slider__arrow--right');
  _maxSlide = this._slides.length;

  /**
   * Adds a click event listener to the left or right arrow of a slider.
   * 
   * @param {function} handler - The function to be called when the click event is triggered.
   * @param {string} direction - The direction of the arrow. Can be either 'left' or 'right'.
   */
  addHandlerArrowClick(handler, direction) {
    if (direction === 'left') {
      // Add a click event listener to the left arrow
      this._leftArrow.addEventListener('click', function () {
        // Call the provided handler function and pass the direction as an argument
        handler('left');
      });
    } else {
      // Add a click event listener to the right arrow
      this._rightArrow.addEventListener('click', function () {
        // Call the provided handler function and pass the direction as an argument
        handler('right');
      });
    }
  }
}

export default new SliderArrowsView();
