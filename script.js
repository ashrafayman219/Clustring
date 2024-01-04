// display variables
var displayMap;
var view;
var gL;
var graphicsLayer;
var url;
var arrayOfDisplayedGraphics = [
  {
    CurrentMethod: "point",
    LocationName: "Location 1",
    LocationPoints: [3498696.474105452, 3243205.018199802],
    Color: "Yellow",
    Data: {
      Id: 112,
      ProjectName: "Project 1",
      SideName: "dd",
      ContractorName: "dd",
      camera: "data",
      IsFuture: true,
    },
  },
  {
    CurrentMethod: "point",
    LocationName: "Location 1",
    LocationPoints: [3498696.474105452, 3253205.018199802],
    Color: "orange",
    Data: {
      Id: 113,
      ProjectName: "Project 1",
      SideName: "dd",
      ContractorName: "dd",
      camera: "data",
      IsFuture: true,
    },
  },
  {
    CurrentMethod: "point",
    LocationName: "Location 1",
    LocationPoints: [3578696.474105452, 3553205.018199802],
    Color: "red",
    Data: {
      Id: 122,
      ProjectName: "Project 1",
      SideName: "dd",
      ContractorName: "dd",
      camera: "data",
      IsFuture: true,
    },
  },
  {
    CurrentMethod: "point",
    LocationName: "Location 1",
    LocationPoints: [3478696.474105452, 3453205.018199802],
    Color: "blue",
    Data: {
      Id: 155,
      ProjectName: "Project 1",
      SideName: "dd",
      ContractorName: "dd",
      camera: "data",
      IsFuture: true,
    },
  },
  {
    CurrentMethod: "point",
    LocationName: "Location 1",
    LocationPoints: [34278696.474105452, 35253205.018199802],
    Color: "blue",
    Data: {
      Id: 144,
      ProjectName: "Project 1",
      SideName: "dd",
      ContractorName: "dd",
      camera: "data",
      IsFuture: true,
    },
  },
  {
    CurrentMethod: "point",
    LocationName: "Location 1",
    LocationPoints: [3478696.474105552, 35353205.018199802],
    Color: "blue",
    Data: {
      Id: 1444,
      ProjectName: "Project 1",
      SideName: "dd",
      ContractorName: "dd",
      camera: "data",
      IsFuture: true,
    },
  },
  {
    CurrentMethod: "point",
    LocationName: "Location 1",
    LocationPoints: [34278696.4741054542, 356653205.018199802],
    Color: "blue",
    Data: {
      Id: 1445,
      ProjectName: "Project 1",
      SideName: "dd",
      ContractorName: "dd",
      camera: "data",
      IsFuture: true,
    },
  },
  {
    CurrentMethod: "point",
    LocationName: "Location 1",
    LocationPoints: [3478696.474105452, 35532305.018199802],
    Color: "blue",
    Data: {
      Id: 145,
      ProjectName: "Project 1",
      SideName: "dd",
      ContractorName: "dd",
      camera: "data",
      IsFuture: true,
    },
  },
  {
    CurrentMethod: "point",
    LocationName: "Location 1",
    LocationPoints: [34728696.47412054521, 3553205.018199802],
    Color: "blue",
    Data: {
      Id: 143,
      ProjectName: "Project 1",
      SideName: "dd",
      ContractorName: "dd",
      camera: "data",
      IsFuture: true,
    },
  },
  {
    CurrentMethod: "point",
    LocationName: "Location 1",
    LocationPoints: [34782696.474105452, 35532805.018199802],
    Color: "blue",
    Data: {
      Id: 1447,
      ProjectName: "Project 1",
      SideName: "dd",
      ContractorName: "dd",
      camera: "data",
      IsFuture: true,
    },
  },
  {
    CurrentMethod: "point",
    LocationName: "Location 1",
    LocationPoints: [347852696.4741805452, 35553205.018199802],
    Color: "blue",
    Data: {
      Id: 1446,
      ProjectName: "Project 1",
      SideName: "dd",
      ContractorName: "dd",
      camera: "data",
      IsFuture: true,
    },
  },
  {
    CurrentMethod: "point",
    LocationName: "Location 1",
    LocationPoints: [34786696.474105452, 35532705.0181999802],
    Color: "blue",
    Data: {
      Id: 1464,
      ProjectName: "Project 1",
      SideName: "dd",
      ContractorName: "dd",
      camera: "data",
      IsFuture: true,
    },
  },
  {
    CurrentMethod: "point",
    LocationName: "Location 1",
    LocationPoints: [34786966.474105452, 355537205.018199802],
    Color: "blue",
    Data: {
      Id: 14477,
      ProjectName: "Project 1",
      SideName: "dd",
      ContractorName: "dd",
      camera: "data",
      IsFuture: true,
    },
  },
  {
    CurrentMethod: "point",
    LocationName: "Location 1",
    LocationPoints: [34786496.474105452, 3565320555.018199802],
    Color: "blue",
    Data: {
      Id: 14000,
      ProjectName: "Project 1",
      SideName: "dd",
      ContractorName: "dd",
      camera: "data",
      IsFuture: true,
    },
  },
  {
    CurrentMethod: "point",
    LocationName: "Location 1",
    LocationPoints: [3478696.4741054562, 35563205.018199802],
    Color: "blue",
    Data: {
      Id: 14774,
      ProjectName: "Project 1",
      SideName: "dd",
      ContractorName: "dd",
      camera: "data",
      IsFuture: true,
    },
  },
  {
    CurrentMethod: "point",
    LocationName: "Location 1",
    LocationPoints: [3478696.47410543452, 35537205.018199802],
    Color: "blue",
    Data: {
      Id: 14490,
      ProjectName: "Project 1",
      SideName: "dd",
      ContractorName: "dd",
      camera: "data",
      IsFuture: true,
    },
  },
  {
    CurrentMethod: "point",
    LocationName: "Location 1",
    LocationPoints: [344786976.474105452, 357532065.018199802],
    Color: "blue",
    Data: {
      Id: 14499,
      ProjectName: "Project 1",
      SideName: "dd",
      ContractorName: "dd",
      camera: "data",
      IsFuture: true,
    },
  },
  {
    CurrentMethod: "point",
    LocationName: "Location 1",
    LocationPoints: [347866696.474105452, 35536205.0187199802],
    Color: "blue",
    Data: {
      Id: 14488,
      ProjectName: "Project 1",
      SideName: "dd",
      ContractorName: "dd",
      camera: "data",
      IsFuture: true,
    },
  },
  {
    CurrentMethod: "point",
    LocationName: "Location 1",
    LocationPoints: [34786396.4746105452, 3553205.0188199802],
    Color: "blue",
    Data: {
      Id: 1448880,
      ProjectName: "Project 1",
      SideName: "dd",
      ContractorName: "dd",
      camera: "data",
      IsFuture: true,
    },
  },
  {
    CurrentMethod: "point",
    LocationName: "Location 1",
    LocationPoints: [34786956.4774105452, 3553205.6018199802],
    Color: "blue",
    Data: {
      Id: 14400,
      ProjectName: "Project 1",
      SideName: "dd",
      ContractorName: "dd",
      camera: "data",
      IsFuture: true,
    },
  },
  {
    CurrentMethod: "point",
    LocationName: "Location 1",
    LocationPoints: [34786946.4741054452, 3553205.0181998502],
    Color: "blue",
    Data: {
      Id: 14455,
      ProjectName: "Project 1",
      SideName: "dd",
      ContractorName: "dd",
      camera: "data",
      IsFuture: true,
    },
  },
  {
    CurrentMethod: "point",
    LocationName: "Location 1",
    LocationPoints: [34786596.2474105452, 35532052.018199802],
    Color: "blue",
    Data: {
      Id: 14412,
      ProjectName: "Project 1",
      SideName: "dd",
      ContractorName: "dd",
      camera: "data",
      IsFuture: true,
    },
  },
  {
    CurrentMethod: "point",
    LocationName: "Location 1",
    LocationPoints: [34783696.4741054652, 3553205.0181994802],
    Color: "blue",
    Data: {
      Id: 14471,
      ProjectName: "Project 1",
      SideName: "dd",
      ContractorName: "dd",
      camera: "data",
      IsFuture: true,
    },
  },
  {
    CurrentMethod: "point",
    LocationName: "Location 1",
    LocationPoints: [347832696.4764105452, 3553205.0181998602],
    Color: "blue",
    Data: {
      Id: 14418,
      ProjectName: "Project 1",
      SideName: "dd",
      ContractorName: "dd",
      camera: "data",
      IsFuture: true,
    },
  },
  {
    CurrentMethod: "point",
    LocationName: "Location 1",
    LocationPoints: [34788696.4754105452, 3553205.0181969802],
    Color: "blue",
    Data: {
      Id: 144425,
      ProjectName: "Project 1",
      SideName: "dd",
      ContractorName: "dd",
      camera: "data",
      IsFuture: true,
    },
  },
  {
    CurrentMethod: "point",
    LocationName: "Location 1",
    LocationPoints: [34786796.4741065452, 3553205.0181399802],
    Color: "blue",
    Data: {
      Id: 14412,
      ProjectName: "Project 1",
      SideName: "dd",
      ContractorName: "dd",
      camera: "data",
      IsFuture: true,
    },
  },
  {
    CurrentMethod: "point",
    LocationName: "Location 1",
    LocationPoints: [34786996.4741056452, 3553205.0181998402],
    Color: "blue",
    Data: {
      Id: 144125,
      ProjectName: "Project 1",
      SideName: "dd",
      ContractorName: "dd",
      camera: "data",
      IsFuture: true,
    },
  },
  {
    CurrentMethod: "point",
    LocationName: "Location 1",
    LocationPoints: [34786896.474105452, 3553205.0184199802],
    Color: "blue",
    Data: {
      Id: 144258,
      ProjectName: "Project 1",
      SideName: "dd",
      ContractorName: "dd",
      camera: "data",
      IsFuture: true,
    },
  },
  {
    CurrentMethod: "point",
    LocationName: "Location 1",
    LocationPoints: [34786996.4745105452, 3553205.0181949802],
    Color: "blue",
    Data: {
      Id: 144999,
      ProjectName: "Project 1",
      SideName: "dd",
      ContractorName: "dd",
      camera: "data",
      IsFuture: true,
    },
  },
  {
    CurrentMethod: "point",
    LocationName: "Location 1",
    LocationPoints: [34778696.4741805452, 3553205.0181799802],
    Color: "blue",
    Data: {
      Id: 144999,
      ProjectName: "Project 1",
      SideName: "dd",
      ContractorName: "dd",
      camera: "data",
      IsFuture: true,
    },
  },
  {
    CurrentMethod: "point",
    LocationName: "Location 1",
    LocationPoints: [34788696.4741054752, 3553205.0181969802],
    Color: "blue",
    Data: {
      Id: 144999,
      ProjectName: "Project 1",
      SideName: "dd",
      ContractorName: "dd",
      camera: "data",
      IsFuture: true,
    },
  },
  {
    CurrentMethod: "point",
    LocationName: "Location 1",
    LocationPoints: [3478696.494105452, 3543205.018199802],
    Color: "purple",
    Data: {
      Id: 199,
      ProjectName: "Project 1",
      SideName: "dd",
      ContractorName: "dd",
      camera: "data",
      IsFuture: true,
    },
  },
  {
    CurrentMethod: "point",
    LocationName: "Location 1",
    LocationPoints: [3978696.494105452, 3543205.018199802],
    Color: "purple",
    Data: {
      Id: 250,
      ProjectName: "Project 1",
      SideName: "dd",
      ContractorName: "dd",
      camera: "data",
      IsFuture: true,
    },
  },
  {
    CurrentMethod: "point",
    LocationName: "Location 1",
    LocationPoints: [3878696.494105452, 3543205.018199802],
    Color: "green",
    Data: {
      Id: 199,
      ProjectName: "Project 1",
      SideName: "dd",
      ContractorName: "dd",
      camera: "data",
      IsFuture: true,
    },
  },
  {
    CurrentMethod: "point",
    LocationName: "Location 1",
    LocationPoints: [3458696.494105452, 3243205.018199802],
    Color: "purple",
    Data: {
      Id: 288,
      ProjectName: "Project 1",
      SideName: "dd",
      ContractorName: "dd",
      camera: "data",
      IsFuture: true,
    },
  },
  {
    CurrentMethod: "point",
    LocationName: "Location 1",
    LocationPoints: [32478696.494105452, 3543205.018199802],
    Color: "purple",
    Data: {
      Id: 435,
      ProjectName: "Project 1",
      SideName: "dd",
      ContractorName: "dd",
      camera: "data",
      IsFuture: true,
    },
  },
  {
    CurrentMethod: "point",
    LocationName: "Location 1",
    LocationPoints: [3578696.494105452, 3643205.018199802],
    Color: "green",
    Data: {
      Id: 210,
      ProjectName: "Project 1",
      SideName: "dd",
      ContractorName: "dd",
      camera: "data",
      IsFuture: true,
    },
  },
  {
    CurrentMethod: "point",
    LocationName: "Location 1",
    LocationPoints: [3648696.494105452, 3543205.018199802],
    Color: "aqua",
    Data: {
      Id: 233,
      ProjectName: "Project 1",
      SideName: "dd",
      ContractorName: "dd",
      camera: "data",
      IsFuture: true,
    },
  },
  {
    CurrentMethod: "point",
    LocationName: "Location 1",
    LocationPoints: [3476696.494105452, 3543205.018199802],
    Color: "pink",
    Data: {
      Id: 402,
      ProjectName: "Project 1",
      SideName: "dd",
      ContractorName: "dd",
      camera: "data",
      IsFuture: true,
    },
  },
  {
    CurrentMethod: "point",
    LocationName: "Location 1",
    LocationPoints: [3474696.494105452, 3543205.018199802],
    Color: "brown",
    Data: {
      Id: 8521,
      ProjectName: "Project 1",
      SideName: "dd",
      ContractorName: "dd",
      camera: "data",
      IsFuture: true,
    },
  },
  {
    CurrentMethod: "point",
    LocationName: "Location 1",
    LocationPoints: [3478696.494105452, 3643205.018199802],
    Color: "atomic",
    Data: {
      Id: 605,
      ProjectName: "Project 1",
      SideName: "dd",
      ContractorName: "dd",
      camera: "data",
      IsFuture: true,
    },
  },
  {
    CurrentMethod: "point",
    LocationName: "Location 1",
    LocationPoints: [3468696.494105452, 3613205.018199802],
    Color: "bronze",
    Data: {
      Id: 605,
      ProjectName: "Project 1",
      SideName: "dd",
      ContractorName: "dd",
      camera: "data",
      IsFuture: true,
    },
  },
  // {
  //   CurrentMethod: "polygon",
  //   LocationName: "Location 1",
  //   LocationPoints: [
  //     [
  //       4748976.615664677,
  //       2591812.5378114847
  //     ],
  //     [
  //       4747210.504341669,
  //       2591296.7225372903
  //     ],
  //     [
  //       4747586.152421802,
  //       2589463.3356386665
  //     ],
  //     [
  //       4749374.68581831,
  //       2588728.859541717
  //     ],
  //     [
  //       4750585.730375124,
  //       2590141.744857993
  //     ],
  //     [
  //       4748976.610987146,
  //       2591812.5378114847
  //     ]
  //   ],
  //   Color: "yellow",
  //   Data: {
  //     Id: 2,
  //     ProjectName: "Project 2",
  //     SideName: "polygon",
  //     ContractorName: "polyg",
  //     camera: "data",
  //     IsFuture: false,
  //   },
  // },
  // {
  //   CurrentMethod: "polygon",
  //   LocationName: "Location 1",
  //   LocationPoints: [
  //     [2783671.710763707, 4670243.505248234],
  //     [2183671.710763707, 4570243.505248234],
  //     [2283671.710763707, 4370243.505248234],
  //     [2783671.710763707, 4670243.505248234],
  //   ],
  //   Color: "Green",
  //   Data: {
  //     Id: 2,
  //     ProjectName: "Project 2",
  //     SideName: "polygon",
  //     ContractorName: "polyg",
  //     camera: "data",
  //     IsFuture: false,
  //   },
  // },
  // {
  //   CurrentMethod: "point",
  //   LocationName: "Location 1",
  //   LocationPoints: [4783671.710763707, 1370243.505248234],
  //   Color: "red",
  //   Data: {
  //     Id: 6,
  //     ProjectName: "Project 1",
  //     SideName: "dd",
  //     ContractorName: "dd",
  //     camera: "data",
  //     IsFuture: true,
  //   },
  // },
  // {
  //   CurrentMethod: "polygon",
  //   LocationName: "Location 1",
  //   LocationPoints: [
  //     [
  //       779165.0316493756,
  //       3460782.966426249
  //     ],
  //     [
  //       -934525.2623675946,
  //       2127451.3256524154
  //     ],
  //     [
  //       112091.7515163217,
  //       819457.6077094455
  //     ],
  //     [
  //       1252957.2317173865,
  //       2836732.8279334046
  //     ],
  //     [
  //       779165.0316493756,
  //       3460782.966426249
  //     ]
  //   ],
  //   Color: "orange",
  //   Data: {
  //     Id: 2,
  //     ProjectName: "Project 2",
  //     SideName: "polygon",
  //     ContractorName: "polyg",
  //     camera: "data",
  //     IsFuture: false,
  //   },
  // },
  // {
  //   CurrentMethod: "polygon",
  //   LocationName: "Location 1",
  //   LocationPoints: [
  //     [
  //       1372212.3888252592,
  //       2415560.7472385406
  //     ],
  //     [
  //       1345375.9109256044,
  //       2400773.300924427
  //     ],
  //     [
  //       1360437.19945615,
  //       2358875.534648613
  //     ],
  //     [
  //       1393024.3515439613,
  //       2370924.5655469894
  //     ],
  //     [
  //       1399322.7085657872,
  //       2396939.5184633513
  //     ],
  //     [
  //       1372212.3888252592,
  //       2415560.7472385406
  //     ]
  //   ],
  //   Color: "blue",
  //   Data: {
  //     Id: 2,
  //     ProjectName: "Project 2",
  //     SideName: "polygon",
  //     ContractorName: "polyg",
  //     camera: "data",
  //     IsFuture: false,
  //   },
  // },

];
var sarr = [
  {
    CurrentMethod: "point",
    LocationName: "Location 1",
    LocationPoints: [2583671.710763707, 4370243.505248234],
    Color: "Yellow",
    Data: {
      Id: 64,
      ProjectName: "Project 1",
      SideName: "ggf",
      ContractorName: "dd",
      camera: "data",
    },
  },
  {
    CurrentMethod: "point",
    LocationName: "Location 2",
    LocationPoints: [2583671.710763707, 5370243.505248234],
    Color: "blue",
    Data: {
      Id: 33,
      ProjectName: "Project 2",
      SideName: "vv",
      ContractorName: "dcsa",
      camera: "data",
    },
  },
  {
    CurrentMethod: "point",
    LocationName: "Location 3",
    LocationPoints: [8583671.710763707, 7370243.505248234],
    Color: "green",
    Data: {
      Id: 24,
      ProjectName: "Project 3",
      SideName: "cv",
      ContractorName: "bb",
      camera: "data",
    },
  },
  {
    CurrentMethod: "point",
    LocationName: "Location 4",
    LocationPoints: [4583671.710763707, 2370243.505248234],
    Color: "red",
    Data: {
      Id: 55,
      ProjectName: "Project 4",
      SideName: "ew",
      ContractorName: "xc",
      camera: "data",
    },
  },
];
var pointGraphic;
var polygonGraphic;
var polylineGraphic;
var gra;
var N = 6;
var array = [];
var currentFeat = {
  graphic: {},
  obj: {},
};
var index = 0;

