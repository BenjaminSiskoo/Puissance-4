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
	affichetexteannonce("Le jeu commence ! C'est au tour du joueur "+nomdujoueur(nombrejoueur));
	jeu = true;
	creerTableau();
	}

function affichetexteannonce(texte){
	document.getElementById('texteannonce').innerHTML = texte;
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

function detecteClick (j){
	if (verifposition(j) == true && jeu == true){
		var ligneencours = posejeton(j);
		var verifend = puissance4(ligneencours, j, 0, 0);
		if (verifend == true) {
			jeu = false;
			affichetexteannonce("Le joueur "+nomdujoueur(joueur)+ " a gagné la partie.");
			}else if (joueur == 1){
				joueur = 2;
				 	}
				 	else (joueur == 2){
				 		joueur = 1;
				 	}
				}
			affichetexteannonce("C'est au tour du jeu "+nomdujoueur(joueur));
					}
		

function verifposition(j){
	if (plateau[0][j] == 0){
		return true;	
	}else {
		return false; 
	}
}

function posejeton(j){
	for (i=lignes -1; i >=0 ; i--){
		if (plateau[i][j] == 0){
			var plateau[i][j] = joueur(refreshtableau[i][j][joueur])
			return [i];
			}
		}
}

function refreshtableau (x, y, i){
	document.getElementById(x-y).innerHTML = '<div class="joueur"'+i+'></div>';
}

function puissance4 (lignes, colonnes, l, c){
	console.log('valeur : '+lignes+' '+colonnes+' / increment '+l+' '+c+' )
	return false;
}