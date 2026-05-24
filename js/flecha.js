//función flecha
  const mostrar  = () => {


 // 1. Obtenemos los valores de los inputs (Usamos let porque son datos variables)
    let n1 = parseInt(document.getElementById("numerouno").value);
    let n2 = parseInt(document.getElementById("numerodos").value);

    // 2. DEFINIMOS reRESULTADO (Esto es lo que faltaba)

            const reRESULTADO = document.getElementById("resultado");


 
    //3. coprobar si los campos están vacíos o no son números

        if (isNaN(n1) || isNaN(n2)) {
        reRESULTADO.innerText = "Por favor, introduce ambos números.";

        return; // 👈 ¡Esto corta la función aquí si hay un error!
       
        }



        //4. Compraración

        if (n1 > n2) {
        reRESULTADO.innerText = "El número mayor es: " + n1;
       
         } else if (n2 > n1) {
        reRESULTADO.innerText = "El número mayor es: " + n2;
       
        } else {
        reRESULTADO.innerText = "¡Son iguales! Ambos valen " + n1;
      
     }



    }