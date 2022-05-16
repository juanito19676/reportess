
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


    var ltitle5 = document.getElementById('formulariopantalla').innerText,
   dp = document.getElementById('dp').innerText,
   dsp = document.getElementById('dsp').innerText,
    al = document.getElementById('al').innerText,
    an = document.getElementById('an').innerText,
   anvh = document.getElementById('anvh').innerText,
    anvv = document.getElementById('anvv').innerText,
    tp = document.getElementById('tp').innerText,
   tm = document.getElementById('tm').innerText,
    tmo = document.getElementById('tmo').innerText,
    tn = document.getElementById('tn').innerText,
    dp = document.getElementById('dp').innerText,
    tsis = document.getElementById('tsis').innerText; 

    var ltitle6 = document.getElementById('formulariosala').innerText,
 mads = document.getElementById('mads').innerText,
   fodla = document.getElementById('fodla').innerText,
    nudees = document.getElementById('nudees').innerText,
    vece = document.getElementById('vece').innerText,
   advdlp = document.getElementById('advdlp').innerText,
    eef = document.getElementById('eef').innerText,
    andeloas = document.getElementById('andeloas').innerText,
   alfombra = document.getElementById('alfombra').innerText,
    color = document.getElementById('color').innerText,
    tipo = document.getElementById('tipo').innerText; 

    var ltitle7 = document.getElementById('formularioiluminacion').innerText,
 distancia = document.getElementById('distancia').innerText,
   tipodeluz = document.getElementById('tipodeluz').innerText;

   var bdp = document.getElementById('bdp').value,
   bdsp = document.getElementById('bdsp').value,
    bal = document.getElementById('bal').value,
    ban = document.getElementById('ban').value,
   banvh = document.getElementById('banvh').value,
   banvv = document.getElementById('banvv').value,
    btp = document.getElementById('btp').value,
    btm = document.getElementById('btm').value,
     btmo = document.getElementById('btmo').value,
   btn = document.getElementById('btn').value,
    bdp = document.getElementById('bdp').value,
    btsis = document.getElementById('btsis').value;

    var bmads = document.getElementById('bmads').value,
   bfodla = document.getElementById('bfodla').value,
    bnudees = document.getElementById('bnudees').value,
    bvece = document.getElementById('bvece').value,
   badvdlp = document.getElementById('badvdlp').value,
   beef = document.getElementById('beef').value,
    bandeloas = document.getElementById('bandeloas').value,
    balfombra = document.getElementById('balfombra').value,
     bcolor = document.getElementById('bcolor').value,
    btipo = document.getElementById('btipo').value;

    var bdistancia = document.getElementById('bdistancia').value,
    btipodeluz = document.getElementById('btipodeluz').value;


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
 [desv.toUpperCase() + ''    + ides] ]
 //var columns = ["Nombre", "Edad", "Falla"];
 doc.autoTable(columns,data,{ margin :{ top: 80 }});

 var columns = ["                                                                                 DIRECCIÓN"];
 var data = [
 [Pais.toUpperCase()+ ''  + bpais],
 [Municipio.toUpperCase() + ''   + bmunicipio],
 [Ciudad.toUpperCase() + ''   + bciudad],
 [Domicilio.toUpperCase() + ''   + bdomicilio]]
 //var columns = ["Nombre", "Edad", "Falla"];
 doc.autoTable(columns,data,
 { margin:{ top: 80 }});

 var columns = ["                                                                                 SOLICITUD"];
 var data = [
 [Año.toUpperCase()+ ''  + bAño],
 [Mes.toUpperCase() + ''   + bMes],
 [Dia.toUpperCase() + ''   + bDia],
 [Dinero.toUpperCase() + ''   + bDinero]]
 //var columns = ["Nombre", "Edad", "Falla"];
 doc.autoTable(columns,data,
 { margin:{ top: 120 }});
