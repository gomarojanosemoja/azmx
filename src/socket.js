
import { reactive } from "vue";
import { io } from "socket.io-client";

export const state = reactive({
  connected: false,
  appointmentEvents: []
});




console.log('URL',process.env.VUE_APP_SOCKET_ENDPOINT);
export const socket = io(process.env.VUE_APP_SOCKET_ENDPOINT, {
  autoConnect: false
});


socket.on("connect", () => {
  console.log('se conecto');
    state.connected = true;
  });
  
  socket.on("disconnect", () => {
    state.connected = false;
    console.log('se desconecto');
  });



//more events On
