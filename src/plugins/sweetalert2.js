import Swal from 'sweetalert2'

export const swallAlert = (icon, { 
    title, 
    message, 
    btnOk = 'Ok', 
    callback, 
    isNotif = false, 
    showConfirmButton = true, 
    timer = 3000 
}) => {
    if (isNotif) {
        Swal.fire({
            icon: icon,
            title: title,
            text: message,
            confirmButtonText: btnOk,
            showConfirmButton: showConfirmButton,
            timer: showConfirmButton ? undefined : timer,
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
            showConfirmButton: showConfirmButton,
            allowOutsideClick: false,
            allowEscapeKey: false
        }).then((result) => {
            if (result.isConfirmed && callback) {
                callback()
            }
        })
    }
}
