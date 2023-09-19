import gptLogo from '../assets/chatgpt.svg'
import addBtn from '../assets/add-30.png';
import msgIcon from '../assets/message.svg';
import home from '../assets/home.svg'
import saved from '../assets/bookmark.svg'
import rocket from '../assets/rocket.svg'

export default () => {
    return(
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
    )
}