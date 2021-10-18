import { defineComponent, h } from 'vue'
import { io } from "socket.io-client";

export default defineComponent({
  render() {
    return h('h1', 'my-lib');
  },
  created() {
    const socket = io('localhost:3000', {
      path: '/socket.io/ws',
      transports: ['websocket'],
    });

    console.log(socket);
  }
})
