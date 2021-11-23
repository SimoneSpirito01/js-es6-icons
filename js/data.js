const cards = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];

// popolo un'array con le option da aggiungere al select
let value = ['all'];
cards.forEach(element => {
	if (!(value.includes(element.type))){
		value.push(element.type);
	}
});

// genero le option dinamicamente
const select = document.querySelector('select');
value.forEach(element => {
	let option = 
	`
	<option value="${element}">${element}</option>
	`
	select.innerHTML += option;
})


// genero un colore random
const randomColor = () => {
	let char = '#';
	const array = [1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
	for (let i = 0; i < 6; i++){
		x = Math.floor(Math.random() * 15);
		char += array[x];
	}
	return char;
}

// creo le card
const addCard = (element => {
	element.color = randomColor();
	let card = 
	`
	<div class="card">
		<i style="color:${element.color}"class="${element.family} ${element.prefix}${element.name}"></i>
		<span>${element.name}</span>
    </div>
	`
	document.querySelector('.container').innerHTML += card;
})


cards.forEach(addCard);

// al change del select value, modifico le card stampate
select.addEventListener('change', function(){
	document.querySelector('.container').innerHTML = '';
	let fCards = cards.filter(card => {
		if (this.value == 'all'){
			return true
		} else {
			return card.type == this.value;
		}
	});
	fCards.forEach(addCard);
})




