import View from './view.js';
import * as model from '../model.js';

class SliderEventsView extends View {
  _parentElement = document.querySelector('.slide--events');

  /**
   * Adds a handler to be executed when the page is fully loaded.
   *
   * @param {function} handler - The function to be executed when the page is loaded.
   */
  addHandlerRender(handler) {
    // Add a handler to be executed when the page is fully loaded.
    // The handler is passed as an argument to this method.
    window.addEventListener('load', handler);
  }

  /**
   * Adds a click event listener to the parent element.
   *
   * @param {function} handler - The function to be executed when the click event is triggered.
   */
  addHandlerClick(handler) {
    // Attach a click event listener to the parent element.
    // When the click event is triggered, the provided handler function is called.
    this._parentElement.addEventListener('click', handler);
  }

/**
   * Generates the markup for events based on the data.
   * @returns {string} The HTML markup for events.
   */
  _generateMarkup() {
    // Check if there are events in the data
    if (this._data.length > 0) {
      let eventsHTML = '<h3><i>Events</i></h3>';
      // Loop through each event in the data and generate the event markup
      this._data.forEach(de => (eventsHTML += this._generateEvent(de)));
      return eventsHTML; // Return the generated HTML markup for events
    } else {
      return '<h1>There are no selected events. Check the options you selected to filter out and try again.</h1>'; // Return a message when there are no events
    }
  }

  /**
   * Generates the HTML markup for a single event.
   * @param {Object} de - The event data.
   * @returns {string} The HTML markup for the event.
   */
  _generateEvent(de) {
    let text = '';
    text += `<div class="slide__item" data-id="${de.id}" data-slider="1">`; // Start of the event div.
    text += `  <h2>${de.title}</h2>`; // Event title.
    text += `  Address: <h3>${de.address}</h3>`; // Event address.
    text += `  Organizer: <h3>`; // Event organizer.
    text += `    ${model.state.danceStudios.filter(s => s.id === de.organizerId)[0].name}`; // Event organizer name.
    text += `  </h3>`; // End of event organizer.
    text += `  Dances: <b>`; // Event dances.
    de.dances.forEach(d => (text += `${d}, `)); // List of event dances.
    text = text
      .split('')
      .slice(0, text.length - 2)
      .join(''); // Remove the trailing comma from the list of event dances.
    text += `</b></div>`; // End of the event div.
    return text;
  }


  /**
   * Highlights a specific event by scrolling to it and adding a class to it.
   *
   * @param {number} id - The ID of the event to highlight.
   * @return {number} The number of the slider the highlighted event is in (0 or 1).
   */
  highlightElement(id) {
    // Loop through all list elements and check if the ID matches the given ID
    document.querySelectorAll('.slide__item').forEach(el => {
      if (+el.dataset.id === +id) {
        // Get the slider element and the slider number
        const slider = document.querySelector('.slider');
        const sliderNumber = +el.dataset.slider;

        // Calculate the target position to scroll to
        const targetPosition =
          el.getBoundingClientRect().top - slider.getBoundingClientRect().top;

        // Scroll to the target position
        slider.scrollTop += targetPosition;

        // Add the 'selected' class to the highlighted element
        el.classList.add('selected');

        // Return the number of the slider the highlighted event is in
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
    // Use the closest() method to find the closest ancestor element that matches the selector
    // and return it as a DOM element or null if there isn't one.
    return e.target.closest('.slide__item');
  }

  /**
   * Clears all list elements of the 'selected' class.
   *
   * This function loops through all child elements of the parent element and
   * removes the 'selected' class from them.
   */
  clearElements() {
    // Get all child elements of the parent element
    const slideItems = Array.from(this._parentElement.childNodes);

    // Loop through all elements and remove the 'selected' class
    slideItems.forEach(item => item.classList.remove('selected'));
  }

}

export default new SliderEventsView();
