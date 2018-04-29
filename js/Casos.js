var CasosRef = firebase.database().ref('Casos');
var casosAbierto = 0, casoCerrados = 0, TodosLoscasos = [], InfoCaso, HtmlCasosAbierto, HtmlCasosCerrados;
HtmlCasosAbierto = document.getElementById('CasosAbiertos');
HtmlCasosCerrados = document.getElementById('CasosCerrados');
/**
 * Obejeto del tipo caso
 */
class Casos {

    constructor(Param) {
        var Data = Param.val();
        this.Id_Caso = Param.key;
        this.Brigadista_Encargado = Data.Brigadista_Encargado;
        this.Descripcion = Data.Descripcion;
        this.Fecha_Caso = Data.Fecha_Caso;
        this.Feedback = Data.Feedback;
        this.Prioridad_Caso = Data.Prioridad_Caso;
        this.Resuelto = Data.Resuelto;
        this.Ubicacion_Caso = Data.Ubicacion_Caso;


    }
}

CasosRef.once('value', function (data) {

    data.forEach(caso => {
        var CheckCaso = new Casos(caso);
        TodosLoscasos.push(new Casos(caso))
        InfoCaso = caso;
        if (CheckCaso.Resuelto == "Exito") {
            casoCerrados++;
        }
        else {
            casosAbierto++;
        }

    });

    HtmlCasosAbierto.textContent = casosAbierto;
    HtmlCasosCerrados.textContent = casoCerrados;


});

