<template>
  <header class="header">
    <div class="header__content">
      <nav class="header__navigation" aria-label="Main Navigation">
        <ul class="nav-list">
          <li class="nav-link" @click="handleSetActiveSection('portfolio')">{{$t('message.portfolio')}}</li>
          <li class="nav-link" @click="handleSetActiveSection('experience')">{{$t('message.experience')}}</li>
          <li class="nav-link" @click="handleSetActiveSection('projects')">{{$t('message.projects')}}</li>
        </ul>
      </nav>

      <div class="header__title">
        <h1 class="header__title-text">{{activeSection}}</h1>
      </div>

      <div class="header__links" aria-label="Social Media Links">
        <a 
          :href="GITHUB_URL" 
          target="_blank" 
          rel="noopener noreferrer" 
          class="social-link"
          aria-label="GitHub"
        >
          <img src="../assets/github.svg" alt="GitHub icon" class="social-icon" />
        </a>
        <a 
          :href="EMAIL"
          class="social-link"
          aria-label="Email"
        >
          <img src="../assets/gmail.svg" alt="Gmail icon" class="social-icon" />
        </a>
        <a 
          :href="LINKEDIN_URL"
          target="_blank"
          rel="noopener noreferrer"
          class="social-link"
          aria-label="LinkedIn"
        >
          <img src="../assets/linkedin.svg" alt="LinkedIn icon" class="social-icon" />
        </a>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import type {Section} from '../types/activeSectionTypes';

defineProps<{
  activeSection: Section;
}>();

const emit = defineEmits<{
  (event: 'setActiveSection', section: Section): void;
}>();

const GITHUB_URL = import.meta.env.VITE_GITHUB_URL;
const LINKEDIN_URL = import.meta.env.VITE_LINKEDIN_URL;
const EMAIL = import.meta.env.VITE_EMAIL;


const handleSetActiveSection = (section: Section) => {
  emit('setActiveSection', section);
}

</script>

<style scoped lang="scss">
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  max-width: 100vw;
  background-color: transparent;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  height: 10%;
  z-index: 1000;

  &__content {
    width: 100%;
    display: flex;
    align-items: center;
    padding: 2% 6%;
    justify-content: space-between;
  }

  &__navigation {
    width: 30%;
  }

  &__title {
    text-align: center;
    width: 30%;
    &-text {
      font-size: 1.4rem;
      font-weight: bold;
      text-transform: uppercase;
      text-shadow:
        0 4px 6px rgba(0, 0, 0, 0.5),
        0 1px 3px rgba(0, 0, 0, 0.3),
        0 1px 2px rgba(0, 0, 0, 0.1);
    
      animation: glow 3s ease-in-out infinite, colorShift 6s linear infinite;
    
      transition: color 0.3s ease;
      
    }
  }

  &__links {
    width: 30%;
    display: flex;
    justify-content: flex-end;
    gap: 1rem;
  }
}

.nav {
  &-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    gap: 1rem;
  }

  &-link {
    color: white;
    text-decoration: none;
    font-size: 1rem;
    font-weight: 500;
    transition: color 0.3s;
    cursor: pointer;

    &:hover {
      color: #00ffff;
      outline: none;
    }
  }
}

.social {
  &-link {
    display: inline-flex;
    width: 24px;
    height: 24px;
  }

  &-icon {
    width: 100%;
    height: 100%;
    transition: transform 0.3s ease;
    &:hover {
      transform: scale(1.1);
    }
  }
}


@keyframes glow {
  0% {
    text-shadow: 0 0 5px #00d4ff, 0 0 10px #9b59b6, 0 0 15px #00d4ff;
  }
  50% {
    text-shadow: 0 0 20px #00d4ff, 0 0 30px #9b59b6, 0 0 30px #00d4ff;
  }
  100% {
    text-shadow: 0 0 5px #00d4ff, 0 0 10px #9b59b6, 0 0 15px #00d4ff;
  }
}
</style>
