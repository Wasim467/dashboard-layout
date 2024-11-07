<script setup>

</script>


<template>
    <nav class="flex items-center justify-between bg-white shadow p-2">
      <!-- Left side: Sidebar Toggle and Logo -->
      <div class="flex items-center space-x-8">
        <button @click="$emit('toggle')" class="text-gray-500 focus:outline-none">
          <i class="fas fa-bars text-2xl"></i>
        </button>
        <h1 class="font-bold text-xl text-gray-800">Dashboard</h1>
      </div>
  
      <div class="flex items-center space-x-8">
        <button class="text-red-500 focus:outline-none font-bold">Logout</button>
        <div >
            <img src="" class="h-10 w-10 rounded-full cursor-pointer mr-7" alt="Profile Picture">
        </div>
      </div>
    </nav>
  </template>
  