<script setup>
import { ref } from 'vue'
// Creating a variable to hold the true/false value of is_expanded from local storage
const is_expanded = ref(localStorage.getItem("is_expanded") === "true")
// This toggles the is_expanded value from true <-> false
const ToggleMenu = () => {
    is_expanded.value = !is_expanded.value
    // Then saves the change to local storage
    localStorage.setItem("is_expanded", is_expanded.value)
}
</script>
<!-- Template for my page layout -->
<template>
    <!-- Aside is the sidebar element and is_expanded is applied if the value is true -->
  <aside :class="`${is_expanded && 'is-expanded'}`">
    <div class="logo">
        <img src="../assets/monogram-hq.png" alt="Puhr Sports">
    </div>

    <div class="menu-toggle-wrap">
        <button class="menu-toggle">
            <!-- On click the arrows toggle the sidebar in or out -->
            <span class="material-icons" @click="ToggleMenu">keyboard_double_arrow_right</span>
        </button>
    </div>
    <!-- My menu options on the sidebar -->
    <h3>Menu</h3>
    <div class="menu">
        <router-link class="button" to="/">
            <span class="material-icons">home</span>
            <span class="text">Home</span>
        </router-link>
        <router-link class="button" to="/about">
            <span class="material-icons">visibility</span>
            <span class="text">About</span>
        </router-link>
        <router-link class="button" to="/game">
            <span class="material-icons">sports_esports</span>
            <span class="text">Game</span>
        </router-link>
        <router-link class="button" to="/catalog">
            <span class="material-icons">store</span>
            <span class="text">Disc Store</span>
        </router-link>
        <router-link class="button" to="/contact">
            <span class="material-icons">email</span>
            <span class="text">Contact</span>
        </router-link>
    </div>
    <!-- This is added  to move the last option Setting to the bottom of the sidebar -->
    <div class="flex"></div>

    <div class="menu">
        <router-link class="button" to="/settings">
            <span class="material-icons">settings</span>
            <span class="text">Settings</span>
        </router-link>
    </div>

  </aside>
</template>
<!-- Styling for my sidebar -->
<style lang="scss" scoped>
aside {
    display: flex;
    flex-direction: column;
    width: calc(2rem + 32px);
    min-height: 100vh;
    overflow: hidden;
    padding: 1rem;
    background-color: var(--dark);
    color: var(--light);
    transition: 0.2s ease-out;

    .flex {
        flex: 1 1 0;
    }

    @media (max-width: 768px) {
        position: fixed;
        z-index: 99;
    }

    .logo {
        margin-bottom: 1rem;

        img {
            width: 2rem;
        }
    }

    &.is-expanded {
        width: var(--sidebar-width);

        .menu-toggle-wrap {
            top: -3rem;

            .menu-toggle {
                transform: rotate(-180deg);
            }
        }

        h3, .button .text {
            opacity: 1;
        }

        .button {
            .material-icons {
                margin-right: 1rem;
            }
        }
    }

    .menu-toggle-wrap {
        display: flex;
        justify-content: flex-end;
        margin-bottom: 1rem;
        position: relative;
        top: 0;
        transition: 0.2s ease-out;

        .menu-toggle {
            transition: 0.2s ease-out;

            .material-icons {
            font-size: 2rem;
            color: var(--light);
            transition: 0.2s ease-out;
            }

            &:hover {
                .material-icons {
                    color: var(--primary);
                    transform: translateX(0.5rem);
                }
            }
        }
    }

    h3, .button .text {
        opacity: 0;
        transition: 0.3s ease-out;
    }

    h3 {
        color: var(--grey);
        font-size: 0.875rem;
        margin-bottom: 0.5rem;
        text-transform: uppercase;
    }

    .menu {
        margin: 0 -1rem;

        .button {
            display: flex;
            align-items: center;
            text-decoration: none;
            padding: 0.5rem 1rem;
            transition: 0.2s ease-out;

            .material-icons {
                font-size: 2rem;
                color: var(--light);
                transition: 0.2s ease-out;
            }

            .text {
                color: var(--light);
                transition: 0.2s ease-out;
            }

            &:hover, &.router-link-exact-active{
                background-color: var(--dark-alt);

                .material-icons, .text {
                    color: var(--primary)
                }
            }

            &.router-link-exact-active {
                border-right: 5px solid var(--primary);
            }
        }

    }
}
</style>