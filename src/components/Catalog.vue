<script setup>
    import { defineComponent } from 'vue';
    import { onMounted } from 'vue';
    import { productStore } from '@/plugins/store'
    import Data from '@/assets/data/data.json'
    // Sets up my pinia store 
    const store = productStore()
    // Runs when the page is loaded
    onMounted(async () => {
        // Sets the products in the store to the data from data.json
        store.products = Data;
        // Console message to show that this part of the process was completed
        console.log('Mounted >>>>>', store.products)
    })
</script>
<!-- Page layout including the title and list of products -->
<template>
    <div class="title"><img class="align-center" src="../assets/puhr-sports-high-resolution-logo-transparent-small.png" alt="Puhr Sports Logo">Welcom to Puhr Sports Disc Store!
        <div class="product-list">
            <div
                class="product"
                v-for="product in store.products"
                :key="product.id">
                <img class="product-item" :src="product.img" alt="Disc Image">
                <h2>Disc: {{ product.name }} </h2>
                <p>Type: {{ product.type }} </p>
                <p>Price: {{ product.price }} </p>
            </div> 
        </div>
    </div>
</template>
<!-- Styling for my page -->
<style lang="scss" scoped>
.product-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 10px;
    width: 100%;
    height: 15%;
    transition: margin-left 0.3s ease-out, width 0.3s ease-out;
} 
.product {
    flex-basis: 15%;
    margin: 8px;
    padding: 10px;
    box-shadow: 0px 0px 14px 1px #e6e6e6;
    font-size: 20px;

    &:hover {
        color: var(--primary);
        cursor: pointer;
    }
}
.product-item {
    width: 100%;
}
.title {
    text-align: center;
    font-size: 50px;
    font-display: bold;
}
</style>