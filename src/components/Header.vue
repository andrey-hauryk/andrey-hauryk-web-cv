<template>
  <header class="header">
    <div class="left">Andrey Hauryk</div>
    <nav class="right">
      <button class="nav-button">Home</button>
    </nav>
  </header>
</template>

<script setup lang="ts"></script>

<style scoped>
.header {
  background-color: #333; /* Темный фон */
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
}

.left {
  font-size: 1.5rem;
  font-weight: bold;
}

.right {
  display: flex;
}

.nav-button {
  background-color: transparent;
  border: none;
  color: white;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  margin-left: 1rem;
  cursor: pointer;
}

.nav-button:hover {
  background-color: #555; /* Затемнение при наведении */
}
</style>