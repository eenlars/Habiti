var idcount = 0;

function addElement(type) {
  var gettext = document.getElementById(type).value;
  if(gettext != ""){
    var insidetext = document.createTextNode(gettext); //stop text in de node
    document.getElementById(type).value = "";
    var tr = document.createElement("tr"); //maak een nieuwe aan
    tr.setAttribute("id", "number"+idcount);
    idcount++;
    var text = document.createElement("td"); //maak een nieuwe aan
    var deletetext = document.createElement("td");
    var changebutton = document.createElement("td");
    var button = document.createElement("button");
    var buttoninfo = document.createElement("button");
    button.setAttribute("onclick", "deleteElement('" + type + "', this )");
    buttoninfo.setAttribute("onclick", "changeElement(this)");
    button.appendChild(document.createTextNode("delete"));
    buttoninfo.appendChild(document.createTextNode("change"));
    text.appendChild(insidetext);
    changebutton.appendChild(buttoninfo); 
    deletetext.appendChild(button); 
    tr.appendChild(text); //kindje aanmaken met text voor tr
    tr.appendChild(deletetext); //kindje aanmaken voor tr
    tr.appendChild(changebutton); //kindje aanmaken voor tr
    var element = document.getElementById(type + "table"); //tafel pakken en daar je tdtje in gooien
    element.appendChild(tr); //trtje aanmaken
  }
}

function deleteElement(type, button) {
  var row = button.parentNode.parentNode; //deze gooit de row naar de tr ipv button
  row.parentNode.removeChild(row); // hier pakt de row de parentnode en verwijderd de removechild van de row
}

function changeElement(button){
  var row = button.parentNode.parentNode; //deze gooit de row naar de tr ipv button
  var inserttitle = document.getElementById("changetitle");
  var inputtitle = inserttitle.childNodes[1];
  var text = button.parentNode.parentNode.childNodes[0];
  inputtitle.value = text.innerHTML;
}