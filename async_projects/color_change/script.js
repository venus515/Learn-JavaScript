const randmColor=function(){
    let hex="0123456789ABCDEF"
let color="#";
for(let i=0;i<6;i++){
    
color+=hex[Math.floor(Math.random()*16)];
}
return color;
};



let stopped
   
    document.querySelector('#start').addEventListener('click',function(e){
      stopped=setInterval(function(e){
       document.body.style.backgroundColor=randmColor();
},1000);
    });

    document.querySelector('#stop').addEventListener('click',function(e){
        clearInterval(stopped);
            });