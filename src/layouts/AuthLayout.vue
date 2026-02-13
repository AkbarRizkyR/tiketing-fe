<template>
    <div class="flex min-h-screen bg-surface">
        <!-- Left Side - Abstract Gradient (Hidden on mobile) -->
        <div class="hidden w-1/2 relative lg:flex items-center justify-center overflow-hidden bg-secondary">
            <!-- Decorative Background Elements -->
            <div class="absolute inset-0 bg-linear-to-br from-secondary via-secondary to-primary/20"></div>

            <!-- Abstract Circles/Blobs -->
            <div
                class="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/30 rounded-full blur-3xl opacity-50">
            </div>
            <div
                class="absolute bottom-0 right-0 translate-x-1/3 translate-y-1/3 w-[500px] h-[500px] bg-primary/20 rounded-full blur-3xl opacity-40">
            </div>

            <!-- Grid Pattern Overlay for Texture -->
            <div class="absolute inset-0 opacity-10"
                style="background-image: radial-gradient(#ffffff 1px, transparent 1px); background-size: 32px 32px;">
            </div>

            <!-- Content Overlay -->
            <div class="relative z-10 w-full max-w-lg px-12 text-center text-white">
                <div class="mb-8 flex justify-center">
                    <!-- Icon/Logo Placeholder -->
                    <svg class="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                </div>

                <h2 class="font-display text-4xl font-bold tracking-tight sm:text-5xl drop-shadow-lg">
                    Welcome to TicketApp
                </h2>

                <p class="mt-6 text-lg leading-relaxed text-blue-100 drop-shadow-sm">
                    Streamline your support workflow, enhance team collaboration, and deliver exceptional customer
                    experiences.
                </p>
            </div>

            <!-- Wave Animation (Bottom) -->
            <div class="absolute bottom-0 left-0 right-0 z-0 opacity-40">
                <svg class="w-full" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#10b981" fill-opacity="0.3"
                        d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
                        <animate attributeName="d" dur="10s" repeatCount="indefinite"
                            values="
                  M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
                  M0,160L48,176C96,192,192,224,288,224C384,224,480,192,576,165.3C672,139,768,117,864,128C960,139,1056,181,1152,197.3C1248,213,1344,203,1392,197.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
                  M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" />
                    </path>
                    <path fill="#10b981" fill-opacity="0.5"
                        d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,106.7C672,117,768,171,864,197.3C960,224,1056,224,1152,208C1248,192,1344,160,1392,144L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
                        <animate attributeName="d" dur="15s" repeatCount="indefinite"
                            values="
                  M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,106.7C672,117,768,171,864,197.3C960,224,1056,224,1152,208C1248,192,1344,160,1392,144L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
                  M0,96L48,106.7C96,117,192,139,288,133.3C384,128,480,96,576,96C672,96,768,128,864,149.3C960,171,1056,181,1152,165.3C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
                   M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,106.7C672,117,768,171,864,197.3C960,224,1056,224,1152,208C1248,192,1344,160,1392,144L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" />
                    </path>
                </svg>
            </div>
        </div>

        <!-- Right Side - Form Container -->
        <div
            class="flex w-full flex-col justify-center bg-white px-4 py-12 sm:px-6 lg:w-1/2 lg:flex-none lg:px-20 xl:px-24 shadow-xl lg:shadow-none z-10">
            <div class="mx-auto w-full max-w-sm lg:w-96">
                <!-- Brand on mobile (since left side is hidden) -->
                <div class="lg:hidden mb-10 text-center">
                    <h1 class="font-display text-3xl font-bold text-primary">TicketApp</h1>
                </div>

                <slot></slot>

                <div class="mt-10 border-t border-gray-100 pt-6 text-center text-xs text-gray-500">
                    &copy; {{ new Date().getFullYear() }} TicketApp Inc. All rights reserved.
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
/* Optional: subtle animation on load if desired */
@keyframes fade-in-up {
    from {
        opacity: 0;
        transform: translateY(10px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

h2,
p {
    animation: fade-in-up 0.8s ease-out forwards;
}

p {
    animation-delay: 0.2s;
}
</style>
