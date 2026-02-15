<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import TextInput from '@/components/ui/TextInput.vue';
import Button from '@/components/ui/Button.vue';
import { login } from '@/services/auth.service'; // Import login service
import { useAuthorizationStore } from '@/stores/authorization'; // Import auth store
import { swallAlert } from '@/plugins/sweetalert2';

const router = useRouter();
const authStore = useAuthorizationStore();

const form = ref({
    email: '',
    password: '',
});

const data = ref('')

const loading = ref(false);

const handleLogin = async () => {
    loading.value = true;

    const response = await login({
        email: form.value.email,
        password: form.value.password
    });
    console.log(response);

    const data = response.data.data
    console.log(data);
    loading.value = false;
    if (data) {
        // Show success alert
        swallAlert('success', {
            title: 'Login Berhasil',
            message: 'Selamat datang di sistem tiket',
            btnOk: 'Ok', // Button text
            isNotif: true, // Use notification style (toast) if desired, or false for modal
            callback: () => {
                authStore.user = response;
                authStore.token = data;
                localStorage.setItem('user', JSON.stringify(response));
                localStorage.setItem('token', data);
                router.push({ name: 'dashboard' });
                // console.log('Login Response:', response);
            }
        });
    }
};
</script>

<template>
    <div class="w-full max-w-md mx-auto">
        <div class="mb-8 text-center">
            <h2 class="text-3xl font-bold tracking-tight text-gray-900">Welcome back</h2>
            <p class="mt-2 text-sm text-gray-600">
                Don't have an account?
                <RouterLink :to="{ name: 'register' }" class="font-medium text-primary hover:text-primary-hover">
                    Sign up
                </RouterLink>
            </p>
        </div>

        <form @submit.prevent="handleLogin" class="space-y-6">
            <TextInput v-model="form.email" label="Email address" type="email" placeholder="Enter your email"
                required />

            <TextInput v-model="form.password" label="Password" type="password" placeholder="Enter your password"
                required />

            <div class="flex items-center justify-between">
                <div class="flex items-center">
                    <input id="remember-me" name="remember-me" type="checkbox"
                        class="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary" />
                    <label for="remember-me" class="ml-2 block text-sm text-gray-900">Remember me</label>
                </div>

                <div class="text-sm">
                    <a href="#" class="font-medium text-primary hover:text-primary-hover">Forgot your password?</a>
                </div>
            </div>

            <Button type="submit" variant="primary" block :loading="loading">
                Sign in
            </Button>
        </form>
    </div>
</template>
