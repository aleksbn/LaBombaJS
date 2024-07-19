import View from './view.js';

class SliderStudiosView extends View {
  _parentElement = document.querySelector('.slide--studios');

  /**
   * Adds an event listener to the window object that listens for the 'load' event. This event is fired when the page is fully loaded.
   * @param {function} handler The function to be called when the event is fired.
   */
  addHandlerRender(handler) {
    window.addEventListener('load', handler);
  }


/**
   * Adds an event listener to the parent element that listens for the 'click' event.
   * 
   * @param {function} handler The function to be called when the 'click' event is triggered.
   */
  addHandlerClick(handler) {
    this._parentElement.addEventListener('click', handler);
  }

  /**
   * Generates the HTML markup for the studios view.
   * If there are studios in the data, it generates a list of studios with each studio's name and address.
   * If there are no studios in the data, it returns a message to check the options and try again.
   *
   * @return {string} The HTML markup for the studios view
   */
  _generateMarkup() {
    // Check if there are any studios in the data
    if (this._data.length > 0) {
      // Initialize the studios HTML with a heading
      let studiosHTML = '<h3><i>Schools/clubs/studios</i></h3>';
      // Generate the HTML for each studio and concatenate it to the studios HTML
      this._data.forEach(ds => (studiosHTML += this._generateStudio(ds)));
      // Return the generated studios HTML
      return studiosHTML;
    } else {
      // Return a message to check the options and try again
      return '<h1>There are no selected studios, schools or clubs. Check the options you selected to filter out and try again.</h1>';
    }
  }

  /**
   * Generates the HTML markup for a single studio.
   *
   * @param {Object} ds - The studio object containing the studio's data.
   * @return {string} The HTML markup for the studio.
   */
  _generateStudio(ds) {
    // Initialize the studio HTML
    let text = '';
    // Add the studio's name and ID to the HTML
    text += `<div class="slide__item" data-id="${ds.id}" data-slider="0"><h2>${ds.name}</h2>`;
    // Add the studio's address to the HTML
    text += `Address: <h3>${ds.address}</h3>Types: `;
    // Add the studio's types to the HTML, separated by commas
    ds.type.forEach(t => (text += `<b>${t}</b>, `));
    // Remove the last comma from the HTML
    text = text
      .split('')
      .slice(0, text.length - 2)
      .join('');
    // Close the studio HTML
    text += '</div>';
    // Return the generated studio HTML
    return text;
  }

  /**
   * Highlights a specific studio by scrolling to it and adding a class to it.
   *
   * @param {number} id - The ID of the studio to highlight.
   * @return {number} The number of the slider the highlighted studio is in (0 or 1).
   */
  highlightElement(id) {
    // Loop through all list elements and check if the ID matches the given ID
    document.querySelectorAll('.slide__item').forEach(el => {
      if (+el.dataset.id === +id) {
        // Calculate the target position to scroll to
        const slider = document.querySelector('.slider');
        const sliderNumber = +el.dataset.slider;
        const targetPosition =
          el.getBoundingClientRect().top - slider.getBoundingClientRect().top;

        // Scroll to the target position
        slider.scrollTop += targetPosition;

        // Add the 'selected' class to the highlighted element
        el.classList.add('selected');

        // Return the number of the slider the highlighted studio is in
        return sliderNumber;
      }
    });
  }


  /**
   * Finds the closest .slide__item element to the clicked element
   *
   * @param {MouseEvent} e - The click event
   * @returns {HTMLElement | null} The closest .slide__item element or null if none found
   */
  findClickedElement(e) {
    return e.target.closest('.slide__item');
  }


  /**
   * Clears all list elements of the 'selected' class.
   *
   * This function loops through all child elements of the parent element and
   * removes the 'selected' class from them.
   */
  clearElements() {
    const slideItems = Array.from(this._parentElement.childNodes);

    // Loop through all elements and remove the 'selected' class
    slideItems.forEach(item => item.classList.remove('selected'));
  }
}

export default new SliderStudiosView();
