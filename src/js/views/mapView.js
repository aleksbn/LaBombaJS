import * as model from '../model.js';
import { DEFAULT_ANIMATION_DURATION, MAP_ZOOM_LEVEL } from '../config.js';

class MapView {
  _parentElement = document.querySelector('.description__content');
  _mapMarkers = [];
  map;

  /**
   * Adds an event listener to the window object that listens for the 'load' event.
   * The event is fired when the page is fully loaded.
   *
   * @param {function} handler - The function to be called when the event is fired.
   */
  addHandlerLoad(handler) {
    // Add a listener to the window object that listens for the 'load' event
    // The handler function is called when the event is fired
    window.addEventListener('load', handler);
  }

  /**
   * Creates a new instance of the MapView class.
   * This constructor initializes the map object and sets the initial view of the map.
   */
  constructor() {
    // Create a new map instance and set the initial view to the coordinates (44.757461, 19.212) with a zoom level of 16.
    this.map = L.map('map').setView([44.757461, 19.212], 16);

    // Add a tile layer to the map using the OpenStreetMap tile service.
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.map);
  }

  /**
   * Generates the HTML markup for a single event marker on the map.
   * This function takes an event object as an argument and returns the HTML
   * that represents the event marker.
   * @param {Object} e - The event object to generate the HTML for.
   * @returns {string} The HTML that represents the event marker.
   */
  _generateEventMarker(e) {
    return `
      <div class="dance-event--${e.type}" data-id="${e.id}" >
        <div style="text-align: center;">
          <h3 class="event-marker--title">${e.title}</h3>
        </div>
        <hr>
        <div class="event-marker--organiser">
          Organized by: <b>${model.state.danceStudios.find(ds => ds.id === e.organizerId).name}</b>
        </div>
        <hr>
        <div class="event-marker--type" style="text-align: center;">
          <b>${e.type}</b>
        </div>
        <hr>
        <div class="event-marker--time">
          <b>
            ${new Intl.DateTimeFormat('sr-SR').format(new Date(e.start.split('T')[0]))} 
            ${e.start
              .split('T')[1]
              .slice(0, -3)} - 
            ${new Intl.DateTimeFormat('sr-SR').format(
              new Date(e.end.split('T')[0])
            )} 
            ${e.end.split('T')[1].slice(0, -3)}
          </b>
        </div>
        <hr>
        <div class="event-marker--dances">
          Dances: <b>${e.dances.reduce((cur, acc) => acc + ', ' + cur)}</b>
        </div>
      </div>
    `;
  }


  /**
   * Generates the HTML markup for a single studio marker on the map.
   * This function takes a studio object as an argument and returns the HTML
   * that represents the studio marker.
   *
   * @param {Object} s - The studio object to generate the HTML for.
   * @returns {string} The HTML that represents the studio marker.
   */
  _generateStudioMarker(s) {
    return `<!-- Studio Marker -->
    <div class="dance-studio" data-id="${s.id}">
      <!-- Studio Name -->
      <div class="studio-marker--name" style="text-align: center;">
        <h3>${s.name}</h3>
      </div>
      <!-- Divider -->
      <hr>
      <!-- Studio Type -->
      <div class="studio-marker--type">
        <b>Dance ${s.type.reduce((cur, acc) => acc + ', dance ' + cur)}</b>
      </div>
      <!-- Divider -->
      <hr>
      <!-- Studio Address -->
      <div class="studio-marker--address">
        <hr>
        <b>${s.address}</b>
        <hr>
      </div>
    </div>`;
  }

  /**
   * Load the studios onto the map and generate markers for them.
   * This function takes an array of studio objects as an argument and generates
   * markers for each one on the map. It adds the markers to the _mapMarkers array
   * and returns the array.
   *
   * @param {Array} studios - An array of studio objects.
   * @returns {Array} An array of Leaflet markers representing the studios.
   */
  loadStudiosToMap(studios) {
    this._mapMarkers = []; // Clear the _mapMarkers array

    // Loop through each studio, generate a marker for it, and add it to the map
    studios.forEach(ds => {
      const marker = L.marker(ds.coords, { // Generate a marker for the studio
        maxWidth: 500, // Set the maximum width of the popup
        minWidth: 100, // Set the minimum width of the popup
        riseOnHover: true, // Make the marker rise on hover
        title: ds.name, // Set the title of the marker to the studio name
      })
        .addTo(this.map) // Add the marker to the map
        .bindPopup(this._generateStudioMarker(ds)); // Generate and bind the popup to the marker
      this._mapMarkers.push(marker); // Add the marker to the _mapMarkers array
    });

    return this._mapMarkers; // Return the array of markers
  }

  /**
   * Load the events onto the map and generate markers for them.
   * This function takes an array of event objects as an argument and generates
   * markers for each one on the map. It adds the markers to the _mapMarkers array
   * and returns the array.
   *
   * @param {Array} events - An array of event objects.
   * @returns {Array} An array of Leaflet markers representing the events.
   */
  loadEventsToMap(events) {
    this._mapMarkers = []; // Clear the _mapMarkers array

    // Define the custom icon for the markers
    let customIcon = L.icon({
      iconUrl: '/placeholder.png',
      iconSize: [35, 35], // Set the size of the icon
      popupAnchor: [0, -15], // Set the anchor point for the popup
    });

    // Loop through each event, generate a marker for it, and add it to the map
    events.forEach(de => {
      const marker = L.marker(de.coords, { // Generate a marker for the event
        icon: customIcon, // Set the custom icon for the marker
        maxWidth: 600, // Set the maximum width of the popup
        minWidth: 100, // Set the minimum width of the popup
        riseOnHover: true, // Make the marker rise on hover
        title: de.title, // Set the title of the marker to the event title
      })
        .addTo(this.map) // Add the marker to the map
        .bindPopup(this._generateEventMarker(de)); // Generate and bind the popup to the marker
      this._mapMarkers.push(marker); // Add the marker to the _mapMarkers array
    });

    return this._mapMarkers; // Return the array of markers
  }

  /**
   * Clear all markers from the map by removing them from the map's layer group.
   * This function takes an array of markers as an argument and removes each one
   * from the map.
   *
   * @param {Array} mapMarkers - An array of Leaflet markers to be removed from
   *   the map.
   */
  clearAllMarkersFromMap(mapMarkers) {
    // Check if there are any markers in the array
    if (mapMarkers.length > 0) {
      // Loop through each marker and remove it from the map
      mapMarkers.forEach(marker => {
        this.map.removeLayer(marker);
      });
    }
  }

