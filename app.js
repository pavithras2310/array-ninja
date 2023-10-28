document.getElementById("heading").textContent ="JavaScript - Delete Data From An Array";
var table = document.getElementById("table");
var arr = ["Tony Stark","Peter Parker","Stephen Strange","Steve Rogers","Peter quill","Black Pandher","Groot","SpiderMan1","SpiderMan2","SpiderMan3"];
function addElements(){
    for (var i = 0; i < 10; i++) {
        var row = document.createElement("tr");

        var td1 = document.createElement("td");
        td1.setAttribute("id",i);
        var name = document.createTextNode(arr[i]);
        td1.appendChild(name);
        row.appendChild(td1);

        var td2 = document.createElement("td");
        td2.setAttribute("id",i);
        var button = document.createElement("input");
        button.setAttribute("type","button");
        button.setAttribute("class","remove");
        button.setAttribute("value","Remove");
        button.setAttribute("style","background-color: #D8534C;padding: 5px;color:white;border-radius: 5px;")
        td2.appendChild(button);
        row.appendChild(td2);

        table.appendChild(row);
    }
}
addElements();

var removeButtons = document.getElementsByClassName("remove");

for(var i=0;i<removeButtons.length;i++){
    removeButtons[i].addEventListener("click", function() {
        alert("Are you sure? you want to remove this?");
        var row = this.parentNode.parentNode;
        var table = document.getElementById("table");
        table.removeChild(row);
    });
}







