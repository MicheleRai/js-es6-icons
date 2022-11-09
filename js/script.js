/*Milestone 1
Partendo dalla struttura dati fornita, visualizzare in pagina un box per ogni icona, in cui è presente il nome dell'icona e l'icona stessa.
Milestone 2
Ciascuna icona ha una proprietà "color": utilizzare questa proprietà per visualizzare le icone del colore corrispondente.
Milestone 3
Aggiungere alla pagina una select in cui le options corrispondono ai vari tipi di icone (animal, vegetable, user). Quando l'utente seleziona un tipo dalla select, visualizzare solamente le icone corrispondenti.
BONUS
1- modificare la struttura dati fornita e valorizzare la proprietà "color" in modo dinamico: generare in modo casuale un codice colore, sapendo che la notazione esadecimale è formata dal simbolo "#" seguito da 6 caratteri alfanumerici compresi tra 0 e 9 e A e F.
2- popolare le options della select della milestone 3 dinamicamente.
Consigli del giorno
Come sempre, iniziamo prima di tutto dall'analisi e comprensione della consegna. Scomponiamo il problema in micro-passaggi logici che solamente in un secondo momento trasformeremo in codice.
Le icone presenti nella struttura dati fanno riferimento alla nota libreria Font Awesome, perciò come prima cosa assicuriamoci di aver inserito il link alla cdn nell'head della pagina.
Dopodiché, basandoci sul codice di riferimento nel sito di Font Awesome, analizziamo come è formato il tag <i> di un'icona qualsiasi, in particolare focalizziamoci sulle classi.
Come possiamo usare i dati presenti nella nostra struttura dati per creare l'elemento html nel modo corretto e visualizzare l'icona in pagina?
Inizialmente può essere sufficiente stampare dei semplici div, senza alcuno stile, con all'interno l'icona e uno span con il nome. Solamente quando la parte logica è completa, ci dedichiamo al css.*/

const arrIcon = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fa-solid',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fa-solid',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fa-solid',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fa-solid',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fa-solid',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fa-solid',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fa-solid',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fa-solid',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fa-solid',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fa-solid',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fa-solid',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fa-solid',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fa-solid',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fa-solid',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fa-solid',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fa-solid',
		color: 'blue'
	}
];

const eleIconContainer = document.querySelector('.icon-container');
const arrAnimal = [], arrVegetable = [], arrUser = [];


for (let i = 0; i < arrIcon.length; i++) {
	const objIcon = arrIcon[i];
    const eleCard = document.createElement('div');
	const eleIcon = document.createElement('div');
    const eleText = document.createElement('h2');
    eleCard.classList.add('card')
    eleCard.classList.add(`${objIcon.type}`)
	eleIcon.classList.add('box-icon'); 
	eleIcon.innerHTML = `<i class="${objIcon.family} ${objIcon.prefix}${objIcon.name}"></i>`;
    eleText.innerHTML =`${objIcon.name}`;
    eleIcon.style.color = `${objIcon.color}`;
    eleIconContainer.append(eleCard);
	eleCard.append(eleIcon);
    eleCard.append(eleText);
}

arrIcon.forEach(objIcon => {
	switch (objIcon.type) {
		case 'animal':
			arrAnimal.push(objIcon);
			break;
		case 'vegetable':
			arrVegetable.push(objIcon);
			break;
		default:
			arrUser.push(objIcon);
			break;
	}
})
console.table(arrAnimal);
console.table(arrVegetable);
console.table(arrUser);


// let ser = document.getElementById("tipo")
// function serachIcon() {
//     let searchI = ser.value;
//     console.log(searchI);
// }
// ser.serachicon = serachIcon;
// serachIcon()

function searchIcon() {
    selectElement = document.querySelector('#tipo');
    seleValue = selectElement.value;
    console.log(seleValue);
    const animal = document.querySelector('.animal')
    const vegetable = document.querySelector('.vegetable')
    const user = document.querySelector('.user')
    if (seleValue == animal) {
        animal.classList.remove('none')
        vegetable.classList.add('none')
        user.classList.add('none')
     }else if (seleValue == vegetable) {
            vegetable.classList.remove('none')
            animal.classList.add('none')
            user.classList.add('none')
        }else if  (seleValue == user) {
                user.classList.remove('none')
                vegetable.classList.add('none')
                animal.classList.add('none')
            } else {
                    animal.classList.remove('none')
                    vegetable.classList.remove('none')
                    user.classList.remove('none')
    } 
}
const eleBtnSearch = document.querySelector('#btn-search');

eleBtnSearch.addEventListener('click', function() {
    searchIcon()
});