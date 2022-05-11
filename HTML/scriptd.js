
function pdfexport(){
   
    alert("Reporte enviado exitosamente.")
    var ltitle = document.getElementById('formulario').innerText,
    nombrev = document.getElementById('name').innerText,
    edadv = document.getElementById('age').innerText,
    fechav = document.getElementById('dob').innerText,
    desv = document.getElementById('telefono').innerText;

    var inom = document.getElementById('nombre').value,
    ieda = document.getElementById('edad').value,
    ifech = document.getElementById('dato').value,
    ides = document.getElementById('inover').value;

var ltitle2 = document.getElementById('formulariodireccion').innerText,
    Pais = document.getElementById('Pais').innerText,
    Municipio = document.getElementById('Municipio').innerText,
    Ciudad = document.getElementById('Ciudad').innerText,
    Domicilio = document.getElementById('Domicilio').innerText;

    var bpais = document.getElementById('bPais').value,
    bmunicipio = document.getElementById('bMunicipio').value,
    bciudad = document.getElementById('bCiudad').value,
    bdomicilio = document.getElementById('bDomicilio').value;

var ltitle3 = document.getElementById('formulariodias').innerText,
 Dinero = document.getElementById('Dinero').innerText,
   Año = document.getElementById('Año').innerText,
    Mes = document.getElementById('Mes').innerText,
    Dia = document.getElementById('Dia').innerText; 
  

  var bAño = document.getElementById('bAño').value,
   bMes = document.getElementById('bMes').value,
    bDia = document.getElementById('bDia').value,
    bDinero = document.getElementById('bDinero').value;

    var ltitle4 = document.getElementById('formularioasunto').innerText,
    Info = document.getElementById('inf').innerText;

    var binfo = document.getElementById('info').value;

window.jsPDF = window.jspdf.jsPDF;
 
// var doc = new jsPDF();
 
var doc = new jsPDF();
doc.setFontSize(22);
 doc.text("Reporte de levantamiento de necesidades para acondicionar \n un lugar", 0, 10);
 doc.text("Reporte", 90, 30);
 doc.setFontSize(12);
 doc.text("Por medio del presente documento se le solicita al cliente "+ inom + ' que mejoren las instalaciones \ndel cine CINEMAX, ya que por motivos internos y externos no cuentan con los materiales necesarios \npara un buen levantamiento para acondicionarlo por lo que el monto a solicitar para que mejoran sus \ninstalaciones es de ' + bDinero+ ' pesos mexicanos la cual por reglas de la empresa este no debe exceder los 15 \ndias de levantamiento.', 5, 40);
 doc.setFontSize(22);
 doc.text("Datos del cliente", 75, 70);

 var columns = ["                                                                            DATOS GENERALES"];
 var data = [
 [nombrev.toUpperCase()+ ''  + inom],
 [edadv.toUpperCase() + ''   + ieda],
 [fechav.toUpperCase() + ''   + ifech],
 [desv.toUpperCase() + '' + "\n" + "\n"   + ides] ];
 //var columns = ["Nombre", "Edad", "Falla"];
 doc.autoTable(columns,data,
 { margin:{ top: 80 }});

 var columns = ["                                                                                 DIRECCIÓN"];
 var data = [
 [Pais.toUpperCase()+ ''  + bpais],
 [Municipio.toUpperCase() + ''   + bmunicipio],
 [Ciudad.toUpperCase() + ''   + bciudad],
 [Domicilio.toUpperCase() + ''   + bdomicilio]];
 //var columns = ["Nombre", "Edad", "Falla"];
 doc.autoTable(columns,data,
 { margin:{ top: 120 }});

 var columns = ["                                                                                 SOLICITUD"];
 var data = [
 [Año.toUpperCase()+ ''  + bAño],
 [Mes.toUpperCase() + ''   + bMes],
 [Dia.toUpperCase() + ''   + bDia],
 [Dinero.toUpperCase() + ''   + bDinero]];
 //var columns = ["Nombre", "Edad", "Falla"];
 doc.autoTable(columns,data,
 { margin:{ top: 160 }});

 var columns = ["                                                                                 MOTIVO"];
 var data = [
 [Info.toUpperCase() + ''   + binfo]];
 //var columns = ["Nombre", "Edad", "Falla"];
 doc.autoTable(columns,data,
 { margin:{ top: 160 }});

 doc.setFontSize(16);
 doc.text(nombrev + '' + inom, -10, -10);
 doc.text(edadv + '' + ieda, -10, -10);
 doc.text(fechav + '' + ifech, -10, -10);
 doc.text(desv + '' + ides, -10, -10);
 doc.text(Pais + '' + bpais, -10, -10);
 doc.text(Municipio + '' + bmunicipio, -10, -10);
 doc.text(Ciudad + '' + bciudad, -10, -10);
 doc.text(Domicilio + '' + bdomicilio, -10, -10);
 
 doc.text(Año + '' + bAño, -10, -10);
 doc.text(Mes + '' + bMes, -10, -10);
 doc.text(Dia + '' + bDia, -10, -10);
 doc.text(Dinero + '' + bDinero, -10, -10);
 doc.text(Info + '' + binfo, -10, -10);
 doc.save('2.pdf');
/* 
doc.setFontSize(18);

 doc.text(ltitle,60, 10);
 doc.setFontSize(14);
 
 doc.text(80,20,"ISP SOFT-MEX SA de CV.");
 
 
var columns = ["DATOS DEL REPORTE"+"\t"+"\t"+"\t"+"\t"+"\t"+"\t"+"\t"+"\t"+"\t"+"\t"+fechav.toUpperCase()+ifech];
var data = [
[nombrev.toUpperCase()+ ''  + inom.toUpperCase()],
[edadv.toUpperCase() + ''   + ieda.toUpperCase()],
[desv.toUpperCase() + '' + "\n" + "\n"   + ides.toUpperCase()] ];
//var columns = ["Nombre", "Edad", "Falla"];
doc.autoTable(columns,data,
{ margin:{ top: 25 }}
);

doc.save('1.pdf'); */

 //doc.setFontSize(18);

 //doc.text(ltitle,60, 10);
 //doc.setFontSize(14);
 
 //doc.text(fechav  + ''  + ifech, 110, 20);
 //doc.text(nombrev+ ''  + inom, 10,30);
 //doc.text(edadv + ''   + ieda, 10, 40);

 //doc.text(desv + ''    + ides, 10, 50);

 //pdf.save('1.pdf');
 
}

