import { useState } from "react";
import GlobalMessageContext from "./globalMessage.context";

interface Message {
    message: string,
    severity: "error" | "info" | "success" | "warning",
}

class MessageContext {
    message: Message;
    setMessage: Function;
}

const GlobalMessageContextProvider = (props) => {
    const [message, setMessage] = useState<Message>();
    const context: MessageContext = new MessageContext();
    context.message = message;
    context.setMessage = setMessage;

    return (<GlobalMessageContext.Provider
        value={context}
    >{props.children}</GlobalMessageContext.Provider>);
}

export default GlobalMessageContextProvider