var oc = false;
 OpenCloseMenu = () =>{
     // let menu = document.getElementById('menu');
     oc  = !oc
     if(oc){menu.style = 'margin-left:0px; top:0px; box-shadow: 200px 0px 0px 0px #0000009e;';}
     else { menu.style = 'margin-left: -100%; top:0px; box-shadow: none';}
    console.log(oc)
 }