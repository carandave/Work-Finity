<script setup>

import { reactive } from 'vue';
import axios from 'axios';
import { useToast } from 'vue-toastification';
import router from '@/router';

const toast = useToast();

const form = reactive({
    title: '',
    company: '',
    location: '',
    salary: '',
    skills: '',
    type: 'Full Time',
    description: ''
})

const addJobSubmit = async () =>{

    const skillsArr = form.skills ? form.skills.split(',').map(skill => skill.trim() ) : []

    const newJob = {
        title: form.title,
        company: form.company,
        location: form.location,
        salary: form.salary,
        skills: skillsArr,
        type: form.type,
        description: form.description,
    }

    try {
        
        const response = await axios.post('/api/jobs/', newJob)
        toast.success('Job Added Successfully')
        router.push(`/jobs/${response.data.id}`)
    } catch (error) {
        console.log(error)
    }



}

</script>


<template>
    <div class="flex justify-center items-center min-h-screen bg-gray-200 p-6">
      <div class="max-w-2xl w-full bg-white/90 backdrop-blur-lg shadow-xl rounded-2xl p-6 border border-gray-300">
        <h2 class="text-2xl font-semibold text-gray-900 mb-6">Add Job Listing</h2>
  
        <form @submit.prevent="addJobSubmit">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <!-- Job Title -->
            <div>
              <label class="text-gray-700 font-medium">Job Title</label>
              <input
                v-model="form.title"
                type="text"
                placeholder="Enter job title"
                class="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-300"
                required
              />
            </div>
  
            <!-- Company -->
            <div>
              <label class="text-gray-700 font-medium">Company</label>
              <input
                v-model="form.company"
                type="text"
                placeholder="Company name"
                class="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-300"
                required
              />
            </div>
  
            <!-- Location -->
            <div>
              <label class="text-gray-700 font-medium">Location</label>
              <input
                v-model="form.location"
                type="text"
                placeholder="E.g., Remote or City, Country"
                class="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-300"
                required
              />
            </div>
  
            <!-- Salary -->
            <div>
              <label class="text-gray-700 font-medium">Salary</label>
              <input
                v-model="form.salary"
                type="text"
                placeholder="E.g., $70,000 - $90,000 / year"
                class="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-300"
              />
            </div>
  
            <!-- Skills -->
            <div class="col-span-2">
              <label class="text-gray-700 font-medium">Skills (comma-separated)</label>
              <input
                v-model="form.skills"
                type="text"
                placeholder="E.g., HTML, CSS, JavaScript, React"
                class="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-300"
                required
              />
            </div>
  
            <!-- Job Type -->
            <div class="col-span-2">
              <label class="text-gray-700 font-medium">Job Type</label>
              <select
                v-model="form.type"
                class="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-300"
              >
                <option>Full Time</option>
                <option>Part Time</option>
                <option>Contract</option>
                <option>Internship</option>
              </select>
            </div>
  
            <!-- Description -->
            <div class="col-span-2">
              <label class="text-gray-700 font-medium">Job Description</label>
              <textarea
                v-model="form.description"
                rows="4"
                placeholder="Enter job description"
                class="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-300"
                required
              ></textarea>
            </div>
          </div>
  
          <!-- Buttons -->
          <div class="mt-6 flex gap-3">
            <button
              type="submit"
              class="flex-1 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-700 transition-all duration-300"
            >
              Add Job
            </button>
            <button
              type="button"
              class="flex-1 bg-gray-400 text-white py-2 rounded-lg hover:bg-gray-600 transition-all duration-300"
              @click=""
            >
              Clear
            </button>
          </div>
        </form>
      </div>
    </div>
  </template>