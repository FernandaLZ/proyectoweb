var sumA=0;
var sumB=0;
var sumC=0;
var contador=0;
var a=[];
var b=[];
var c=[];
function ValidarRespuestas()
{   
    var i;
    var x,y,z;
    var valorx,valory,valorz;
    var flag=0;
    let errores=[];

    sumA=0;
    sumB=0;
    sumC=0;
    if(contador==0)//caso en el que no hay elementos en el arreglo
    {
        for(i=1;i<11;i++)
        {
    
            x=i+"a";
            y=i+"b";
            z=i+"c";
    
            valorx=document.getElementById(x).value;
            valory=document.getElementById(y).value;
            valorz=document.getElementById(z).value;
    
            a.push(parseInt(valorx));
            b.push(parseInt(valory));
            c.push(parseInt(valorz));
            if((a[i-1]+b[i-1]+c[i-1])!=10)
            {
                flag=1;
                errores.push(i);
                contador++;
            }
        }
    }
    else//caso en el que ya hay elementos
    {
        for(i=1;i<11;i++)
        {
    
            x=i+"a";
            y=i+"b";
            z=i+"c";
    
            valorx=document.getElementById(x).value;
            valory=document.getElementById(y).value;
            valorz=document.getElementById(z).value;
    
            a[i-1]=parseInt(valorx);
            b[i-1]=parseInt(valory);
            c[i-1]=parseInt(valorz);
            if((a[i-1]+b[i-1]+c[i-1])!=10)
            {
                flag=1;
                errores.push(i);
            }
        }
    }

    if(flag!=0)
    {
        window.alert("Revisa la pregunta "+errores); 

    }
    else
    {
        for(i=0;i<10;i++)
        {
            sumA=sumA+a[i];
            sumB=sumB+b[i];
            sumC=sumC+c[i];
        }
        localStorage.setItem("sumA", sumA);
        localStorage.setItem("sumB", sumB);
        localStorage.setItem("sumC", sumC);
        window.location.href = "resultados.html";
    }
    
    console.log(a+" "+sumA);
    console.log(b+" "+sumB);
    console.log(c+" "+sumC);

}

function EmpezarCuestionario()
{
    window.location.href = "test.html";
}
function Regresar()
{
    window.location.href = "resultados.html";
}
