// **************Les cartes MarioBros******************
const result = document.querySelector('.results');
const jeu = document.getElementsByClassName('card');
const maPopup = document.getElementsByClassName('maPopup');

function Jeux(name, console, year) {
    this.name = name;
    this.console = console;
    this.year = year;
}

let jeu1 = new Jeux('Super Mario Bros.', 'NES', 1985);
let jeu2 = new Jeux('Super Mario Bros: The Lost Levels', 'NES', 1986);
let jeu3 = new Jeux('Super Mario Bros. 2', 'NES', 1987);
let jeu4 = new Jeux('Super Mario Bros. 3', 'NES', 1988);
let jeu5 = new Jeux('Super Mario World .', 'Super Nintendo', 1990);
let jeu6 = new Jeux('Super Mario All-Stars.', 'Super Nintendo', 1993);
let jeu7 = new Jeux('Super Mario World 2: Yoshi\'s Island.', 'Super Nintendo', 1995);
let jeu8 = new Jeux('Super Mario 64.', 'Nintendo 64', 1996);
let jeu9 = new Jeux('Super Mario Sunshine.', 'GameCube', 2002);
let jeu10 = new Jeux('Super Mario Bros. Deluxe.', 'Game Boy Color', 1999);

let myCollection = new Object();
myCollection = {...{jeu1}, ...{jeu2}, ...{jeu3}, ...{jeu4}, ...{jeu5}, ...{jeu6}, ...{jeu7}, ...{jeu8}, ...{jeu9}, ...{jeu10}};  

result.innerHTML = Object.values(myCollection).map( (jeu, index) =>`
    <div class="card ${jeu}">
        <h2>Titre : ${jeu.name}</h2>
        <h3>Console : ${jeu.console}</h3>
        <h4>Année : ${jeu.year}</h4>
        <button class="maPopup" id = ${"jeu" + (index+=1)}>en savoir plus</button>
    </div>
`).join("");

console.log(maPopup)
// *******************************Là, je modifie mon titre h1*******************************
// ************************Pour cela je dois créé une variable de mon titre et une pour le parent**************
// **************************Puis une autre pour mon nouveau titre avant de le remplacer*************************************
var titre = document.getElementById('gros_titre');
var parent = document.body;

var nouveauTitre = document.createElement('h1');
nouveauTitre.id = 'beau_titre';
nouveauTitre.innerHTML = 'Bienvenue à Mario et Luigi';

parent.replaceChild(nouveauTitre, titre);
// *********************************************************************************************************







for (let index = 0; index < maPopup.length; index++) {
    const jeu = maPopup[index];
    console.log(jeu.getAttribute('id'));
    var s = document.querySelector('.maPopup').addEventListener('click', ()=>{
        maPopup.classList.toggle('active');
        })
        alert(s);
}


// ***********************Là, j'essaie de modifier les cartes de Mario*********************************
var s = document.getElementsByTagName(jeu);
s.addEventListener('click',fenetre);
function fenetre() {
    this.style.width = '300px';
}

//   s.addEventListener('click', ()=>{
//     jeu.classList.toggle('active');
//     })






// let open = document.querySelector('#open')
// open.addEventListener('click', ()=>{
//     result.classList.add('active');
// })


// let close = document.querySelector('#cross')
// close.addEventListener('click', ()=>{
//     result.classList.remove('active');
// })



// if (let clk: ((this: Window, ev: MouseEvent) => any)) {
    
// }




// **********************************************************************

// var x = 25;

// x = x + 5;
// y = -75;
// var X = 100;
// var total = X += 1;
// var prenom = "Pierre", nom = "Giraud", dpt = 83;

// var age;
// age = 25;

// var ville = "";
// ville = "Toulon";

// var homme = true;

// console.log("Variable x : " + typeof(x) +
//     "\nVariable y : " + typeof(y) +
//     "\nVariable age : " + typeof(age) +
//     "\nVariable homme : " + typeof(homme) +
//     "\nVariable ville : " + typeof(ville));

//     alert("Variable x : " + typeof(x) +
//     "\nVariable y : " + typeof(y) +
//     "\nVariable age : " + typeof(age) +
//     "\nVariable homme : " + typeof(homme) +
//     "\nVariable ville : " + typeof(ville) +
//     "\nVariable de X est egale a : " + X);

