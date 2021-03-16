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

        const trailheadsLayer = new FeatureLayer({
            url: "https://services3.arcgis.com/GVgbJbqm8hXASVYi/arcgis/rest/services/Trailheads_Styled/FeatureServer/0"
        });

        const trailsLayer = new FeatureLayer({
            url: "https://services3.arcgis.com/GVgbJbqm8hXASVYi/arcgis/rest/services/Trails_Styled/FeatureServer/0"
        });

        const parksLayer = new FeatureLayer({
            url: "https://services3.arcgis.com/GVgbJbqm8hXASVYi/arcgis/rest/services/Parks_and_Open_Space_Styled/FeatureServer/0"
          });

        map.add(trailheadsLayer);
        map.add(trailsLayer, 0);
        map.add(parksLayer, 0);
    });