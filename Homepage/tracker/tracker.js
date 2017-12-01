function addElement(type){
     var text = document.getElementById(type).value;
     document.getElementById(type).value = "";
     console.log(text);
     var p = document.createElement("p"); //maak een nieuwe p aan
     var insidetext = document.createTextNode(text); //stop text in de node
     p.appendChild(insidetext);
     var element = document.getElementById(type+"box");
     element.appendChild(p);
 }