<script>

    import { RouterLink } from 'vue-router';

</script>


<template>
    <section class="bg-gray-100 text-white text-center py-16">
        <div class="container mx-auto h-100 flex justify-center items-center flex-col">
            <h1 class="text-4xl font-bold text-gray-700">Find Your Dream Job</h1>
            <p class="mt-4 text-lg text-gray-600">Browse thousands of job opportunities and start your career today.</p>
            <RouterLink to="/jobs" class="mt-6 inline-block bg-white text-gray-600 font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-gray-100">
            Explore Jobs
            </RouterLink>
            
            
        </div>
    </section>
</template>