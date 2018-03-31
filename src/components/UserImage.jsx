import React from 'react';
import Image from 'grommet/components/Image';
import Tip from 'grommet/components/Tip';
import { FloatingMenu, MainButton, ChildButton } from 'react-floating-button-menu';
import MdAdd from 'react-icons/lib/md/add';
import MdClose from 'react-icons/lib/md/close';
import FaUser from 'react-icons/lib/fa/user';
import IoIosChatboxes from 'react-icons/lib/io/ios-chatboxes';

let styleSheet = document.styleSheets[0];
let keyframes =
    `@keyframes pulse {
      0% { box-shadow: 0 0 0 3px #ffd602 }
      50% { box-shadow: 0 0 0 9px #ffd602 }
      100% { box-shadow: 0 0 0 3px #ffd602 }
    }`;

    styleSheet.insertRule(keyframes, styleSheet.cssRules.length);

    let style = {
      animation: 'pulse 2s infinite ease-in-out',
      width: '16px',
      height: '16px',
      background: '#ffd602',
      position: 'absolute',
      borderRadius: '50%',
      top: '34px',
      left: '-4px'
    }
class UserImage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showMenu: false
    }
    this.startChat = this.startChat.bind(this);
    this.acknowledgeStudent = this.acknowledgeStudent.bind(this);
  }

  startChat() {
    console.log('running start chat ')
  }

  acknowledgeStudent() {
    console.log('running acknwlijdf studetn ')
  }

  render( ) {
    const url = this.props.url;
    const handRaised = this.props.handRaised;
    const nextInLine = this.props.nextInLine;
    const clickHandler = this.props.clickHandler;
    let studentImage = 
        <div style={{position: 'relative'}} onClick={this.toggleShowMenu} >  
          <img 
            src={url || "https://ca.slack-edge.com/T2SUXDE72-U8SAGQ1E0-8fa5cea28518-72"} 
            style={{height: '50px', width: '50px', borderRadius: '50%', cursor:'pointer'}}
            
          />
          { handRaised &&
          <div 
          style={
            nextInLine ? style :
            {
              width: '16px',
              height: '16px',
              background: '#ffd602',
              position: 'absolute',
              borderRadius: '50%',
              top: '34px',
              left: '-4px'
            }}
          >
          </div> }
        </div> 
    return (
      <div>
        { handRaised ? 
        <FloatingMenu slideSpeed={500} direction="right" style={{zIndex: '999', position: 'relative', top: '-15px'}}>
          {studentImage}
          <MainButton
            iconResting={MdAdd}
            iconActive={MdClose}
            style={{opacity:'0'}}
            buttonSize="1"
          />
          <ChildButton
            label='On my way!'
            iconButton={FaUser}
            iconColor="black"
            order={1}
            backgroundColor="#ffd602"
            buttonSize="56"
            onClick={this.acknowledgeStudent}
          />
          <ChildButton
            label='open chat'
            iconButton={IoIosChatboxes}
            iconColor="black"
            order={2}
            backgroundColor="#ffd602"
            buttonSize="56"
            onClick={this.startChat}
          />
        </FloatingMenu> : studentImage
    }
      </div>
    )
  }
}

 
export default UserImage;