$(function () {
	console.log("javascript is working");
	listenForClickMyRecipes();
	// listenForClickNewRecipe();
	// listenForClickShowRecipe();
	listenForClickAllRecipes();
})

function listenForClickMyRecipes() {
	let asdf = document.getElementById('myrecipes')
	asdf.addEventListener('click', function (e) {
		e.preventDefault()
		console.log("we clicked my recipes link");
	})
}

function listenForClickAllRecipes() {
	let zxcv = document.getElementById('allrecipes')
	zxcv.addEventListener('click', function (e) {
		e.preventDefault()

		let url = this.attributes.href.textContent


		$.ajax({
			url: url,
			type: 'get',
			dataType: 'json'
		}).done(response => {
			console.log("response.............: ", response)
			// DOM won't take JSON directly

			// class Recipe {
			// 	constructor(obj) {
			// 		this.name = obj.name,
			// 			this.description = obj.description
			// 	}
			// }

			let recipe = {
				id: response[0].id,
				name: response[0].name,
				description: response[0].description,
			}

			let customHTML = (`
					<div id=${recipe.id}>${recipe.name}</div>
					<div>${recipe.description}</div>
				`)

			// document.getElementById('recipes-display').innerHTML = customHTML
			document.querySelector('div.recipe').innerHTML = customHTML

		})
	})
}