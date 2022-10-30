import { useContext } from "react"
import { SocketIoContext } from "../contexts/SocketIoContext"

export const useSocketIoContext = () => {
  const socketContext = useContext(SocketIoContext)

  return socketContext
}