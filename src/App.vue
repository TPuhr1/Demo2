<script setup>
import { RouterView } from 'vue-router'
import SideBar from './components/SideBar.vue'
</script>
<!-- Template for this page  -->
<template>
  <div class="app">
    <SideBar />
    <router-view />
  </div>
</template>
<!-- Styling for the app -->
<style lang="scss">
// Creating variables I can use throughout the app
:root {
  --primary: #4ade80;
  --grey: #64748b;
  --dark: #1e293b;
  --dark-alt: #334155;
  --dark-3: #2d3847;
  --light: #f1f5f9;
  --sidebar-width: 300px;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Fira sans', sans-serif;
}

body {
  background: var(--light);
}

button {
  cursor: pointer;
  appearance: none;
  border: none;
  outline: none;
  background: none;
}

.app {
  display: flex;
  background-color:#64748b;

  main {
    flex: 1 1 0;
    padding: 2rem;

    @media (max-width: 768px) {
      padding-left: 6rem;
    }
  }
}
</style>