<template>
  <div class="button">Resume</div>
</template>

<script setup lang="ts">
// Здесь можно добавить логику если нужно
</script>

<style scoped>
.button {
  width: 80%; /* Адаптивная ширина */
  max-width: 250px; /* Максимальная ширина */
  height: 50px;
  background: black;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: white;
  font-size: 1rem; /* Размер шрифта адаптируется */
  text-transform: uppercase;
  letter-spacing: 1px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3); /* Добавлено тень */
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease; /* Плавные переходы */
}

/* Анимация границ при наведении */
.button:hover {
  transform: scale(1.05); /* Увеличение кнопки при наведении */
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.4); /* Усиление тени */
}

.button:before,
.button:after {
  content: '';
  position: absolute;
  width: 0;
  height: 0;
  border: 2px solid transparent;
  transition: all 0.5s ease; /* Плавная анимация */
}

.button:before {
  top: 0;
  left: 0;
  border-top-color: white;
  border-right-color: white;
}

.button:after {
  bottom: 0;
  right: 0;
  border-bottom-color: white;
  border-left-color: white;
}

/* Анимация границ при наведении */
.button:hover:before,
.button:hover:after {
  width: 100%;
  height: 100%;
}

@keyframes border-top-right {
  0% {
    width: 0;
    height: 0;
  }
  25% {
    width: 100%;
    height: 0;
  }
  50% {
    width: 100%;
    height: 100%;
  }
  100% {
    width: 100%;
    height: 100%;
  }
}

@keyframes border-bottom-left {
  0% {
    width: 0;
    height: 0;
    opacity: 0;
  }
  50% {
    width: 0;
    height: 0;
    opacity: 0;
  }
  50.1% {
    width: 0;
    height: 0;
    opacity: 1;
  }
  75% {
    width: 100%;
    height: 0;
    opacity: 1;
  }
  100% {
    width: 100%;
    height: 100%;
    opacity: 1;
  }
}
</style>