import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

export const errorAlert = (message) => {
  const MySwal = withReactContent(Swal);
  (
    MySwal.fire({
      icon: 'error',
      title: 'Oops...',
      text: message
    }))
}