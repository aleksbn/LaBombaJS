import View from './view.js';

class DetailsView extends View {
  _parentElement = document.querySelector('.description__content');

  _generateMarkup() {
    let markup = '';
    if ((this._data.id + '').length === 6) {
      // STUDIO
      markup += `<h1 class='content--studio-name'>${this._data.name}</h1>`;
      markup += `<div class='content--studio-description'><span class='studio-description'>"${this._data.description}"</span></div>`;
      if (this._data.type.length > 1) {
        markup += `<div class='content--studio-types'><ul>Types:`;
        this._data.type.forEach(
          type =>
            (markup += `<li class='content--studio-type-item'>${type}</li>`)
        );
        markup += `</ul></div>`;
      } else {
        markup += `<div class='content--studio-type'>Type: <span class='studio-type'>${this._data.type[0]}</span></div>`;
      }
      if (this._data.danceTypes.length > 1) {
        markup += `<div class='content--studio-dance-types'><ul>Dances:`;
        this._data.danceTypes.forEach(
          danceType =>
            (markup += `<li class='content--studio-dance-type-item'>${danceType}</li>`)
        );
        markup += `</ul></div>`;
      } else {
        markup += `<div class='content--studio-dance-type'>Dance: <span class='studio-dance-type'>${this._data.danceTypes[0]}</span></div>`;
      }
      markup += `<div class='content--studio-address'>Address: <span class='studio-address'>${this._data.address}</span></div>`;
      if (this._data.pageUrl !== '') {
        markup += `<div class='content--studio-page'>Page URL: <a href='${this._data.pageUrl}' target='_blank' class='studio-page'>${this._data.name}</a></div>`;
      } else {
        markup += `<div class='content--studio-page'>Page URL: <span class='studio-page'>They apparently have no page :(</span></div>`;
      }
      markup += `<div class='content--studio-phone'>Phone number: <span class='studio-phone'>${this._data.phoneNumber}</span></div>`;
      if (this._data.workingTimes.length > 1) {
        markup += `<div class='content--studio-working-times'><ul>Working times:`;
        this._data.workingTimes.forEach(
          wt =>
            (markup += `<li class='content--studio-working-time-item'>${
              wt.day
            }: ${wt.startTime.substring(0, 5)} - ${wt.endTime.substring(
              0,
              5
            )}</li>`)
        );
        markup += `</ul></div>`;
      } else {
        markup += `<div class='content--studio-working-time'>Workingtime: <span class='studio-working-time'>${
          this._data.workingTimes[0].day
        }: ${this._data.workingTimes[0].startTime.substring(
          0,
          5
        )} - ${this._data.workingTimes[0].endTime.substring(
          0,
          5
        )}</span></div>`;
      }
    } else {
      //EVENT
      markup += `<h1 class='content--dance-event-title'>${this._data.title}</h1>`;
      markup += `<div class='content--dance-event-description'><span class='dance-event-description'>${this._data.description}</span></div>`;
      markup += `<div class='content--dance-event-type'>Type of event: <span class='dance-event-type'>${this._data.type}</span></div>`;
      if (this._data.dances.length > 1) {
        markup += `<div class='content--dance-event-dances'><ul>Dances included:`;
        this._data.dances.forEach(
          dance =>
            (markup += `<li class='dance--event-dance-item'>${dance}</li>`)
        );
        markup += `</ul></div>`;
      } else {
        markup += `<div class='content--dance-event-dance'>Dance: <span class='dance-event-dance'>${this._data.dances[0]}</span></div>`;
      }
      markup += `<div class='content--dance-event-address'>Address: <span class='dance-event-address'>${this._data.address}</span></div>`;
      const startDateAndTimeSplit = this._data.start.split('T');
      const startDateAndTime = `${startDateAndTimeSplit[0]
        .split('-')
        .reverse()
        .join('.')} - ${startDateAndTimeSplit[1].substring(0, 5)}`;
      const endDateAndTimeSplit = this._data.end.split('T');
      const endDateAndTime = `${endDateAndTimeSplit[0]
        .split('-')
        .reverse()
        .join('.')} - ${endDateAndTimeSplit[1].substring(0, 5)}`;
      markup += `<div class='content--dance-event-start-time'>Start time: <span class='dance-event-start-time'>${startDateAndTime}</span></div> `;
      markup += `<div class='content--dance-event-end-time'>End time: <span class='dance-event-end-time'>${endDateAndTime}</span></div> `;
    }

    return markup;
  }
}

export default new DetailsView();
