function initMap() {
  // Map options
  var options = {
    zoom: 8,
    // use - for west
    center: { lat: 27.9506, lng: -82.4572 }
  };

  // New Map
  var map = new google.maps.Map(document.getElementById("map"), options);

  // Listen for click on map
  google.maps.event.addListener(map, "click", function(event) {
    // add marker
    addMarker({ coords: event.latLng });
  });

  /*
        // Add marker
        var marker = new google.maps.Marker({
          position: {
            lat: 28.5383,
            lng: -81.3792
          },
          map: map,
          //different icons for markers
          icon:
            "https://developers.google.com/maps/documentation/javascript/examples/full/images/parking_lot_maps.png"
        });

        var infoWindow = new google.maps.infoWindow({
          content: "<h1> Orlando FL </h1>"
        });

        marker.addListener("click", function() {
          infoWindow.open(map, marker);
        });
        */

  // Array of Markers
  var markers = [
    {
      coords: {
        lat: 28.5383,
        lng: -81.3792
      },
      iconImage:
        "https://developers.google.com/maps/documentation/javascript/examples/full/images/parking_lot_maps.png",
      content: "<h1> ORlando fl </h1>"
    },
    {
      coords: {
        lat: 28.5383,
        lng: -80.3792
      }
    }
  ];

  // Looop through markers
  for (var i = 0; i < marker.length; i++) {
    addMarker(markers[i]);
  }

  // Add Marker Function
  function addMarker(props) {
    var marker = new google.maps.Marker({
      position: props.coords,
      map: map
      //icon: props.iconImage it will be undefined if icon is not passed in function
    });
    // check for custom icon
    if (props.iconImage) {
      // set icon image
      marker.setIcon(props.iconImage);
    }

    //check content
    if (props.content) {
      var infoWindow = new google.maps.infoWindow({
        content: props.content
      });

      marker.addListener("click", function() {
        infoWindow.open(map, marker);
      });
    }
  }
}
