<template>
    <div class="flex flex-col min-h-screen bg-gray-50 m-6">
        <div class="collapse collapse-plus bg-base-100 border border-base-300 my-3">
            <input type="radio" name="my-accordion-3" checked />
            <div class="collapse-title font-semibold">Profile</div>
            <div class="collapse-content text-sm">
                Some profile inputs but disabled by default
            </div>
        </div>
        <div class="collapse collapse-plus bg-base-100 border border-base-300 my-3">
            <input type="radio" name="my-accordion-3" />
            <div class="collapse-title font-semibold">Professional Experience</div>
            <div class="collapse-content text-sm">
                Some profile inputs but disabled by default
            </div>
        </div>
    </div>

</template>

<!-- <script setup>
    const Sections = [
        {title: profile, inputFields: [
            { label: 'Name', type: 'text', model: 'name' },
            { label: 'Title', type: 'text', model: 'title' },
            { label: 'Email', type: 'email', model: 'email' },
            { label: 'Phone', type: 'tel', model: 'phone' },
            { label: 'Location', type: 'text', model: 'location' },
            { label: 'Website', type: 'url', model: 'website' }
        ]},
        {title: experience, inputFields: [
            { label: 'Job Title', type: 'text', model: 'jobTitle' },
            { label: 'Employer', type: 'text', model: 'employer' },
            { label: 'Start Date', type: 'date', model: 'startDate' },
            { label: 'End Date', type: 'date', model: 'endDate' },
            { label: 'Location', type: 'text', model: 'location' },
            { label: 'Description', type: 'textarea', model: 'description' }
        ]} ,
        {
            title: 'Education',
            inputFields: [
                { label: 'Degree', type: 'text', model: 'degree' },
                { label: 'Institution', type: 'text', model: 'institution' },
                { label: 'Start Date', type: 'date', model: 'eduStartDate' },
                { label: 'End Date', type: 'date', model: 'eduEndDate' },
                { label: 'Location', type: 'text', model: 'eduLocation' }
            ]
        },
        {
            title: 'Skills',
            inputFields: [
                { label: 'Skill', type: 'text', model: 'skill' },
                { label: 'Proficiency', type: 'text', model: 'proficiency' }
            ]
        },
        {
            title: 'Projects',
            inputFields: [
                { label: 'Project Name', type: 'text', model: 'projectName' },
                { label: 'Description', type: 'textarea', model: 'projectDescription' },
                { label: 'Technologies Used', type: 'text', model: 'technologiesUsed' }
            ]
        }

    ]
</script> -->