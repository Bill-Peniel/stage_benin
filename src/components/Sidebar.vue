
<template>
  <aside class="bg-primary w-64 text-white shadow-lg overflow-y-auto">
    <div class="p-4 border-b border-primary-dark sticky top-0 bg-primary z-10">
      <h2 class="text-xl font-bold">Administration</h2>
    </div>
    <nav class="p-2">
      <router-link to="/dashboard" class="block px-4 py-2 my-1 rounded hover:bg-primary-dark transition-colors" :class="{ 'bg-primary-dark': $route.path === '/dashboard' }">
        <i class="fas fa-chart-line mr-2"></i> Tableau de bord
      </router-link>
      <router-link to="/dashboard/structures" class="block px-4 py-2 my-1 rounded hover:bg-primary-dark transition-colors" :class="{ 'bg-primary-dark': $route.path === '/dashboard/structures' }">
        <i class="fas fa-building mr-2"></i> Structures
      </router-link>
      <router-link to="/dashboard/tuteurs" class="block px-4 py-2 my-1 rounded hover:bg-primary-dark transition-colors" :class="{ 'bg-primary-dark': $route.path === '/dashboard/tuteurs' }">
        <i class="fas fa-user-tie mr-2"></i> Tuteurs
      </router-link>
    </nav>
  </aside>
</template>

<script>
export default {
  name: 'Sidebar'
}
</script>
