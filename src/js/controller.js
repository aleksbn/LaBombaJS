import * as model from './model.js';

import sliderStudiosView from './views/sliderStudiosView.js';
import sliderEventsView from './views/sliderEventsView.js';
import modalView from './views/modalView.js';
import mapView from './views/mapView.js';
import filtersView from './views/filtersView.js';
import sliderView from './views/sliderView.js';
import sliderArrowsView from './views/sliderArrowsView.js';
import locationContainerView from './views/locationContainerView.js';
import sidebarView from './views/sidebarView.js';
import detailsView from './views/detailsView.js';

let mapMarkers = [];

/**
 * Control function for rendering the studios view.
 * 
 * Renders the list of studios in the view.
 */
const controlSliderStudiosView = function () {
  // Generate list of studios
  
  // Render the list of studios in the view
  sliderStudiosView.render(model.state.danceStudios);
};

/**
 * Control function for rendering the events view.
 * 
 * Renders the list of events in the view.
 */
const controlSliderEventsView = function () {
  // Render the list of events in the view
  sliderEventsView.render(model.state.danceEvents);
};

/**
 * Control function for hiding the modal and overlay elements.
 * 
 * This function adds the 'hidden' class to the modal element, which sets the
 * 'display' property to 'none', making it invisible. It also adds the 'hidden'
 * class to the overlay element, which sets the 'display' property to 'none',
 * making it invisible. This results in the modal and overlay elements being
 * hidden from view.
 */
const controlModalView = function () {
  // Add the 'hidden' class to the modal element, which sets the 'display'
  // property to 'none', making it invisible.
  modalView.modal.classList.add('hidden');

  // Add the 'hidden' class to the overlay element, which sets the 'display'
  // property to 'none', making it invisible.
  modalView.overlay.classList.add('hidden');
};

/**
 * Control function for rendering the map and markers.
 * 
 * This function loads the dance events and studios from the model state,
 * generates markers for them, and adds click events to the markers. It also adds
 * a click event to the map to clear all list elements and disable the location
 * button.
 */
const controlMapView = function () {
  // Load the dance events and studios from the model state
  // and generate markers for them
  mapMarkers = mapMarkers.concat([
    ...mapView.loadEventsToMap(model.state.danceEvents),
  ]);
  mapMarkers = mapMarkers.concat([
    ...mapView.loadStudiosToMap(model.state.danceStudios),
  ]);

  // Add click event to the markers
  addClickEventToMapMarkers();

  // Add click event to the map to clear all list elements and disable the
  // location button
  mapView.map.on('click', function () {
    // Clear all list elements
    clearAllListElements();
    // Disable the location button
    locationContainerView.toggleIfButtonIsDisabled(true);
    // Close the description button
    closeDescriptionButton();
  });
};

/**
 * Control function for rendering the filters view.
 * 
 * This function renders the filters view with the current filters from the
 * model state.
 */
const controlFiltersView = function () {
  filtersView.render(model.state.filters);
};

/**
 * Function to control the slider view.
 * 
 * @param {Event} e - The event object triggering the function
 */
const controlSliderView = function (e) {
  // add "stopping the wheel" event
  sliderView.stopsTheWheel(e);
};

/**
 * Control function to toggle the sidebar visibility.
 *
 * This function is triggered when the user clicks on the toggle sidebar button.
 * It toggles the visibility of the sidebar by calling the `toggleSidebar` method
 * of the `sidebarView` object.
 */
const controlToggleSidebar = function () {
  // Toggle the sidebar visibility by calling the `toggleSidebar` method of the `sidebarView` object
  sidebarView.toggleSidebar();
};

/**
 * Control function for controlling the slider view by arrows.
 * 
 * This function is triggered when the user clicks on the slider arrows.
 * It scrolls to the top of the slider and changes the current slide.
 * 
 * @param {string} dir - The direction of the arrow click. Can be either 'left' or 'right'.
 */
const controlSliderArrowsView = function (dir) {
  // Scroll to the top of the slider
  sliderView.scrollToTheTop();
  // Change the current slide
  sliderView.changeSlide(dir);
};

/**
 * Control function to apply the selected filters and update the map and slider views.
 *
 * This function is triggered when the user clicks the "Apply Filters" button.
 * It toggles the visibility of the filters slider, clears all markers from the map,
 * updates the filters, gets the updated studios and events, updates the slider views,
 * renders the updated studios and events to the map, adds click events to the markers,
 * and scrolls to the top of the slider.
 */
