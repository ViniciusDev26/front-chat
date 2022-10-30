import { Message } from "../../../types/Message";
import { Container } from "./styles";

type ChatHistoryProps = {
  messages: Message[]
}
export const ChatHistory = ({messages}: ChatHistoryProps) => {
  return (
    <Container>
      {messages.map(msg => (
        <p key={msg.id}>{msg.value}</p>
      ))}
    </Container>
  )
}