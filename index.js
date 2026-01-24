/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const dataConvert=[
     {
        meter: 3.281,
        liter: 0.264,
        kilogram:2.204
     }
     
]


const inputEl=document.querySelector('.input-el')
const btnEl=document.querySelector('.btn-el')
const meterFeet=document.querySelector('.meter-feet-el')
const literGallon=document.querySelector('.liter-gallon-el')
const kiloPound=document.querySelector('.kilo-pound-el')
const messageErrorEl=document.querySelector('.message-error-el')



 
  btnEl.addEventListener('click',function(){ 
     if(!Number(inputEl.value)){
          messageErrorEl.style.display='block'
          messageErrorEl.textContent='Please, Enter a   Number '
          return  
     } 
     messageErrorEl.style.display='none'
     
     meterFeet.textContent=`
     ${inputEl.value} meters = ${(inputEl.value*dataConvert[0].meter).toFixed(3)} feet |
     
      ${inputEl.value} feet =  ${(inputEl.value/dataConvert[0].meter).toFixed(3)} meters`
     
     literGallon.textContent=`
     ${inputEl.value} liters = ${(inputEl.value*dataConvert[0].liter).toFixed(3)} gallons |
     
      ${inputEl.value} gallons =  ${(inputEl.value/dataConvert[0].liter).toFixed(3)} liters`
     
   
     kiloPound.textContent=`
     ${inputEl.value} Kilos = ${(inputEl.value*dataConvert[0].kilogram).toFixed(3)} pounds|
     
      ${inputEl.value} pounds =  ${(inputEl.value/dataConvert[0].kilogram).toFixed(3)} kilos`
     
   
        
     
  })

 

