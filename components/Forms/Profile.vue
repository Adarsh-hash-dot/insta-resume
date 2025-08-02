<template>
    <div class="card bg-base-100 my-4 p-3">
        <h2 class="card-title">Profile</h2>
        <div class="flex flex-row p-3">
            <div class="w-1/2 pr-3">
                <fieldset class="fieldset">
                    <legend class="fieldset-legend">Full name</legend>
                    <input type="text" class="input" placeholder="Type here" />
                </fieldset>
                <fieldset class="fieldset">
                    <legend class="fieldset-legend">Professional headline</legend>
                    <input type="text" class="input" placeholder="Type here" />
                </fieldset>
            </div>
            <div class="w-1/2 pl-3">
                <div class="flex justify-center items-center">
                    <div class="avatar">
                        <div class="w-20 rounded-full">
                            <img src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp" />
                        </div>
                    </div>
                </div>
                <fieldset class="fieldset">
                    <legend class="fieldset-legend">Pick a file</legend>
                    <input type="file" class="file-input" />
                    <label class="label">Max size 2MB</label>
                </fieldset>
            </div>
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