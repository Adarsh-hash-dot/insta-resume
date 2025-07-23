<template>
  <div class="max-w-3xl mx-auto bg-base-100 p-6 rounded-box shadow-md">
    <h2 class="text-2xl font-semibold mb-4">Edit Professional Experience</h2>

    <div class="form-control mb-4">
      <label class="label"><span class="label-text">Job Title</span></label>
      <input v-model="experience.jobTitle" type="text" placeholder="Software Developer" class="input input-bordered" />
    </div>

    <div class="form-control mb-4">
      <label class="label"><span class="label-text">Employer</span></label>
      <input v-model="experience.employer" type="text" placeholder="Tutorbin" class="input input-bordered" />
    </div>

    <div class="grid grid-cols-2 gap-4 mb-4">
      <div class="form-control">
        <label class="label"><span class="label-text">Start Date</span></label>
        <input v-model="experience.startDate" type="month" class="input input-bordered" />
      </div>
      <div class="form-control">
        <label class="label"><span class="label-text">End Date</span></label>
        <input v-model="experience.endDate" type="month" class="input input-bordered" />
      </div>
    </div>

    <div class="form-control mb-4">
      <label class="label"><span class="label-text">Location</span></label>
      <input v-model="experience.location" type="text" placeholder="Gurugram, India" class="input input-bordered" />
    </div>

    <div class="form-control mb-4">
      <label class="label"><span class="label-text">Description</span></label>
      <textarea v-model="experience.description" rows="6" class="textarea textarea-bordered" placeholder="Your work responsibilities..."></textarea>
    </div>

    <div class="flex justify-end space-x-2">
      <button class="btn btn-outline btn-error">Delete</button>
      <button class="btn btn-primary">Save</button>
    </div>

    <div class="divider my-6"></div>

    <!-- Add Experience Button -->
    <div class="flex justify-center">
      <button class="btn btn-accent btn-wide">+ Add Experience</button>
    </div>
  </div>
</template>

<script setup>
const experience = reactive({
  jobTitle: '',
  employer: '',
  startDate: '',
  endDate: '',
  location: '',
  description: '',
});
</script>