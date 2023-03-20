import React from 'react'
import { useMultiChatLogic, MultiChatSocket, MultiChatWindow } from 'react-chat-engine-advanced'
import CustomerHeader from '@/components/customerHeader'
import StandardFormMessage from '@/components/standardFormMessage'

const Chat = () => {
    const chatProps = useMultiChatLogic(
        import.meta.env.VITE_PROJECT_ID,
        "Jessidan",
        "Danny123"
    )
  return (
    <div style={{ flexBasis: '100%'}}>
        <MultiChatSocket {...chatProps}/>
        <MultiChatWindow 
            {...chatProps}
            style={{height: '100vh'}}
            renderChatHeader={(chat) => <CustomerHeader chat={chat} />}
            renderMessage={(props) => {
                return(
                    <StandardFormMessage 
                        props={props} 
                        activeChat={chatProps.chat}
                    />
                )
            }}
        />
    </div>
  )
}

export default Chat