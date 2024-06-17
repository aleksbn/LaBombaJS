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

const controlSliderStudiosView = function () {
  // Generate list of studios
  sliderStudiosView.render(model.state.danceStudios);
};

const controlSliderEventsView = function () {
  // Generate list of studios
  sliderEventsView.render(model.state.danceEvents);
};

const controlModalView = function () {
  // Hides modal elements
  modalView.modal.classList.add('hidden');
  modalView.overlay.classList.add('hidden');
};

const controlMapView = function () {
  // loading initial data
  mapMarkers = mapMarkers.concat([
    ...mapView.loadEventsToMap(model.state.danceEvents),
  ]);
  mapMarkers = mapMarkers.concat([
    ...mapView.loadStudiosToMap(model.state.danceStudios),
  ]);

  // adding click event to the markers
  addClickEventToMapMarkers();

  // adding map click event
  mapView.map.on('click', function () {
    clearAllListElements();
    locationContainerView.toggleIfButtonIsDisabled(true);
    closeDescriptionButton();
  });
};

const controlFiltersView = function () {
  filtersView.render(model.state.filters);
};

const controlSliderView = function (e) {
  // add "stopping the wheel" event
  sliderView.stopsTheWheel(e);
};

const controlToggleSidebar = function () {
  sidebarView.toggleSidebar();
};

const controlSliderArrowsView = function (dir) {
  sliderView.scrollToTheTop();
  sliderView.changeSlide(dir);
};

const controlApplyFilters = function () {
  // toggle filters slider
  sidebarView.toggleSlider();

  //clear all markers from map
  mapView.clearAllMarkersFromMap(mapMarkers);

  //update filters
  filtersView.updateFilters(model.state.filtersSelected);

  //get updated studios and events
  const studiosForDisplay = model.updateStudios();
  const eventsForDisplay = model.updateEvents();

  //update studios and events
  sliderStudiosView.update(studiosForDisplay);
  sliderEventsView.update(eventsForDisplay);

  //render updated studios and events to map
  mapMarkers = [];
  mapMarkers = mapMarkers.concat(mapView.loadStudiosToMap(studiosForDisplay));
  mapMarkers = mapMarkers.concat(mapView.loadEventsToMap(eventsForDisplay));

  //add click events to the markers
  addClickEventToMapMarkers();

  //scroll to the top
  sliderView.scrollToTheTop();
};

const controlSidebarViewToggleFilters = function () {
  setTimeout(function () {
    sidebarView.toggleSlider();
  }, 10);
};

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

const controlSliderStudiosViewClick = function (e) {
  // finding clicked element (sliderEventsView)
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

const closeDescriptionButton = function () {
  const descriptionContent = document.querySelector('.description__content');
  // hides details data
  locationContainerView.goToContainer(0);
  setTimeout(() => {
    descriptionContent.classList.add('hidden');
  }, 1000);
};

const controlDescriptionViewClick = function () {
  const descriptionContent = document.querySelector('.description__content');
  if (descriptionContent.classList.contains('hidden')) {
    // load details
    const id = +model.state.selectedId;
    const data =
      (id + '').length === 6
        ? model.state.danceStudios.find(ds => ds.id === id)
        : model.state.danceEvents.find(ds => ds.id === id);
    detailsView.render(data);

    // display details data
    locationContainerView.goToContainer(1);
    locationContainerView.toggleDescriptionButton();
    descriptionContent.classList.remove('hidden');
  } else {
    // hides details data
    locationContainerView.goToContainer(0);
    locationContainerView.toggleDescriptionButton();
    setTimeout(() => {
      descriptionContent.classList.add('hidden');
    }, 1000);
  }
};

const highlightListElement = function (id, type = 'slider') {
  mapView.openPopup(mapMarkers, id, type);
  document.querySelectorAll('.slide__item').forEach(el => {
    if (+el.dataset.id === +id) {
      const sliderNumber = +el.dataset.slider;
      const targetPosition =
        el.getBoundingClientRect().top -
        document.querySelector('.slider').getBoundingClientRect().top;
      sliderView.scrollToPosition(targetPosition, sliderNumber);
      el.classList.add('selected');
      locationContainerView.toggleIfButtonIsDisabled(false);
    }
  });
};

const clearAllListElements = function () {
  locationContainerView.goToContainer(0);
  locationContainerView.toggleIfButtonIsDisabled(false);
  sliderStudiosView.clearElements();
  sliderEventsView.clearElements();
  mapView.closeAllMarkers();
};

const addClickEventToMapMarkers = function () {
  mapMarkers.forEach(marker =>
    marker.on('click', function () {
      const id = +marker
        .getPopup()
        .getContent()
        .split('data-id="')[1]
        .split('"')[0];
      clearAllListElements();
      model.state.selectedId = id;
      highlightListElement(id, 'marker');
    })
  );
};

const init = function () {
  window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    document.querySelector(
      '.sidebar__row--slider'
    ).style.top = `${scrollTop}px`;
    document.querySelector(
      '.sidebar__row--filter'
    ).style.top = `${scrollTop}px`;
  });

  mapView.addHandlerLoad(controlMapView);
  sliderStudiosView.addHandlerRender(controlSliderStudiosView);
  sliderEventsView.addHandlerRender(controlSliderEventsView);
  modalView.addHandlerClick(controlModalView);
  modalView.addHandlerKeyDown(controlModalView);
  filtersView.addHandlerRender(controlFiltersView);
  sliderView.addHandlerWheel(controlSliderView);
  sliderArrowsView.addHandlerArrowClick(controlSliderArrowsView, 'left');
  sliderArrowsView.addHandlerArrowClick(controlSliderArrowsView, 'right');
  sidebarView.addHandlerToggleFilters(controlSidebarViewToggleFilters);
  sidebarView.addHandlerToggleSidebar(controlToggleSidebar);
  filtersView.addHandlerClickApply(controlApplyFilters);
  sliderEventsView.addHandlerClick(controlSliderEventsViewClick);
  sliderStudiosView.addHandlerClick(controlSliderStudiosViewClick);
  locationContainerView.addHandlerClick(controlDescriptionViewClick);
};

const setAdvice = async function () {
    document.querySelector('.modal p').innerHTML = (
    await (await fetch('https://api.adviceslip.com/advice')).json()
  ).slip.advice;
}

init();
setAdvice();
