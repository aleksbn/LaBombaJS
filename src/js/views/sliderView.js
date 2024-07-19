import View from './view.js';

class SliderView extends View {
  _curSlide = 0;
  _parentElement = document.querySelector('.slider');
  _slides = document.querySelectorAll('.slide');
  _currentlyActiveSlideOfSlider = 'slide--studios';
  _maxSlide = this._slides.length;

  /**
   * Adds a wheel event listener to the slider parent element.
   * When a wheel event is triggered, the provided handler function is called.
   *
   * @param {function} handler - The handler function to be called when a wheel event is triggered.
   */
  addHandlerWheel(handler) {
    // Add a wheel event listener to the slider parent element
    this._parentElement.addEventListener('wheel', function (e) {
      // Call the provided handler function and pass the event object as an argument
      handler(e);
    });
  }

  /**
   * Initializes the SliderView instance.
   * Sets the initial state of the slides by setting their transform property to translateX(i * 100%).
   */
  constructor() {
    super(); // Call the constructor of the parent class

    // Iterate over each slide and set its transform property to translateX(i * 100%)
    this._slides.forEach(
      (slide, index) => {
        slide.style.transform = `translateX(${index * 100}%)`;
      }
    );
  }

  /**
   * Updates the current slide and adjusts the transform property of each slide.
   *
   * @param {number} slide - The index of the slide to navigate to.
   */
  goToSlide(slide) {
    // Update the current slide
    this._curSlide = slide;

    // Update the currently active slide of the slider
    this._currentlyActiveSlideOfSlider =
      slide === 1 ? 'slide--events' : 'slide--studios';

    // Iterate over each slide and adjust its transform property
    this._slides.forEach(
      (s, i) => {
        // Calculate the new transform value based on the current slide and slide index
        const newTransformValue = `${100 * (i - slide)}%`;

        // Update the transform property of the slide
        s.style.transform = `translateX(${newTransformValue})`;
      }
    );
  }

  /**
   * Changes the current slide based on the direction of the swipe.
   * 
   * @param {string} dir - The direction of the swipe. Can be either 'left' or 'right'.
   */
  changeSlide(dir) {
    // Determine the new current slide based on the direction of the swipe
    this._curSlide =
      dir === 'left'
        ? this._curSlide === 0
          ? this._maxSlide - 1 // If the current slide is the first slide, go to the last slide
          : this._curSlide - 1 // Otherwise, go to the previous slide
        : this._curSlide === this._maxSlide - 1
          ? 0 // If the current slide is the last slide, go to the first slide
          : this._curSlide + 1; // Otherwise, go to the next slide

    // Scroll to the top of the slider
    this._slides.scrollTop = 0;

    // Update the current slide and adjust the transform property of each slide
    this.goToSlide(this._curSlide);
  }

  /**
   * Scrolls the slider view by the given position and changes to the slide at the given index.
   *
   * @param {number} position - The number of pixels to scroll.
   * @param {number} slide - The index of the slide to navigate to.
   */
  scrollToPosition(position, slide) {
    // Scroll the slider view by the given position
    this._parentElement.scrollTop += position;

    // Change to the slide at the given index
    this.goToSlide(slide);
  }

/**
   * Stops the wheel event from scrolling when reaching the top or bottom of the slider.
   * 
   * @param {WheelEvent} e - The wheel event object.
   */
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

  /**
   * Scrolls the parent element to the top.
   *
   * This function scrolls the parent element to the top by setting the
   * `scrollTop` property to 0.
   */
  scrollToTheTop() {
    // Scroll the parent element to the top
    // Setting the `scrollTop` property to 0 scrolls the element to the top.
    this._parentElement.scrollTop = 0;
  }
}

export default new SliderView();
