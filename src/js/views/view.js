export default class View {
  _data;

  /**
   * Render the data to the view.
   *
   * @param {Object} data - The data to be rendered.
   */
  render(data) {
    // Store the data for future use.
    this._data = data;

    // Generate the markup to be rendered.
    const markup = this._generateMarkup();

    // Clear the parent element of any existing content.
    this._clear();

    // Insert the generated markup before the first child of the parent element.
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  /**
   * Update the view with new data.
   *
   * @param {Object} data - The new data to be rendered.
   */
  update(data) {
    // Render the new data to the view.
    this.render(data);
  }

  /**
   * Clear the parent element by setting its innerHTML to an empty string.
   * This effectively removes all child elements from the parent element.
   */
	_clear() {
    // Clear the parent element by setting its innerHTML to an empty string.
    // This effectively removes all child elements from the parent element.
    this._parentElement.innerHTML = '';
  }
}
