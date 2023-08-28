import View from './view';
import { CapitalCase } from '../helpers';

class FiltersView extends View {
  _parentElement = document.querySelector('.form-container');
  _applyFiltersButton = document.querySelector('.btn--filter-apply');

  addHandlerRender(handler) {
    window.addEventListener('load', handler);
  }

  addHandlerClickApply(handler) {
    this._applyFiltersButton.addEventListener('click', handler);
  }

  _generateMarkup() {
		let markup = '<div class="form-container--studios">';
		markup += this._loadFilterParts('types');
		markup += '</div><div class="form-container--type-of-events">';
		markup += this._loadFilterParts('events');
		markup += '</div><div class="form-container--dances">';
		markup += this._loadFilterParts('dances') + '</div>';
		return markup;
	}

  updateFilters(filters) {
    const checkboxes = [
      ...document.querySelectorAll('.form-control input[type="checkbox"]'),
    ];
    checkboxes.forEach(checkbox => {
      const id = checkbox.id;
      const checked = checkbox.checked;
      if (id in filters.events) {
        filters.events[id] = checked;
      }
      if (id in filters.types) {
        filters.types[id] = checked;
      }
      if (id in filters.dances) {
        filters.dances[id] = checked;
      }
    });
  }

  _loadFilterParts(type) {
    let markup = '';
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
    [...this._data[type]].forEach(
      el =>
        (markup += `
					<div class="form-control">
						<input id="${el}" type="checkbox" checked />
						<label>${type === 'types' ? 'Dance ' + el + 's' : CapitalCase(el)}</label>
					</div>
				`)
    );
    return markup;
  }
}

export default new FiltersView();
