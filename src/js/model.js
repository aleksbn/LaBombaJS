// import data from '../data/data.json' assert { type: "json" };
import data from '../data/data.json';

export const state = {
  filtersSelected: {},
  filters: {},
  danceEvents: [],
  danceStudios: [],
  selectedId: '',
};

/**
 * Initialize state object from the data.json file
 */
const init = function () {
  /**
   * filtersSelected - filters that are selected by the user
   * filters - all filters that are available
   * danceEvents - all dance events
   * danceStudios - all dance studios/schools/clubs
   * selectedId - id of the selected element (either dance event or studio)
   */
  state.filtersSelected = data.filtersSelected;
  state.filters = data.filters;
  state.danceEvents = data.danceEvents;
  state.danceStudios = data.danceStudios;
};

/**
 * Update the list of studios/schools/clubs based on selected types and dances
 * @returns {Array} Filtered array of studios/schools/clubs
 */
export const updateStudios = function () {
  // Get selected types from filters
  const selectedTypes = Object.entries(state.filtersSelected.types)
    .filter(([_, isChecked]) => isChecked)
    .map(([type]) => type);

  // Get selected dances from filters
  const selectedDances = Object.entries(state.filtersSelected.dances)
    .filter(([_, isChecked]) => isChecked)
    .map(([type]) => type);

  // Filter and return studios/schools/clubs based on selected types and dances
  return state.danceStudios
    .filter(s => s.type.some(type => selectedTypes.includes(type)))
    .filter(s => s.danceTypes.some(dance => selectedDances.includes(dance)));
};

/**
 * events to be displayed in the slider
 * @returns events array
 */
export const updateEvents = function () {
  const selectedEventTypes = Object.entries(state.filtersSelected.events)
    .filter(([_, isChecked]) => isChecked)
    .map(([eventType]) => eventType);

  const selectedDances = Object.entries(state.filtersSelected.dances)
    .filter(([_, isChecked]) => isChecked)
    .map(([type]) => type);

  return state.danceEvents
    .filter(e => selectedEventTypes.includes(e.type))
    .filter(e => e.dances.some(dance => selectedDances.includes(dance)));
};

/**
 * Find element in the state by given id
 * @param {String} id - element id
 * @returns {Object} element
 */
export const findElement = function (id) {
  // Check if the id is for an event or a studio
  // Events have 6 character ids, studios have 7
  return id.length === 6
    ? state.danceStudios.find(el => el.id === +id)
    : state.danceEvents.find(el => el.id === +id);
};

init();
