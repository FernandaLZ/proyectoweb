//------------------Guardar Datos en el local Storage-------------------------------------------

//-----------------Obtener los valores del formulario----------------------------
var sumA = localStorage.getItem("sumA");
var sumB = localStorage.getItem("sumB");
var sumC = localStorage.getItem("sumC");
console.log(sumA+" "+sumB+" "+sumC);
if(window.close)
{
    localStorage.removeItem("sumA");
    localStorage.removeItem("sumB");
    localStorage.removeItem("sumC");
}

//Llamando a la funcion
dibujar();
function dibujar()
{
    var i;
    var numero=20;
    var xr=300;
    var yr=300;
    var r=250;
    var tetha;
    var A=parseInt(sumA);
    var B=parseInt(sumB);
    var C=parseInt(sumC);
    var Total=A+B+C;
    var Ap=((A*1)/Total);
    var Bp=((B*1)/Total);
    var Cp=((C*1)/Total);
    var c = document.getElementById("grafica");
    const data = {
        labels: [
            'A',
            'B',
            'C'
        ],
        datasets: [{
        data: [A, B, C],
        backgroundColor: [
          'rgba(255, 0, 0,'+Ap+')',
          'rgba(0,0,255,'+Bp+')',
          'rgba(255,255,0,'+Cp+')'
        ]
      }]
    };
    const config = {
        type: 'pie',
        data: data,
        options:{
            plugins: {
                legend: false,
            },
            events: ['click'],
            onClick: (e) => {
                clickHandler(e);
            }
        }
    };
    
    var chart = new Chart(c, config);

    function clickHandler(evt) {
        const points = chart.getElementsAtEventForMode(evt, 'nearest', { intersect: true }, true);
    
        if (points.length) {
            const firstPoint = points[0];
            const label = chart.data.labels[firstPoint.index];
            const value = chart.data.datasets[firstPoint.datasetIndex].data[firstPoint.index];

            if(label=='A'){
                window.location.href = "a.html";
            }else if(label=='B'){
                window.location.href = "b.html";
            }else if(label=='C'){
                window.location.href = "c.html";
            }
        }
    }
}
