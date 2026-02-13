<script setup>
import { ref } from 'vue';
import { RouterLink, useRouter } from 'vue-router';
import TextInput from '@/components/ui/TextInput.vue';
import Button from '@/components/ui/Button.vue';

const router = useRouter();

const form = ref({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
});

const loading = ref(false);

const handleRegister = async () => {
    loading.value = true;
    // Simulate API call
    setTimeout(() => {
        loading.value = false;
        alert('Registration successful! (Simulation)');
        router.push({ name: 'login' });
    }, 1000);
};
</script>

<template>
    <div class="w-full max-w-md mx-auto">
        <div class="mb-8 text-center">
            <h2 class="text-3xl font-bold tracking-tight text-gray-900">Create an account</h2>
            <p class="mt-2 text-sm text-gray-600">
                Already have an account?
                <RouterLink :to="{ name: 'login' }" class="font-medium text-primary hover:text-primary-hover">
                    Sign in
                </RouterLink>
            </p>
        </div>

        <form @submit.prevent="handleRegister" class="space-y-6">
            <TextInput v-model="form.name" label="Full Name" type="text" placeholder="Enter your full name" required />

            <TextInput v-model="form.email" label="Email address" type="email" placeholder="Enter your email"
                required />

            <TextInput v-model="form.password" label="Password" type="password" placeholder="Create a password"
                required />

            <TextInput v-model="form.confirmPassword" label="Confirm Password" type="password"
                placeholder="Confirm your password" required />

            <Button type="submit" variant="primary" block :loading="loading">
                Sign up
            </Button>
        </form>
    </div>
</template>
