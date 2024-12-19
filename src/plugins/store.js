import { defineStore } from 'pinia'
// Defining the store as productStore
export const productStore = defineStore('products', {
    // Defining the state of the store with a products object
    state: () => ({
        // This object is initially empty
        products: []
    }),
    // Defining the actions of the store
    actions: {
        fetchProducts() {
            // Gets the data from data.js
            fetch('@/src/assets/data/data.js')
            // Converts the data into json format
            .then(res => res.json())
            // The parsed json data is saved into the products array
            .then(json => {
                this.products = json.products;
            });
        }
    }
})