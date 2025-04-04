<template>
  <header class="header">
    <div class="header__navigation"></div>
    <div class="header__title">
      <h1 class="cover-text header__title-text">Andrey Hauryk</h1>
    </div>
    <div class="header__links">
      <a href="https://github.com/your-github" target="_blank" class="social-link">
        <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/Octicons-mark-github.svg" alt="GitHub" class="social-icon" />
      </a>
      <a href="mailto:your-email@example.com" class="social-link">
        <img src="https://upload.wikimedia.org/wikipedia/commons/5/5f/Google_Contacts_logo.png" alt="Gmail" class="social-icon" />
      </a>
      <a href="https://www.linkedin.com/in/your-linkedin" target="_blank" class="social-link">
        <img src="https://upload.wikimedia.org/wikipedia/commons/0/01/LinkedIn_Logo_2023.png" alt="LinkedIn" class="social-icon" />
      </a>
    </div>
  </header>
</template>

<script setup lang="ts"></script>

<style scoped>
.header {
  background-color: transparent;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid white;
  padding: 10px;
}

.header__title {
  font-size: 1rem;
  width: 30%;
  text-align: center;
}

.header__title-text {
  font-size: 32px;
  font-weight: bold;
  color: #fff;
  text-align: center;
  padding: 20px;
  text-transform: uppercase;
  position: relative;

  text-shadow: 
    0 4px 6px rgba(0, 0, 0, 0.5),
    0 1px 3px rgba(0, 0, 0, 0.3),
    0 1px 2px rgba(0, 0, 0, 0.1);
}

.header__navigation {
  width: 30%;
}

.header__links {
  width: 30%;
  display: flex;
  justify-content: flex-end;
}

.social-link {
  margin-left: 15px;
  display: inline-block;
}

.social-icon {
  width: 24px;
  height: 24px;
  transition: transform 0.3s;
}

.social-icon:hover {
  transform: scale(1.1);
}
</style>
