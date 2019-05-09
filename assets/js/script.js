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
	affichetexteannonce("Le jeu commence ! C'est au tour du joueur " +nomdujoueur(nombrejoueur));
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

function detecteClick(j){
	if (verifposition(j) == true && jeu == true){
		var ligneencours = posejeton(j);
		var verifend = puissance4(ligneencours, j, 0, 0);
		if (verifend == true) {
			jeu = false;
			affichetexteannonce("Le joueur "+nomdujoueur(nombrejoueur)+ " a gagné la partie.");
		}else{
			 if (nombrejoueur == 1){
				nombrejoueur = 2;
			}else {
				nombrejoueur = 1;
			}
			affichetexteannonce("C'est au tour du jeu "+nomdujoueur(nombrejoueur));
		}
			
		}
}		

function verifposition(j){
	if (plateau[0][j] == 0){
		return true;	
	}else {
		return false; 
	}
}

function posejeton(j){
	for (var i = lignes -1; i >=0 ; i--){
		if (plateau[i][j] == 0){
			plateau[i][j] = nombrejoueur;
			refreshtableau(i, j, nombrejoueur);
			return i;
			}
		}
}

function refreshtableau (x, y, i){
	document.getElementById(x+'-'+y).innerHTML = '<div class="joueur'+i+'"></div>';
}

function puissance4(lignes, colonnes, l, c){
	console.log('valeur : '+lignes+' '+colonnes+' / increment '+l+' '+c+'');
	return false;
}

//Puissance4(4, 2, 0 ,0)
//Puissance4(4, 1, 0, -1)

function Puissance4(lig, col, l, c){
		if(c == 0 && l == 0){
			console.log(("initial Valeurs : " + lig + " " + col + " /Incrément "+ l +" "+ c);
			//horizontal
			var a = 1 + Puissance4(lig, col-1, 0, -1) + Puissance4(lig, col+1, 0, 1);
			//Vertical
			var a = 1 + Puissance4(lig-1, col, -1, 0) + Puissance4(lig+1, col, 1, 0);
			//Diagonal Gauche
			var a = 1 + Puissance4(lig-1, col-1, -1, -1) + Puissance4(lig +1, col +1, 1 , 1);
			//Diagonal Droite
			var a = 1 + Puissance4(lig-1, col+1, -1, 1) + Puissance4(lig+1, col-1, 1, -1);

			console.log(va,vb,vc,vd);
			if(va >= 4 || vb >= 4 || vc >= 4 || vd >= 4){
				return true;
			}else {
				return false;
			}
	
		if(lig < this.ligne && lig >=0 && col < this.colonne && col >=0){
			console.log("recursive Valeurs : " + lig + " "+ col +" / Incrément " + l + " "+ c);
			if(this.plateau[lig][col] == this.joueur){
				//console.log("ok")
				return 1 + Puissance4(lig + l,col + c, l, c);
			}else{
				//console.log("pas ok")
			}
				return 0;
		}
		}
		return 0;
}