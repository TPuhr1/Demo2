import { defineStore } from 'pinia'

export const productStore = defineStore('products', {
    state: () => ({
        products: []
    }),

    actions: {
        fetchProducts() {
            fetch('@/src/assets/data/data.js')
            .then(res => res.json())
            .then(json => {
                this.products = json.products;
            });
        }
    }
})