// var heure = 12, bon = "";
// // Ecriture Ternaire

// // bon = (heure <= 18) ? "Bonjour" : "Bonsoir";
// // alert(bon);

// if (heure <= 18) {
//     bon = "Bonjour";
// }
// else {
//     bon = "Bonsoir";
// }
// alert(bon);

// *************************SWITCH************************
// var heure = 10;

// switch (heure) {
//     case 8:
//         alert("Il est 8h");
//         break;
//     case 9:
//         alert("Il est 9h");
//         break;
//     case 10:
//         alert("Il est 10h");
//         break;
//     case 11:
//         alert("Il est 11h");
//         break;
//     case 12:
//         alert("Il est 12h");
//         break;
//     default:
//         alert("Rien a afficher pour cette valeur");
// }

// ***********************LES BOUCLES******************************

// var x = 0;

// while (x <= 10) {
//     alert('x contient la valeur : ' + x);
//     x++;
// }
// ******Différence entre "do","while"  et "while" ********
// ****Pour "do","while" un premier test est lancé directement avant la condition "while"***

// var x = 0;
// do {
//     alert('x vaut : ' + x);
//     x++;
// }
// while (x > 10);

// var x = 0, xprime = 0, alpha = 10, alphaprime = 10;
// // ****L'incrementation est placée apres la valeur, donc celle-ci n'est pas stockée dans la variable****
// var y = x++;
// var beta = alpha--;

// var yprime = ++xprime;
// var betaprime = --alphaprime;

// alert('y : ' + y +
//     '\nx : ' + x +
//     '\nbeta : ' + beta +
//     '\nalpha : ' + alpha +
//     '\nyprime : ' + yprime +
//     '\nxprime : ' + xprime +
//     '\nbetaprime : ' + betaprime +
//     '\nalphaprime : ' + alphaprime);

// **********BOUCLE for************

// var i = "";
// // ******Ici on initialise, on ecrit la condition et on incremente a l' interieur de la boucle for*******
// for(i = 0; i < 10; i++) {
//     alert('i contient la valeur : ' + i);
// }

// ***************************LES FONCTIONS****************************
// **********  x et y sont ici des parametres  ************
// ************et return renvoie le resultat d'une fonction et le capture dans une 
// variable afin de pouvoir le manipuler et l'afficher lorsqu'on le souhaite ***************
// 
// function multiplication(x,y) {
//     return x*y;
// }

// // **********  5 et 10 sont ici des arguments  ************
// var resultat1 = multiplication(5,10);
// var resultat2 = multiplication(-4,60);

// resultat1 -= 10;
// resultat2 += 200;

// var total = (resultat1) + (resultat2);

// alert(resultat1);
// alert(resultat2);
// alert(total);

// ***************************LES OBJETS****************************

// ***LES VARIABLES EN JAVASCRIPT VONT TOUJOURS STOCKER SOIT DES VALEURS PRIMITIVES SOIT DES OBJETS****
// ****UN OBJET peut contenir differentes proprietes et methodes et leurs valeurs associées****
// ****Nos variables vont pouvoir stocker plusieurs valeurs lorsqu'elles vont stocker un objet****

// var primitive = "Je suis une valeur primitive";

// var moi = {
//     prenom : "pierre",
//     nom : "Giraud",
//     age : 25,

//     idendite : function() {
//         return 'Prenom : ' + this.prenom +
//                 '\nNom : ' + this.nom +
//                 '\nAge : ' + this.age;
//     }
// }

// alert(moi.idendite());

// *********************VALEURS PRIMITIVES ET OBJETS********************************
// ***TOUJOURS PREFERER l'UTILISATION DES VALEURS PRIMITIVES A LA CREATION D'OBJETS*
// ***(economie de ressources et est plus flexible, lisible et plus simple)*********
// **On peut comparer des valeurs primitives entre elles mais Impossible de comparer des objets entre eux*********


// var primitive = "Je suis une valeur primitive";
// var longueur_prim = primitive.length;
// var maj_prim = primitive.toUpperCase();

// var chaine = new String("Je suis un objet");
// var maj_chai = chaine.toUpperCase();

// alert('Longueur de primitive : ' + longueur_prim +
//     '\nPrimitive en majuscules : ' + maj_prim +
//     '\nChaine en majuscules : ' + maj_chai);

