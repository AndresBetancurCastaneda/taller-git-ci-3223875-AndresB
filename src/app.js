function suma(a, b) {
  return a + b;
}

console.log("App lista");

function agregarItem(texto) {
  const lista = document.getElementById("lista");
  const li = document.createElement("li");
  li.textContent = texto;
  lista.appendChild(li);
}

document.getElementById("btn-agregar").addEventListener("click", () => {
  const input = document.getElementById("texto");
  const valor = input.value.trim();

  if (valor !== "") {
    agregarItem(valor);
    input.value = "";
  }
});


module.exports = suma;