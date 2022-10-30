import { createContext, Dispatch, SetStateAction, useEffect, useState } from "react";
import io, { Socket } from "socket.io-client"

type SocketIoContextData = {
  isConnected: boolean,
  socket: Socket
}

export const SocketIoContext = createContext<SocketIoContextData>({} as SocketIoContextData)

export const SocketIoProvider = ({ children }) => {
  const [isConnected, setIsConnected] = useState(false)
  const socket = io(process.env.BACKEND_HOST)

  useEffect(() => {
    socket.on('connect', () => {
      setIsConnected(true);
    });

    socket.on('disconnect', () => {
      setIsConnected(false);
    });

    return () => {
      socket.off('connect');
      socket.off('disconnect');
      socket.off('message');
    };
  }, [])

  return (
    <SocketIoContext.Provider value={{
      isConnected,
      socket
    }}>
      {children}
    </SocketIoContext.Provider>
  )
}