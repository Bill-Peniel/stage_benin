
<template>
  <footer class="bg-primary text-white py-2 px-4">
    <div class="flex justify-between items-center text-xs">
      <p>&copy; {{ currentYear }} MEF Bénin</p>
      <div class="flex space-x-3">
        <a href="#" class="hover:text-accent-yellow">Aide</a>
        <a href="#" class="hover:text-accent-yellow">Support</a>
      </div>
    </div>
  </footer>
</template>

<script>
import { computed } from 'vue'

export default {
  name: 'FooterAdmin',
  setup() {
    const currentYear = computed(() => new Date().getFullYear())
    return {
      currentYear
    }
  }
}
</script>
