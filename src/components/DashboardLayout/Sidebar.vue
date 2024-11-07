<script setup>
const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
    <aside
      :class="[
        'bg-dark text-white w-64 space-y-6 py-7 fixed inset-y-0 left-0 transform transition-transform duration-300 shadow-lg',
        isOpen ? 'translate-x-0' : '-translate-x-full'
      ]"
    >
      <!-- Sidebar content -->
      
      <div class="flex items-center justify-between px-4">
        <RouterLink to="/"><h2 class="font-bold text-xl text-white">Website Logo</h2></RouterLink>
        <i class="fas fa-xmark md:hidden"></i>
      </div>
      <ul>
        <li class="py-2 px-4 hover:bg-main rounded flex items-center gap-3"><RouterLink to="/">Dashboard</RouterLink></li>
        <li class="py-2 px-4 hover:bg-main rounded flex items-center gap-3"><RouterLink to="/link1">Link 1</RouterLink></li>
        <li class="py-2 px-4 hover:bg-main rounded flex items-center gap-3"><RouterLink to="/">Link 2</RouterLink></li>
        <li class="py-2 px-4 hover:bg-main rounded flex items-center gap-3"><RouterLink to="/">Link 3</RouterLink></li>
        <li class="py-2 px-4 hover:bg-main rounded flex items-center gap-3"><RouterLink to="/">Link 4</RouterLink></li>
      </ul>
    </aside>
  </template>
  

  
  