import Notifications from "./notifications";
export default {
    methods: {
        ...Notifications.methods,
        notificationsErrors(err){
            if(err.response.status){
                if(err.response.status === 400){
                    if(Array.isArray(err.response.data.errors)){
                        err.response.data.errors.forEach(element => {
                            this.showNotificationError(element.msg);
                        });
                        
                    }else if(err.response.data.msj){
                        this.showNotificationError(err.response.data.msj);
                      }
                }else{
                    this.showNotificationError('¡Lo sentimos! Ocurrio un Error interno, contacte a soporte');
                  }
            }
        }
    },
}