var nombrejoueur = 1;
var colonnes = 5;
var lignes = 5;
var jeu = true;
var texte = '';
var plateau = [];


for (var i = 0; i < lignes; i++) {
  plateau[i] = [];
}
newgame();

function newgame (){
	for (var i = 0; i < lignes; i++){
		for (var j = 0; j < colonnes; j++){
			plateau[i][j]= 0;
		}
	}
	nombrejoueur = 1;
	affichetexteannonce("Le jeu commence ! C'est au tour du joueur"+nomdujoueur(nombrejoueur));
	jeu = true;
	creerTableau();
	}

function affichetexteannonce(texte){
	document.getElementById("texteannonce").innerHTML = texte;
}

function nomdujoueur(nombrejoueur){
	if (nombrejoueur == 1){
		return "rouge";
	}else{
		return "bleu";
		}
	}

function creerTableau(){

    texte = '<table>';

    for (i = 0; i < lignes; i++) {

        texte += '<tr>';

        for (j = 0; j < colonnes; j++) {

            texte += '<td onclick="detecteClick('+j+')" id="'+i+'-'+j+'">';

            if(plateau[i][j] == 1){

                texte += '<div class="joueur1">';

            }else if(plateau[i][j] == 2){

                texte += '<div class="joueur2">';

            }

            texte += '</td>';

        }

        texte += '</tr>';

    }

    texte += '</table>';

    tableau = document.getElementById('puissance4');

    tableau.innerHTML = texte;

}