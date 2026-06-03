import express, { json, type Request, type Response } from "express";
import { Member, Room } from "./models.ts";
import cors from 'cors';
import { type PeerConfig, RTCPeerConnection, RTCSessionDescription, type RTCTrackEvent } from "werift";
import { randomUUID } from "crypto";

const server = express();
server.use(json())
server.use(cors())

const rooms: Map<string, Room> = new Map();

const peerConfig: Partial<PeerConfig> = {
    iceServers: [{ urls: "stun:stun1.l.google.com:19302" }, { urls: "stun:stun2.l.google.com:19302" }]
}

server.post("/createRoom", async (req: Request, res: Response) => {
    const roomId = randomUUID()
    const room = new Room(roomId);

    const peer = new RTCPeerConnection(peerConfig);
    peer.ontrack = (e) => handleTrackEvent(e, peer, room);
    const { sdp, type } = req.body
    const remoteDescription = new RTCSessionDescription(sdp, type);
    await peer.setRemoteDescription(remoteDescription);
    const answer = await peer.createAnswer();
    await peer.setLocalDescription(answer);
    const payload = {
        roomId,
        sdp: peer.localDescription
    }
    rooms.set(roomId, room);
    res.status(201).json(payload);
});

server.post("/joinRoom/:roomId", async (req, res) => {
    if (rooms.has(req.params.roomId)) {
        const room = rooms.get(req.params.roomId)!;

        const peer = new RTCPeerConnection(peerConfig);
        peer.ontrack = (e) => handleTrackEvent(e, peer, room)
        const { sdp, type } = req.body
        const remoteDescription = new RTCSessionDescription(sdp, type);
        await peer.setRemoteDescription(remoteDescription);
        const answer = await peer.createAnswer();
        await peer.setLocalDescription(answer);
        const payload = {
            sdp: peer.localDescription
        }
        res.json(payload);
    }
});

const handleTrackEvent = (e: RTCTrackEvent, peer: RTCPeerConnection, room: Room) => {
    const memberId = randomUUID();
    room.members.push(new Member(memberId, peer, e.streams[0]));
    room.members.filter((member) => member.id !== memberId).forEach((member) => {
        member.connection.addTrack(e.track, e.streams[0]);
        member.stream.getTracks().forEach((track) => peer.addTrack(track, member.stream));
    });
}

server.listen(8000, () => {
    console.log("server is running on http://localhost:8000")
});