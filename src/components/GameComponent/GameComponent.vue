<script setup>
import { ref, reactive, computed, onMounted } from "vue";

const sizeX = ref(10);
const sizeY = ref(10);

const grid = reactive([]);
const squareSize = 36;

const drawGrid = () => {
  grid.length = 0;

  for (let i = 0; i < sizeY.value; i++) {
    const row = [];
    for (let j = 0; j < sizeX.value; j++) {
      row.push({
        color: "white"
      });
    }
    grid.push(row);
  }
};

const gridWidth = computed(() => `${sizeX.value * squareSize}px`);
const gridHeight = computed(() => `${sizeY.value * squareSize}px`);

const toggleColor = (rowIndex, colIndex) => {
  const square = grid[rowIndex][colIndex];
  const squareColorCondition = square.color === "white" ? "blue" : "white";
  square.color = squareColorCondition;
};

onMounted(drawGrid);
</script>

<template>
  <v-container class="bg-black h-auto game-container" fluid>
    <v-row justify="center">
      <v-col cols="auto">
        <v-text-field
            v-model.number="sizeX"
            label="Size X"
            type="number"
            min="1"
            @input="drawGrid"
        ></v-text-field>
      </v-col>
      <v-col cols="auto">
        <v-text-field
            v-model.number="sizeY"
            label="Size Y"
            type="number"
            min="1"
            @input="drawGrid"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="auto">
        <v-sheet
            class="d-flex flex-wrap justify-start"
            :style="{ width: gridWidth, height: gridHeight }"
        >
          <div
              v-for="(row, rowIndex) in grid"
              :key="rowIndex"
              class="grid-row"
          >
            <div
                v-for="(col, colIndex) in row"
                :key="colIndex"
                class="grid-square"
                :style="{ backgroundColor: col.color }"
                @mouseover="toggleColor(rowIndex, colIndex)"
            ></div>
          </div>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>

.game-container {
  min-height: 100vh;
}

.grid-row {
  display: flex;
}

.grid-square {
  width: 36px;
  height: 36px;
  border: 1px solid #ccc;
  box-sizing: border-box;
  transition: background-color 0.3s ease;
}
</style>
