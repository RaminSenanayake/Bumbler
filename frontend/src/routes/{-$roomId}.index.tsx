import { Button } from '@/components/ui/button'
import { Field, FieldDescription, FieldGroup, FieldLabel, FieldLegend, FieldSet } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import { createFileRoute } from '@tanstack/react-router'
import { MicIcon, MicOffIcon, VideoIcon, VideoOffIcon } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

export const Route = createFileRoute('/{-$roomId}/')({
  component: HomeComponent,
})

function HomeComponent() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [stream, setStream] = useState<MediaStream | null>(null);
  const [micOn, setMicOn] = useState(true);
  const [cameraOn, setCameraOn] = useState(true);
  const [cameraConstraint, setCameraConstraint] = useState<MediaStreamConstraints>({
    video: {
      width: { min: 640, ideal: 1920, max: 1920 },
      height: { min: 480, ideal: 1080, max: 1080 },
    },
    audio: true
  });

  useEffect(() => {
    (async () => {
      try {
        const mediaStream = await navigator.mediaDevices.getUserMedia(cameraConstraint);
        setStream(mediaStream);
        if (videoRef.current) {
          videoRef.current.srcObject = mediaStream;
        }
      } catch (err) {
        if (videoRef.current) {
          videoRef.current.srcObject = null;
        }
      }
    })();
  }, [cameraConstraint]);

  useEffect(() => {
    console.log(cameraConstraint)
  }, [cameraConstraint])

  const toggleMic = () => {
    if (stream) {
      cameraConstraint.audio !== false ? setCameraConstraint((prev) => ({
        ...prev, audio: false
      })) : setCameraConstraint((prev) => ({
        ...prev, audio: true
      }));
      setMicOn(!micOn);
    }
  };

  const toggleCamera = () => {
    if (stream) {
      cameraConstraint.video !== false ? setCameraConstraint((prev) => ({
        ...prev, video: false
      })) : setCameraConstraint((prev) => ({
        ...prev, video: {
          width: { min: 640, ideal: 1920, max: 1920 },
          height: { min: 480, ideal: 1080, max: 1080 },
        }
      }));
      setCameraOn(!cameraOn);
    }
  };

  const { roomId } = Route.useParams()

  return (
    <div className='flex self-center h-screen items-center w-8/12'>
      <div className="flex gap-3 w-full">
        <div className="flex flex-col grow relative max-w-1/2">
          <video ref={videoRef} className='bg-secondary object-cover rounded-xl grow' autoPlay playsInline muted></video>
          <div className="flex flex-row gap-2 self-center bottom-3 absolute">
            <Button variant={micOn ? 'outline' : 'destructive'} onClick={toggleMic} className='rounded-full cursor-pointer size-12'>{micOn ? <MicIcon className='size-6' /> : <MicOffIcon className='size-6' />}</Button>
            <Button variant={cameraOn ? 'outline' : 'destructive'} onClick={toggleCamera} className='rounded-full cursor-pointer size-12'>{cameraOn ? <VideoIcon className='size-6' /> : <VideoOffIcon className='size-6' />}</Button>
          </div>
        </div>
        <Separator orientation='vertical' />
        <FieldSet className='grow self-center'>
          <FieldLegend className='text-3xl! font-light'>Welcome to <span className='font-semibold font-heading'>Bumbler</span></FieldLegend>
          <FieldDescription>Host meetings, Chat with Friends</FieldDescription>
          <FieldGroup>
            <Field>
              <FieldLabel>Name</FieldLabel>
              <Input placeholder='John Doe' />
            </Field>
            <Button>{roomId ? "Join" : "Create"} Meeting</Button>
            {!roomId && <>
              <div className="flex items-center gap-2 px-1">
                <Separator className='flex-1' />
                <span className='shrink-0 text-muted-foreground text-xs'>OR</span>
                <Separator className='flex-1' />
              </div>
              <div className='flex flex-row gap-3'>
                <Input placeholder='Enter a code or link' />
                <Button variant='secondary'>Join</Button>
              </div>
            </>}
          </FieldGroup>
        </FieldSet>
      </div>
    </div>
  )
}