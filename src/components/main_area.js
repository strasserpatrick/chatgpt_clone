import sendBtn from '../assets/send.svg'
import userIcon from '../assets/user-icon.png'
import gptImageLogo from '../assets/chatgptLogo.svg'

export default () => {
    return(
        <div className="main">
        <div className="chats">

          <div className='chat'>
            <img src={userIcon} alt=""/>
            <p className="txt">bli bla blub bla bla bla</p>
          </div>

          <div className='chat bot'>
            <img src={gptImageLogo} alt=""/>
            <p className="txt">bli bla blub bla bla bla</p>
          </div>
          

        </div>
        <div className="chatFooter">
          <div className="inp">
            <input type="text" placeholder='Send a message' />
            <button className="send"><img src={sendBtn} alt="send button" /></button>
          </div>
          <p>ChatGPT may product incorrect results.</p>
        </div>
      </div>
    )
}