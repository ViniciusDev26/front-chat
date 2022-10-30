import { FormEvent, useState } from "react"
import { useSocketIoContext } from "../../../hooks/useSocketIoContext"
import { Container } from "./styles"

export const ChatInput = () => {
  const [message, setMessage] = useState('')
  const { socket } = useSocketIoContext();

  function handleSubmit(e: FormEvent) {
    e.preventDefault()

    socket.emit('newMessage', message)
  }

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="write the message"
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        />

        <button type="submit">Send</button>
      </form>
    </Container>
  )
}