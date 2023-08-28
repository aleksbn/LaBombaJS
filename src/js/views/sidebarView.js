import { DEFAULT_ANIMATION_DURATION } from "../config";

class SidebarView {
  _curSlideOfSidebar = 0;
  _rootElement = document.querySelector('.sidebar');
  _sidebarRows = document.querySelectorAll('.sidebar__row');
  _toggleFiltersButton = document.querySelector('.btn--toggle-filters');

  constructor() {
    this._sidebarRows.forEach(
      (s, i) => (s.style.transform = `translateY(${i * 100}%)`)
    );
    this._sidebarRows[1].classList.toggle('hidden');
  }

  addHandlerToggleFilters(handler) {
    this._toggleFiltersButton.addEventListener('click', handler);
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