const controlApplyFilters = function () {
  // Toggle the visibility of the filters slider
  sidebarView.toggleSlider();

  // Clear all markers from the map
  mapView.clearAllMarkersFromMap(mapMarkers);

  // Update the filters
  filtersView.updateFilters(model.state.filtersSelected);

  // Get the updated studios and events
  const studiosForDisplay = model.updateStudios();
  const eventsForDisplay = model.updateEvents();

  // Update the slider views
  sliderStudiosView.update(studiosForDisplay);
  sliderEventsView.update(eventsForDisplay);

  // Render the updated studios and events to the map
  mapMarkers = [];
  mapMarkers = mapMarkers.concat(mapView.loadStudiosToMap(studiosForDisplay));
  mapMarkers = mapMarkers.concat(mapView.loadEventsToMap(eventsForDisplay));

  // Add click events to the markers
  addClickEventToMapMarkers();

  // Scroll to the top of the slider
  sliderView.scrollToTheTop();
};


/**
 * Control function to toggle the visibility of the filters slider.
 * It does this after a small delay to avoid the slider disappearing too quickly.
 */
const controlSidebarViewToggleFilters = function () {
  /**
   * Callback function that is executed after a delay.
   * Toggles the visibility of the filters slider.
   *
   * @function
   */
  const toggleSliderAfterDelay = function () {
    /**
     * Toggles the visibility of the filters slider.
     *
     * @function
     */
    sidebarView.toggleSlider();
  };

  // Set a delay of 10 milliseconds before executing the callback function
  setTimeout(toggleSliderAfterDelay, 10);
};

/**
 * Control function to handle the click event on the sliderEventsView.
 * It will move to the selected marker on the map and highlight the
 * selected element.
 *
 * @param {MouseEvent} e The event object.
 */
const controlSliderEventsViewClick = function (e) {
  // finding clicked element (sliderEventsView)
  const el = sliderEventsView.findClickedElement(e);

  // finding selected event (model)
  if (!el) return;
  const selectedElement = model.findElement(el.dataset.id);
  model.state.selectedId = el.dataset.id;

  // move to selected marker on the map (mapView)
  mapView.goToMarker(selectedElement.coords);

  // memorizing selected element id ???
  model.state.selectedId = el.dataset.id;

  // clear previous highlighted element
  clearAllListElements();
  locationContainerView.toggleIfButtonIsDisabled(true);
  closeDescriptionButton();

  // highlighting element (sliderEventsView)
  highlightListElement(el.dataset.id);
};

/**
 * Handles the click event on the sliderStudiosView.
 * It finds the clicked element, moves to the selected marker on the map,
 * and highlights the selected element.
 *
 * @param {MouseEvent} e The event object.
 */
const controlSliderStudiosViewClick = function (e) {
  // finding clicked element (sliderStudiosView)
  const el = sliderStudiosView.findClickedElement(e);

  // finding selected event (model)
  if (!el) return;
  const selectedElement = model.findElement(el.dataset.id);
  model.state.selectedId = el.dataset.id;

  // move to selected marker on the map (mapView)
  mapView.goToMarker(selectedElement.coords);

  // memorizing selected element id ???
  model.state.selectedId = el.dataset.id;

  // clear previous highlighted element
  clearAllListElements();
  locationContainerView.toggleIfButtonIsDisabled(true);
  closeDescriptionButton();

  // highlighting element (sliderEventsView)
  highlightListElement(el.dataset.id);
};

/**
 * Closes the description button and hides the details data.
 *
 * @function closeDescriptionButton
 */
const closeDescriptionButton = function () {
  const descriptionContent = document.querySelector('.description__content');

  // hides details data
  locationContainerView.goToContainer(0);

  // hides the description content after 1 second
  setTimeout(() => {
    descriptionContent.classList.add('hidden');
  }, 1000);
};

/**
 * Handles the click event on the description view.
 * If the description content is hidden, it loads the details and displays them.
 * If the description content is already displayed, it hides the details after a delay.
 *
 * @function controlDescriptionViewClick
 */
const controlDescriptionViewClick = function () {
  // Get the description content element
  const descriptionContent = document.querySelector('.description__content');

  // Check if the description content is hidden
  if (descriptionContent.classList.contains('hidden')) {
    // Load details
    const id = +model.state.selectedId;
    // Determine the source data based on the length of the ID
    const data =
      (id + '').length === 6
        ? model.state.danceStudios.find(ds => ds.id === id)
        : model.state.danceEvents.find(ds => ds.id === id);
    // Render the details
    detailsView.render(data);

    // Display details data
    locationContainerView.goToContainer(1);
    locationContainerView.toggleDescriptionButton();
    // Show the description content
    descriptionContent.classList.remove('hidden');
  } else {
    // Hide details data
    locationContainerView.goToContainer(0);
    locationContainerView.toggleDescriptionButton();
    // Hide the description content after a delay
    setTimeout(() => {
      descriptionContent.classList.add('hidden');
    }, 1000);
  }
};

/**
 * Highlights a specific list element by scrolling to it, opening a popup, and adding a class to it.
 *
 * @param {number} id - The ID of the list element to highlight.
 * @param {string} [type='slider'] - The type of the list element. Defaults to 'slider'.
 */