// *********************CREER DES OBJETS EN JAVASCRIPT********************************
// ***La methode utilisant new Object est deconseillé pour creer un objet******
// ***************(pour des raisons de performance du code) ***********************

// var obj_string = new String("Je suis un objet");
// var obj_cree = new Object();

// obj_cree.prenom = "Pierre";
// obj_cree.nom = "Giraud";
// obj_cree.age = 25;

// alert(obj_cree.prenom + '  ' + obj_cree.nom + ' a ' + obj_cree.age + ' ans ' + 'et Moi, une grosse migraine');

// ***La maniere litterale est recommandée pour creer un objet et la maniere la plus simple de proceder******


// var moi = {
//     prenom: "Pierre",
//     nom: "Giraud",
//     age: 25,

//     id: function () {
//         return this.prenom + ' ' + this.nom + ' a ' + this.age + ' ans ';
//     }
// };

// alert(moi.id());

// ***Creer des objets a partir d'un constructeur (qui va lui meme contenir des methodes et des proprietes)******
//  ******Methode utilisée pour les gros projets ou nous aurons a creer bcp d'objets similaires *******

// function Identite(p, n, a) {
//     this.prenom = p;
//     this.nom = n;
//     this.age = a;
// }

// var pierre = new Identite("Pierre", "Giraud", 25);
// var victor = new Identite("Victor", "Durand", 24);

// alert('Age de Pierre : ' + pierre.age +
//     '\nAge de Victor : ' + victor.age);

// var x =10;
// var y = x;
// y += 10;

// alert('Valeur de x : ' + x +
//     '\nValeur de y : ' + y);

//     function Identite(p, n, a) {
//     this.prenom = p;
//     this.nom = n;
//     this.age = a;
// }

// **************ATTENTION cela modifie toutes les references d'un meme objet ******************
// function Identite(p, n, a) {
//         this.prenom = p;
//         this.nom = n;
//         this.age = a;
//     }
// var pierre = new Identite("Pierre", "Giraud", 25);
// var victor = pierre;

// victor.prenom = 'dsfjklj';

// alert('Prenom de Pierre : ' + pierre.prenom +
//     '\nPrenom de Victor : ' + victor.prenom);

// **************PROPRIETES ET METHODES LES PLUS UTILES DE L'OBJET STRING ******************
       // ************************** .toLowerCase et .toUpperCase ****************************
// var texte = "J'apprends le JAVASCRIPT";

// var texteMin = texte.toLowerCase();
// var texteMaj = texte.toUpperCase();

// alert('Texte de base : ' + texte +
//     '\nTexte en minuscules : ' + texteMin +
//     '\nTexte en majuscules : ' + texteMaj);

// ************************** .charAt ****************************

// var texte = "J'apprends le JAVASCRIPT";

// var pos0 = texte.charAt(0);
// var pos3 = texte.charAt(3);
// var pos11 = texte.charAt(11);

// alert('Position 0 : ' + pos0 +
//     '\nPosition 3 : ' + pos3 +
//     '\nPosition 11 : ' + pos11);

    // ************************** .indexOf et .lastIndexOf ****************************
    // *************** .indexOf et .lastIndexOf sont sensibles a la casse*********************

    // var texte = "J'apprends le JAVASCRIPT";

    // var premiere = texte.indexOf('J', 1);
    // var derniere = texte.lastIndexOf('p');
    // var sequence = texte.indexOf('le');

    // alert('Un "J" trouvé en position : ' + premiere +
    //     '\nDernier "p" trouvé en position : ' + derniere +
    //     '\nPremier "le" trouvé en position : ' + sequence);

        // ****** .replace (pour remplacer un mot) ******************

        // alert(texte.replace("JAVASCRIPT", "PHP"));

        // ** .slice (pour extraire une chaine et retourner la partie extraite comme nouvelle chaine) *****

        // alert(texte.slice(0, 10));
        // var texteTronque = texte.slice(-11, -1);
        // alert(texteTronque);

    // ****** .trim (pour supprimer un espace) ******************

        // var texte = "                  J'apprends le JAVASCRIPT";

        // var texteNettoye = texte.trim();
        // alert('Avant trim : ' + texte +
        // '\nApres trim : ' + texteNettoye);

    // **********PROPRIETES ET METHODES LES PLUS UTILES DE L'OBJET NUMBER *****************************
    // ************************PROPRIETES DE L'OBJET NUMBER*******************
    // var min = Number.MIN_VALUE;
    // var max = Number.MAX_VALUE;
    // var infneg = Number.NEGATIVE_INFINITY;
    // var infpos = Number.POSITIVE_INFINITY;
    // var notnumber = Number.NaN;

    // alert('Min : ' + min +
    //     '\nMax : ' + max +
    //     '\nInfini negatif : ' + infneg +
    //     '\nInfini positif : ' + infpos +
    //     '\nPas un nombre : ' + notnumber);

