function calcularPuntaje() {
  // Obtener los valores seleccionados
  var q1 = document.querySelector('input[name="q1"]:checked');
  var q2 = document.querySelector('input[name="q2"]:checked');
  var q3 = document.querySelector('input[name="q3"]:checked');
  var q4 = document.querySelector('input[name="q4"]:checked');
  var q5 = document.querySelector('input[name="q5"]:checked');
  var q6 = document.querySelector('input[name="q6"]:checked');
  var q7 = document.querySelector('input[name="q7"]:checked');
  var q8 = document.querySelector('input[name="q8"]:checked');
  var q9 = document.querySelector('input[name="q9"]:checked');
  var q10 = document.querySelector('input[name="q10"]:checked');

  // Verificar si se contestaron todas las preguntas
if (!q1 || !q2 || !q3 || !q4 || !q5 || !q6 || !q7 || !q8 || !q9 || !q10){
  alert("Por favor contesta todas las preguntas.");
  return;
}

// Contadores para cada una de las opciones (A, B, C, D)
var aCount = 0;
var bCount = 0;
var cCount = 0;
var dCount = 0;

// Calcular el puntaje de cada respuesta
var respuesta = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];
for (var i = 0; i < 10; i++) {
  var valor = respuesta[i].value;
  if (i < 5) {
    if (valor === 'A') {
      dCount++;
    } else if (valor === 'B') {
      cCount++;
    } else if (valor === 'C') {
      bCount++;
    } else if (valor === 'D') {
      aCount++;
    }
  } else {
    if (valor === 'A') {
      aCount++;
    } else if (valor === 'B') {
      bCount++;
    } else if (valor === 'C') {
      cCount++;
    } else if (valor === 'D') {
      dCount++;
    }
  }
}

// Calcular el puntaje total y la interpretación
var puntaje = aCount + (bCount * 2) + (cCount * 3) + (dCount * 4);
var interpretacion = '';
if (puntaje <= 25) {
  interpretacion = 'Autoestima Baja. Existen problemas significativos de autoestima.';
} else if (puntaje >= 26 && puntaje <= 29) {
  interpretacion = 'Autoestima media. No presenta problemas de autoestima graves, pero es conveniente mejorarla.';
} else if (puntaje >= 30 && puntaje <= 40) {
  interpretacion = 'Autoestima elevada. Considerada como autoestima normal.';
} else
 // Calcular el puntaje total y la interpretación
var puntaje = aCount + (bCount * 2) + (cCount * 3) + (dCount * 4);
var interpretacion = '';
if (puntaje <= 25) {
  interpretacion = 'Autoestima Baja. Existen problemas significativos de autoestima.';
} else if (puntaje >= 26 && puntaje <= 29) {
  interpretacion = 'Autoestima media. No presenta problemas de autoestima graves, pero es conveniente mejorarla.';
} else if (puntaje >= 30 && puntaje <= 40) {
  interpretacion = 'Autoestima elevada. Considerada como autoestima normal.';
} else
{
  interpretacion = 'Muy alta autoestima';
  }
  
  // Mostrar el puntaje y la interpretación en la página
  var resultado = document.getElementById('resultado');
  
  // Abrir una nueva ventana con el resultado
  var nuevaVentana = window.open("", "_blank");
  nuevaVentana.document.write("<html><head><title>Resultado</title></head><body>");
  nuevaVentana.document.write("<h1>Resultados</h1>");
  nuevaVentana.document.write("<p><strong>Interpretación:</strong></p>");
  nuevaVentana.document.write("De los ítems del 1 al 5, las respuestas A a D se puntúan de 4 a 1 y de los ítems del 6 al 10, las respuestas A a D se puntúan de 1 a 4.<br> De 30 a 40 puntos: Autoestima elevada. Considerada como autoestima normal.<br> De 26 a 29 puntos: Autoestima media. No presenta problemas de autoestima graves, pero es conveniente mejorarla.<br> Menos de 25 puntos: Autoestima baja. Existen problemas significativos de autoestima.</p>");
  nuevaVentana.document.write("<p><strong>Tu puntaje es: " + puntaje + ". " + interpretacion + "</strong></p>");
  nuevaVentana.document.write('<button type="button" onclick="window.close()">Cerrar</button>');
  nuevaVentana.document.write("</body></html>");
  nuevaVentana.focus();
  }
