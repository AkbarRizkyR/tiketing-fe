import { swallAlert } from '@/plugins/sweetalert2'
import { useAuthorizationStore } from '@/stores/authorization'

export default async function apiCall(apiCallback) {
    const auth = useAuthorizationStore()
    try {
        const result = await apiCallback()
        return result
    } catch (error) {
        if (error.response && error.response.status === 401) {
            swallAlert('warning', {
                title: 'Sesi Anda Telah Habis',
                message: 'Untuk melanjutkan aktivitas, silakan login kembali',
                btnOk: 'Logout',
                callback: () => {
                    auth.clearSession();
                    window.location.href = '/login';
                },
            })
        } else if (error.response && error.response.status === 400) {
            swallAlert('error', {
                isNotif: true,
                message: error.response?.data?.message || 'Terjadi kesalahan pada permintaan Anda.',
                btnOk: 'Ok',
            })
            return
        } else if (error.response && error.response.status === 500) {
            window.location.reload()
            return
        } else {
            swallAlert('error', {
                isNotif: true,
                message: error.message || 'Terjadi kesalahan sistem',
                btnOk: 'Ok',
            })
            // throw error // Error handled by SweetAlert, no need to re-throw
        }
    }
}
