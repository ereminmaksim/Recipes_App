export const BASE_URL = 'https://api.spoonacular.com/recipes/random?apiKey'
export const BASE_URL_SEARCH = 'https://api.spoonacular.com/recipes/complexSearch?apiKey'
export const BASE_URL_DETAILS = 'https://api.spoonacular.com/recipes/'


export const requests = {
    fetchPopular: `${BASE_URL}=${process.env.REACT_APP_API_KEY}&number=9&tags=european`,
    fetchVegetarian: `${BASE_URL}=${process.env.REACT_APP_API_KEY}&number=9&tags=vegetarian`,
    fetchSearch: `${BASE_URL_SEARCH}=${process.env.REACT_APP_API_KEY}`,
}
