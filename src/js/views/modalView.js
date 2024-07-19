class ModalView {
  modal = document.querySelector('.modal');
  overlay = document.querySelector('.overlay');

  /**
   * Adds a click event listener to all elements with the class 'close-modal'.
   * 
   * @param {function} handler - The function to be called when the 'click' event is triggered.
   */
  addHandlerClick(handler) {
    // Query all elements with the class 'close-modal' and add a click event listener to each one
    document
      .querySelectorAll('.close-modal')
      .forEach(el => el.addEventListener('click', handler));
  }

  /**
   * Adds a keydown event listener to the document and calls the passed handler if the 'Escape' key is pressed.
   * 
   * @param {function} handler - The function to be called when the 'Escape' key is pressed.
   */
  addHandlerKeyDown(handler) {
    // Add a keydown event listener to the document
    document.addEventListener('keydown', function (e) {
      // If the 'Escape' key was pressed, call the passed handler
      if (e.code === 'Escape') {
        handler();
      }
    });
  }

}

export default new ModalView();
