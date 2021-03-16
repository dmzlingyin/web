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

        const trailheadsRenderer = {
            "type": "simple",
            "symbol": {
                "type": "picture-marker",
                "url": "http://static.arcgis.com/images/Symbols/NPS/npsPictograph_0231b.png",
                "width": "18px",
                "height": "18px"
            }
        }

        const trailheadsLabels = {
            symbol: {
                type: "text",
                color: "#FFFFFF",
                haloColor: "#5E8D74",
                haloSize: "2px",
                font: {
                    size: "12px",
                    family: "Noto Sans",
                    style: "italic",
                    weight: "normal"
                }
            },

            labelPlacement: "above-center",
            labelExpressionInfo: {
                expression: "$feature.TRL_NAME"
            }
        };

        const trailheads = new FeatureLayer({
            url: "https://services3.arcgis.com/GVgbJbqm8hXASVYi/arcgis/rest/services/Trailheads/FeatureServer/0",
            renderer: trailheadsRenderer,
            labelingInfo: [trailheadsLabels]
        });

        map.add(trailheads);

        const trailsRenderer = {
            type: "simple",
            symbol: {
                color: "#BA55D3",
                type: "simple-line",
                style: "solid"
            },

            visualVariables: [
                {
                    type: "size",
                    field: "ELEV_GAIN",
                    minDataValue: 0,
                    maxDataValue: 2300,
                    minSize: "3px",
                    maxSize: "7px"
                }
            ]
        };

         // Create the layer and set the renderer
      const trails = new FeatureLayer({
        url: "https://services3.arcgis.com/GVgbJbqm8hXASVYi/arcgis/rest/services/Trails/FeatureServer/0",
        renderer: trailsRenderer,
        opacity: .75
      });

      // Add the layer
      map.add(trails,0);

      // Add bikes only trails
      const bikeTrailsRenderer = {
        type: "simple",
        symbol: {
          type: "simple-line",
          style: "short-dot",
          color: "#FF91FF",
          width: "1px"
        }
      };
      const bikeTrails = new FeatureLayer({
        url:
          "https://services3.arcgis.com/GVgbJbqm8hXASVYi/arcgis/rest/services/Trails/FeatureServer/0",
        renderer: bikeTrailsRenderer,
        definitionExpression: "USE_BIKE = 'YES'"
      });

      map.add(bikeTrails, 1);

      const myLayer = new FeatureLayer({
        url:
          "https://services3.arcgis.com/lTNdryzf6BBwkAxR/arcgis/rest/services/gaosu/FeatureServer"
      });

      map.add(myLayer, 0);

    });