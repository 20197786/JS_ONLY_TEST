//Declaración de los objetos:
const fieldset = document.createElement("FIELDSET");
const legend = document.createElement("LEGEND");
const label = document.createElement("LABEL");
const input = document.createElement("INPUT");

var x = document.createElement("DIV");
var z = document.createElement("P");

var y = new Array();

//Añadiendo los objetos al DOM:
document.body.appendChild(fieldset);
fieldset.appendChild(legend);
fieldset.appendChild(label);
fieldset.appendChild(input);
fieldset.appendChild(x);
legend.innerHTML = "Multiplicación";
label.innerHTML = "¿Qué tabla desea mostrar?: ";

//Este es el manejador del evento (input):
input.oninput = function() {
  Generate()
};

function Generate() {
  //Reseteando el vector:
  y = [];
  //Reseteando el contenido de mi div:
  x.innerHTML = "";
  x.style.visibility = "visible";
  //comprobando si es un número:
  if (isNaN(input.value) == false && input.value != "") {
    for (var i = 0; i <= 12; i++) {
      y[i] = (input.value + " X " + i + " = " + (i * input.value));
    }
    // x.textContent = y.toString(); este era una asignación que tenía. El problema es que arroja todo en una línea.
    // este foreach pasa por cada uno de los elementos y los agrega al div. Si quiere puede agregar un índice para comprobar (item, index) => {... += index + ...}:
    y.forEach((item) => {
      x.innerHTML += item + "<br>";
    });
    //esta condición es específica para cuando el usuario deje el campo vacío:
  } else if (input.value == "") {
    x.style.visibility = "hidden";
  } //cualquier otra cosa que no sea vacío y un número va aquí:
  else {
    x.textContent = "¡Escribe solo números! \_(ツ)_/";
  }
}
