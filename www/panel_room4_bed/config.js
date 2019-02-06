/*
 This is my configuration file for the panel near my bed.
*/

var mysecrets = JSON.parse(window.secrets);

var CONFIG = {
   customTheme: CUSTOM_THEMES.MOBILE,      // CUSTOM_THEMES.TRANSPARENT, CUSTOM_THEMES.MATERIAL, 
                                           // CUSTOM_THEMES.MOBILE, CUSTOM_THEMES.COMPACT, 
                                           // CUSTOM_THEMES.HOMEKIT, CUSTOM_THEMES.WINPHONE, CUSTOM_THEMES.WIN95
   transition: TRANSITIONS.ANIMATED_GPU,   // ANIMATED or SIMPLE (better perfomance)
   entitySize: ENTITY_SIZES.SMALL,         // SMALL, BIG are available
   tileSize: 50,
   tileMargin: 6,
   serverUrl:      mysecrets.serverUrl,
   wsUrl:          mysecrets.wsUrl,
   authToken:      mysecrets.authToken,    // optional: make an long live token and put it here
   //googleApiKey: mysecrets.googleApiKey, // Required if you are using Google Maps for device tracker
   debug: false,                           // Prints entities and state change info to the console.

   // next fields are optional
   events: [],
   timeFormat: 24,
   menuPosition: MENU_POSITIONS.LEFT,      // or BOTTOM
   hideScrollbar: true,                    // horizontal scrollbar
   groupsAlign: GROUP_ALIGNS.HORIZONTALLY, // or VERTICALLY
   //groupsAlign: GROUP_ALIGNS.VERTICALLY, // or VERTICALLY

/*
   header: { // https://github.com/resoai/TileBoard/wiki/Header-configuration
      styles: {
         padding: '30px 130px 0',
         fontSize: '28px'
      },
      right: [],
      left: [
         {
            type: HEADER_ITEMS.DATETIME,
            dateFormat: 'EEEE, LLLL dd', //https://docs.angularjs.org/api/ng/filter/date
         }
      ]
   },
*/

  screensaver: {// optional. https://github.com/resoai/TileBoard/wiki/Screensaver-configuration
      timeout: 60, // after 5 mins of inactive
      slidesTimeout: 10, // 10s for one slide
      styles: { fontSize: '40px' },
      leftTop: [{ type: SCREENSAVER_ITEMS.DATETIME }], // put datetime to the left-bottom of screensaver
      slides: [
     //    { bg: 'images/bg1.jpeg' },
     //    { bg: 'images/bg3.jpg' },
         {
            // bg: 'images/bg2.png',
            rightBottom: [ // put text to the 2nd slide
               {
                  type: SCREENSAVER_ITEMS.CUSTOM_HTML,
                  html: '',
                  styles: { fontSize: '40px' }
               }
            ]
         } 
      ] 
   },

   pages: [
      {
         title: 'Main page',
         bg: 'images/bg2.png',
         icon: 'mdi-numeric-4-box-outline', // home icon
         groups: [
            {
               title: 'Zimmer 4',  // no title needed as groupMarginCss 4px hides it (put a higher value to show the title)
               width: 10,
               height: 6,
               groupMarginCss: '6px 72px',
               items: [
                {
                   position: [0, 0],
                   height: 2,
                   width: 2,
                   title: 'Bett',
                   subtitle: 'Zimmer 4',
                   id: 'light.room4_bed',
                   type: TYPES.LIGHT,
                   states: {
                      on: "On",
                      off: "Off"
                   },
                   icons: {
                      on: "mdi-lightbulb-on",
                      off: "mdi-lightbulb",
                   },
                   sliders: [
                      {
                         title: 'Brightness',
                         field: 'brightness',
                         max: 255,
                         min: 0,
                         step: 5,
                         request: {
                            type: "call_service",
                            domain: "light",
                            service: "turn_on",
                            field: "brightness"
                         }
                      }
                   ]
                },
		{
		   position: [2, 0],
                   height: 2,
                   width: 2,
		   title: 'Schreibtisch',
		   subtitle: 'Zimmer4',
		   id: 'light.room4_desk',
		   type: TYPES.LIGHT,
		   states: {
		      on: "On",
		      off: "Off"
		   },
		   icons: {
		      on: "mdi-lightbulb-on",
		      off: "mdi-lightbulb",
		   },
		   sliders: [
		      {
			 title: 'Brightness',
			 field: 'brightness',
			 max: 255,
			 min: 0,
			 step: 5,
			 request: {
			    type: "call_service",
			    domain: "light",
			    service: "turn_on",
			    field: "brightness"
			 }
		      }
		   ]
		},
                {  
                   position: [4, 0],
                   height: 2,
                   width: 2,
                   title: 'Schrank',
                   subtitle: 'Zimmer4',
                   id: 'light.room4_door',
                   type: TYPES.LIGHT,
                   states: {
                      on: "On",
                      off: "Off"
                   },
                   icons: {
                      on: "mdi-lightbulb-on",
                      off: "mdi-lightbulb",
                   },
                   sliders: [
                      {  
                         title: 'Brightness',
                         field: 'brightness',
                         max: 255,
                         min: 0,
                         step: 5, 
                         request: {
                            type: "call_service",
                            domain: "light",
                            service: "turn_on",
                            field: "brightness"
                         }
                      }
                   ]
                },
		{
		   position: [6, 0],
                   height: 2,
                   width: 2,
		   title: 'Deckenlampe',
		   subtitle: 'Zimmer4',
		   id: 'switch.room4_t1',
		   type: TYPES.LIGHT,
		   states: {
		      on: "On",
		      off: "Off"
		   },
		   icons: {
		      on: "mdi-lightbulb-on",
		      off: "mdi-lightbulb",
		   }
		},
		{  
		   position: [8, 0],
                   height: 2,
                   width: 2,
		   title: 'Sonnenlicht',
		   subtitle: 'Zimmer 4',
		   id: 'light.room4_sun',
		   type: TYPES.LIGHT,
		   states: {
		      on: "On",
		      off: "Off"
		   },
		   icons: {
		      on: "mdi-lightbulb-on",
		      off: "mdi-lightbulb",
		   },
		   sliders: [
		      {
			 title: 'Brightness',
			 field: 'brightness',
			 max: 255,
			 min: 0,
			 step: 5,
			 request: {
			    type: "call_service",
			    domain: "light",
			    service: "turn_on",
			    field: "brightness"
			 }
		      }
		   ]
		}, // end sonne
                {  
                   position: [0, 2],
                   height: 4,
                   width: 3,
                   classes: ['-compact'], // enable this if you want a little square tile (1x1)
                   type: TYPES.WEATHER,
                   id: 'group.weather',
                   state: '&sensor.dark_sky_summary.state', // label with weather summary (e.g. Sunny)
                   icon: '&sensor.dark_sky_icon.state',
                   //iconImage: '&sensor.dark_sky_icon.state', // use this one if you want to replace icon with image
                   icons: {  
                      'clear-day': 'clear',
                      'clear-night': 'nt-clear',
                      'cloudy': 'cloudy',
                      'rain': 'rain',
                      'sleet': 'sleet',
                      'snow': 'snow',
                      'wind': 'hazy',
                      'fog': 'fog',  
                      'partly-cloudy-day': 'partlycloudy',
                      'partly-cloudy-night': 'nt-partlycloudy'
                   },
                   fields: { // most of that fields are optional
                      summary: '&sensor.dark_sky_summary.state',
                      temperature: '&sensor.dark_sky_temperature.state',
                      temperatureUnit: '&sensor.dark_sky_temperature.attributes.unit_of_measurement',
                      windSpeed: '&sensor.dark_sky_wind_speed.state',
                      windSpeedUnit: '&sensor.dark_sky_wind_speed.attributes.unit_of_measurement',
                      humidity: '&sensor.dark_sky_humidity.state',
                      humidityUnit: '&sensor.dark_sky_humidity.attributes.unit_of_measurement',

                      list: [
                         // custom line
                         'Feels like '
                            + '&sensor.dark_sky_apparent_temperature.state'
                            + '&sensor.dark_sky_apparent_temperature.attributes.unit_of_measurement',
                           
                         // another custom line
                         //'Pressure '
                         //   + '&sensor.dark_sky_pressure.state'
                         //   + '&sensor.dark_sky_pressure.attributes.unit_of_measurement',

                         // yet another custom line
                         '&sensor.dark_sky_precip_probability.state'
                            + '&sensor.dark_sky_precip_probability.attributes.unit_of_measurement'
                            + ' chance of rain'
                      ]
                   }
                },
		{
		   position: [3, 2],
		   height: 4,
		   width: 3,
		   title: 'Temperaturen',
		   id: {}, // since we are binding each list item to different sensor, so we simply use an empty object
		   type: TYPES.TEXT_LIST,
		   state: false,
		   list: [
		      {
			 title: 'Küche',
			 icon: 'mdi-temperature-celsius',
			 value: '&sensor.outside_temperature.state'
		      },
		      {
			 title: 'Ya',
			 icon: 'mdi-temperature-celsius',
			 value: '&sensor.room1_temperature.state'
		      },
		      {
			 title: 'Tinu',
			 icon: 'mdi-temperature-celsius',
			 value: '&sensor.room4_temperature.state'
		      }
		   ]
		},
                {
                   position: [6, 2],
                   height: 2,
                   width: 2,
                   title: 'Ventillator',
                   subtitle: 'Zimmer4',
                   id: 'switch.room4_t2',
                   type: TYPES.LIGHT,
                   states: {
                      on: "On",
                      off: "Off"
                   },
                   icons: {
                      on: "mdi-lightbulb-on",
                      off: "mdi-lightbulb",
                   }
                },
                {
                   position: [8, 2],
                   height: 2,
                   width: 2,
                   type: TYPES.SCRIPT,
                   id: 'script.sunset',
                   icons: {
                      on: "mdi-weather-sunset",
                      off: "mdi-weather-sunset"
                   },
                   state: false
                }

               ]
            }
         ] // end groups page 1
      }, // end main page 
      {
         title: 'Zimmer 4 (2)',
         bg: 'images/bg2.png',
         icon: 'mdi-information-outline', // home icon
         groups: [
            {
               title: 'Zimmer 4 (2)',
               width: 10,
               height: 6,
               groupMarginCss: '6px 72px',
               items: [
                {  
                   position: [0, 0],
                   width: 2,
                   height: 2,
                   title: 'another switch',
                   subtitle: 'Zimmer4',
                   type: TYPES.SCRIPT,
                   id: 'script.sunset',
                   icons: {
                      on: "mdi-weather-sunset",
                      off: "mdi-weather-sunset"
                   },
                   state: false
                },
                {
                   position: [0, 2],
                   width: 3,
                   height: 4,
                   title: 'Anwesend',
                   subtitle: 'Monbijou',
                   id: {}, // since we are binding each list item to different sensor, so we simply use an empty object
                   type: TYPES.TEXT_LIST,
                   state: false,
                   list: [
                      {
                         title: 'Tinu',
                         icon: 'mdi-human-greeting',
                         value: '&device_tracker.room4_phone_tinu.state'
                      },
                      {
                         title: 'Ya',
                         icon: 'mdi-human-female',
                         value: '&device_tracker.room1_phone_ya.state'
                      },
                      {
                         title: 'Neala',
                         icon: 'mdi-human-female',
                         value: '&device_tracker.room6_phone_neala.state'
                      },
                      {
                         title: 'Giulia',
                         icon: 'mdi-human-female-girl',
                         value: '&device_tracker.room5_tablet_giulia.state'
                      }
                   ]
                },

	      ]
            }
	  ]

      } // end page 2
   ], // end pages
}
