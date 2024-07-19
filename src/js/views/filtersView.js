import View from './view.js';
import { CapitalCase } from '../helpers.js';

class FiltersView extends View {
  _parentElement = document.querySelector('.form-container');
  _applyFiltersButton = document.querySelector('.btn--filter-apply');

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
   * Adds an event listener to the apply filters button.
   *
   * @param {Function} handler - The function to be executed when the button is clicked.
   */
  addHandlerClickApply(handler) {
    // Attach an event listener to the 'click' event of the apply filters button.
    // When the button is clicked, the provided handler function is called.
    this._applyFiltersButton.addEventListener('click', handler);
  }

  /**
   * Generates the HTML markup for the filters form.
   *
   * @return {string} The generated HTML markup.
   */
  _generateMarkup() {
    // Start generating the HTML markup for the filters form.
    let markup = '<div class="form-container--studios">';
    
    // Generate the HTML markup for the 'types' filter.
    markup += this._loadFilterParts('types');
    markup += '</div><div class="form-container--type-of-events">';
    
    // Generate the HTML markup for the 'events' filter.
    markup += this._loadFilterParts('events');
    markup += '</div><div class="form-container--dances">';
    
    // Generate the HTML markup for the 'dances' filter.
    markup += this._loadFilterParts('dances');
    markup += '</div>';

    // Return the generated HTML markup.
    return markup;
  }

  /**
   * Updates the filters based on the state of the checkboxes in the filters form.
   *
   * @param {Object} filters - The filters object to be updated.
   */
  updateFilters(filters) {
    // Get all the checkboxes in the filters form.
    const checkboxes = [
      ...document.querySelectorAll('.form-control input[type="checkbox"]'),
    ];

    // Iterate over each checkbox and update the corresponding filter.
    checkboxes.forEach(checkbox => {
      const id = checkbox.id; // Get the id of the checkbox.
      const checked = checkbox.checked; // Get the checked state of the checkbox.

      // Update the 'events' filter if the id exists in the filters object.
      if (id in filters.events) {
        filters.events[id] = checked;
      }

      // Update the 'types' filter if the id exists in the filters object.
      if (id in filters.types) {
        filters.types[id] = checked;
      }

      // Update the 'dances' filter if the id exists in the filters object.
      if (id in filters.dances) {
        filters.dances[id] = checked;
      }
    });
  }

  /**
   * Loads the filter parts based on the given type.
   *
   * @param {string} type - The type of filter parts to load.
   * @return {string} - The generated HTML markup for the filter parts.
   */
  _loadFilterParts(type) {
    let markup = ''; // Initialize the markup string.

    // Generate the label based on the type.
    switch (type) {
      case 'types':
        markup += `<label class="form__label">Schools/clubs/studios</label>`;
        break;
      case 'events':
        markup += `<label class="form__label">Events</label>`;
        break;
      case 'dances':
        markup += `<label class="form__label">Preffered dances</label>`;
        break;
    }

    // Iterate over each item in the data array and generate the filter control.
    [...this._data[type]].forEach(
      el => {
        // Generate the HTML markup for the filter control.
        markup += `
					<div class="form-control">
						<input id="${el}" type="checkbox" checked />
						<label>${type === 'types' ? 'Dance ' + el + 's' : CapitalCase(el)}</label>
					</div>
				`;
      }
    );

    // Return the generated HTML markup.
    return markup;
  }
}

export default new FiltersView();
