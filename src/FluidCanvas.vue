<template>
  <div class="gradient-bg" ref="container"></div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import * as THREE from 'three';

const container = ref<HTMLDivElement | null>(null);

let scene: THREE.Scene;
let camera: THREE.PerspectiveCamera;
let renderer: THREE.WebGLRenderer;
let stars: THREE.Points;
let starGeo: THREE.BufferGeometry;
let starPositions: Float32Array;
let starSizes: Float32Array;
let starColors: Float32Array;
let starSpeeds: Float32Array; // Массив для хранения скорости каждой звезды
let starSizeSpeeds: Float32Array; // Массив для хранения скорости изменения размеров звезд

const starCount = 600;

const animate = () => {
  requestAnimationFrame(animate);

  const positions = starGeo.attributes.position.array as Float32Array;
  const sizes = starGeo.attributes.size.array as Float32Array;

  for (let i = 0; i < positions.length; i += 3) {
    positions[i + 2] += starSpeeds[i / 3]; // Двигаем звезды с разной скоростью

    if (positions[i + 2] > 300) {
      positions[i] = Math.random() * 600 - 300; // X
      positions[i + 1] = Math.random() * 600 - 300; // Y
      positions[i + 2] = -300; // Сбрасываем звезду в начало
    }

    // Изменяем размер звезды
    sizes[i / 3] += starSizeSpeeds[i / 3];

    // Если размер звезды выходит за пределы, инвертируем скорость изменения
    if (sizes[i / 3] > 4 || sizes[i / 3] < 0.2) {
      starSizeSpeeds[i / 3] = -starSizeSpeeds[i / 3];
    }
  }

  starGeo.attributes.position.needsUpdate = true; // Обновляем геометрию
  starGeo.attributes.size.needsUpdate = true; // Обновляем размеры

  renderer.render(scene, camera);
};

const getRandomColor = () => {
  const colors = [
    new THREE.Color(1, 1, 1), // Белый
    new THREE.Color(0.8, 0.8, 1), // Голубоватый
    new THREE.Color(1, 0.8, 0.6), // Желтоватый
    new THREE.Color(1, 0.6, 0.8), // Розоватый
  ];
  return colors[Math.floor(Math.random() * colors.length)];
};

const init = () => {
  if (!container.value) return;

  scene = new THREE.Scene();

  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.set(0, 0, 5);

  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(window.devicePixelRatio);
  container.value.appendChild(renderer.domElement);

  starGeo = new THREE.BufferGeometry();
  starPositions = new Float32Array(starCount * 3);
  starSizes = new Float32Array(starCount);
  starColors = new Float32Array(starCount * 3);
  starSpeeds = new Float32Array(starCount); // Инициализация массива скоростей
  starSizeSpeeds = new Float32Array(starCount); // Инициализация массива скорости изменения размеров

  for (let i = 0; i < starCount; i++) {
    // Случайные координаты
    starPositions[i * 3] = Math.random() * 600 - 300; // X
    starPositions[i * 3 + 1] = Math.random() * 600 - 300; // Y
    starPositions[i * 3 + 2] = Math.random() * 600 - 300; // Z

    // Случайный размер
    starSizes[i] = Math.random() * 3.8 + 0.2; // Размер от 0.2 до 4

    // Случайный цвет
    const color = getRandomColor();
    starColors[i * 3] = color.r;
    starColors[i * 3 + 1] = color.g;
    starColors[i * 3 + 2] = color.b;

    // Случайная скорость движения
    starSpeeds[i] = Math.random() * 0.5 + 0.5; // Скорость от 0.5 до 1

    // Случайная скорость изменения размеров
    starSizeSpeeds[i] = (Math.random() * 0.4 + 0.2) * (Math.random() < 0.5 ? 1 : -1); // От -0.2 до 0.2
  }

  starGeo.setAttribute('position', new THREE.Float32BufferAttribute(starPositions, 3));
  starGeo.setAttribute('color', new THREE.Float32BufferAttribute(starColors, 3));
  starGeo.setAttribute('size', new THREE.Float32BufferAttribute(starSizes, 1));

  const starsMaterial = new THREE.PointsMaterial({
    vertexColors: true, // Включаем цвета
    size: 1,
    transparent: true,
    depthWrite: false,
  });

  stars = new THREE.Points(starGeo, starsMaterial);
  scene.add(stars);

  const ambientLight = new THREE.AmbientLight(0xffffff, 1);
  scene.add(ambientLight);

  animate();
};

const onResize = () => {
  if (!camera || !renderer) return;
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
};

onMounted(() => {
  init();
  window.addEventListener('resize', onResize);
});

onUnmounted(() => {
  window.removeEventListener('resize', onResize);
});
</script>

<style scoped>
.gradient-bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
  background: radial-gradient(circle at center, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 100%);
  animation: subtleGradientShift 20s ease-in-out infinite;
  background-blend-mode: screen;
}

@keyframes subtleGradientShift {
  0% {
    background: radial-gradient(circle at 20% 20%, rgba(0, 30, 60, 0.1), rgba(0, 0, 0, 1)),
                linear-gradient(-45deg, rgba(20, 0, 50, 0.2), rgba(0, 0, 0, 0.9));
  }
  25% {
    background: radial-gradient(circle at 80% 20%, rgba(60, 0, 100, 0.15), rgba(0, 0, 0, 1)),
                linear-gradient(45deg, rgba(0, 50, 100, 0.2), rgba(0, 0, 0, 0.9));
  }
  50% {
    background: radial-gradient(circle at 50% 80%, rgba(0, 100, 150, 0.1), rgba(0, 0, 0, 1)),
                linear-gradient(-135deg, rgba(100, 0, 150, 0.15), rgba(0, 0, 0, 0.9));
  }
  75% {
    background: radial-gradient(circle at 10% 80%, rgba(50, 0, 100, 0.2), rgba(0, 0, 0, 1)),
                linear-gradient(135deg, rgba(0, 30, 80, 0.2), rgba(0, 0, 0, 0.9));
  }
  100% {
    background: radial-gradient(circle at 20% 20%, rgba(0, 30, 60, 0.1), rgba(0, 0, 0, 1)),
                linear-gradient(-45deg, rgba(20, 0, 50, 0.2), rgba(0, 0, 0, 0.9));
  }
}
</style>