/*
 var columns = ["                                                                                 MOTIVO"];
 var data = [
 [Info.toUpperCase() + ''   + binfo]]
 //var columns = ["Nombre", "Edad", "Falla"];
 doc.autoTable(columns,data,
 { margin:{ top: 160 }}); */

 var re = ["                                                                                 PANTALLA"];
 var dat = [
 [dp.toUpperCase()+ ''  + bdp],
 [dsp.toUpperCase() + ''   + bdsp],
 [al.toUpperCase() + ''   + bal],
 [an.toUpperCase()+ ''  + ban],
 [anvh.toUpperCase() + ''   + banvh],
 [anvv.toUpperCase() + ''   + banvv],
 [tp.toUpperCase()+ ''  + btp],
 [tm.toUpperCase() + ''   + btm],
 [tmo.toUpperCase() + ''   + btmo],
 [tn.toUpperCase()+ ''  + btn],
 [dp.toUpperCase() + ''   + bdp],
 [tsis.toUpperCase() + ''   + btsis]]
 //var columns = ["Nombre", "Edad", "Falla"];
 doc.autoTable(re,dat,
 { margin:{  }});
 

 var columns = ["                                                                                 SALA"];
 var data = [
 [mads.toUpperCase()+ ''  + bmads],
 [fodla.toUpperCase() + ''   + bfodla],
 [nudees.toUpperCase() + ''   + bnudees],
 [vece.toUpperCase()+ ''  + bvece],
 [advdlp.toUpperCase() + ''   + badvdlp],
 [eef.toUpperCase() + ''   + beef],
 [andeloas.toUpperCase()+ ''  + bandeloas],
 [alfombra.toUpperCase() + ''   + balfombra],
 [color.toUpperCase() + ''   + bcolor],
 [tipo.toUpperCase() + ''   + btipo]]
 //var columns = ["Nombre", "Edad", "Falla"];
 doc.autoTable(columns,data,
 { margin:{  }});

 var columns = ["                                                                                 ILUMINACIÓN"];
 var data = [
 [distancia.toUpperCase()+ ''  + bdistancia],
 [tipodeluz.toUpperCase() + ''   + btipodeluz]]
 //var columns = ["Nombre", "Edad", "Falla"];
 doc.autoTable(columns,data,
 { margin:{ }}); 

 var columns = ["                                                                                 MOTIVO"];
 var data = [
 [Info.toUpperCase() + ''   + binfo]]
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

 doc.text(dp + '' + bdp, -10, -10);
 doc.text(dsp + '' + bdsp, -10, -10);
 doc.text(al + '' + bal, -10, -10);
 doc.text(an + '' + ban, -10, -10);
 doc.text(anvh + '' + banvh, -10, -10);
 doc.text(anvv + '' + banvv, -10, -10);
 doc.text(tp + '' + btp, -10, -10);
 doc.text(tm + '' + btm, -10, -10);
 doc.text(tmo + '' + btmo, -10, -10);
 doc.text(tn + '' + btn, -10, -10);
 doc.text(dp + '' + bdp, -10, -10);
 doc.text(tsis + '' + btsis, -10, -10);

 doc.text(mads + '' + bmads, -10, -10);
 doc.text(fodla + '' + bfodla, -10, -10);
 doc.text(nudees + '' + bnudees, -10, -10);
 doc.text(vece + '' + bvece, -10, -10);
 doc.text(advdlp + '' + badvdlp, -10, -10);
 doc.text(eef + '' + beef, -10, -10);
 doc.text(andeloas + '' + bandeloas, -10, -10);
 doc.text(alfombra + '' + balfombra, -10, -10);
 doc.text(color + '' + bcolor, -10, -10);
 doc.text(tipo + '' + btipo, -10, -10);

 doc.text(distancia + '' + bdistancia, -10, -10);
 doc.text(tipodeluz + '' + btipodeluz, -10, -10);
 


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