var sidePoint = [];
var errorMsg = document.getElementById("errMsg");

function loadModule(moduleName) {
  return new Promise((resolve, reject) => {
    require([moduleName], (module) => {
      if (module) {
        resolve(module);
      } else {
        reject(new Error(`Module not found: ${moduleName}`));
      }
    }, (error) => {
      reject(error);
    });
  });
}

async function initializeMap() {
  try {
    if (!view) {
      const [esriConfig, Map, MapView, intl, GraphicsLayer, KMLLayer, FeatureLayer, Popup] = await Promise.all(
        [
          loadModule("esri/config"),
          loadModule("esri/Map"),
          loadModule("esri/views/MapView"),
          loadModule("esri/intl"),
          loadModule("esri/layers/GraphicsLayer"),
          loadModule("esri/layers/KMLLayer"),
          loadModule("esri/layers/FeatureLayer"),
          loadModule("esri/widgets/Popup"),
        ]
      );

      intl.setLocale("ar");
      esriConfig.apiKey = "AAPK756f006de03e44d28710cb446c8dedb4rkQyhmzX6upFiYPzQT0HNQNMJ5qPyO1TnPDSPXT4EAM_DlQSj20ShRD7vyKa7a1H";
      
      // Typical usage
      KMLL = new KMLLayer({
        url: "https://pmo2023.s3.eu-central-1.amazonaws.com/asir_districts.kml", // url to the service
        listMode: 'hide-children',
        title: "الأحياء",
        // maxScale: 1000,
        // minScale: 5000000,
        opacity: 1
      });
      // KMLL.maxScale = 1000;

      // // Typical usage
      // KMLL2 = new KMLLayer({
      //   // url: "https://pmo2023.s3.eu-central-1.amazonaws.com/doc.kml"// url to the service
      // });


      // const f1 = new FeatureLayer({
      //   url: "https://services5.arcgis.com/zadMqI0lzNpQXGSX/arcgis/rest/services/borders_KML/FeatureServer/1",
      //   title: "حدود البلديات"
      // });

      const f1 = new KMLLayer({
        url: "https://pmo2023.s3.eu-central-1.amazonaws.com/%D8%AD%D8%AF%D9%88%D8%AF+%D8%A7%D9%84%D8%A8%D9%84%D8%AF%D9%8A%D8%A7%D8%AA.kml",
        title: "حدود البلديات"
      });

      displayMap = new Map({
        basemap: "dark-gray-vector",
        // layers: [f1, KMLL],
      });

      view = new MapView({
        // center: [31.233334, 30.033333], // longitude, latitude, centered on Egypt
        center: [31.187252308019705, 26.046536745728652], // longitude, latitude, centered on SA
        container: "displayMap",
        map: displayMap,
        zoom: 5,
        highlightOptions: {
          color: [255, 255, 0, 1],
          haloOpacity: 0.9,
          fillOpacity: 0.2
        },
        popup: new Popup({
          dockEnabled: true,
          dockOptions: {
            // Disables the dock button from the popup
            buttonEnabled: false,
            // Ignore the default sizes that trigger responsive docking
            breakpoint: false,
            position: "bottom-right"
          },
          visibleElements: {
            closeButton: false
          }
        }),
      });

      gL = new GraphicsLayer({
        title: "المشاريع",
        
      });
      displayMap.add(gL);

      gLlable = new GraphicsLayer({
        title: "الاكواد",
        
      });
      displayMap.add(gLlable);

      graphicsLayer = new GraphicsLayer({
        title: "طبـقة الرسـم",
      });
      displayMap.add(graphicsLayer);

      await view.when();

      //add widgets
      addWidgets()
        .then(([view, displayMap]) => {
          console.log("Widgets Returned From Require Scope", view, displayMap);
          // You can work with the view object here
        })
        .catch((error) => {
          // Handle any errors here
        });

      //intiate graphics
      getGraphicsWithLable(arrayOfDisplayedGraphics)
        .then(([view, displayMap, gL]) => {
          console.log("gL Returned From Require Scope", gra);

          // You can work with the view object here
        })
        .catch((error) => {
          // Handle any errors here
        });
    }
    return [view, displayMap, gL, array]; // You can return the view object
  } catch (error) {
    console.error("Error initializing map:", error);
    throw error; // Rethrow the error to handle it further, if needed
  }
}
// calling
initializeMap()
  .then(() => {
    console.log("Map Returned From Require Scope", displayMap);
    // You can work with the view object here
  })
  .catch((error) => {
    // Handle any errors here
  });

