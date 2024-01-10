import * as model from '../model.js';
import { DEFAULT_ANIMATION_DURATION, MAP_ZOOM_LEVEL } from '../config.js';

class MapView {
  _parentElement = document.querySelector('.description__content');
  _mapMarkers = [];
  map;

  addHandlerLoad(handler) {
    window.addEventListener('load', handler);
  }

  constructor() {
    this.map = L.map('map').setView([44.757461, 19.212], 16);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.map);
  }

  _generateEventMarker(e) {
    return `<div class="dance-event--${e.type}" data-id="${e.id}" >
    <div style="text-align: center;"><h3 class="event-marker--title">${
      e.title
    }</h3></div>
    <hr>
      <div class="event-marker--organiser">Organized by: <b>${
        model.state.danceStudios.find(ds => ds.id === e.organizerId).name
      }</b></div><hr>
      <div class="event-marker--type" style="text-align: center;"><b>${
        e.type
      }</b></div><hr>
      <div class="event-marker--time"><b>${new Intl.DateTimeFormat(
        'sr-SR'
      ).format(new Date(e.start.split('T')[0]))} ${e.start
      .split('T')[1]
      .slice(0, -3)} - ${new Intl.DateTimeFormat('sr-SR').format(
      new Date(e.end.split('T')[0])
    )} ${e.end.split('T')[1].slice(0, -3)}</b></div><hr>
        <div class="event-marker--dances">Dances: <b>${e.dances.reduce(
          (cur, acc) => acc + ', ' + cur
        )}</b></div>
        </div>`;
  }

  _generateStudioMarker(s) {
    return `<div class="dance-studio" data-id="${
      s.id
    }"><div class="studio-marker--name" style="text-align: center;"><h3>${
      s.name
    }</h3></div>
    <hr><div class="studio-marker--type"><b>Dance ${s.type.reduce(
      (cur, acc) => acc + ', dance ' + cur
    )}</b></div><div class="studio-marker--address">
      <hr><b>${s.address}</b><hr></div>`;
  }

  loadStudiosToMap(studios) {
    this._mapMarkers = [];
    studios.forEach(ds => {
      const marker = L.marker(ds.coords, {
        maxWidth: 500,
        minWidth: 100,
        riseOnHover: true,
      })
        .addTo(this.map)
        .bindPopup(this._generateStudioMarker(ds));
      this._mapMarkers.push(marker);
    });
    return this._mapMarkers;
  }

  loadEventsToMap(events) {
    this._mapMarkers = [];
    let customIcon = L.icon({
      iconUrl: '../../../media/placeholder.png',
      iconSize: [35, 35],
      popupAnchor: [0, -15],
    });
    events.forEach(de => {
      const marker = L.marker(de.coords, {
        icon: customIcon,
        maxWidth: 600,
        minWidth: 100,
        riseOnHover: true,
      })
        .addTo(this.map)
        .bindPopup(this._generateEventMarker(de));
      this._mapMarkers.push(marker);
    });
    return this._mapMarkers;
  }

  clearAllMarkersFromMap(mapMarkers) {
    if (mapMarkers.length > 0) {
      mapMarkers.forEach(marker => {
        this.map.removeLayer(marker);
      });
    }
  }

  goToMarker(coords) {
    this.map.setView(coords, MAP_ZOOM_LEVEL, {
      animate: true,
      pan: {
        duration: 1,
      },
    });
  }

  openPopup(mapMarkers, requiredId, type) {
    setTimeout(
      function () {
        mapMarkers.forEach(marker => {
          const markerId = +marker
            .getPopup()
            .getContent()
            .split(' ')[2]
            .split('"')[1];
          if (markerId === +requiredId) marker.openPopup();
        });
      },
      type === 'marker' ? 10 : DEFAULT_ANIMATION_DURATION
    );
  }

  closeAllMarkers() {
    this._mapMarkers.forEach(marker => marker.closePopup());
  }
}

export default new MapView();
