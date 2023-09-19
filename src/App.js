import './App.css';
import gptLogo from './assets/chatgpt.svg'
import addBtn from './assets/add-30.png';
import msgIcon from './assets/message.svg';
import home from './assets/home.svg'
import saved from './assets/bookmark.svg'
import rocket from './assets/rocket.svg'
import sendBtn from './assets/send.svg'
import userIcon from './assets/user-icon.png'
import gptImageLogo from './assets/chatgptLogo.svg'


function App() {
  return (
    <div className="App">
      <div className="sideBar">
        <div className='upperSide'>
          <div className='upperSideTop'>
            <img src={gptLogo} alt="chatgpt logo" className="logo" />
            <span className='brand'> ChatGPT</span>
          </div>
          <button className="midBtn"><img className="addBtn" src={addBtn} alt="new chat" /> New Chat</button>

          <div className='upperSideBottom'>

            <button className="query"><img src={msgIcon} alt="" />What is programming?</button>
            <button className="query"><img src={msgIcon} alt="" />What is programming?</button>
            <button className="query"><img src={msgIcon} alt="" />What is programming?</button>

          </div>

        </div>
        <div className="lowerSide">
          <div className="listItems"><img src={home} alt="" className="listitemsImgs" /> Home </div>
          <div className="listItems"><img src={saved} alt="" className="listitemsImgs" /> Saved </div>
          <div className="listItems"><img src={rocket} alt="" className="listitemsImgs" /> Upgrade to Pro </div>
        </div>
      </div>
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
    </div>
  );
}

export default App;
