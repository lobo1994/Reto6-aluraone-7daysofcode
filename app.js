let frutas=[];
let lacteos=[];
let dulces=[];
let congelados=[];

let auxiliar;
let respuesta;
let posicion; 
respuesta=prompt("deseas agregar un alimento a tu lista de compras ? si o no");

while(respuesta!="no"||(respuesta=="agregar"||respuesta=="eliminar")){
    if(respuesta!="si"&&respuesta!="agregar"&&respuesta!="eliminar"){
        alert("respuesta no valida");
        respuesta=prompt("deseas agregar   un alimento a tu lista de compras ? si/no ");
    }
    else{
        if(respuesta=="eliminar"){
            respuesta=prompt("en que categoria encaja el  alimento que deseas eliminar ? escribe una opcion : frutas, lacteos, congelados, dulces ");
            auxiliar=prompt("que alimento deseas eliminar?");
            if(respuesta=="frutas"){
                posicion=frutas.indexOf(auxiliar);
                if(posicion==-1){
                    alert("error alimento no existe en la categoria especificada");
                }
                else{
                    frutas.splice(posicion, 1); 
                    alert(`el alimento fue eliminado\n estos son los alimentos de la lista: ${frutas}\n Lacteos: ${lacteos}\n Congelados: ${congelados}\n Dulces: ${dulces}\n`);
                }
            }
            else{
                if(respuesta=="lacteos"){
                    posicion=lacteos.indexOf(auxiliar);
                if(posicion==-1){
                    alert("error alimento no existe en la categoria especificada");
                }
                else{
                    lacteos.splice(posicion, 1); 
                    alert(`el alimento fue eliminado\n estos son los alimentos de la lista: ${frutas}\n Lacteos: ${lacteos}\n Congelados: ${congelados}\n Dulces: ${dulces}\n`);
                }
                }
                else{
                    if(respuesta=="congelados"){
                    posicion=congelados.indexOf(auxiliar);
                    if(posicion==-1){
                        alert("error alimento no existe en la categoria especificada");
                    }
                    else{
                        congelados.splice(posicion, 1); 
                        alert(`el alimento fue eliminado\n estos son los alimentos de la lista: ${frutas}\n Lacteos: ${lacteos}\n Congelados: ${congelados}\n Dulces: ${dulces}\n`);
                    }
                    }
                    else{
                        if(respuesta=="dulces"){
                            posicion=dulces.indexOf(auxiliar);
                        if(posicion==-1){
                            alert("error alimento no existe en la categoria especificada");
                        }
                        else{
                            dulces.splice(posicion, 1); 
                            alert(`el alimento fue eliminado\n estos son los alimentos de la lista: ${frutas}\n Lacteos: ${lacteos}\n Congelados: ${congelados}\n Dulces: ${dulces}\n`);
                        }
                        }
                        else{
                            alert("respuesta no valida intenta nuevamente");
                        }
                    }
                }
            }


        }
        else{
            auxiliar=prompt("que alimento deseas ingresar?");
            respuesta=prompt("en que categoria encaja ese alimento ? escribe una opcion : frutas, lacteos, congelados, dulces ");
            if(respuesta=="frutas"){
                frutas.push(auxiliar);
            }
            else{
                if(respuesta=="lacteos"){
                    lacteos.push(auxiliar);
                }
                else{
                    if(respuesta=="congelados"){
                        congelados.push(auxiliar);
                    }
                    else{
                        if(respuesta=="dulces"){
                            dulces.push(auxiliar);
                        }
                        else{
                            alert("respuesta no valida intenta nuevamente");
                        }
                    }
                }
            }
        }
        respuesta=prompt("deseas agregar  o borrar un alimento a tu lista de compras ? eliminar/agregar ");
    }
}
alert(`Frutas: ${frutas}\n Lacteos: ${lacteos}\n Congelados: ${congelados}\n Dulces: ${dulces}\n    ` )