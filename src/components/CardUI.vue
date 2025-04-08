<template>
  <div class="project-card">
    <div class="card-content">
      <h2>{{ project.name }}</h2>
      <p>{{ project.description }}</p>
      <a :href="project.link" target="_blank" class="project-link">
        View Project
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Project {
  name: string;
  description: string;
  link: string;
}

defineProps<{
  project: Project;
}>();
</script>

<style scoped lang="scss">
.project-card {
  display: flex;
  background-color: #f5f5f5;
  color: #333;
  padding: 1.5rem;
  border-radius: 12px;
  width: 100%;
  max-width: 600px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  overflow: hidden;
  position: relative;
}

.project-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
}

.card-content {
  flex: 1;
  padding-right: 2rem;
}

.project-card h2 {
  font-size: 1.6rem;
  color: #2c3e50;
  margin-bottom: 0.8rem;
  font-weight: bold;
}

.project-card p {
  font-size: 1rem;
  color: #555;
  margin-bottom: 1rem;
}

.project-link {
  display: block;
  font-size: 1.1rem;
  color: #2980b9;
  text-decoration: none;
  text-align: center;
  border: 2px solid #2980b9;
  padding: 0.5rem;
  border-radius: 6px;
  transition: color 0.3s, transform 0.3s ease, border-color 0.3s ease;
}

.project-link:hover {
  color: #fff;
  background-color: #2980b9;
  border-color: #2980b9;
  transform: scale(1.05);
}

.project-image {
  width: 150px;
  height: 150px;
  overflow: hidden;
  border-radius: 8px;
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

.project-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
