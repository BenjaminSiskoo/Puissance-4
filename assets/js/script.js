var nombrejoueur = 1;
var colonnes = 5;
var lignes = 5;
var jeu = true;
var texte = '';
var plateau = [];


for (var i = 0; i < lignes = 5; i++) {
  plateau[i][j] = 0;
}
newgame();

function newgame (){
	for (var i = 0; i < lignes; i++){
		for (var j = 0; j < colonnes; j++){
			plateau [i][j]= 0;
		}
	}
	nombrejoueur = 1;
	affichetexteannonce("Le jeu commence ! C'est au tour du joueur"+nomdujoueur(joueur));
	jeu = true;
	creertableau();
	}

function affichetexteannonce(texte){
	document.getElementbyid("texteannonce").innerHTML=texte;
}

function nomdujoueur(numjoueur){
	if (numjoueur == 1){
		return "rouge";
	}else{
		return "bleu";
		}
	}

function creertableau(){
	texte="<table>";
		for (var i=0 ; i < lignes; i++){
			texte+= "<tr>";
			 for (var j=0 ; j < colonnes; j++){
			 	texte += '<td onclick="detecteClick('+j+')" id="'+i+'-'+j+'">';
			 	if (plateau [i][j]== 1){
			 		texte+='<div class='joueur1'></div>';
			 }elseif(plateau[i][j] == 2){
			 		texte+='<div class='joueur2'></div>';
			 texte+= "</td>";
			 }
			 texte+= "</tr>";
			}
			texte+= "</table>";
				document.getElementsbyid("Puissance4").innerHTML=texte;
			}