<script lang="ts">
import { defineComponent, ref } from "vue";

  export default defineComponent({
    setup() {
      let iconLoading = ref<boolean>(false);

      const enterIconLoading = () => {
        console.log(`Clicado!`);
        iconLoading.value = true;
        setTimeout(() => {
          iconLoading.value = false;
        }, 5000)
      };

      return {
        enterIconLoading,
        iconLoading
      };
    },
  });
</script>

<template>
  <div style="padding: 36px">
    <a-space style="width: 100%">
      <a-button @click="enterIconLoading" :loading="iconLoading" type="primary">Loading</a-button>
    </a-space>
  </div>
</template>
