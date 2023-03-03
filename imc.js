function calculate(){
    let altura = document.getElementById("altura").value / 100;
    let peso = document.getElementById("peso").value;

    //if(altura !== '' && peso !== ''){
        let imc = peso / altura ** 2;
        let classification = ""
    
        if(imc < 18.5){
            classification = "magreza";
        }
        else if(imc < 24.9){
            classification = "normal";
        }
        else if(imc < 29.9){
            classification = "sobre peso";
        }
        else if(imc < 34.9){
            classification = "obesidade 1";
        }
        else if(imc < 39.9){
            classification = "obesidade 2";
        }
        else{
            classification = "obesidade 3";
        }

        document.getElementById("resultado").innerText= classification

   // }

}