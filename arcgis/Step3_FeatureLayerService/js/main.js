require(["esri/config", "esri/Map", "esri/views/MapView", "esri/layers/FeatureLayer"],
    function (esriConfig, Map, MapView, FeatureLayer) {
        //配置api-key
        esriConfig.apiKey = "AAPKb2d537c2012a46ea8310e116da970647Qc5q6OwWJBEIIcW_8oK2iJMQvPShZ5154Rz6iJrnpucuP44grDKNxILO5t91bigU";

        const map = new Map({
            basemap: "arcgis-topographic" // Basemap layer service
        });

        const view = new MapView({
            map: map,
            center: [-118.805, 34.027], // Longitude, latitude
            zoom: 13, // Zoom level
            container: "viewDiv" // Div element
        });

        const layer = new FeatureLayer({
            url: "https://services3.arcgis.com/lTNdryzf6BBwkAxR/arcgis/rest/services/trails/FeatureServer"
          });
          map.add(layer);
    });