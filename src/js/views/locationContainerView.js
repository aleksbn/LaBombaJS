class LocationContainerView {
  _curContainer = 0;
  _locationContainer = document.querySelector('.locations__container');
  _containers = document.querySelectorAll('.container');
  _toggleDisplayDescriptionButton = document.querySelector(
    '.btn--description-control'
  );

  /**
   * Adds a click event listener to the toggle display description button.
   * @param {function} handler - The function to be called when the button is clicked
   */
  addHandlerClick(handler) {
    // Add a click event listener to the button that toggles the display of the description
    this._toggleDisplayDescriptionButton.addEventListener('click', handler);
  }

  /**
   * Initializes the LocationContainerView instance.
   * Sets the initial state of the containers by setting their transform property to translateY(i * 90%).
   */
  constructor() {
    // Iterate over each container and set its transform property to translateY(i * 90%)
    this._containers.forEach(
      (c, i) => (c.style.transform = `translateY(${i * 90}%)`)
    );
  }


  /**
   * Moves the location container to the specified index.
   *
   * @param {number} cont - The index of the container to move to.
   */
  goToContainer(cont) {
    // Set the current container index to the specified index
    this._curContainer = cont;

    // Iterate over each container and set its transform property to translateY(i * 90%) - cont * 90%
    // This moves the container to the specified index
    this._containers.forEach(
      (s, i) => (s.style.transform = `translateY(${90 * (i - cont)}%)`)
    );
  }


  /**
   * Toggles the display details button between 'Hide details' and 'Display details'.
   * Updates the innerHTML of the button to reflect the current state.
   */
  toggleDescriptionButton() {
    // Get the current innerHTML of the button and trim any leading/trailing white space
    const currentInnerHTML = this._toggleDisplayDescriptionButton.innerHTML.trim();

    // If the current innerHTML is 'Display details', set it to 'Hide details', otherwise set it to 'Display details'
    const newInnerHTML = currentInnerHTML === 'Display details' ? 'Hide details' : 'Display details';

    // Update the innerHTML of the button to reflect the new state
    this._toggleDisplayDescriptionButton.innerHTML = newInnerHTML;
  }

  /**
   * Toggles the disabled state of the display details button based on the provided parameter.
   * If the parameter is true, the button is disabled and the innerHTML is set to 'Display details'.
   * If the parameter is false, the button is enabled.
   *
   * @param {boolean} enable - Whether or not to enable the button.
   */
  toggleIfButtonIsDisabled(enable) {
    // If the parameter is true, disable the button and set the innerHTML to 'Display details'
    if (enable) {
      this._toggleDisplayDescriptionButton.setAttribute('disabled', '');
      this._toggleDisplayDescriptionButton.innerHTML = 'Display details';
    } else {
      // Otherwise, enable the button by removing the 'disabled' attribute
      this._toggleDisplayDescriptionButton.removeAttribute('disabled');
    }
  }
}

export default new LocationContainerView();
