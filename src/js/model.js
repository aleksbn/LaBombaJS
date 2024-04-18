// import data from '../data/data.json' assert { type: "json" };
import data from '../data/data.json';

export const state = {
  filtersSelected: {},
  filters: {},
  danceEvents: [],
  danceStudios: [],
  selectedId: '',
};

const init = function () {
  state.filtersSelected = data.filtersSelected;
  state.filters = data.filters;
  state.danceEvents = data.danceEvents;
  state.danceStudios = data.danceStudios;
};

/**
 * studios/schools/clubs to be displayed in the slider
 * @returns studios/schools/clubs array
 */
export const updateStudios = function () {
  const selectedTypes = Object.entries(state.filtersSelected.types)
    .filter(([_, isChecked]) => isChecked)
    .map(([type]) => type);

  const selectedDances = Object.entries(state.filtersSelected.dances)
    .filter(([_, isChecked]) => isChecked)
    .map(([type]) => type);

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

export const findElement = function (id) {
  return id.length === 6
    ? state.danceStudios.find(el => el.id === +id)
    : state.danceEvents.find(el => el.id === +id);
};

init();
