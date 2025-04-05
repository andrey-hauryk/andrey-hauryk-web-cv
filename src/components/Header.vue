<template>
  <header class="header">
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
      <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer" class="social-link" aria-label="GitHub">
        <img src="../assets/github.svg" alt="GitHub icon" class="social-icon" />
      </a>
      <a href="mailto:your-email@example.com" class="social-link" aria-label="Email">
        <img src="../assets/gmail.svg" alt="Gmail icon" class="social-icon" />
      </a>
      <a href="https://linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer" class="social-link" aria-label="LinkedIn">
        <img src="../assets/linkedin.svg" alt="LinkedIn icon" class="social-icon" />
      </a>
    </div>
  </header>
</template>

<script setup lang="ts">
defineProps<{
  activeSection: string;
}>();

const emit = defineEmits<{
  (event: 'setActiveSection', section: string): void;
}>();

const handleSetActiveSection = (section: string) => {
  emit('setActiveSection', section);
}

</script>

<style scoped lang="scss">
.header {
  background-color: transparent;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  height: 10%;

  &__navigation {
    width: 30%;
  }

  &__title {
    text-align: center;
    width: 30%;
    &-text {
      font-size: 1.2rem;
      font-weight: bold;
      text-transform: uppercase;
      text-shadow:
        0 4px 6px rgba(0, 0, 0, 0.5),
        0 1px 3px rgba(0, 0, 0, 0.3),
        0 1px 2px rgba(0, 0, 0, 0.1);
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
</style>
