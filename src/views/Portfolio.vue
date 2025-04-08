<template>
  <SectionLayout>
    <div class="profile__container">
      <h1 class="profile__name">Andrey Hauryk</h1>
      <p class="profile__description">Software Engineer experienced in Full-Stack Web</p>
      <div class="profile__avatar" role="img" aria-label="Andrey Hauryk Avatar">
        <img src="../assets/avatar.jpeg" alt="Andrey Hauryk avatar" />
      </div>
      <ButtonUI class="profile__button" />
    </div>
  </SectionLayout>
</template>

<script setup lang="ts">
import ButtonUI from '../components/ButtonUI.vue';
import SectionLayout from '../layouts/SectionLayout.vue';
</script>

<style scoped lang="scss">
@use 'sass:math';

@mixin fadeInUp($duration: 0.3s, $delay: 0s) {
  opacity: 0;
  animation: fadeInUp $duration ease-in-out $delay forwards;
}

.profile {
  display: flex;
  justify-content: center;
  margin-top: 6rem;
  width: 100%;
  animation: fadeIn 1s ease-in-out forwards;

  &__container {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    @include fadeInUp(1.5s, 0.2s);
  }

  &__avatar {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    overflow: hidden;
    margin-bottom: 1.5rem;
    border: 4px solid #fff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2), 0 6px 20px rgba(0, 0, 0, 0.3);
    @include fadeInUp(1.5s, 0.4s);

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }
  }

  &__name {
    font-size: 2rem;
    margin-bottom: 0.5rem;
    color: #fff;
    @include fadeInUp(1.5s, 0.6s);
  }

  &__description {
    font-size: 1.2rem;
    margin-bottom: 1.5rem;
    color: #fff;
    @include fadeInUp(1.5s, 0.8s);
  }

  &__button {
    @include fadeInUp(1.5s, 1s);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
