document.getElementById("Calculer").onclick = function(){
    let A = Number(document.getElementById("inputA").value); 
    let B = Number(document.getElementById("inputB").value); 

    
    if (isNaN(A)||isNaN(B)){
        document.getElementById("Erreur1").innerHTML = "Give a number please";
    }else{
        document.getElementById("Erreur1").innerHTML = "";
        let C = Math.sqrt(Math.pow(A,2)+Math.pow(B,2));
        document.getElementById("Results").innerHTML = "Le resultat est "+Math.floor(C) ;
    }
        
}
   
