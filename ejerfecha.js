(function(){
     
    let actualizarHora = function(){
        let fecha= new Date(),
            horas = fecha.getHours(),
            ampm,
            minutos = fecha.getMinutes(),
            segundos = fecha.getSeconds(),
            diaSemana= fecha.getDay(),
            dia = fecha.getDate(),
            mes = fecha.getMonth(),
            year=fecha.getFullYear();


        let pHoras = document.getElementById('horas'),
            pAMPM = document.getElementById('ampm'),
            pMinutos= document.getElementById('minutos'),
            pSegundos = document.getElementById('segundos'),
            pDiaSemana = document.getElementById('diaSemana'),
            pDia = document.getElementById('dia'),
            pMes = document.getElementById('mes'),
            pYear = document.getElementById('year');

        let semana = ['domingo','lunes','martes','miercoles','jueves','viernes','sabado']
            pDiaSemana.textContent  = semana[diaSemana];
            
            pDia.textContent = dia;

        let meses = [ 'Enereo','Febrero','Marzo', 'Abril','Mayo','junio','julio','Agosto','Sptiembre','Octubre','noviemnre','diciembre']
    
             pMes.textContent = meses[mes];
             pYear.textContent = year;

             if(horas >= 12){
                 horas= horas -12;
                ampm = 'PM';
             }else{
                ampm='AM'
             };
            
             if(horas == 0 ){
                horas == 12;
             };

             pHoras.textContent = horas;
             pAMPM.textContent = ampm;
             
             if(minutos < 10){minutos = "0" + minutos};
             if(segundos < 10){minutos = "0" + segundos};
 
             pMinutos.textContent = minutos;
             pSegundos.textContent=segundos;
    
             };
    actualizarHora();
    let intervalo = setInterval(actualizarHora, 1000);
       
     const reloj = document.getElementsByClassName('wrap');
     const alarmabox = document.getElementById('alarma');
     const btnalarma = document.getElementById('btna');
     const list = document.getElementById('listordenada');
     
     
     
     btnalarma.addEventListener('click', () => {
       const hourInput = document.getElementById('hour');
       const minuteInput = document.getElementById('minute');
       const secondInput = document.getElementById('second');
     
       const alarmTime = `${hourInput.value}:${minuteInput.value}:${secondInput.value}`;
     
       const listItem = document.createElement('li');
       listItem.textContent = alarmTime;
     
       list.appendChild(listItem);
     
       hourInput.value = "0";
       minuteInput.value = "0";
       secondInput.value = "0";
     });
     


    
    //  for(let i= 0 ; < list.length ; i ++){
    //     if(list == reloj){
    //         alert("alarma funciona")
    //      }
    //  }
 
         


}())



