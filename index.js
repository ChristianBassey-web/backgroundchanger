 let colors = ["black","blue","red","pink","green","grey","khaki","teal"];

 let button = document.getElementById('button');

 button.addEventListener('click',function(){
      var randomcolor = colors[Math.floor(Math.random() *colors.length)]
     var container = document.getElementById('container');
     container.style.background = randomcolor;

 })
