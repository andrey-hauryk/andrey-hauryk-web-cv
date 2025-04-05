<template>
  <SectionLayout>
    <div class="project">
      <div class="project__logo">
        <img class="project__logo-img" src="../assets/nature.webp" />

        <div class="project__overlay">
          <h3>{{ projects[0].name }}</h3>
          <p>{{ projects[0].description }}</p>
        </div>

        <CardUI
          v-for="project in projects"
          :key="project.id"
          :project="project"
          class="project-card"
        />
      </div>
    </div>
  </SectionLayout>
</template>


<script setup lang="ts">
import CardUI from '../components/CardUI.vue';
import { projects } from '../data/projects';
import SectionLayout from '../layouts/SectionLayout.vue';
</script>

<style scoped lang="scss">
.project {
  padding: 1.5rem;
  border: 1px solid white;

  &__logo {
    position: relative;

    &-img {
      width: 60%;
      height: 350px;
      object-fit: cover;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      border-radius: 8px;
    }

    .project__overlay {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 60%;
      background: rgba(0, 0, 0, 0.6); // полупрозрачный тёмный фон
      color: #fff;
      padding: 1rem;
      border-bottom-left-radius: 8px;
      border-bottom-right-radius: 8px;

      h3 {
        margin: 0;
        font-size: 1.2rem;
      }

      p {
        margin: 0.2rem 0 0;
        font-size: 0.9rem;
        color: #ddd;
      }
    }

    .project-card {
      position: absolute;
      top: 95%;
      left: 75%;
      transform: translate(-50%, -50%);
      z-index: 1;
      width: 50%;
      background-color: #fff;
      padding: 1.5rem;
      border-radius: 8px;
      box-shadow: 0 6px 12px rgba(0, 0, 0, 0.4);
      transition: box-shadow 0.3s ease, transform 0.3s ease;
    }
  }

  .project__logo-img:hover {
    transform: scale(1.1);
    box-shadow: 0 0 15px rgba(0, 255, 255, 0.5);
  }

  .project-card:hover {
    transform: translate(-50%, -50%) scale(1.05);
    box-shadow: 0 8px 16px rgba(0, 255, 255, 0.6);
  }
}

</style>