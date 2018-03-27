
  function jsonLatlng(lat,lng){
    var LatLng = {lat: lat, lng: lng};
      return LatLng
      }



      
      
      //Mapa----
      
      function initMap() {
         
        
        var centro =jsonLatlng(11.0195039,-74.8505401);
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 17,
          center: centro
        });
        var marker = new google.maps.Marker({
          position: centro,
          map: map
        });
      }





