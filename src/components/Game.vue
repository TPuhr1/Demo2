<script setup>
import { ref, computed } from 'vue'

const player = ref('X');
const board = ref ([
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
])

const CalculateWinner = (squares) => {
    // win conditions
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    // checking for win conditions
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        // checks the value in the lines to see if they match
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c])
        {
            // if they do then it returns the winning player
            return squares[a];
        }
    }
    // if not it returns null
    return null;
}

// computes the winner using the CalculateWinner function and uses the flat value to read 0-8
const winner = computed(() => CalculateWinner(board.value.flat()))

const MakeMove = (x, y) => {
    // checks for a winner
    if (winner.value) return
    // checks to make sure the spot is open
    if (board.value[x][y] !== '') return
    // sets the square to the players value, X or O
    board.value[x][y] = player.value
    // changes the player after the move
    player.value = player.value === 'X' ? 'O' : 'X'
}

// resets the game board to it's original state
const ResetGame = () => {
    board.value = [
        ['', '', ''],
        ['', '', ''],
        ['', '', ''],
    ]
    // resets player to X
    player.value = 'X'
}
</script>

<template>
  <main class="pt-8 text-center bg-rgb-241-245-249 min-h-screen text-black">
    <h1 calss="mb-8 text-3xl font-bold uppercase">Tic Tac Toe</h1>

    <h3 class="text-xl mb-4">Player {{ player }}'s turn</h3>

    <div class="flex flex-col items-center mb-8">
        <div
            v-for="(row, x) in board"
            :key="x"
            class="flex">

            <div 
                v-for="(cell, y) in row" 
                :key="y" 
                @click="MakeMove(x,y)"
                :class="`border border-black w-20 h-20 hover:bg-gray-600 flex 
                items-center justify-center material-icons-outlined text-4xl
                cursor-pointer ${ cell === 'X' ? 'text-green-500' :
                'text-blue-400'}`">
                {{ cell === 'X' ? 'close' : cell === 'O' ? 'circle': '' }}
            </div>

        </div>
    </div>

    <h2 v-if="winner" class="text-6xl font-bold mb-8">Player '{{winner}}' wins!</h2>

    <button @click="ResetGame" class="px-4 py-2 bg-green-500 rounded uppercase
    font-bold hover:bg-green-600 duration-300">Reset Game</button>
  </main>
</template>

<style>

</style>