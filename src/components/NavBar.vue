<script setup>

import { RouterLink, useRoute } from 'vue-router';

const isActiveLink = (routePath) =>{
    const route = useRoute();

    return route.path === routePath

}

</script>

<template>
    <nav class="bg-gray-200 p-4">
    <div class="container mx-auto flex justify-between items-center">
        <a href="#" class="text-dark text-xl font-bold">WorkFinity</a>
        <ul class="flex space-x-4">
        <li><RouterLink to="/" :class="
                                [isActiveLink('/') ? 'bg-gray-500 text-white' : 'hover:bg-gray-500', 
                                'text-gray-900 hover:text-white px-3 py-2 rounded-lg duration-150'
                                ]">Home</RouterLink>
        </li>
        <li><RouterLink to="/jobs" :class="
                                [isActiveLink('/jobs') ? 'bg-gray-500 text-white' : 'hover:bg-gray-500', 
                                'text-gray-900 hover:text-white px-3 py-2 rounded-lg duration-150'
                                ]">Job List</RouterLink></li>
        <li><RouterLink to="/jobs/add" :class="
                                [isActiveLink('/jobs/add') ? 'bg-gray-500 text-white' : 'hover:bg-gray-500', 
                                'text-gray-900 hover:text-white px-3 py-2 rounded-lg duration-150'
                                ]">Add Job</RouterLink></li>
        </ul>
    </div>
    </nav>

</template>