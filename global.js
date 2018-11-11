global.company="mycompany";
global.favoritecolor="red";
global.count=23;
function displayGlobal(v){
   console.log(global[v]);

}

displayGlobal('company');
displayGlobal('favoritecolor');
displayGlobal('count');