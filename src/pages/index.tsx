import { Chat } from "../components/Chat";
import { SocketIoProvider } from "../contexts/SocketIoContext";

export default function Home() {
  return (
    <SocketIoProvider>
      <Chat />
    </SocketIoProvider>
  )
}
