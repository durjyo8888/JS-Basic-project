let index = 0;
function changeColors(){
   let colors = ["red","blue","orange","black","pink","green","yellow","purple"];

   document.getElementsByTagName("body")[0].style.background = colors[index++];

   if(index > colors.length-1){
       index = 0;
   }
}