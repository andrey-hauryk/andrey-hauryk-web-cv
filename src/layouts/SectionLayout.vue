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
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  &__content {
    width: $card-content-size;
    height: 50%;
    animation: fadeIn $card-animation-duration ease-in-out;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.6);
    transition: box-shadow $card-animation-duration ease-in-out, transform $card-animation-duration ease-in-out;

    &:hover {
      box-shadow: 0 8px 40px rgba($color-secondary, 0.3);
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