async function addWidgets() {
  try {
    // await initializeMap();

    const [
      Fullscreen,
      BasemapGallery,
      Expand,
      ScaleBar,
      AreaMeasurement2D,
      Search,
      Home,
      LayerList,
      
    ] = await Promise.all([
      loadModule("esri/widgets/Fullscreen"),
      loadModule("esri/widgets/BasemapGallery"),
      loadModule("esri/widgets/Expand"),
      loadModule("esri/widgets/ScaleBar"),
      loadModule("esri/widgets/AreaMeasurement2D"),
      loadModule("esri/widgets/Search"),
      loadModule("esri/widgets/Home"),
      loadModule("esri/widgets/LayerList"),
    ]);

    // var fullscreen = new Fullscreen({
    //   view: view,
    // });
    // view.ui.add(fullscreen, "top-right");

    var basemapGallery = new BasemapGallery({
      view: view,
    });

    var Expand22 = new Expand({
      view: view,
      content: basemapGallery,
      expandIcon: "basemap",
      group: "top-right",
      // expanded: false,
      expandTooltip: "معرض خريطة الأساس",
      collapseTooltip: "اغلاق",
    });
    view.ui.add([Expand22], { position: "manual", index: 6 });

    var scalebar = new ScaleBar({
      view: view,
      unit: "metric",
    });
    view.ui.add(scalebar, "bottom-right");

    // var measurementWidget = new AreaMeasurement2D({
    //   view: view,
    // });
    // // view.ui.add(measurementWidget, "top-left")

    // var Expand4 = new Expand({
    //   view: view,
    //   content: measurementWidget,
    //   expandIcon: "measure",
    //   group: "top-right",
    //   // expanded: false,
    //   expandTooltip: "Expand to Measure",
    //   collapseTooltip: "Close Measure",
    // });
    var search = new Search({
      //Add Search widget
      view: view,
    });
    view.ui.add(search, { position: "top-left", index: 0 }); //Add to the map

    var homeWidget = new Home({
      view: view,
    });
    view.ui.add(homeWidget, "top-left");

    var layerList = new LayerList({
      view: view,
      // listItemCreatedFunction: function (event) {
      //   var item = event.item;
      //   // displays the legend for each layer list item
      //   item.panel = {
      //     content: "legend",
      //   };
      // },
      // showLegend: true
    });
    var Expand5 = new Expand({
      view: view,
      content: layerList,
      expandIcon: "layers",
      group: "top-right",
      // expanded: false,
      expandTooltip: "قائمة الطبقات",
      collapseTooltip: "اغلاق",
    });

    view.ui.add([Expand5], { position: "top-right", index: 6 });
    // view.ui.add([Expand4], { position: "top-left", index: 3 });

    // let map2 = document.getElementById("map-content");
    // view.ui.add(map2, "top-right");



    await view.when();
    return [view, displayMap]; // You can return the view object
  } catch (error) {
    console.error("Error initializing map:", error);
    throw error; // Rethrow the error to handle it further, if needed
  }
}