// ************************METHODES DE L'OBJET NUMBER*******************
// **************** .toString transforme un nombre en chaine de caractere *****************

    // var x = 10;
    // var t = x.toString();

    // alert('Type x : ' + typeof(x) +
    // '\nType t : ' + typeof(t));

// **** .toFixed va changer le nombre de décimal d'un nombre et le changer en chaine de caractere ****
     // ************ si on veut seulement 2 decimales ****var d = x.toFixed(2); *************
// **** .toPrecision nous permets de choisir la taille d'un nombre qui va nous etre renvoyé et le changer en chaine de caractere ****

    // var x = 10.4531;
    // var d = x.toFixed(2);
    // var e = x.toPrecision(3);
    // alert('Valeur de d : ' + d +
    //     '\nType de d : ' + typeof(d) +
    //     '\nValeur de e : ' + e +
    //     '\nType de e : ' + typeof(e));

// **** .toExponential(nb de decimal souhaitée) et le change en chaine de caractere ****

    // var x = 10.4531;

    // var d = x.toExponential(3);
    // alert('Valeur de d : ' + d +
    //      '\nType de d : ' + typeof(d));

    // **** LA METHODE Number(t) EST UTILISEE POUR CONVERTIR CERTAINES VARIABLES JAVASCRIPT EN NOMBRE ****
    // ***************les valeurs booleennes sont converties en valeur binaire*****************
    // **************les variables de type date vont etre converties en timestemp*****************
    // var t = true;
    // var f = false;
    // var d = new Date();

    // alert('True : ' + Number(t) +
    //     '\nFalse : ' + Number(f) +
    //     '\nDate : ' + Number(d));

//LES METHODES parseInt(x) et parseFloat(x) convertissent une valeur de type string en valeur de type number **
    // ******* Avec parseInt(x) on garde la partie entiere du nombre ************************
    // ******* Avec parseFloat(x) on garde le nombre complet  ************************

    // var x = "10.4531";

    // var int = parseInt(x);
    // var dec = parseFloat(x);

    // alert('parsInt() : ' + int + ' - ' + typeof(int) +
    //     '\nparseFloat() : ' + dec + ' - ' + typeof(dec));

    // ***************************** OBJET ARRAY ET TABLEAUX EN JAVASCRIPT***************************

    // var prenoms = ['Pierre', 'Victor', 'Julia', 'Claire'];
    // // Ci dessous on modifie une valeur dans le tableau
    // prenoms[0] = 'James';

    // alert(prenoms[0]);

    // // Pour connaitre le nombre d'elements contenu dans notre tableau
    // // => on utilise la propriété .lenght

    // alert("Mon tableau contient : " + prenoms.length + " élements");

    // Ci dessous on ajoute Florian et Chloé à notre tableau
    // var prenoms = ['Pierre', 'Victor', 'Julia', 'Claire'];
    
    // prenoms[prenoms.length] = "Florian";
    // prenoms[prenoms.length] = "Chloé";

    // alert('On a ajouté : ' +prenoms[4] + " et " +prenoms[5] +" à notre tableau");

     

    
// LA BOUCLE "for" CI DESSOUS PERMET DE PASSER EN REVUE NOTRE TABLEAU VALEUR PAR VALEUR
//  LA PROPRIETE "length" permet de sortir de la boucle au bon moment
    // var prenoms = ['Pierre', 'Victor', 'Julia', 'Claire'], p = '';
    
    // for(var i=0; i < prenoms.length; i++) {
    //     p += 'Prénom n°' + (i + 1) + ' : ' + prenoms[i] + '\n';
    // }

    // alert(p);

