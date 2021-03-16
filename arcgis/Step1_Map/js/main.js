require(["esri/Map", "esri/views/MapView"], function(Map, MapView) {
    const map = new Map({
        basemap: "gray-vector"
    });

    view = new MapView({
        container: "viewDiv",
        map: map,
        zoom: 10,
        center: [116.3968849181823, 39.89748946608348]
    });
});