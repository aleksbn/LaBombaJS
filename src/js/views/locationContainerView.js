class LocationContainerView {
  _curContainer = 0;
  _locationContainer = document.querySelector('.locations__container');
  _containers = document.querySelectorAll('.container');
  _toggleDisplayDescriptionButton = document.querySelector(
    '.btn--description-control'
  );

  addHandlerClick(handler) {
    this._toggleDisplayDescriptionButton.addEventListener('click', handler);
  }

  constructor() {
    this._containers.forEach(
      (c, i) => (c.style.transform = `translateY(${i * 90}%)`)
    );
  }

  goToContainer(cont) {
    this._curContainer = cont;
    this._containers.forEach(
      (s, i) => (s.style.transform = `translateY(${90 * (i - cont)}%)`)
    );
  }

  toggleDescriptionButton() {
    this._toggleDisplayDescriptionButton.innerHTML =
      this._toggleDisplayDescriptionButton.innerHTML.trim() ===
      'Display details'
        ? 'Hide details'
        : 'Display details';
  }

  toggleIfButtonIsDisabled(enable) {
    if (enable) {
      this._toggleDisplayDescriptionButton.setAttribute('disabled', '');
    } else {
      this._toggleDisplayDescriptionButton.removeAttribute('disabled');
    }
  }
}

export default new LocationContainerView();
