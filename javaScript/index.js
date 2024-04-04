let compte = {
    "login" : "btonnot",
    "password" : "btonnot",
    "nom" : "tonnot",
    "prenom" : "bob"
}

document.onreadystatechange = function () {
    if (document.readyState == 'interactive') {
        $(".dropdown-trigger").dropdown();
        let compteSession = sessionStorage.getItem("compte")
        let connecte = document.getElementsByClassName("connecte");
        let deconnecte = document.getElementsByClassName("deconnecte")
        if(compteSession == null) {
            console.log("pas de compte")
            for( let i=0;i<connecte.length;i++){
                connecte[i].style.display ="none";
            }
            for( let i=0;i<connecte.length;i++){
                deconnecte[i].style.display ="";
            }
        } else {
            console.log("un compte")
            console.log("compte = " + compteSession)
            compte = JSON.parse(compteSession)
            for( let i=0;i<connecte.length;i++){
                connecte[i].style.display ="";
            }
            for( let i=0;i<connecte.length;i++){
                deconnecte[i].style.display ="none";
            }
        }
        document.getElementById("login").oninput = function () {
            console.log("onchange")

        }
        document.getElementById("password").oninput = function () {
            console.log("onchange")
            document.getElementById("submit").disabled=false;
        }

        document.getElementById("submit").onclick = function ( ) {
            console.log("un clic")
            if(document.getElementById("login").value === compte.login) {

            }
        }
    }
}