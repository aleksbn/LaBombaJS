class ModalView {
  modal = document.querySelector('.modal');
  overlay = document.querySelector('.overlay');

  addHandlerClick(handler) {
    document
      .querySelectorAll('.close-modal')
      .forEach(el => el.addEventListener('click', handler));
  }

  addHandlerKeyDown(handler) {
    document.addEventListener('keydown', function (e) {
      if (e.code === 'Escape') {
        handler();
      }
    });
  }
}

export default new ModalView();
