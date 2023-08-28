import View from './view.js';

class SliderStudiosView extends View {
  _parentElement = document.querySelector('.slide--studios');

  addHandlerRender(handler) {
    window.addEventListener('load', handler);
  }

  addHandlerClick(handler) {
    this._parentElement.addEventListener('click', handler);
  }

  _generateMarkup() {
    if (this._data.length > 0) {
      let studiosHTML = '<h3><i>Schools/clubs/studios</i></h3>';
      this._data.forEach(ds => (studiosHTML += this._generateStudio(ds)));
      return studiosHTML;
    } else {
      return '<h1>There are no selected studios, schools or clubs. Check the options you selected to filter out and try again.</h1>';
    }
  }

  _generateStudio(ds) {
    let text = '';
    text += `<div class="slide__item" data-id="${ds.id}" data-slider="0"><h2>${ds.name}</h2>`;
    text += `Address: <h3>${ds.address}</h3>Types: `;
    ds.type.forEach(t => (text += `<b>${t}</b>, `));
    text = text
      .split('')
      .slice(0, text.length - 2)
      .join('');
    text += '</div>';
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

export default new SliderStudiosView();
