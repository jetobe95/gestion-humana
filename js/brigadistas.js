 var database=firebase.database();
  var referenciajeffrey = firebase.database().ref('Usuarios');
  var starCountRef = firebase.database().ref('Jeffrey');
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
    //this.GenerateMarker();
     
    }

     GenerateMarker() {
        
       





        
    }
  }
  referenciajeffrey.once('value', function(data) {

    data.forEach(element => {
       
        Brigadistap=new Brigadista(element);
    });


     

      



    



  });