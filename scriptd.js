function pdfexport(){
  
  let pass = document.getElementById('bcontraseña').value;
  if(pass == 1234)
  
  { 
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
   km = document.getElementById('km').innerText,
   dsp = document.getElementById('dsp').innerText,
    al = document.getElementById('al').innerText,
    an = document.getElementById('an').innerText,
   anvh = document.getElementById('anvh').innerText,
    anvv = document.getElementById('anvv').innerText,
    distorsion = document.getElementById('distorsion').innerText,
    //tp = document.getElementById('tp').innerText,
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
   tipodeluz = document.getElementById('tipodeluz').innerText,
 //  foco = document.getElementById('foco').innerText,
   brillo = document.getElementById('brillo').innerText,
   lados = document.getElementById('lados').innerText,
   esquina = document.getElementById('esquina').innerText;

   var bkm = document.getElementById('bkm').value,
   bdsp = document.getElementById('bdsp').value,
    bal = document.getElementById('bal').value,
    ban = document.getElementById('ban').value,
   banvh = document.getElementById('banvh').value,
   banvv = document.getElementById('banvv').value,
   bdistorsion = document.getElementById('bdistorsion').value,
    //btp = document.getElementById('btp').value,
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
  //  balfombra = document.getElementById('balfombra').value,
     bcolor = document.getElementById('bcolor').value,
    btipo = document.getElementById('btipo').value;

    var bdistancia = document.getElementById('bdistancia').value,
    btipodeluz = document.getElementById('btipodeluz').value,
   // bfoco = document.getElementById('bfoco').value,
    bbrillo = document.getElementById('bbrillo').value,
    blados = document.getElementById('blados').value,
    besquina = document.getElementById('besquina').value;
    
    var ltitle8 = document.getElementById('formularioproyector').innerText,
    suelo = document.getElementById('suelo').innerText,
      anchodeapertura = document.getElementById('anchodeapertura').innerText,
      posicionamiento = document.getElementById('posicionamiento').innerText;

      var ltitle9 = document.getElementById('formularioacondecimiento').innerText,
      reberveracion = document.getElementById('reberveracion').innerText,
        bandasonora = document.getElementById('bandasonora').innerText,
        tipodependiente = document.getElementById('tipodependiente').innerText;

      var ltitle10 = document.getElementById('formulariotamañodelcine').innerText,
        ancho = document.getElementById('ancho').innerText,
          largo = document.getElementById('largo').innerText,
          altura = document.getElementById('altura').innerText;

          var bsuelo = document.getElementById('bsuelo').value,
          banchodeapertura = document.getElementById('banchodeapertura').value,
          bposicionamiento = document.getElementById('bposicionamiento').value;

          var breberveracion = document.getElementById('breberveracion').value,
          bbandasonora = document.getElementById('bbandasonora').value,
          btipodependiente = document.getElementById('btipodependiente').value;

          var bancho = document.getElementById('bancho').value,
          blargo = document.getElementById('blargo').value,
          baltura = document.getElementById('baltura').value;

window.jsPDF = window.jspdf.jsPDF;
 
// var doc = new jsPDF();
 
var doc = new jsPDF();
 var img = "data:image/png;base64,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";
 doc.addImage(img, 75, 0, 60, 60);
doc.setFontSize(22);
 doc.text("Reporte de levantamiento de necesidades para acondicionar \n un lugar", 0, 60);
 doc.text("Reporte", 90, 80);
 doc.setFontSize(12);
 doc.text("Por medio del presente documento se le solicita al cliente "+ inom + ' que mejoren las instalaciones \ndel cine CINEMAX, ya que por motivos internos y externos no cuentan con los materiales necesarios \npara un buen levantamiento para acondicionarlo por lo que el monto a solicitar para que mejoran sus \ninstalaciones es de ' + bDinero+ ' pesos mexicanos la cual por reglas de la empresa este no debe exceder los 15 \ndias de levantamiento.', 5, 90);
 doc.setFontSize(22);
 doc.text("Datos del cliente", 75, 122);

 var columns1 = ["                                                                            DATOS GENERALES"];
 var data1 = [
 [nombrev.toUpperCase()+ ''  + inom],
 [edadv.toUpperCase() + ''   + ieda],
 [fechav.toUpperCase() + ''   + ifech],
 [desv.toUpperCase() + ''    + ides] ];
 //var columns = ["Nombre", "Edad", "Falla"];
 doc.autoTable({columns1, data1, margin:{top:120}});

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

 var columns = ["                                                                        DIMENSIONES DE LA SALA"];
 var data = [
 [ancho.toUpperCase()+ ''  + bancho],
 [largo.toUpperCase()+ ''  + blargo],
 [altura.toUpperCase() + ''   + baltura]]
 //var columns = ["Nombre", "Edad", "Falla"];
 doc.autoTable(columns,data,
 { margin:{ }}); 
 

 var re = ["                                                                                 PANTALLA"];
 var dat = [
 [km.toUpperCase()+ ''  + bkm],
 [dsp.toUpperCase() + ''   + bdsp],
 [al.toUpperCase() + ''   + bal],
 [an.toUpperCase()+ ''  + ban],
 [anvh.toUpperCase() + ''   + banvh],
 [anvv.toUpperCase() + ''   + banvv],
 [distorsion.toUpperCase() + ''   + bdistorsion],
// [tp.toUpperCase()+ ''  + btp],
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
 [alfombra.toUpperCase()],
 [color.toUpperCase() + ''   + bcolor],
 [tipo.toUpperCase() + ''   + btipo]]
 //var columns = ["Nombre", "Edad", "Falla"];
 doc.autoTable(columns,data,
 { margin:{  }});

 var columns = ["                                                                                 ILUMINACIÓN"];
 var data = [
 [distancia.toUpperCase()+ ''  + bdistancia],
 [tipodeluz.toUpperCase()+ ''  + btipodeluz],
 //[foco.toUpperCase()+ ''  + bfoco],
 [brillo.toUpperCase()+ ''  + bbrillo],
 [lados.toUpperCase()+ ''  + blados],
 [esquina.toUpperCase() + ''   + besquina]]
 //var columns = ["Nombre", "Edad", "Falla"];
 
 doc.autoTable(columns, data, {margin:{}}); 

 var columns = ["                                                                        COLOCACION DEL PROYECTOR"];
 var data = [
 [reberveracion.toUpperCase()+ ''  + breberveracion],
 [bandasonora.toUpperCase()+ ''  + bbandasonora],
 [tipodependiente.toUpperCase() + ''   + btipodependiente]]
 //var columns = ["Nombre", "Edad", "Falla"];
 doc.autoTable(columns,data,
 { margin:{ }}); 

 var columns = ["                                                                        ACONDICIONAMIENTO DE LA SALA"];
 var data = [
 [suelo.toUpperCase()+ ''  + bsuelo],
 [anchodeapertura.toUpperCase()+ ''  + banchodeapertura],
 [posicionamiento.toUpperCase() + ''   + bposicionamiento]]
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

 doc.text(km + '' + bkm, -10, -10);
 doc.text(dsp + '' + bdsp, -10, -10);
 doc.text(al + '' + bal, -10, -10);
 doc.text(an + '' + ban, -10, -10);
 doc.text(anvh + '' + banvh, -10, -10);
 doc.text(anvv + '' + banvv, -10, -10);
 //doc.text(tp + '' + btp, -10, -10);
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
 doc.text(alfombra, -10, -10);
 doc.text(color + '' + bcolor, -10, -10);
 doc.text(tipo + '' + btipo, -10, -10);

 doc.text(distancia + '' + bdistancia, -10, -10);
 doc.text(tipodeluz + '' + btipodeluz, -10, -10);
 
 doc.text(suelo + '' + bsuelo, -10, -10);
 doc.text(anchodeapertura + '' + banchodeapertura, -10, -10);
 doc.text(posicionamiento + '' + bposicionamiento, -10, -10);

 doc.text(reberveracion + '' + breberveracion, -10, -10);
 doc.text(bandasonora + '' + bbandasonora, -10, -10);
 doc.text(tipodependiente + '' + btipodependiente, -10, -10);

 doc.text(ancho + '' + bancho, -10, -10);
 doc.text(largo + '' + blargo, -10, -10);
 doc.text(altura + '' + baltura, -10, -10);


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
  
else  {
alert("Inserte una contraseña valida");
}
}





