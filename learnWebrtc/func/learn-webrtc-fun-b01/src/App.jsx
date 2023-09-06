import {useRef, useEffect} from 'react';
import io from 'socket.io-client';


const socket = io(
  '/webRTCPeers',
  {
    path: '/webrtc',
  }
)

function App() {
  const localVideoRef = useRef();
  const remoteVideoRef = useRef();
  const pc = useRef(new RTCPeerConnection(null));
  const textRef = useRef();
  const candicates = useRef([]);


  useEffect(()=> {
    //print connection status with server
    socket.on('connection-success', success => {
      console.log(success);
    })

    //print the sdp to get from server
    socket.on('sdp', data => {
      console.log(data);
      textRef.current.value = JSON.stringify(data.sdp);
    });

    //add another candicate on call
    socket.on('candicate', candicate => {
      console.log(candicate);
      candicates.current = [ ...candicates.current, candicate];
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

  const createOffer = () => {
    pc.current.createOffer({
      offerToReceiveAudio: 1,
      offerToReceiveVideo: 1,
    }).then((sdp) => {
      console.log(JSON.stringify(sdp));
      pc.current.setLocalDescription(sdp);

      // send the sdp on the server
      socket.emit('sdp', {
        sdp, 
      });

    }).catch((e) => console.log(e))
  }

  const createAnswer = () => {
    pc.current.createAnswer({
      offerToReceiveAudio: 1,
      offerToReceiveVideo: 1,
    }).then((sdp) => {
      console.log(JSON.stringify(sdp));
      pc.current.setLocalDescription(sdp);

      //send the answer sdp to the offering peer
      socket.emit('sdp', {
        sdp,
      });
    }).catch((e) => console.log(e))
  }

  const setRemoteDescription = () => {
    //get value from the text editor
    const sdp = JSON.parse(textRef.current.value);
    console.log(sdp);

    pc.current.setRemoteDescription(new RTCSessionDescription(sdp));
  }

  const addCandicate = () => {
    // const candicate = JSON.parse(textRef.current.value);
    // console.log('Adding Candicate...', candicate);
    
    candicates.current.forEach(candicate => {
      console.log(candicate);
      pc.current.addIceCandidate(new RTCIceCandidate(candicate));
    })

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

      <button onClick={createOffer}>
        Create Offer
      </button>

      <button onClick={createAnswer}>
        Create Answer
      </button>

      <br />
        <textarea name="" ref={textRef} cols="30" rows="10"></textarea>
      <br />

      <button onClick={setRemoteDescription}>
        Set Remote Description
      </button>

      <button onClick={addCandicate}>
        Add a Candicates
      </button>
    </div>
    </>
  );
}

export default App;
