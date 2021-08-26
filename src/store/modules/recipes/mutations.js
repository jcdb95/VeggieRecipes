export function setRecipes (state, data) {
	state.recipes = data;
}

export function setQuery (state, data) {
	state.query = data;
}

export function setGlutenFree (state, data) {
	state.glutenFree = data;
}

export function setVegan (state, data) {
	state.vegan = data;
}

export function setInAHurry (state, data) {
	state.inAHurry = data;
}

export function clearFields (state) {
	state.vegan = false
	state.glutenFree = false
	state.inAHurry = false
	state.query = ''
}

export function showingModal (state, data) {
	state.showingModal = data
}

export function setEmail (state, data){
	state.email = data
}

