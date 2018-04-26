

function arrayObjectIndexOf(myArray, searchTerm, property) {
  for(var i = 0, len = myArray.length; i < len; i++) {
      if (myArray[i][property] === searchTerm) return i;
  }
  return -1;
}
 
 var database=firebase.database();
  var referenciajeffrey = firebase.database().ref('Usuarios');
  var starCountRef = firebase.database().ref('Usuarios');
 var Brigadistap;
 var Markers=[];
  class Brigadista {
    constructor(Param) {
     var  Data=Param.val()
      this.Nombre=Data.Nombre;
      this.Lat= Data.Lat;
      this.Long=Data.Long;
      this.Estado = Data.Estado;
      this.Cedula=Data.Cedula;
      this.Celular=Data.Celular;
      this.Img_Perfil=Data.Img_Perfil;
     
    }
    putMarker(){
      
         var marker=  this.Marker=new google.maps.Marker({
            position: {lat:this.Lat,lng:this.Long},
            map: map,
            Nombre:this.Nombre,
            Estado:this.Estado,
            Cedula:this.Cedula,
            icon:"imagenes/policeman-standing-up.png"
          });
          marker.addListener('click', function() {
           console.log("Marcador llamado "+this.Nombre);
          });
          return marker; 

    }

    }

  
  referenciajeffrey.once('value', function( data) {

    data.forEach(element => {
        Markers.push(new Brigadista(element).putMarker());
    });


  });

  starCountRef.on("child_changed",function(res){

        var Cambio=new Brigadista(res);
        var index=arrayObjectIndexOf(Markers,Cambio.Cedula,"Cedula");
        console.log(index);
      //Cambia La posición del marcador que cambio
        Markers[index].setPosition({lat:Cambio.Lat,lng:Cambio.Long})
   
  });



