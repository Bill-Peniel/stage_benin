
<template>
  <aside class="bg-primary h-screen w-64 fixed left-0 top-0 text-white">
    <div class="p-4 border-b border-primary-dark">
      <h2 class="text-xl font-bold">Administration</h2>
    </div>
    <nav class="mt-6">
      <router-link to="/dashboard" class="block px-4 py-2 hover:bg-primary-dark" :class="{ 'bg-primary-dark': $route.path === '/dashboard' }">
        <i class="fas fa-chart-line mr-2"></i> Tableau de bord
      </router-link>
      <router-link to="/dashboard/structures" class="block px-4 py-2 hover:bg-primary-dark" :class="{ 'bg-primary-dark': $route.path === '/dashboard/structures' }">
        <i class="fas fa-building mr-2"></i> Structures
      </router-link>
      <router-link to="/dashboard/tuteurs" class="block px-4 py-2 hover:bg-primary-dark" :class="{ 'bg-primary-dark': $route.path === '/dashboard/tuteurs' }">
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
