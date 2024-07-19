import { DEFAULT_ANIMATION_DURATION } from '../config.js';

class SidebarView {
  _curSlideOfSidebar = 0;
  _curSliderPosition = -1;
  _rootElement = document.querySelector('.sidebar');
  _sidebarRows = document.querySelectorAll('.sidebar__row');
  _toggleFiltersButton = document.querySelector('.btn--toggle-filters');
  _toggleButton = document.querySelector('.show-hide-btn');
  _showHideArrows = Array.from(document.querySelectorAll('.show-hide-arrow'));

  /**
   * Initializes the SidebarView instance.
   * Sets the initial state of the sidebar rows by setting their transform property to translateY(i * 100%).
   * Also hides the second sidebar row.
   */
  constructor() {
    // Iterate over each sidebar row and set its transform property to translateY(i * 100%)
    this._sidebarRows.forEach(
      (sidebarRow, index) => {
        sidebarRow.style.transform = `translateY(${index * 100}%)`;
      }
    );

    // Hide the second sidebar row
    this._sidebarRows[1].classList.toggle('hidden');
  }

/**
 * Adds an event listener to the toggle filters button.
 * 
 * @param {Function} handler - The event handler function to be executed when the button is clicked.
 */
addHandlerToggleFilters(handler) {
    this._toggleFiltersButton.addEventListener('click', handler);
}

  /**
   * Adds an event listener to the toggle sidebar button.
   * 
   * @param {Function} handler - The event handler function to be executed when the button is clicked.
   */
  addHandlerToggleSidebar(handler) {
    /**
     * Event handler for the click event on the toggle sidebar button.
     * Calls the provided handler function.
     * 
     * @param {MouseEvent} event - The click event.
     */
    const toggleSidebarHandler = (event) => {
      handler(event);
    };

    this._toggleButton.addEventListener('click', toggleSidebarHandler);
  }

  /**
   * Toggles the sidebar visibility by changing its position and transforming the buttons.
   */
  toggleSidebar() {
    // Toggle the slider position
    this._curSliderPosition = this._curSliderPosition === -1 ? 0 : -1;

    // Update the transform property of the sidebar
    this._rootElement.style.transform = `translateX(${
      this._curSliderPosition * 100
    }%)`;

    // Update the transform property of the toggle button
    this._toggleButton.style.transform = `translateX(${
      (this._curSliderPosition + 1) * this._rootElement.clientWidth
    }px)`;

    // Toggle the 'excluded' class of the arrows
    this._showHideArrows.forEach(a => a.classList.toggle('excluded'));
  }

  /**
   * Toggles the slider visibility by changing its position and transforming the rows.
   * @param {number} [prevSlide] - The index of the previous slide.
   */
  toggleSlider(prevSlide = this._curSlideOfSidebar) {
    // Toggle the current slide
    this._curSlideOfSidebar = this._curSlideOfSidebar === 0 ? 1 : 0;

    // Remove the hidden class from the current slide
    this._sidebarRows[this._curSlideOfSidebar].classList.remove('hidden');

    // Update the transform property of each row
    this._sidebarRows.forEach(
      (s, i) =>
        (s.style.transform = `translateY(${
          100 * (i - this._curSlideOfSidebar)
        }%)`)
    );

    // Add the hidden class to the previous slide after the animation duration
    setTimeout(() => {
      this._sidebarRows[prevSlide].classList.add('hidden');
    }, DEFAULT_ANIMATION_DURATION);
  }

}

export default new SidebarView();
