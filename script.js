var delayTimer; // Pour chercher après 
var delayTimerMs = 300; // Le delay en millisecond pour executer la requete ajax (300 c'est le delay conseillé )
function search() {


    var value = document.getElementById("search-box");
    if (value != null) {
        value = value.value;
        if(value == null || value.length === 0){
            return; // S'il n'y a pas de valeur on renvoi 0
        }
    }



    function doSearch(text) {
        clearTimeout(delayTimer); // Annulation du timeout si pas encore executé (< 300 ms)

        delayTimer = setTimeout(function () {

            // Création de l'objet pour effectuer les requete ajax
            var xhr = getXMLHttpRequest(); 

            //Callback appelé une fois que le serveur à répondu 
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 0)) {
                    // Convertion du text reçu en objet JSON
                    var result = JSON.parse(xhr.responseText);
                    // DEBUG - Affiche le résultat dans la console
                    console.log(result);

                    //Affichage des résultat sous forme de liste
                    var resultTag = document.getElementById("result");
                    var htmlResult = "";
                    for (var r of result) {
                        htmlResult += `<p> ${r.user.firstname} - ${r.user.lastname} - ${r.user.email} </p>`
                    }
                    //Insertion de la liste dans le dom html
                    resultTag.innerHTML = htmlResult;
                }
            };



            // SETUP - XHR - Target
            xhr.open("GET", "https://api-test.studay.fr/external/users/firstname-or-lastname/" + value, true);
            //xhr.setRequestHeader("Content-Type", "application/json");
            // SETUP - XHR - Token/Clé Api Studay récupératble
            // Ajouter votre token généré sur studay ci-dessous
            xhr.setRequestHeader("Authorization", "Bearer YOUR_TOKEN_HEAR");
            xhr.send(null);
        }, 300);
    }


    // Execution de la recherche
    doSearch();

}

/**
 * Cette methode permet de créer un objet permettant de faire des requete ajax
 */
function getXMLHttpRequest() {
    var xhr = null;

    if (window.XMLHttpRequest || window.ActiveXObject) {
        if (window.ActiveXObject) {
            try {
                xhr = new ActiveXObject("Msxml2.XMLHTTP");
            } catch (e) {
                xhr = new ActiveXObject("Microsoft.XMLHTTP");
            }
        } else {
            xhr = new XMLHttpRequest();
        }
    } else {
        alert("Votre navigateur ne supporte pas l'objet XMLHTTPRequest...");
        return null;
    }

    return xhr;
}