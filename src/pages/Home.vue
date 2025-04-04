<template>
  <!-- <Header></Header> -->
  <section class="content">
    <div class="profile-container">
      <div class="avatar">
        <img src="../assets//avatar.jpeg" alt="Andrey Hauryk Avatar">
      </div>
      <h1 class="name">Andrey Hauryk</h1>
      <p class="description">Software Engineer experienced in Full-Stack Web</p>
      <ButtonUI></ButtonUI>
    </div>
  </section>
</template>

<script setup lang="ts">
import Header from '../components/Header.vue';
import ButtonUI from '../components/ButtonUI.vue';

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
  opacity: 0; /* Начальная скрытость */
  animation: fadeIn 1s ease-in-out forwards; /* Плавное появление */
}

.profile-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  opacity: 0; /* Начальная скрытость */
  animation: fadeInUp 1.5s ease-in-out forwards; /* Плавное появление и подъём */
}

.avatar {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: 20px;
  border: 4px solid #ffffff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2), 0 6px 20px rgba(0, 0, 0, 0.3);
  opacity: 0; /* Начальная скрытость */
  animation: fadeInUp 1.5s ease-in-out 0.5s forwards; /* Плавное появление с задержкой */
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
  opacity: 0; /* Начальная скрытость */
  animation: fadeInUp 1.5s ease-in-out 1s forwards; /* Плавное появление с задержкой */
}

.description {
  font-size: 1.2em;
  margin-bottom: 20px;
  color: white;
  opacity: 0; /* Начальная скрытость */
  animation: fadeInUp 1.5s ease-in-out 1.2s forwards; /* Плавное появление с задержкой */
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
  opacity: 0; /* Начальная скрытость */
  animation: fadeInUp 1.5s ease-in-out 1.4s forwards; /* Плавное появление с задержкой */
}

.resume-button .icon {
  margin-left: 10px;
}

/* Анимации */
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
