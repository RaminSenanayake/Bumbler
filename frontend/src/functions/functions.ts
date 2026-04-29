import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "http://localhost:8000"
})

export async function init() {
    const localStream = await navigator.mediaDevices.getUserMedia({
        video: {
            width: { min: 640, ideal: 1920, max: 1920 },
            height: { min: 480, ideal: 1080, max: 1080 }
        }
    })
    const peer = createPeer();
    localStream.getTracks().forEach(track => peer.addTrack(track, localStream));
    return { peer, localStream };
}

function createPeer(): RTCPeerConnection {
    const peer = new RTCPeerConnection({
        iceServers: [
            {
                urls: ['stun:stun1.l.google.com:19302', 'stun:stun2.l.google.com:19302']
            }
        ]
    });
    peer.onnegotiationneeded = () => handleNegotitationNeededEvent(peer);
    console.log("peer created");
    return peer;
}

async function handleNegotitationNeededEvent(peer: RTCPeerConnection) {
    const offer = await peer.createOffer();
    await peer.setLocalDescription(offer);
    console.log("local description set");
    try {
        const { data } = await axiosInstance.post("/createRoom/123", peer.localDescription);
        const remoteDescription = new RTCSessionDescription(data.sdp);
        peer.setRemoteDescription(remoteDescription);
        console.log("remote description set");
    } catch (error) {
        console.log(error);
    }
}