<template>
  <SectionLayout>
  <div class="relative w-full h-screen bg-black overflow-hidden">
    <canvas ref="canvas" class="absolute inset-0"></canvas>
    <div
      v-for="(event, index) in events"
      :key="index"
      class="absolute text-white text-sm px-2 py-1 bg-gray-800/80 rounded shadow"
      :style="{
        left: event.x + 'px',
        top: event.y + 'px',
        transform: 'translate(-50%, -50%)',
        opacity: hoveredIndex === index ? 1 : 0,
        transition: 'opacity 0.3s',
        pointerEvents: 'none'
      }"
    >
      {{ event.title }} ({{ event.year }})
    </div>
  </div>
  </SectionLayout>
</template>

<script setup lang="ts">
import { onMounted, ref, reactive } from 'vue';
import SectionLayout from '../layouts/SectionLayout.vue';


const canvas = ref<HTMLCanvasElement | null>(null)
const hoveredIndex = ref<number | null>(null)

const events = reactive([
  { x: 150, y: 200, title: 'Born', year: 2000 },
  { x: 300, y: 120, title: 'Started coding', year: 2015 },
  { x: 500, y: 280, title: 'First job', year: 2021 },
  { x: 650, y: 180, title: 'Freelance', year: 2022 },
  { x: 800, y: 350, title: 'Web3 dive', year: 2023 }
])

onMounted(() => {
  const ctx = canvas.value!.getContext('2d')!
  const width = canvas.value!.width = window.innerWidth
  const height = canvas.value!.height = window.innerHeight

  function draw() {
    ctx.clearRect(0, 0, width, height)

    // draw lines
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)'
    ctx.beginPath()
    for (let i = 0; i < events.length - 1; i++) {
      ctx.moveTo(events[i].x, events[i].y)
      ctx.lineTo(events[i + 1].x, events[i + 1].y)
    }
    ctx.stroke()

    // draw points
    events.forEach((event, index) => {
      ctx.beginPath()
      ctx.arc(event.x, event.y, 5, 0, Math.PI * 2)
      ctx.fillStyle = hoveredIndex.value === index ? '#00FFFF' : 'white'
      ctx.shadowColor = '#00FFFF'
      ctx.shadowBlur = hoveredIndex.value === index ? 10 : 2
      ctx.fill()
    })
  }

  function checkHover(e: MouseEvent) {
    const mouseX = e.clientX
    const mouseY = e.clientY
    hoveredIndex.value = null
    events.forEach((event, index) => {
      const dx = event.x - mouseX
      const dy = event.y - mouseY
      if (Math.sqrt(dx * dx + dy * dy) < 10) {
        hoveredIndex.value = index
      }
    })
  }

  draw()
  window.addEventListener('mousemove', (e) => {
    checkHover(e)
    draw()
  })
})
</script>

<style scoped>
canvas {
  display: block;
  width: 100%;
  height: 100%;
}
</style>
