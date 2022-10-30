import { useState } from "react"
import { useSocketIoContext } from "../../hooks/useSocketIoContext"
import { Message } from "../../types/Message"
import { ChatHistory } from "./ChatHistory"
import { ChatInput } from "./ChatInput"
import { Container } from "./styles"

export const Chat = () => {
  const [messages, setMessages] = useState<Message[]>([])
  
  const { socket } = useSocketIoContext()

  socket.on('message', msg => {
    setMessages(oldState => {
      const alreadyExists = messages.find(message => message.id === msg.id);
      console.log(msg.id, messages, alreadyExists)
      if (alreadyExists) return

      return [...oldState, msg]
    })
  })

  return (
    <Container>
      <h2>Chat</h2>

      <ChatHistory messages={messages} />
      <ChatInput />
    </Container>
  )
}