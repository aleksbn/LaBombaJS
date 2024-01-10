import View from './view.js';
import * as model from '../model.js';

class SliderEventsView extends View {
  _parentElement = document.querySelector('.slide--events');

  addHandlerRender(handler) {
    window.addEventListener('load', handler);
  }

  addHandlerClick(handler) {
    this._parentElement.addEventListener('click', handler);
  }

  _generateMarkup() {
    if (this._data.length > 0) {
      let eventsHTML = '<h3><i>Events</i></h3>';
      this._data.forEach(de => (eventsHTML += this._generateEvent(de)));
      return eventsHTML;
    } else {
      return '<h1>There are no selected events. Check the options you selected to filter out and try again.</h1>';
    }
  }

  _generateEvent(de) {
    let text = '';
    text += `<div class="slide__item" data-id="${de.id}" data-slider="1"><h2>${de.title}</h2>`;
    text += `Address: <h3>${de.address}</h3>`;
    text += `Organizer: <h3>${
      model.state.danceStudios.filter(s => s.id === de.organizerId)[0].name
    }</h3>Dances: <b>`;
    de.dances.forEach(d => (text += `${d}, `));
    text = text
      .split('')
      .slice(0, text.length - 2)
      .join('');
    text += '</b></div>';
    return text;
  }

  highlightElement(id) {
    document.querySelectorAll('.slide__item').forEach(el => {
      if (+el.dataset.id === +id) {
        const slider = document.querySelector('.slider');
        const sliderNumber = +el.dataset.slider;
        const targetPosition =
          el.getBoundingClientRect().top - slider.getBoundingClientRect().top;
        slider.scrollTop += targetPosition;
        el.classList.add('selected');
        return sliderNumber;
      }
    });
  }

  findClickedElement(e) {
    return e.target.closest('.slide__item');
  }

  clearElements() {
    const slideItems = Array.from(this._parentElement.childNodes);
    slideItems.forEach(item => item.classList.remove('selected'));
  }
}

export default new SliderEventsView();
