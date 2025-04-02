<template>
  <Header></Header>
  <section class="content">
    <div class="profile-container">
      <div class="avatar">
        <img src="../assets//avatar.jpeg" alt="Andrey Hauryk Avatar">
      </div>
      <h1 class="name">Andrey Hauryk</h1>
      <p class="description">Software Engineer experienced in Full-Stack Web</p>
      <button class="resume-button" @click="handleClick">
        <span class="button-text">Скачать резюме</span>
        <span class="icon">&#8681;</span> 
      </button>
    </div>
  </section>
</template>

<script setup lang="ts">
import Header from '../components/Header.vue';

const handleClick = () => {
  window.open('/resume.pdf', '_blank');
}

</script>

<style scoped>
.content {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}

.profile-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.avatar {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: 20px;
}

.avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.name {
  font-size: 2em;
  margin-bottom: 10px;
  color: white;
}

.description {
  font-size: 1.2em;
  margin-bottom: 20px;
  color: white;
}

.resume-button {
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
}

.resume-button .icon {
  margin-left: 10px;
}
</style>