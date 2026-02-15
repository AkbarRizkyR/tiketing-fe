import Swal from 'sweetalert2'

export const swallAlert = (icon, { title, message, btnOk, callback, isNotif }) => {
    if (isNotif) {
        Swal.fire({
            icon: icon,
            title: title,
            text: message,
            confirmButtonText: btnOk,
            timer: 3000,
            timerProgressBar: true
        }).then((result) => {
            if ((result.isConfirmed || result.dismiss === Swal.DismissReason.timer) && callback) {
                callback()
            }
        })
    } else {
        Swal.fire({
            icon: icon,
            title: title,
            text: message,
            confirmButtonText: btnOk,
            allowOutsideClick: false,
            allowEscapeKey: false
        }).then((result) => {
            if (result.isConfirmed && callback) {
                callback()
            }
        })
    }
}
