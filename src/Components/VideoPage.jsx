import React from 'react'
import { useParams } from 'react-router-dom'
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';

const VideoPage = () => {

    const {id}= useParams();
    const roomID = id
  let myMeeting = async (element) => {

 // generate Kit Token
 const appID = 490318279 ;
 const serverSecret = "e4898983536f21af59a97cd5770a5990";
 const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomID, Date.now().toString(),"navdeep");

 // Create instance object from Kit Token.
 const zp = ZegoUIKitPrebuilt.create(kitToken);
 // start the call
 zp.joinRoom({
        container: element,
        sharedLinks: [
          {
            name: 'copy link',
            url:
             window.location.protocol + '//' + 
             window.location.host + window.location.pathname +
              '?roomID=' +
              roomID,
          },
        ],
        scenario: {
         mode: ZegoUIKitPrebuilt.OneONoneCall,
        },
   });
  };

  return (
    <div ref={myMeeting}> HomePage</div>
  )
}

export default VideoPage