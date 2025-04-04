<template>
  <div ref="container" class="scene-container"></div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import * as THREE from 'three';

const container = ref<HTMLDivElement | null>(null);

let scene: THREE.Scene;
let camera: THREE.PerspectiveCamera;
let renderer: THREE.WebGLRenderer;

// Звёзды
let stars: THREE.Points;
const starCount = 600;
let starGeo: THREE.BufferGeometry;
let starSpeeds: Float32Array;
let starSizeSpeeds: Float32Array;
let starDirections: Float32Array;
let starAccelarations: Float32Array;

// Дым
const smokeParticles: THREE.Sprite[] = [];
const smokeGroup = new THREE.Group();
const smokeTextures: THREE.Texture[] = [];

// Яркие облака
const brightClouds: THREE.Sprite[] = [];

const initScene = () => {
  scene = new THREE.Scene();

  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = 50;

  renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(window.devicePixelRatio);
  container.value!.appendChild(renderer.domElement);
};

const loadSmokeTextures = () => {
  const loader = new THREE.TextureLoader();
  for (let i = 1; i <= 5; i++) {
    const filename = i < 10 ? `/smoke_0${i}.png` : `/smoke_${i}.png`;
    smokeTextures.push(loader.load(filename));
  }
};

const createSmoke = () => {
  const maxRadius = 40; // Увеличиваем радиус

  for (let i = 0; i < 200; i++) { // Увеличиваем количество частиц
    const texture = smokeTextures[Math.floor(Math.random() * smokeTextures.length)];

    // Выбираем случайные синие и фиолетовые оттенки для дымки
    const color = new THREE.Color(
      `hsl(${200 + Math.random() * 60}, 100%, ${40 + Math.random() * 20}%)`
    );

    const material = new THREE.SpriteMaterial({
      map: texture,
      color: color,
      transparent: true,
      opacity: 0.15 + Math.random() * 0.35, // Меняем opacity
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      emissive: color, // Добавляем свечение
      emissiveIntensity: 0.5 + Math.random() * 0.5, // Свечение с случайной интенсивностью
    });

    const sprite = new THREE.Sprite(material);

    const radius = Math.random() * maxRadius;
    const angle = Math.random() * Math.PI * 2;
    const z = (Math.random() - 0.5) * 20; // Увеличиваем диапазон Z

    sprite.position.set(
      Math.cos(angle) * radius,
      Math.sin(angle) * radius,
      z
    );

    const scale = 15 + Math.random() * 10; // Увеличиваем масштаб частиц
    sprite.scale.set(scale, scale, 1);
    sprite.material.rotation = Math.random() * Math.PI * 2;

    smokeGroup.add(sprite);
    smokeParticles.push(sprite);
  }

  scene.add(smokeGroup);
};

const getRandomColor = () => {
  const colors = [
    new THREE.Color(1, 1, 1),
    new THREE.Color(0.8, 0.8, 1),
    new THREE.Color(1, 0.8, 0.6),
    new THREE.Color(1, 0.6, 0.8),
  ];
  return colors[Math.floor(Math.random() * colors.length)];
};

const createStars = () => {
  const starPositions = new Float32Array(starCount * 3);
  const starSizes = new Float32Array(starCount);
  const starColors = new Float32Array(starCount * 3);
  starSpeeds = new Float32Array(starCount);
  starSizeSpeeds = new Float32Array(starCount);
  starDirections = new Float32Array(starCount);
  starAccelarations = new Float32Array(starCount);

  const starTexture = new THREE.TextureLoader().load('/star_08.png');

  for (let i = 0; i < starCount; i++) {
    starPositions[i * 3] = Math.random() * 600 - 300;
    starPositions[i * 3 + 1] = Math.random() * 600 - 300;
    starPositions[i * 3 + 2] = Math.random() * 600 - 300;

    starSizes[i] = Math.random() * 3.8 + 0.2;

    const color = getRandomColor();
    starColors[i * 3] = color.r;
    starColors[i * 3 + 1] = color.g;
    starColors[i * 3 + 2] = color.b;

    starSpeeds[i] = Math.random() * 0.5 + 0.5;
    starSizeSpeeds[i] = (Math.random() * 0.4 + 0.2) * (Math.random() < 0.5 ? 1 : -1);
    starDirections[i] = Math.random() < 0.5 ? 1 : -1;
    starAccelarations[i] = (Math.random() * 0.1 + 0.05) * (Math.random() < 0.5 ? 1 : -1);
  }

  starGeo = new THREE.BufferGeometry();
  starGeo.setAttribute('position', new THREE.Float32BufferAttribute(starPositions, 3));
  starGeo.setAttribute('color', new THREE.Float32BufferAttribute(starColors, 3));
  starGeo.setAttribute('size', new THREE.Float32BufferAttribute(starSizes, 1));

  const starsMaterial = new THREE.PointsMaterial({
    map: starTexture,
    vertexColors: true,
    size: 6,
    transparent: true,
    depthWrite: false,
  });

  stars = new THREE.Points(starGeo, starsMaterial);
  scene.add(stars);
};