// on cree un objet littéral ci dessous
// NE PAS OUBLIER QU'UN OBJET LITTERAL N'EST PAS UN OBJET DE TYPE ARRAY (tableau)
// DONC LES PROPRIETES ET METHODES DE TYPES ARRAY NE FONCTIONNERONT PAS AVEC LES OBJETS DE TYPE LITTERAUX
    
    // var prenoms = {
    //     prenom1 : 'Pierre',
    //     prenom2 : 'Victor',
    //     prenom3 : 'Julia',
    //     prenom4 : 'Claire'
    // };

    // alert(prenoms.prenom1);

    //LA BOUCLE "for   in" POUR PARCOURIR UN OBJET LITTERAL ET AFFIHER SES ELEMENTS 

    // var prenoms = {
    //     prenom1 : 'Pierre',
    //     prenom2 : 'Victor',
    //     prenom3 : 'Julia',
    //     prenom4 : 'Claire'
    // }, p = '';

    // for(var clefs in prenoms) {
    //     p += clefs + ' : ' + prenoms[clefs] + '\n';
    // }

    // alert(p);

    // ************LES METHODES LES PLUS UTILES DE L'OBJET ARRAY***************************

    // ***LA METHODE push VA RETOURNER LA NOUVELLE TAILLE DU TABLEAU ***************
    // ***LA METHODE pop VA RETOURNER DANS UNE CHAINE DE CARACTERE LA VALEUR RELATIVE A L'ELEMENT SUPPRIME***

// ***************LA METHODE push *****************
    // var prenoms = ['Pierre', 'Victor', 'Julia', 'Claire'], p = '';

    // var taille = prenoms.push('Florian', 'Chloé');

    // for (var i=0; i < prenoms.length; i++) {
    //     p += 'Prénom n°' + (i+1) + ' : ' + prenoms[i] + '\n';
    // }

    // alert('Le tableau contient ' + taille + 'éléments : \n\n' + p);

// ***************LA METHODE pop ******************

// var prenoms = ['Pierre', 'Victor', 'Julia', 'Claire'], p = '';

//     var suppr = prenoms.pop('');

//     for (var i=0; i < prenoms.length; i++) {
//         p += 'Prénom n°' + (i+1) + ' : ' + prenoms[i] + '\n';
//     }

//     alert(p + '\n\nNous avous supprimé ' +suppr+ ' du tableau ');

// ***************LA METHODE unshift PERMET D'AJOUTER UN ELEMENT OU PLUS EN DEBUT DE TABLEAU **********

// var prenoms = ['Pierre', 'Victor', 'Julia', 'Claire'], p = '';

// var taille = prenoms.unshift('Florian', 'Chloé');

// for (var i=0; i < prenoms.length; i++) {
//              p += 'Prénom n°' + (i+1) + ' : ' + prenoms[i] + '\n';
//          }

//          alert('Notre tableau contient ' + taille + ' prénoms : \n\n' +p);

// ***************LA METHODE shift PERMET DE SUPPRIMER UN ELEMENT EN DEBUT DE TABLEAU ************

// var prenoms = ['Pierre', 'Victor', 'Julia', 'Claire'], p = '';

// var suppr = prenoms.shift();

// for (var i=0; i < prenoms.length; i++) {
//              p += 'Prénom n°' + (i+1) + ' : ' + prenoms[i] + '\n';
//          }

//          alert('Nouveau tableau : \n ' + p + '\n\nprénom supprimé : ' +suppr);

// ***LA METHODE splice PERMET D'AJOUTER ou DE SUPPRIMER UN ou DES ELEMENTS N'importe ou DANS UN TABLEAU ******

// var prenoms = ['Pierre', 'Victor', 'Julia', 'Claire'], p = '';
// AJOUTER DES ELEMENTS A PARTIR DE L'INDEX 1 ET ON NE SUPPRIMER AUCUN ELEMENT
// prenoms.splice(1,0,'Florian','Chloé');
// OU prenoms.splice(1,3); POUR SUPPRIMER 3 ELEMENTS A PARTIR DE L'INDEX 1

// for (var i=0; i < prenoms.length; i++) {
            //  p += 'Prénom n°' + (i+1) + ' : ' + prenoms[i] + '\n';
//          }

//          alert('Nouveau tableau : \n\n ' + p);

