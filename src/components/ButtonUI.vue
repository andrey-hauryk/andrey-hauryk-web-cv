<template>
  <div class="button">{{$t('message.resume')}}</div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.button {
  width: 80%;
  max-width: 250px;
  height: 50px;
  background: transparent;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: white;
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  box-shadow: 0 4px 6px rgba($color-secondary, 0.3);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.button:hover {
  transform: scale(1.05);
  box-shadow: 0 6px 12px rgba($color-secondary, 0.4);
}

.button:before,
.button:after {
  content: '';
  position: absolute;
  width: 0;
  height: 0;
  border: 1px solid $color-secondary;
  transition: all 0.5s ease;
}

.button:before {
  top: 0;
  left: 0;
  width: 45%;
  border-top-color: $color-secondary;
  border-right-color: $color-secondary;
}

.button:after {
  bottom: 0;
  right: 0;
  width: 45%;
  border-bottom-color: $color-secondary;
  border-left-color: $color-secondary;
}

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
    height: 70%;
    opacity: 1;
  }
}
</style>