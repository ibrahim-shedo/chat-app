import {MultiChatSocket, MultiChatWindow, useMultiChatLogic, useSingleChatLogic} from 'react-chat-engine-advanced'

const ChatsPage = (props)=>{
    const chatProps = useMultiChatLogic('1be47c9d-2647-4eb8-93f4-3fd69479c200',
     props.user.username,
      props.user.secret
      );
    return(
          <div style={{height: '100vh'}}>
              <MultiChatSocket {...chatProps}/>
              <MultiChatWindow {...chatProps} style={{height: '100%'}}/>
          </div>
    )
}

export default ChatsPage