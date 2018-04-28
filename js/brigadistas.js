
/**
 * Find in array an object
 * @param {*} myArray Arreglo en el cual se va a buscar
 * @param {*} searchTerm  Valor del atributo
 * @param {*} property Propiedad del Array
 */
function arrayObjectIndexOf(myArray, searchTerm, property) {
  for (var i = 0, len = myArray.length; i < len; i++) {
    if (myArray[i][property] === searchTerm) return i;
  }
  return -1;
}

var database = firebase.database();
var referenciajeffrey = firebase.database().ref('Usuarios');
var starCountRef = firebase.database().ref('Usuarios');
var Brigadistap;
var Markers = [];


//Clase Brigadistas
/**
 * Objeto Brigadista
 */
class Brigadista {
  constructor(Param) {
    var Data = Param.val()
    this.Nombre = Data.Nombre;
    this.Lat = Data.Lat;
    this.Long = Data.Long;
    this.Estado = Data.Estado;
    this.Cedula = Data.Cedula;
    this.Celular = Data.Celular;
    this.Img_Perfil = Data.Img_Perfil;
    // var storage = firebase.storage().ref("/Images/"+this.Cedula);

  }
  putMarker() {

    var marker = this.Marker = new google.maps.Marker({
      position: { lat: this.Lat, lng: this.Long },
      map: map,
      Nombre: this.Nombre,
      Estado: this.Estado,
      Cedula: this.Cedula,
      icon: this.Estado=="Disponible"? "imagenes/policeman-standing-up.png":"iconos/brigadista activo/64/empleados.png"
    });

    var tabla =' <link rel="stylesheet" href="css/styles.css">'+ '<table class="tg">' +
      ' <tr><th class="tg-ikm8" rowspan="4">Fotooooo</th> <th class="tg-cobo">Nombre</th><th class="tg-6nqv">'+this.Nombre+'</th>' +
      '</tr> <tr><td class="tg-i3y8">Estado </td><td class="tg-6nqv">'+this.Estado+'</td>' +
      '</tr><tr><td class="tg-i3y8">Turno</td><td class="tg-6nqv">'+this.Cedula+'</td></tr><tr>' +
      '<td class="tg-i3y8">fecha</td>' +
      ' <td class="tg-6nqv">hoy</td>' +
      ' </tr>' +
      '</table>';

    var infowindow = new google.maps.InfoWindow({
      content: tabla,
      disableAutoPan: true


    });
    marker.addListener('click', function () {
      //Debug
      //console.log("Marcador llamado " + this.Nombre);
      infowindow.open(map, marker);
    });
    return marker;

  }

}


//Carga los datos la primera vez desde RealTimeDataBase
referenciajeffrey.once('value', function (data) {

  data.forEach(element => {
    Markers.push(new Brigadista(element).putMarker());
  });


});


starCountRef.on("child_changed", function (res) {
  //Crea el objeto tipo brigasdista
  var Cambio = new Brigadista(res);
  //Find in Array 
  var index = arrayObjectIndexOf(Markers, Cambio.Cedula, "Cedula");
  arrayObjectIndexOf()
  //Debug
  console.log(index);
  //Cambia La posición del marcador que cambio
  Markers[index].setPosition({ lat: Cambio.Lat, lng: Cambio.Long })

});






var storage = firebase.storage().ref("/Images/1065.jpg");
