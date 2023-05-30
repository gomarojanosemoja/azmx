
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

export default {
    methods: {
        showNotificationInfo(msj){
            toast.info(msj);

        },
        showNotificationWarning(msj){
            toast.warning(msj)
        },
        showNotificationError(msj){
            toast.error(msj);
        },
        showNotificationSuccess(msj){
            toast.success(msj);
        }
    },
}