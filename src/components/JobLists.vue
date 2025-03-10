<script setup>

// import jobData from '@/jobs.json';

import { ref, onMounted} from 'vue';
import { RouterLink } from 'vue-router';
import axios from 'axios';



const jobs = ref([]);

onMounted(async () => {
  try {
    const response = await axios.get('/api/jobs');
    jobs.value = response.data;

  console.log(jobs.value)
  } catch (error) {
    console.log("Error")
  }
  
})


</script>

<template>
    <section class="container mx-auto p-6">
  <h2 class="text-3xl font-bold text-gray-800 mb-6">Job Listings </h2>
  <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
    <div v-for="job in jobs" :key="job.id" class="bg-white p-6 rounded-lg shadow hover:shadow-lg transition duration-300">
      <h3 class="text-xl font-semibold text-gray-800">{{job.title}}</h3>
      <p class="text-gray-600">Company: {{job.company}}</p>
      <p class="text-gray-600">Location: {{job.location}}</p>
      <p class="text-gray-600">Skills: {{job.skills.join(', ')}}</p>
      <p class="text-gray-600">Salary: {{job.salary}}</p>
      <p class="text-gray-600 mt-2">{{job.description}}</p>
      <p class="text-gray-600 mt-2 text-sm">{{job.type}}</p>
      <RouterLink :to="`/jobs/${job.id}`" class="mt-4 inline-block bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700">Read More</RouterLink>
    </div>
  </div>
</section>



</template>