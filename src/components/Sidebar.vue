<template>
  <aside class="bg-primary w-64 text-white shadow-lg overflow-y-auto transform transition-all duration-300 ease-in-out fixed md:translate-x-0 z-50" :class="{ '-translate-x-full': !isSidebarOpen }" data-aos="fade-right">
    <button @click="toggleSidebar" class="md:hidden fixed top-20 left-4 z-50 bg-primary text-white p-2 rounded-full">
      <i class="fas" :class="isSidebarOpen ? 'fa-times' : 'fa-bars'"></i>
    </button>
    <div class="p-4 border-b border-primary-dark sticky top-0 bg-primary z-10 transform transition-all duration-300 hover:bg-primary-dark">
      <h2 class="text-xl font-bold transform transition-all duration-300 hover:scale-105">Administration</h2>
    </div>
    <nav class="p-2">
      <router-link 
        v-for="(link, index) in links" 
        :key="link.to"
        :to="link.to" 
        class="block px-4 py-2 my-1 rounded transform transition-all duration-300 hover:bg-primary-dark hover:translate-x-2 hover:shadow-lg" 
        :class="{ 'bg-primary-dark': $route.path === link.to }"
        :data-aos="'fade-right'"
        :data-aos-delay="index * 100"
      >
        <i :class="['mr-2', link.icon]"></i> {{ link.text }}
      </router-link>
    </nav>
  </aside>
</template>

<script>
export default {
  name: 'Sidebar',
  data() {
    return {
      isSidebarOpen: true, // Added state for sidebar visibility
      links: [
        { to: '/dashboard', icon: 'fas fa-chart-line', text: 'Tableau de bord' },
        { to: '/dashboard/structures', icon: 'fas fa-building', text: 'Structures' },
        { to: '/dashboard/tuteurs', icon: 'fas fa-user-tie', text: 'Tuteurs' }
      ]
    }
  },
  methods: {
    toggleSidebar() {
      this.isSidebarOpen = !this.isSidebarOpen;
    }
  }
}
</script>