// Создание ярких облаков
const createBrightClouds = () => {
  const cloudColors = [
    new THREE.Color(1, 0, 0), // Красный
    new THREE.Color(1, 0.5, 0), // Оранжевый
    new THREE.Color(0, 0, 1), // Синий
    new THREE.Color(0, 1, 0) // Зелёный
  ];

  for (let i = 0; i < 5; i++) { // Устанавливаем 5 случайных облаков
    const texture = smokeTextures[Math.floor(Math.random() * smokeTextures.length)];

    // Выбираем случайный яркий цвет
    const color = cloudColors[Math.floor(Math.random() * cloudColors.length)];

    const material = new THREE.SpriteMaterial({
      map: texture,
      color: color,
      transparent: true,
      opacity: 0.3 + Math.random() * 0.5, // Начальная прозрачность
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      emissive: color,
      emissiveIntensity: 1.5 + Math.random() * 0.5,
    });

    const sprite = new THREE.Sprite(material);

    // Задаём случайную позицию облака
    const radius = Math.random() * 100;
    const angle = Math.random() * Math.PI * 2;
    const z = (Math.random() - 0.5) * 50;

    sprite.position.set(
      Math.cos(angle) * radius,
      Math.sin(angle) * radius,
      z
    );

    const scale = 20 + Math.random() * 15;
    sprite.scale.set(scale, scale, 1);
    sprite.material.rotation = Math.random() * Math.PI * 2;

    // Добавляем облако в группу
    brightClouds.push(sprite);
    scene.add(sprite);
  }
};

// Анимация ярких облаков
const animateBrightClouds = () => {
  const time = Date.now() * 0.001;

  brightClouds.forEach((sprite) => {
    const speed = 0.1 + Math.random() * 0.1;
    sprite.position.z += speed;

    // Плавно уменьшаем прозрачность облаков, чтобы они исчезали
    sprite.material.opacity -= 0.002;

    // Если облако слишком далеко или исчезло, заменяем его
    if (sprite.position.z > 50 || sprite.material.opacity <= 0) {
      sprite.position.z = -50;
      sprite.position.x = Math.random() * 200 - 100;
      sprite.position.y = Math.random() * 200 - 100;
      sprite.material.opacity = 0.3 + Math.random() * 0.5; // Восстанавливаем начальную прозрачность
    }
  });
};

const animate = () => {
  requestAnimationFrame(animate);

  const time = Date.now() * 0.001;
  const positions = starGeo.attributes.position.array as Float32Array;
  const sizes = starGeo.attributes.size.array as Float32Array;

  // Анимация звёзд
  for (let i = 0; i < starCount; i++) {
    positions[i * 3 + 2] += starSpeeds[i];

    positions[i * 3] += starDirections[i] * (starSpeeds[i] + starAccelarations[i]);

    if (positions[i * 3 + 2] > 300) {
      positions[i * 3] = Math.random() * 600 - 300;
      positions[i * 3 + 1] = Math.random() * 600 - 300;
      positions[i * 3 + 2] = -300;
    }

    sizes[i] += starSizeSpeeds[i];
    if (sizes[i] > 4 || sizes[i] < 0.2) {
      starSizeSpeeds[i] = -starSizeSpeeds[i];
    }
  }

  starGeo.attributes.position.needsUpdate = true;
  starGeo.attributes.size.needsUpdate = true;

  // Анимация дыма
  smokeGroup.rotation.z += 0.0008;
  smokeParticles.forEach((sprite, i) => {
    const s = 10 + Math.sin(time + i) * 1.5;
    sprite.scale.set(s, s, 1);

    // Смещаем частицы вдоль оси Z
    sprite.position.z += 0.05 + Math.random() * 0.1;

    if (sprite.position.z > 50) {
      sprite.position.z = -50;
      sprite.position.x = Math.random() * 80 - 40;
      sprite.position.y = Math.random() * 80 - 40;
    }
  });

  animateBrightClouds(); // Добавляем анимацию облаков

  renderer.render(scene, camera);
};

const onResize = () => {
  if (!camera || !renderer) return;
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
};

onMounted(() => {
  initScene();
  loadSmokeTextures();
  createSmoke();
  createStars();
  createBrightClouds(); // Создаём яркие облака
  animate();
  window.addEventListener('resize', onResize);
});

onUnmounted(() => {
  window.removeEventListener('resize', onResize);
});
</script>

<style scoped>
.scene-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
  background: radial-gradient(ellipse at center, #1a0f00 0%, #000000 100%);
}

.gradient-bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
  background: linear-gradient(-45deg, #000000, #1e0033, #3f0066, #330066, #110022);
  background-size: 300% 300%;
  animation: gradientAnimation 120s ease infinite;
}
</style>