/**
 * Sets the view of the map to the specified coordinates.
 *
 * @param {Array} coords - The coordinates to set the map view to.
 */
goToMarker(coords) {
  this.map.setView(coords, MAP_ZOOM_LEVEL, {
    animate: true,
    pan: {
      duration: 1, // Set the duration of the pan animation
    },
  });
}

  /**
   * Opens the popup of a marker with the specified id after a delay.
   *
   * @param {Array} mapMarkers - An array of Leaflet markers.
   * @param {Number} requiredId - The id of the marker to open the popup of.
   * @param {String} type - The type of marker, used to determine the delay.
   */
  openPopup(mapMarkers, requiredId, type) {
    // Set a delay based on the type of marker
    const delay = type === 'marker' ? 10 : DEFAULT_ANIMATION_DURATION;

    // Set a timeout to open the popup after the delay
    setTimeout(
      function () {
        // Loop through each marker and check if its id matches the required id
        mapMarkers.forEach(marker => {
          const markerId = +marker
            .getPopup()
            .getContent()
            .split(' ')[2] // Split the content of the popup by spaces
            .split('"')[1]; // Get the id from the split content
          if (markerId === +requiredId) marker.openPopup(); // Open the popup if the ids match
        });
      },
      delay
    );
  }

  /**
   * Closes all the popups of the markers in the map view.
   */
  closeAllMarkers() {
    // Loop through each marker and close its popup
    this._mapMarkers.forEach(marker => {
      marker.closePopup(); // Close the popup of the marker
    });
  }
}

export default new MapView();
