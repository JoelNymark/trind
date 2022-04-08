mapboxgl.accessToken = 'pk.eyJ1IjoibXl0aGljYWx3aW50ZXIiLCJhIjoiY2wxcTlpYjJtMWl6ZTNkbzJhb2h0b2MyNCJ9.X-E8P4L-bWnDYn1lcpDCggeyJ1IjoibXl0aGljYWx3aW50ZXIiLCJhIjoiY2t6dmQ1eXd2MDF2YjJubnU0dndreXlncSJ9.0MrTHv0a-A9pk.eyJ1IjoibXl0aGljYWx3aW50ZXIiLCJhIjoiY2wxcTlpYjJtMWl6ZTNkbzJhb2h0b2MyNCJ9.X-E8P4L-bWnDYn1lcpDCggJSoYgceHt6w';
const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mythicalwinter/ckzvd81r6000f15mf7tzs88g3', // style URL  mapbox://styles/mythicalwinter/ckzvd81r6000f15mf7tzs88g3  // <---s\ dark vertion of the map
    center: [17.875592712053653, 59.623533595854944], // starting position [lng, lat]
    //add marker to cords above.
    zoom: 15 // starting zoom
    
});
const marker = new mapboxgl.Marker({"color" : "#DF8A0D"})
.setLngLat([17.875592712053653, 59.623533595854944])
.addTo(map);
