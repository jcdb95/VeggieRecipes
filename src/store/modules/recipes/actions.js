// import { setTimeout } from 'core-js';
import axios from 'axios';
// import test_results from './TestResult.json';

export function getRecipes(context) {
    return new Promise((resolve, reject) => {
        const api = 'https://api.spoonacular.com/recipes/complexSearch';
        let params = {
            apiKey: context.state.apiKey,
            query:context.state.query || '',
            number: 9,
            diet: context.state.vegan ? "vegan" : "vegetarian",
            addRecipeInformation:true,
            maxReadyTime: context.state.inAHurry ? 20 : 45,
            intolerance: context.state.glutenFree ? "gluten" : ""
        }
        axios.get(api, {
            headers: { 
                "Content-Type": "application/json",
                "Accept":"application/json"
            },
            params: params
        })
        .then((response) => {
            if(response.data.results.length){
                context.commit('setRecipes', response.data.results)
                // context.commit('clearFields')
                resolve(true)
            } else {
                console.log("Going with plan B")
                context.dispatch('getRecipesPlanB')
                .then((response) => {
                    if(!response) reject(false)
                    resolve(true)   
                }).catch((err) => {
                    reject(err)
                });
            }
        }).catch((err) => {
            reject(err)
        });
        
    });
}

export function getRecipesPlanB(context) {
    return new Promise((resolve, reject) => {
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
                context.commit('setRecipes', response.data.recipes)
                // context.commit('clearFields')
                resolve(true)
            }
        }).catch((err) => {
            reject(err)
        });
        
    });
}
