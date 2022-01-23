import axios from 'axios';

export function getRecipes(context) {
    const api = 'https://api.spoonacular.com/recipes/complexSearch';
    return new Promise((resolve, reject) => {
        let params = {
            apiKey: context.state.apiKey,
            query: context.state.query || '',
            number: 9,
            diet: context.state.vegan ? "vegan" : "vegetarian",
            addRecipeInformation:true,
            maxReadyTime: context.state.inAHurry ? 20 : 45,
            intolerance: context.state.glutenFree ? "gluten" : ""
        }
        axios.get( api, {
            headers: { 
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            params: params
        })
        .then((response) => {
            if(response.data.results.length){
                context.commit( 'setShowingRecipes', true )
                context.commit( 'setRecipes', response.data.results )
                resolve(true)
            } else {
                context.commit('setShowingRecipes', false)
                context.dispatch('getRecipesPlanB')
                .then((response) => {
                    if(!response) reject(false)
                    resolve(true)   
                })
                .catch( (err) => {
                    reject(err)
                });
            }
        }).catch( (err) => {
            reject(err)
        });
        
    });
}

export function getRecipesPlanB(context) {
    console.log('going with plan b')
    return new Promise( (resolve, reject) => {
        const api = 'https://api.spoonacular.com/recipes/random';
        let params = {
            apiKey: context.state.apiKey,
            tags: "vegetarian",
            number: 12,
            addRecipeInformation:true,
            maxReadyTime: 45,
        }
        axios.get(api, {
            headers: { 
                "Content-Type": "application/json",
                "Accept":"application/json"
            },
            params: params
        })
        .then((response) => {
            if(response.data.recipes.length){
                context.commit('setShowingRandomRecipes', true)
                context.commit('setRecipes', response.data.recipes)
                resolve(true)
            }
        }).catch((err) => {
            reject(err)
        });
        
    });
}
