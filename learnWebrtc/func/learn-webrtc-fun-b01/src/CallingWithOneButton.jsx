import {useRef, useEffect, useState} from 'react';
import io from 'socket.io-client';


const socket = io(
  '/webRTCPeers',
  {
    path: '/webrtc',
  }
)

function CallingWithOneButton() {
  const localVideoRef = useRef();
  const remoteVideoRef = useRef();
  const pc = useRef(new RTCPeerConnection(null));
  const textRef = useRef();
//   const candicates = useRef([]);

const [offerVisible, setOfferVisible] = useRef(true);
const [answerVisible, setAnswerVisible] = useRef(false);
const [status, setStatus] = useState('Make a call now')


  useEffect(()=> {
    //print connection status with server
    socket.on('connection-success', success => {
      console.log(success);
    })

    //print the sdp to get from server
    socket.on('sdp', data => {
      console.log(data);
      pc.current.setRemoteDescription(new RTCSessionDescription(data.sdp));
      textRef.current.value = JSON.stringify(data.sdp);

      if (data.sdp.type === 'offer') {
        setOfferVisible(false);
        setAnswerVisible(true);
        setStatus('Incoming Call...');
      } else {
        setStatus("Call established")
      }
    });

    //add another candicate on call
    socket.on('candicate', candicate => {
      console.log(candicate);
    //   candicates.current = [ ...candicates.current, candicate];
      pc.current.addIceCandidate(new RTCIceCandidate(candicate));
    })

    const constranits = {
      audio: false,
      video: true,
    }

      navigator.mediaDevices.getUserMedia(constranits).then((stream) => {
        //display video
        localVideoRef.current.srcObject = stream;

        stream.getTracks().forEach((track) => {
          _pc.addTrack(track, stream);
        })
      }).catch((e) => {
        console.log('getUserMedia Error', e);
      })

      const _pc = new RTCPeerConnection(null);

      _pc.onicecandidate = (e) => {
        if (e.candidate) {
          console.log(JSON.stringify(e.candidate));

          socket.emit('candicate', e.candidate);
        }
      }

      _pc.oniceconnectionstatechange = (e) =>{
        console.log(e);
      }

      _pc.ontrack = (e) => {
        // we got remote a stream
        remoteVideoRef.current.srcObject = e.streams[0]
      }

      pc.current = _pc;
  }, [])

  const sendToPeer = (eventType, payload) => {
    socket.emit(eventType, payload);
  } 

  const processSDP = (sdp) => {
    console.log(JSON.stringify(sdp));
    pc.current.setLocalDescription(sdp);

    sendToPeer('sdp', {sdp})
  }

  const createOffer = () => {
    pc.current.createOffer({
      offerToReceiveAudio: 1,
      offerToReceiveVideo: 1,
    }).then((sdp) => {
      // send the sdp on the server
        processSDP(sdp);
        setOfferVisible(false);
        setStatus("Calling...")
    }).catch((e) => console.log(e))
  }

  const createAnswer = () => {
    pc.current.createAnswer({
      offerToReceiveAudio: 1,
      offerToReceiveVideo: 1,
    }).then((sdp) => {
      //send the answer sdp to the offering peer
      socket.emit('sdp', {
        sdp,
      });
      setAnswerVisible(false);
      setStatus("Call established");

    }).catch((e) => console.log(e))
  }

//   const setRemoteDescription = () => {
//     //get value from the text editor
//     const sdp = JSON.parse(textRef.current.value);
//     console.log(sdp);

//     pc.current.setRemoteDescription(new RTCSessionDescription(sdp));
//   }

//   const addCandicate = () => {
//     // const candicate = JSON.parse(textRef.current.value);
//     // console.log('Adding Candicate...', candicate);
    
//     candicates.current.forEach(candicate => {
//       console.log(candicate);
//       pc.current.addIceCandidate(new RTCIceCandidate(candicate));
//     })

//   }

const showHideButtons =() => {
    if (offerVisible) {
        return (
            <>
                <div>
                    <button  onClick={createOffer}>
                    Call
                    </button>
                </div>
            </>
        )
    } else if (answerVisible) {
        return (
            <>
                <div>
                    <button  onClick={createAnswer}>
                    Answer
                    </button>
                </div>
            </>
        )
    }
}

  return (
    <>
      <div style={{
      margin: 10
    }}>
      <video ref={localVideoRef} autoPlay 
        style={{
          width: 240, height: 240,
          margin: 5, background: 'black'
        }}
      ></video>
      <video ref={remoteVideoRef} autoPlay 
        style={{
          width: 240, height: 240,
          margin: 5, background: 'black'
        }}
      ></video>

      <br />

      {/* <button onClick={createOffer}>
        Create Offer
      </button>

      <button onClick={createAnswer}>
        Create Answer
      </button>

      <br /> */}

      {
        showHideButtons()
      }

      <div>{status}</div>

        <textarea name="" ref={textRef} cols="30" rows="10"></textarea>
      {/* <br />

      <button onClick={setRemoteDescription}>
        Set Remote Description
      </button>

      <button onClick={addCandicate}>
        Add a Candicates
      </button> */}
    </div>
    </>
  );
}

export default CallingWithOneButton;
