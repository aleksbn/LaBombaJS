import { DEFAULT_ANIMATION_DURATION } from '../config.js';

class SidebarView {
  _curSlideOfSidebar = 0;
  _curSliderPosition = -1;
  _rootElement = document.querySelector('.sidebar');
  _sidebarRows = document.querySelectorAll('.sidebar__row');
  _toggleFiltersButton = document.querySelector('.btn--toggle-filters');
  _toggleButton = document.querySelector('.show-hide-btn');
  _showHideArrows = Array.from(document.querySelectorAll('.show-hide-arrow'));

  constructor() {
    this._sidebarRows.forEach(
      (s, i) => (s.style.transform = `translateY(${i * 100}%)`)
    );
    this._sidebarRows[1].classList.toggle('hidden');
  }

  addHandlerToggleFilters(handler) {
    this._toggleFiltersButton.addEventListener('click', handler);
  }

  addHandlerToggleSidebar(handler) {
    this._toggleButton.addEventListener('click', handler);
  }

  toggleSidebar() {
    this._curSliderPosition = this._curSliderPosition === -1 ? 0 : -1;
    this._rootElement.style.transform = `translateX(${
      this._curSliderPosition * 100
    }%)`;
    this._toggleButton.style.transform = `translateX(${
      (this._curSliderPosition + 1) * this._rootElement.clientWidth
    }px)`;
    this._showHideArrows.forEach(a => a.classList.toggle('excluded'));
  }

  toggleSlider() {
    const prevSlide = this._curSlideOfSidebar;
    this._curSlideOfSidebar = this._curSlideOfSidebar === 0 ? 1 : 0;
    this._sidebarRows[this._curSlideOfSidebar].classList.remove('hidden');
    this._sidebarRows.forEach(
      (s, i) =>
        (s.style.transform = `translateY(${
          100 * (i - this._curSlideOfSidebar)
        }%)`)
    );
    setTimeout(() => {
      this._sidebarRows[prevSlide].classList.add('hidden');
    }, DEFAULT_ANIMATION_DURATION);
  }
}

export default new SidebarView();