async function getGraphicsWithLable(arrayOfDisplayedGraphics) {
  try {
    const [Graphic, reactiveUtils, Color, FeatureLayer, Swipe] = await Promise.all([
      loadModule("esri/Graphic"),
      loadModule("esri/core/reactiveUtils"),
      loadModule("esri/Color"),
      loadModule("esri/layers/FeatureLayer"),
      loadModule("esri/widgets/Swipe"),
    ]);

    // sidePoint = [arrayOfDisplayedGraphics[0].Side[0], arrayOfDisplayedGraphics[0].Side[1], arrayOfDisplayedGraphics[0].Side[2]];

    gL.removeAll();
    gLlable.removeAll();
    var detailsAction = {
      title: "اضغط لعرض التفاصيل",
      id: "details",
      className: "esri-icon-right-arrow-circled",
    };

    var markerSymbol = {
      type: "picture-marker",  // autocasts as new PictureMarkerSymbol()
      url: "https://daraobeirne.github.io/kisspng-drawing-pin-world-map-logo-push-vector-5ae029f6ddeaf4.198342921524640246909.png",
      // url: "https://arcgis.github.io/arcgis-samples-javascript/sample-data/cat3.png",
      width: "30px",
      height: "30px"
    };


    var popupTemplate = {
      title: "بيانات المشروع",
      content: [
        {
          type: "fields",
          fieldInfos: [
            {
              fieldName: "اسم المشروع",
            },
            {
              fieldName: "اسم الجهة",
            },
            {
              fieldName: "نوع المشروع",
            },
            {
              fieldName: "اسم الموقع",
            },
            {
              fieldName: "id",
            }
          ],
        },
      ],
      actions: [detailsAction],
    };

    let filteredGrWithCoords = arrayOfDisplayedGraphics.filter((item) => {
      if (item.LocationPoints?.length > 0) return item;
      else return undefined;
    });
    for (var l = 0; l < filteredGrWithCoords.length; l++) {
      var objData = filteredGrWithCoords[l].Data;
      var valuesObj = Object.values(objData);

      if (filteredGrWithCoords[l].CurrentMethod === "point") {
        const intializePoint = {
          //Create a point
          type: filteredGrWithCoords[l].CurrentMethod,
          x: filteredGrWithCoords[l].LocationPoints[0],
          y: filteredGrWithCoords[l].LocationPoints[1],
          spatialReference: {
            wkid: 3857, // Assuming the coordinates are in Web Mercator (WKID 3857)
          },
        };
        const stringColor = filteredGrWithCoords[l].Color;
        const toRgbaColor = new Color(stringColor).toRgba();
        toRgbaColor[3] = 0.5; // Set the alpha value to 0.5 (50% transparency)
        const simpleMarkerSymbolPoint = {
          type: "simple-marker",
          color: toRgbaColor,
          outline: {
            color: [255, 255, 255], // White
            width: 1,
          },
        };
        pointGraphic = new Graphic({
          geometry: intializePoint,
          symbol: markerSymbol,
        });

        var attributesPoints = {
          "اسم المشروع": valuesObj[1],
          "اسم الجهة": valuesObj[2],
          "نوع المشروع": valuesObj[3],
          "اسم الموقع": valuesObj[4],
          id: valuesObj[0],
          IsFuture: valuesObj[5],
          type: filteredGrWithCoords[l].CurrentMethod,
        };

        pointGraphic.attributes = attributesPoints;
        pointGraphic.popupTemplate = popupTemplate;

        var pointText = new Graphic({
          geometry: intializePoint,
          symbol: {
            type: "text",
            color: "gray",
            backgroundColor: "white",
            haloColor: "orange",
            haloSize: "1px",
            text: valuesObj[0],
            horizontalAlignment: "center",
            verticalAlignment: "middle",
            xoffset: 0,
            yoffset: 20,
            rotated: true,
            font: {
              // autocast as Font
              size: 10,
              family: "sans-serif",
            },
          },
        });

        gL.add(pointGraphic);
        gLlable.graphics.add(pointText);
      } else if (filteredGrWithCoords[l].CurrentMethod === "polygon") {
        const intializePolygon = {
          //Create a point
          type: filteredGrWithCoords[l].CurrentMethod,
          rings: filteredGrWithCoords[l].LocationPoints,
          spatialReference: {
            wkid: 3857, // Assuming the coordinates are in Web Mercator (WKID 3857)
          },
        };
        const stringColor = filteredGrWithCoords[l].Color;
        const toRgbaColor = new Color(stringColor).toRgba();
        toRgbaColor[3] = 0.5; // Set the alpha value to 0.5 (50% transparency)
        const simpleFillSymbolPolygon = {
          type: "simple-fill",
          color: toRgbaColor,
          outline: {
            color: [255, 255, 255], // White
            width: 1,
          },
        };
        polygonGraphic = new Graphic({
          geometry: intializePolygon,
          symbol: simpleFillSymbolPolygon,
        });

        var attributesPolygons = {
          "اسم المشروع": valuesObj[1],
          "اسم الجهة": valuesObj[2],
          "نوع المشروع": valuesObj[3],
          "اسم الموقع": valuesObj[4],
          id: valuesObj[0],
          IsFuture: valuesObj[5],
          type: filteredGrWithCoords[l].CurrentMethod,
        };

        polygonGraphic.attributes = attributesPolygons;
        polygonGraphic.popupTemplate = popupTemplate;

        var polygonText = new Graphic({
          geometry: intializePolygon,
          symbol: {
            type: "text",
            color: "gray",
            backgroundColor: "white",
            haloColor: "orange",
            haloSize: "1px",
            text: valuesObj[0],
            horizontalAlignment: "center",
            verticalAlignment: "middle",
            xoffset: 0,
            yoffset: 20,
            font: {
              // autocast as Font
              size: 10,
              family: "sans-serif",
            },
          },
        });

        gL.add(polygonGraphic);
        gLlable.graphics.add(polygonText);
      } else if (filteredGrWithCoords[l].CurrentMethod === "polyline") {
        const intializePolyline = {
          //Create a point
          type: filteredGrWithCoords[l].CurrentMethod,
          paths: filteredGrWithCoords[l].LocationPoints,
          spatialReference: {
            wkid: 3857, // Assuming the coordinates are in Web Mercator (WKID 3857)
          },
        };
        const stringColor = filteredGrWithCoords[l].Color;
        const toRgbaColor = new Color(stringColor).toRgba();
        toRgbaColor[3] = 0.5; // Set the alpha value to 0.5 (50% transparency)
        const simpleLineSymbolPolyline = {
          type: "simple-line",
          color: toRgbaColor,
          outline: {
            color: [255, 255, 255], // White
            width: 1,
          },
        };
        polylineGraphic = new Graphic({
          geometry: intializePolyline,
          symbol: simpleLineSymbolPolyline,
        });

        var attributesPolylines = {
          "اسم المشروع": valuesObj[1],
          "اسم الجهة": valuesObj[2],
          "نوع المشروع": valuesObj[3],
          "اسم الموقع": valuesObj[4],
          id: valuesObj[0],
          IsFuture: valuesObj[5],
          type: filteredGrWithCoords[l].CurrentMethod,
        };

        polylineGraphic.attributes = attributesPolylines;
        polylineGraphic.popupTemplate = popupTemplate;

        var polylineText = new Graphic({
          geometry: polylineGraphic.geometry.extent,
          symbol: {
            type: "text",
            color: "gray",
            backgroundColor: "white",
            haloColor: "orange",
            haloSize: "1px",
            text: valuesObj[0],
            horizontalAlignment: "center",
            verticalAlignment: "middle",
            xoffset: 0,
            yoffset: 20,
            font: {
              // autocast as Font
              size: 10,
              family: "sans-serif",
            },
          },
        });

        gL.add(polylineGraphic);
        gLlable.graphics.add(polylineText);
      }
    }

    reactiveUtils.on(
      () => view.popup,
      "trigger-action",
      (event) => {
        if (event.action.id === "details") {
          const attr = view.popup.selectedFeature.attributes;
          console.log(attr);
          if (attr) {
            if (attr.IsFuture === true) {
              var info = "/Projects/GetFutureProjectByID/" + attr.id;
              window.open(info.trim());
            } else {
              var info = "/Projects/ViewProject/" + attr.id;
              window.open(info.trim());
            }
          }
        }
      }
    );

    gra = gL.graphics;
    graLableling = gLlable.graphics;
    console.log(gra);
    console.log(graLableling);



    const labelClass = {
      // autocasts as new LabelClass()
      symbol: {
        type: "text", // autocasts as new TextSymbol()
        color: "green",
        backgroundColor: [213, 184, 255, 0.75],
        borderLineColor: "green",
        borderLineSize: 1,
        yoffset: 5,
        font: {
          // autocast as new Font()
          family: "Playfair Display",
          size: 12,
          weight: "bold"
        }
      },
      labelPlacement: "above-center",
      labelExpressionInfo: {
        expression: "$feature.id"
      }
    };


    const fLayer = new FeatureLayer({
      source: gra,
      // featureReduction: featureReduction,
      labelingInfo: [labelClass],
      popupTemplate: {
        title: "iddddd {id}",
        content: "id {id} hit pllllace location",
        fieldInfos: [
          {
            fieldName: "id",
            format: {
              places: 0,
              digitSeparator: true
            }
          }
        ]
      },
      renderer: {
        type: "simple",
        field: "id",
        // symbol: {
        //   type: "simple-marker",
        //   size: 4,
        //   color: "#69dcff",
        //   outline: {
        //     color: "rgba(0, 139, 174, 0.5)",
        //     width: 5
        //   }
        // },
              symbol: {
          type: "picture-marker",
          url: "https://arcgis.github.io/arcgis-samples-javascript/sample-data/cat3.png",
          // color: "#69dcff",
          width: "30px",
          height: "30px"
        }
      },
      fields: [{
        name: "id",
        alias: "id",
        type: "oid"
      }, {
        name: "اسم المشروع",
        alias: "اسم المشروع",
        type: "string"
      }],
      // objectIdField: "ObjectID",
      geometryType: "point",
      title: "featuresss"
    });
    displayMap.add(fLayer);
    console.log(fLayer);

    fLayer.featureReduction = {
      type: "cluster",
      clusterRadius: "100px",
      // clusterMinSize: 16.5,
      clusterMinSize: "44px",
      clusterMaxSize: "80px",
      symbol: {
        type: "simple-marker",
        style: "circle",
        color: "#69dcff",
        outline: {
          color: "rgba(0, 139, 174, 0.5)",
          width: 10
        }
      },
      // defines the label within each cluster
      labelingInfo: [
        {
          deconflictionStrategy: "none",
          labelExpressionInfo: {
            expression: "Text($feature.cluster_count, '#,###')"
          },
          symbol: {
            type: "text",
            color: "#004a5d",
            font: {
              weight: "bold",
              family: "Noto Sans",
              size: "14px"
            }
          },
          labelPlacement: "center-center"
        }
      ],
      // information to display when the user clicks a cluster
      popupTemplate: {
        title: "Cluster Summary",
        content: "This cluster represents <b>{cluster_count}</b> features.",
        fieldInfos: [{
          fieldName: "cluster_count",
          format: {
            places: 0,
            digitSeparator: true
          }
        }]
      }
    };



    // lableling
    // const fLayerLableing = new FeatureLayer({
    //   source: graLableling,
    //   // featureReduction: featureReduction,
    //   popupTemplate: {
    //     title: "iddddd {id} ",
    //     content: "id {id} hit pllllace location",
    //     fieldInfos: [
    //       {
    //         fieldName: "id",
    //         format: {
    //           places: 0,
    //           digitSeparator: true
    //         }
    //       }
    //     ]
    //   },
    //   // renderer: {
    //   //   type: "simple",
    //   //   field: "id",
    //   //   symbol: {
    //   //     type: "simple-marker",
    //   //     size: 4,
    //   //     color: "#69dcff",
    //   //     outline: {
    //   //       color: "rgba(0, 139, 174, 0.5)",
    //   //       width: 5
    //   //     }
    //   //   }
    //   // },
    //   fields: [{
    //     name: "id",
    //     alias: "id",
    //     type: "oid"
    //   }, {
    //     name: "اسم المشروع",
    //     alias: "اسم المشروع",
    //     type: "string"
    //   }],
    //   // objectIdField: "ObjectID",
    //   geometryType: "point",
    //   title: "lablee"
    // });
    // // displayMap.add(fLayerLableing);
    // console.log(fLayerLableing);

    // fLayerLableing.featureReduction = {
    //   type: "cluster",
    //   clusterMinSize: 16.5,
    //   // defines the label within each cluster
    //   labelingInfo: [
    //     {
    //       deconflictionStrategy: "none",
    //       labelExpressionInfo: {
    //         expression: "Text($feature.id, '#,###')"
    //       },
    //       symbol: {
    //         type: "text",
    //         color: "white",
    //         font: {
    //           family: "Noto Sans",
    //           size: "12px"
    //         }
    //       },
    //       labelPlacement: "center-center"
    //     }
    //   ],
    //   // information to display when the user clicks a cluster
    //   popupTemplate: {
    //     title: "Cluster Summary",
    //     content: "This cluster represents <b>{cluster_count}</b> features.",
    //     fieldInfos: [{
    //       fieldName: "cluster_count",
    //       format: {
    //         places: 0,
    //         digitSeparator: true
    //       }
    //     }]
    //   }
    // };

        // create a new Swipe widget
        const swipe = new Swipe({
          leadingLayers: [ gL, gLlable ],
          trailingLayers: [ fLayer ],
          position: 75,
          view
        });
        // add the widget to the view
        view.ui.add(swipe);



    await view.when();
    return gra; // You can return the view object
  } catch (error) {
    console.error("Error initializing map:", error);
    throw error; // Rethrow the error to handle it further, if needed
  }
}
















