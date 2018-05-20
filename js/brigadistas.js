var database = firebase.database();
var referenciajeffrey = firebase.database().ref('Usuarios');
var starCountRef = firebase.database().ref('Usuarios');
var Brigadistap, BrigadistasActivos = document.getElementById('BrigadistasActivos'),
  Checker, BrigadistasActivosCont = 0
var Markers = [];
var Cambio;

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
/**
 * Retorna el URL del icono
 * @param {*} Status estado
 */
function icons(Status) {
  switch (Status) {
    case "Disponible":
      return `iconos/status/${Status}.png`;
      break;
    case `Ocupado`:
      return `iconos/status/${Status}.png`;
      break;
    default:
      return `iconos/status/error.png`
      break;
  }

}

function OpenCase(param) {
  //console.log(param);
  
    
  
}




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
    this.all = {
      Data
    }
   


  }
 
 


  putMarker() {

    var marker = new google.maps.Marker({
      position: {
        lat: this.Lat,
        lng: this.Long
      },
      map: map,
      Nombre: this.Nombre,
      Estado: this.Estado,
      Cedula: this.Cedula,
      icon: icons(this.Estado),
      
    });
    


    var tabla = ` 
      <div class="card  "  style="width: 16rem;">
     
      <div class="card-header">
      ${this.Nombre}      
      </div>
        <div class="card-body">
        <img class="card-img-left img-thumbnail" src='/iconos/status/Disponible.png' alt="Card image cap">
       
        <div class="alert ${ this.Estado=='Disponible' ? 'alert-success':"alert-danger" } role="alert">
        ${ this.Estado}
        </div>
          <p class="card-text"></p>
          <button type="button" class="btn btn-secondary btn-lg ${ this.Estado=='Disponible' ? 'bg-success':"disabled" }" disabled>Abrir Caso</button>
        </div>
        </div>

     

          `

          

    var infowindow = new google.maps.InfoWindow({
      content: tabla,
      disableAutoPan: true


    });
    marker.addListener('click', () => {

      infowindow.open(map, marker);
    });
    marker.addListener("dblclick", () => {
      console.log("Doble click");
      OpenCase();

    })


    return marker;

  }

}


//Carga los datos la primera vez desde RealTimeDataBase
referenciajeffrey.once('value', (data) => {
    data.forEach(element => {

    Markers.push(new Brigadista(element).putMarker());
    Checker = new Brigadista(element);
    if (Checker.Estado == "Disponible") {
      BrigadistasActivosCont++;

    }
  });
  BrigadistasActivos.textContent = BrigadistasActivosCont;

})
.then(() => console.log("Todo Cargado"))
.then(() => {
  starCountRef.on("child_changed", (res) => {
    //Crea el objeto tipo brigasdista
    Cambio = new Brigadista(res);
    //Find in Array 
    var index = arrayObjectIndexOf(Markers, Cambio.Cedula, "Cedula");
    //Debug
    console.log(index);
    //Cambia La posición del marcador que cambio
    Markers[index].setMap(null);
    Markers[index]=Cambio.putMarker();
  });



});