//LA METHODE sort PERMET DE CLASSER LES ELEMENTS DE NOTRE TABLEAU DANS L'ORDRE ALPHABETIQUE DE LEURS VALEURS*****
// LA METHODE reverse PERMET DE CLASSER LES ELEMENTS DE NOTRE TABLEAU DANS L'ORDRE INVERSE

// var prenoms = ['Pierre', 'pierre', 'Julia', 'julia'], p = '';

// prenoms.sort();
// prenoms.reverse();

// for (var i=0; i < prenoms.length; i++) {
//     p += 'Prénom n°' + (i+1) + ' : ' + prenoms[i] + '\n';
//     }

//     alert('Nouveau tableau : \n\n ' + p);

// LA METHODE join PERMET DE RETOURNER LES DIFFERENTES VALEURS D'UN TABLEAU SOUS FORME DE CHAINE DE CARACTERE

// var prenoms = ['Pierre', 'pierre', 'Julia', 'julia'], p = '';

// var chaine = prenoms.join('/');

// for (var i=0; i < prenoms.length; i++) {
//     p += 'Prénom n°' + (i+1) + ' : ' + prenoms[i] + '\n';
//     }

//     alert('Notre tableau:\n' + p +
//         '\n\nLa chaine renvoyé par join() : ' + chaine);

// ***LA METHODE slice PERMET DE CREER UN NOUVEAU TABLEAU EN EXTRAYANT DES ELEMENTS DE NOTRE TABLEAU DE BASE***

    // var prenoms = ['Pierre', 'pierre', 'Julia', 'julia'], p = '';

    // var garcons = prenoms.slice(0,2);

    // alert('Notre tableau de base : ' + prenoms +
    //         '\n\nLe tableau créé par slice() : ' + garcons);

//LA METHODE concat PERMET DE CONCATENER DIFFERENTS TABLEAUX ENTRE EUX (les fusionner pour en créer un nouveau)


    // var garcons = ['Pierre', 'Victor', 'Florian'];
    // var filles = ['Julia', 'Claire'];
    // var chats = ['Bubulle', 'Minouche'];

    // var gf = garcons.concat(filles);
    // var fg = filles.concat(garcons);
    // var fusion = garcons.concat(filles, chats);

    // alert('Valeurs du tableau garcons : ' + garcons +
    //     '\nValeurs du tableau filles : ' + filles +
    //     '\nValeurs du tableau gf : ' + gf +
    //     '\nValeurs du tableau fg : ' + fg +
    //     '\nValeurs du tableau fusion : ' + fusion);

// *********************** DECOUVERTE DE L'OBJET DATE ********************************

// var datelit = Date();
// var datems = Date.now();

// alert('Date littérale : ' + datelit +
//    ' \nDate sous forme de ms : ' + datems);

// *****************COMMENT ECRIRE DES DATES EN JAVASCRIPT avec l'objet Date ****************************