const highlightListElement = function (id, type = 'slider') {
  // Open a popup for the specified ID
  mapView.openPopup(mapMarkers, id, type);

  // Find all list elements with the specified ID and highlight the first one
  document.querySelectorAll('.slide__item').forEach(el => {
    if (+el.dataset.id === +id) {
      const sliderNumber = +el.dataset.slider;

      // Calculate the target position to scroll to
      const targetPosition =
        el.getBoundingClientRect().top -
        document.querySelector('.slider').getBoundingClientRect().top;

      // Scroll to the target position
      sliderView.scrollToPosition(targetPosition, sliderNumber);

      // Add the 'selected' class to the highlighted element
      el.classList.add('selected');

      // Enable the button in the location container
      locationContainerView.toggleIfButtonIsDisabled(false);
    }
  });
};

/**
 * Clears all list elements by resetting the location container, enabling the button,
 * clearing the elements in the slider studios view, clearing the elements in the
 * slider events view, and closing all markers on the map.
 */
const clearAllListElements = function () {
  // Reset the location container
  locationContainerView.goToContainer(0);

  // Enable the button in the location container
  locationContainerView.toggleIfButtonIsDisabled(false);

  // Clear the elements in the slider studios view
  sliderStudiosView.clearElements();

  // Clear the elements in the slider events view
  sliderEventsView.clearElements();

  // Close all markers on the map
  mapView.closeAllMarkers();
};

/**
 * Adds a click event to all map markers, so that when clicked, they will
 * clear the list elements, select the corresponding marker on the map, and
 * highlight the corresponding element on the slider view.
 */
const addClickEventToMapMarkers = function () {
  // Loop through all map markers and add a click event to each one
  mapMarkers.forEach(marker =>
    marker.on('click', function () {
      // Get the id of the clicked marker
      const id = +marker
        .getPopup()
        .getContent()
        .split('data-id="')[1]
        .split('"')[0];

      // Clear all list elements
      clearAllListElements();

      // Select the corresponding marker on the map
      model.state.selectedId = id;

      // Highlight the corresponding element on the slider view
      highlightListElement(id, 'marker');
    })
  );
};

/**
 * Initializes the application by adding event listeners and controlling different views and models.
 */
const init = function () {
  // Add event listener for scrolling to adjust the position of the sidebar rows
  window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    // Adjust the top position of the slider row
    document.querySelector('.sidebar__row--slider').style.top = `${scrollTop}px`;
    // Adjust the top position of the filter row
    document.querySelector('.sidebar__row--filter').style.top = `${scrollTop}px`;
  });

  // Add event listener for map view load to control the map view
  mapView.addHandlerLoad(controlMapView);
  // Add event listener for slider studios view render to control the slider studios view
  sliderStudiosView.addHandlerRender(controlSliderStudiosView);
  // Add event listener for slider events view render to control the slider events view
  sliderEventsView.addHandlerRender(controlSliderEventsView);
  // Add event listener for modal view click to control the modal view
  modalView.addHandlerClick(controlModalView);
  // Add event listener for modal view keydown to control the modal view
  modalView.addHandlerKeyDown(controlModalView);
  // Add event listener for filters view render to control the filters view
  filtersView.addHandlerRender(controlFiltersView);
  // Add event listener for slider view wheel to control the slider view
  sliderView.addHandlerWheel(controlSliderView);
  // Add event listener for slider arrows view left arrow click to control the slider arrows view
  sliderArrowsView.addHandlerArrowClick(controlSliderArrowsView, 'left');
  // Add event listener for slider arrows view right arrow click to control the slider arrows view
  sliderArrowsView.addHandlerArrowClick(controlSliderArrowsView, 'right');
  // Add event listener for sidebar view toggle filters to control the sidebar view
  sidebarView.addHandlerToggleFilters(controlSidebarViewToggleFilters);
  // Add event listener for sidebar view toggle sidebar to control the sidebar view
  sidebarView.addHandlerToggleSidebar(controlToggleSidebar);
  // Add event listener for filters view click apply to control the filters view
  filtersView.addHandlerClickApply(controlApplyFilters);
  // Add event listener for slider events view click to control the slider events view
  sliderEventsView.addHandlerClick(controlSliderEventsViewClick);
  // Add event listener for slider studios view click to control the slider studios view
  sliderStudiosView.addHandlerClick(controlSliderStudiosViewClick);
  // Add event listener for location container view click to control the location container view
  locationContainerView.addHandlerClick(controlDescriptionViewClick);
};

/**
 * Fetches a random advice from the api.adviceslip.com and sets the advice in the modal view
 * @return {Promise<void>} A promise that resolves when the advice is set in the modal view
 */
const setAdvice = async function () {
  try {
    // Fetch the advice from the api
    const response = await fetch('https://api.adviceslip.com/advice');
    // Parse the response into JSON
    const json = await response.json();
    // Set the advice in the modal view
    document.querySelector('.modal p').innerHTML = json.slip.advice;
  } catch (error) {
    console.error(error);
  }
};

init();
setAdvice();
