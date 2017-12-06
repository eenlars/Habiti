function addElement(type) {
    var text = document.getElementById(type).value;
    document.getElementById(type).value = "";
    console.log(text);
    var tr = document.createElement("tr"); //maak een nieuwe aan
    var td = document.createElement("td"); //maak een nieuwe aan
    var i = document.createElement("td"); //maak een nieuwe aan
    var button = document.createElement("button");
    var insidetext = document.createTextNode(text); //stop text in de node
    button.appendChild(document.createTextNode("i"))
    td.appendChild(insidetext);
    i.appendChild(button);
    tr.appendChild(td);
    tr.appendChild(i);
    var element = document.getElementById(type + "table");
    element.appendChild(tr);
}
