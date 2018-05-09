
var database = firebase.database();
var ref = firebase.database().ref('/Casos');




ref.orderByChild("status").equalTo("active").on("child_added", function (snapshot) {
    var data = snapshot.val();
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    ///console.log(data.Resuelto);
    // document.getElementById("time").textContent=data.initdate;
    // document.getElementById("helper").textContent=data.helper;
    // document.getElementById("details").textContent=data.details;
    // document.getElementById("position").textContent=data.location;
    cell1.innerHTML = data.idcase;
    cell2.innerHTML = data.initdate;
    cell3.innerHTML = data.helper;
    cell4.innerHTML = data.details;
    cell5.innerHTML = data.location;
});


$(function(){
    $("#ModalSign").load('htmlimport/modal.html'); 
   

  });

  $(function(){
  $("#CreateBrig").load('htmlimport/CreateBrig.html'); 
});