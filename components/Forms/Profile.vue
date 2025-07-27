<template>

    <div class="card shadow-md dark:border-base-300/40 border-base-300/60 bg-base-100 relative border p-1">
        <div class="card-body">
            <h2 class="card-title">Profile</h2>
            <p class="text-sm text-gray-500">Fill in your personal details</p>

            <fieldset class="fieldset">
                <legend class="fieldset-legend">What is your name?</legend>
                <input type="text" class="input" placeholder="Type here" />
                <p class="label">Optional</p>
            </fieldset>
        </div>
    </div>
</template>
<script>
import { Phone } from 'lucide-vue-next'
export default {
    name: 'Profile',
    components: {
        Phone
    }
}
</script>