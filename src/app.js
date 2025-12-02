const suma = require('./suma');  // Importamos solo si la usas en el DOM

console.log('App lista');

// --- Función para agregar un item al DOM ---
function agregarItem(texto) {
  const lista = document.getElementById('lista');
  const li = document.createElement('li');
  li.textContent = texto;
  lista.appendChild(li);
}

// --- Evento del botón ---
document.getElementById('btn-agregar').addEventListener('click', () => {
  const input = document.getElementById('texto');
  const valor = input.value.trim();

  if (valor !== '') {
    agregarItem(valor);
    input.value = '';
  }
});