// ***************************FORMAT ISO****************************
    // var diso1 = new Date("2015-06-15");
    // var diso2 = new Date("2015-06-15T12:00:00");
    // // *************************Format date courte***************************
    // var dcourte = new Date("06/15/2015");
    // // ***********************Format date longue******************************
    // var dlongue = new Date("January 25 2015 09:00:00");
    // // ************************Format date complete*********************************
    // var dcomp = new Date("Sun Jan 25 2015 09:00:00 GMT+0100");

    // alert('Date ISO courte : ' + diso1 +
    //     '\nDate ISO complète : ' + diso2 +
    //     '\nDate courte : ' + dcourte +
    //     '\nDate longue : ' + dlongue +
    //     '\nDate complète : ' + dcomp);

    // ***********************************METHODE DE L'OBJET DATE************************************

    // var d = new Date();

    // var dms = d.getTime();
    // var dy = d.getFullYear();
    // var dmo = d.getMonth() + 1;
    // var ddate = d.getDate();
    // var dday = d.getDay();
    // var dh = d.getHours();
    // var dmi = d.getMinutes();
    // var ds = d.getSeconds();
    // var dMs = d.getMilliseconds();

    // alert('Nous sommes le ' + dday + '/' + dmo + '/' + dy +
    //     '\nIl est actuellement ' + dh + ':' + dmi + ':' + ds + ':' + dMs);

    // ********************************METHODE DE L'OBJET SET******************************

    // var d = new Date();

    // d.setFullYear(2015,5,15);
    // d.setHours(12);
    // d.setMinutes(30);
    // d.setSeconds(15);

    // alert('Date définie : ' + d);

    // ***********FORMATER UNE DATE EN JAVASCRIPT POUR AVOIR L'HEURE AU FORMAT EUROPEEN***************

    // var d = new Date();

    // var dy = d.getFullYear();
    // var dmo = d.getMonth() + 1;
    // var dday = d.getDay();
    // var ddate = d.getDate();
    // var dh = d.getHours();
    // var dmi = d.getMinutes();
    // var ds = d.getSeconds();

    // var mois = ['janvier', 'fevrier', 'mars', 'avril', 'mai', 'juin', 'juillet', 'aout', 'septembre', 'octobre', 'novembre', 'decembre'];
    // var jour = ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi'];

    // alert('Le ' + jour[dday] + ' ' + ddate + ' ' + mois[dmo] + ' ' + dy +
    //     '\nIl est : ' + dh + ' h ' + dmi + ' min et ' + ds + ' s. ');

    // *****************************L'OBJET MATH ET SES METHODES***********************************
    // **************** IL PERMET DE REALISER DIFFERENTES OPERATIONS SUR DES NOMBRES *******************

    // choisit un nombre entre 0 et 1
    // var x = Math.random()*1000;
    // arrondi le resultat de x
    // var y = Math.round(x);

    // alert('Contenu de x : ' + x +
    //     '\nContenu arrondi de x : ' + y);

    // Arrondi inferieur et supérieur
    // var x = Math.random()*1000;
    // var inf = Math.floor(x);
    // var sup = Math.ceil(x);

    // alert('Contenu de x : ' + x +
    //     '\nArrondi inférieur : ' + inf +
    //     '\nArrondi supérieur : ' + sup);

    // MIN MAX retourne respectivement le nombre le plus petit et le plus grand parmi une serie de nombre
    
    // var min = Math.min(0, -10, 200, 75, 25);
    // var max = Math.max(0, -10, 200, 75, 25);

    // alert('Plus petit nombre : ' + min +
    //     '\nPlus grand nombre : ' + max);

    // La methode abs renvoie la valeur absolue d'un nombre
    // var x = 2;
    // var y = -10;

    // var absx = Math.abs(x);
    // var absy = Math.abs(y);

    // alert('Valeur de x : ' + x + '. Valeur absolue de x : ' + absx +
    //     '\nValeur de y : ' + y + '. Valeur absolue de y : ' + absy);


// Methode de calcul

    // var x = 5, y = 3, z = 0.5;

    // POUR LA METHODE pow ,le parametres x est le nb. et y est l'exposant, soit 5exposant3= 125
    // var power = Math.pow(x,y);
    // var rac = Math.sqrt(x);
    // var cos = Math.cos(z);
    // var sin = Math.sin(z);
    // var pi = Math.PI;

    // alert('Resultat de pow() : ' + power +
    // '\nRacine de 5 : ' + rac +
    // '\nCosinus de 0,5 : ' + cos +
    // '\nSinus de 0,5 : ' + sin +
    // '\nApproximation de PI : ' + pi);


    // **************************** LA PORTEE EN JAVASCRIPT **********************************
// si la variable est dans la fonction ,elle a une portée locale (a l'interieur de la function)
// si la variable est hors en dehors d'une fonction (on dit variable a portée globale )
    
    // var x = 4;
    // function loc() {
    //     var x = 7;
    //     return x;
    // }

    // alert('x globale : ' + x +
    //     '\nx locale : ' + loc());
    

// ************************************ LES FONCTIONS ANONYMES ************************************
// ELLES NE POSSEDENT PAS DE NOM

// var carre = function(x) {
//     alert('carré de ' + x + ' = ' + x*x);
// };
// var y = prompt('Entrez un nombre');
// carre(y);


// ************************************ LES FONCTIONS AUTO-INVOQUEES ************************************
// Pour creer une fonction auto-invoquée ,on doit entourer la fonction avec des parantheses 
// et rajouter un couple de parantheses apres celle-ci !!!

