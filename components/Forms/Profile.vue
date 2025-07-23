<template>
    <div class="card w-full max-w-md bg-base-100 shadow-md rounded-xl h-fit">
        <div class="card-body">
            <!-- Name and Role -->
            <h2 class="card-title text-xl font-bold text-neutral">Adarsh Sahu</h2>
            <p class="text-base text-gray-500">Software Development Engineer</p>

            <!-- Contact Info -->
            <div class="mt-4 space-y-2 text-sm">
                <div class="flex items-center gap-2">
                    <svg class="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" stroke-width="1.5"
                        viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M21.75 6.75L13.5 12.375 5.25 6.75M5.25 17.25h13.5" />
                    </svg>
                    <span>adarshsahu1996@gmail.com</span>
                </div>
                <div class="flex items-center gap-2">
                    <svg class="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" stroke-width="1.5"
                        viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M2.25 4.5l6.75 6.75m0 0l3 3m-3-3L21.75 4.5m-15.75 6.75l3 3m0 0l3 3m-3-3l9.75 9.75" />
                    </svg>
                    <span>+91 95185 88253</span>
                </div>
                <div class="flex items-center gap-2">
                    <svg class="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" stroke-width="1.5"
                        viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M12 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5zM12 13.5c-2.625 0-4.5 1.5-4.5 3.75h9c0-2.25-1.875-3.75-4.5-3.75z" />
                    </svg>
                    <span>Bengaluru, Karnataka</span>
                </div>
            </div>
        </div>

        <!-- Edit Icon (top-right) -->
        <div class="absolute top-3 right-3">
            <button class="btn btn-circle btn-sm bg-pink-600 hover:bg-pink-700 text-white">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M15.232 5.232l3.536 3.536M9 11l6.293-6.293a1 1 0 011.414 0l2.586 2.586a1 1 0 010 1.414L12 18H9v-3l6.293-6.293" />
                </svg>
            </button>
        </div>

        <!-- Placeholder Image Circle -->
        <div class="absolute bottom-5 right-5 bg-gray-100 rounded-full w-20 h-20 flex items-center justify-center">
            <svg class="w-8 h-8 text-gray-300" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M12 12a4.5 4.5 0 100-9 4.5 4.5 0 000 9zM4.5 19.5a7.5 7.5 0 1115 0h-15z" />
            </svg>
        </div>
    </div>

</template>