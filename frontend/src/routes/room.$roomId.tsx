import VideoInterface from '@/components/videointerface';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute("/room/$roomId")({
    component: Room
})

function Room() {
    return (
        <>
            <VideoInterface />
            <div className='h-18 border-t'>
                controls
            </div>
        </>
    )
}