// (function (x) {
//     x = prompt('Entrez un nombre');
//     alert('Carré de ' + x + ' = ' + x*x);
// })();
// **************LES CLOSURES EN JAVASCRIPT********************
// UNE CLOSURE EST UNE FONCTION QUI VA RECUPERER ET POUVOIR UTILISER 
// DES VARIABLES D'ENVIRONNEMENT DANS LAQUELLE ELLE A ETE CREER.


// function compteur() {
//     var i = 0;
//     return function(){
//         return i++;
//     }
// }
// var plusUn = compteur(); //on stocke notre function compteur 
//                         // dans la variable plusUn
// var autreInstance = compteur();

// alert('Premier tour : ' + plusUn() +
//     '\nDeuxieme tour : ' + plusUn() +
//     '\nPremier tour autreInstance : ' + autreInstance() +
//     '\nDeuxieme tour autreInstance : ' + autreInstance() +
//     '\nTroisieme tour : ' + plusUn());


// ***************LE DOM (Document Object Model)***************

// pour acceder a un element html avec un id
// var titre = document.getElementById('gros_titre');
// alert(titre);

// pour cibler tout les elements HTML d'un meme genre(p ou h2 ou etc...)
// var tableau = document.getElementsByTagName('p');
// alert('Notre page contient : ' + tableau.length + ' paragraphes');

// pour acceder a un element html avec une classe
// var tableau = document.getElementsByClassName('para');
// alert('Notre page contient : ' + tableau.length + ' paragraphes portant la class para');

// querySelector va renvoyer des informations relatives AU
//PREMIER element trouvé correspondant au selecteur CSS selectionné
//tandis que querySelectorAll sera pour tt les elements correspondants
//au selecteur CSS selectionné.
// var lien = document.querySelector('p a');
// var p = document.querySelectorAll('.para');
// alert('Informations dans lien : ' + lien +
// '\nDans p[0] : ' + p[0] +
// '\nDans p[1] : ' + p[1]);

// Ci-dessous on cible par id gros_titre et .innerHTML nous permet
// de voir tout le contenu de la cible.
// var titre = document.getElementById('gros_titre').innerHTML;
// alert(titre);

//Avec la propriété innerHTML on demande de retourner tout le contenu 
//de la cible entre les balises de l'element ciblé. Alors que
// avec textContent on ne veut que le texte présent.
// var p = document.querySelector('.para').innerHTML;
// var t = document.querySelector('.para').textContent;
// alert('Contenu récupéré avec innerHTML : \n' + p +
//     '\n\nContenu récupéré avec textContent : \n ' + t);

// Trois propriétés de l'object document
// var titre_page = document.title;
// var page = document.body;
// var lien = document.links;

// alert('Contenu de titre_page : ' + titre_page +
//     '\nContenu de page : ' + page +
//     '\nContenu de lien : ' + lien +
//     '\nContenu de lien : ' + lien[0]);

//** Chapitre 34 ** ******MODIFIER DU CONTENU HTML****** 

    // var titre = document.getElementById('gros_titre');
    // var texteTitre = titre.innerHTML;

    // var textePara = document.querySelector('.para').textContent;

    // alert('Titre : ' + texteTitre +
    //     '\nParagraphe 1 : ' + textePara);


// Là on modifie le titre grace à la propriété innerHTML et = 
// document.getElementById('gros_titre').innerHTML ='Titre modifié';
// Là on ajoute du contenu au titre grace à la propriété innerHTML et += 
// On peut egalement rajouter des balises à l'interieur pour modifier le style
// document.getElementById('gros_titre').innerHTML +=' <em>et de la modification en Javascript</em>';
// document.querySelector('a').href = 'http://wikipedia.org';
// pour modifier une classe on utilisera className (class etant un mot reservé en Javascript)
// document.querySelector('.para').className = 'para1';


// let exempleArray = ['A', 'B', 'C']



// for (let index = 0; index < exempleArray.length; index++) {
// console.log(exempleArray[index])
// }


// Là , on execute cette commande pour
// afficher la suite de Fibonacci et que le dernier 
// resultat soit inferieur à 50
// let fibo = [0, 1, 1]
// for(i = 1; fibo[i+1]+fibo[i] < 50;i++){
//     fibo.push(fibo[i+1] + fibo[i])
// }
// console.log(fibo)

// let input = document.querySelector('#email')
// console.log(input)


