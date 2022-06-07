
   var x =0;
const elements = document.getElementsByTagName('input') ;
document.getElementById('Nxt').addEventListener('click',function(){
    for(let i=0;i<elements.length;i++){
        if(elements[i].value.length === 0){
            var y = elements[i].style.backgroundColor;
            elements[i].style.backgroundColor = '#ff7a7ac4';
            x++;
            setTimeout(function(){elements[i].style.backgroundColor=y},800)
        }
    }
   if(x==0){ 
    document.getElementById('olque').setAttribute('start','6')    
   document.getElementById('olque').innerHTML = '<h2> Fill in the blanks with suitable prepositions.   </h2><br><br><li>&nbsp;&nbsp; Does your mother work <input type="text" name="in"> an IT company?   <br><br></li><li>&nbsp;&nbsp; Rahul is waiting for you <input type="text" name="at"> the bus stop.   <br><br></li><li>&nbsp;&nbsp; You are standing <input type="text" name="on"> my foot.   <br><br></li><li>&nbsp;&nbsp; The author’s name is <input type="text" name="on"> the cover of the book.   <br><br></li><li>&nbsp;&nbsp; The Police Commissioner lives <input type="text" name="at"> the end of the street.   <br><br></li>';
        for(let i=0;i<elements.length;i++)
        elements[i].addEventListener('focusout',function(){
             var a= elements[i].value;
             if( a=== 'of' || a=== 'on' || a==='at'|| a==='in'){
                a = a;
             }else{
                elements[i].value = ''; 
                }})
                document.getElementById('sig').style.display = 'none';
    document.getElementById('mar').innerHTML =  ' ';
    document.getElementById('Nxt').style.display = 'none';
    document.getElementById('chk').innerHTML = '';
}else{}
}
)  

        for(let i=0;i<elements.length;i++)
        elements[i].addEventListener('focusout',function(){
             var a= elements[i].value;
             if( a=== 'of' || a=== 'on' || a==='at'|| a==='in'){
                a = a;
             }else{
                elements[i].value = ''; 
                }}
)
function Result(){
var elements1 = document.getElementsByTagName('input')   
    var aa= 0;
    for(let i=0;i<elements1.length;i++){   
    if(elements1[i].name === elements1[i].value){
        aa++;
        elements1[i].style.color = '#02ff02';
}else{
    elements1[i].style.color = 'red';
}
document.getElementById('mar').innerHTML = aa + '/'+elements1.length;
document.getElementById('getmark').innerText = aa;
document.getElementById('totalmark').innerText = elements1.length;
elements1[i].setAttribute("disabled","true");
document.getElementById('sig').style.display = 'block';
} 
}
function reset(){
    for(let i=0;i<elements.length;i++){
        elements[i].style.color = 'white';
        elements[i].value="";
        elements[i].removeAttribute("disabled");   
    }
    document.getElementById('sig').style.display = 'none';
    document.getElementById('mar').innerHTML =  ' ';
    if(document.getElementById('chk').innerHTML === '1'){
    document.getElementById('Nxt').style.display = 'flex';}else{ return false}
    document.getElementById('btnall').children[0].style.display = 'flex';
}
function ans(){
    for(let i=0;i<elements.length;i++){
        elements[i].value= elements[i].name ;
        elements[i].setAttribute("disabled","true");
        elements[i].style.color = 'white';
        document.getElementById('mar').innerHTML =  ' ';
        document.getElementById('Nxt').style.display = 'none';
       
    }
    document.getElementById('btnall').children[0].style.display = 'none';
}