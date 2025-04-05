<template>
  <section class="section">
    <div class="section__content">
      <slot></slot>
    </div>
  </section>
</template>

<style scoped lang="scss">

.section {
  width: 100%;
  height: 90%;
  display: flex;
  align-items: center;
  justify-content: center;

  &__content {
    width: 60%;
    animation: fadeIn 1s ease-in-out;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.6);
    transition: box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out;

    &:hover {
      box-shadow: 0 8px 40px rgba(0, 255, 255, 0.5);
      transform: translateY(-10px);
    }
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

</style>