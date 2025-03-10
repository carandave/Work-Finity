<script setup>

import { useRoute, useRouter } from 'vue-router';
import { onMounted, ref } from 'vue';
import { RouterLink } from 'vue-router';
import axios from 'axios';
import { useToast } from 'vue-toastification';

const route = useRoute();
const router = useRouter();
const toast = useToast();

const jobId = route.params.id;

const job = ref([]);

onMounted(async () => {
    try {
        const response = await axios.get(`/api/jobs/${jobId}`)
        console.log(response.data)
        job.value = response.data
    } catch (error) {
        console.log('Error')
    }
    
})

const deleteJob = (async () => {
    try {
        const confirm = window.confirm('Are you sure you want to delete this job?')

        if(confirm){
            const response = await axios.delete(`/api/jobs/${jobId}`);
            toast.success('Job Deleted Successfully');
            router.push(`/jobs`);
        }
        
    }
    
    catch(error){
        console.log(error)
    }
})



</script>


<template>
    <div class="flex justify-center items-center min-h-screen p-6">
      <div class="max-w-lg w-full bg-white/90 backdrop-blur-lg shadow-xl rounded-2xl p-6 border border-gray-300">
        <div class="flex justify-between items-center mb-4">
          <h2 class="text-2xl font-semibold text-gray-900">{{ job.title }}</h2>
          <span class="text-sm bg-green-100 text-green-600 px-3 py-1 rounded-full">{{ job.type }}  </span>
        </div>
  
        <p class="text-gray-700"><span class="font-medium">Company:</span>{{ job.company }}</p>
        <p class="text-gray-700"><span class="font-medium">Location:</span> {{ job.location }}</p>
        <p class="text-gray-700"><span class="font-medium">Skills:</span> {{job.skills?.join(', ') || 'N/A'}}</p>
        <p class="text-gray-700"><span class="font-medium">Salary:</span>{{ job.salary }}</p>
  
        <p class="text-gray-600 mt-3 leading-relaxed">
            {{ job.description }}
        </p>
  
        <div class="mt-5 flex gap-3">
          <!-- <button
            class="flex-1 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-700 transition-all duration-300"
            @click="editJob"
          >
            Edit
          </button> -->
          <RouterLink :to="`/jobs/edit/${job.id}`" class="flex-1 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-700 transition-all duration-300 text-center" >Edit</RouterLink>
          
          <button
            class="flex-1 bg-red-500 text-white py-2 rounded-lg hover:bg-red-700 transition-all duration-300"
            @click="deleteJob()"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  </template>