import { useRef } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import { init } from "@/functions/functions";

export default function VideoInterface() {

  const myVideo1 = useRef<HTMLVideoElement>(null);
  const myVideo2 = useRef<HTMLVideoElement>(null);
  const myVideo3 = useRef<HTMLVideoElement>(null);
  const myVideo4 = useRef<HTMLVideoElement>(null);
  const myVideo5 = useRef<HTMLVideoElement>(null);
  const myVideo6 = useRef<HTMLVideoElement>(null);
  const myVideo7 = useRef<HTMLVideoElement>(null);
  const myVideo8 = useRef<HTMLVideoElement>(null);
  const myVideo9 = useRef<HTMLVideoElement>(null);
  const myVideo10 = useRef<HTMLVideoElement>(null);
  const myVideo11 = useRef<HTMLVideoElement>(null);
  const myVideo12 = useRef<HTMLVideoElement>(null);
  const myVideo13 = useRef<HTMLVideoElement>(null);
  const myVideo14 = useRef<HTMLVideoElement>(null);
  const myVideo15 = useRef<HTMLVideoElement>(null);
  const myVideo16 = useRef<HTMLVideoElement>(null);
  const myVideo17 = useRef<HTMLVideoElement>(null);
  const myVideo18 = useRef<HTMLVideoElement>(null);
  const myVideo19 = useRef<HTMLVideoElement>(null);
  const myVideo20 = useRef<HTMLVideoElement>(null);
  const myVideo21 = useRef<HTMLVideoElement>(null);

  init().then(({ peer, localStream }) => {
    myVideo1.current!.srcObject = localStream;
    myVideo2.current!.srcObject = localStream;
    myVideo3.current!.srcObject = localStream;
    myVideo4.current!.srcObject = localStream;
    myVideo5.current!.srcObject = localStream;
    myVideo6.current!.srcObject = localStream;
    myVideo7.current!.srcObject = localStream;
    myVideo8.current!.srcObject = localStream;
    myVideo9.current!.srcObject = localStream;
    myVideo10.current!.srcObject = localStream;
    myVideo11.current!.srcObject = localStream;
    myVideo12.current!.srcObject = localStream;
    myVideo13.current!.srcObject = localStream;
    myVideo14.current!.srcObject = localStream;
    myVideo15.current!.srcObject = localStream;
    myVideo16.current!.srcObject = localStream;
    myVideo17.current!.srcObject = localStream;
    myVideo18.current!.srcObject = localStream;
    myVideo19.current!.srcObject = localStream;
    myVideo20.current!.srcObject = localStream;
    myVideo21.current!.srcObject = localStream;
  });

  return (
    <Carousel className="grow place-self-center flex items-center max-w-11/12 p-3">
      <CarouselContent>
        <CarouselItem className='grid grid-flow-row grid-cols-6 gap-2 place-items-center'>
          <div className="bg-gray-800 rounded-xl place-items-center col-span-2">
            <video ref={myVideo1} autoPlay className='object-cover rounded-[inherit]'></video>
          </div>
          <div className="bg-gray-800 rounded-xl place-items-center col-span-2">
            <video ref={myVideo2} autoPlay className='object-cover rounded-[inherit]'></video>
          </div>
          <div className="bg-gray-800 rounded-xl place-items-center col-span-2">
            <video ref={myVideo3} autoPlay className='object-cover rounded-[inherit]'></video>
          </div>
          <div className="bg-gray-800 rounded-xl place-items-center col-span-2">
            <video ref={myVideo4} autoPlay className='object-cover rounded-[inherit]'></video>
          </div>
          <div className="bg-gray-800 rounded-xl place-items-center col-span-2">
            <video ref={myVideo5} autoPlay className='object-cover rounded-[inherit]'></video>
          </div>
          <div className="bg-gray-800 rounded-xl place-items-center col-span-2">
            <video ref={myVideo6} autoPlay className='object-cover rounded-[inherit]'></video>
          </div>
        </CarouselItem>
        <CarouselItem className='grid grid-flow-row grid-cols-6 gap-2 place-items-center'>
          <div className="bg-gray-800 rounded-xl place-items-center col-span-2">
            <video ref={myVideo7} autoPlay className='object-cover rounded-[inherit]'></video>
          </div>
          <div className="bg-gray-800 rounded-xl place-items-center col-span-2">
            <video ref={myVideo8} autoPlay className='object-cover rounded-[inherit]'></video>
          </div>
          <div className="bg-gray-800 rounded-xl place-items-center col-span-2">
            <video ref={myVideo9} autoPlay className='object-cover rounded-[inherit]'></video>
          </div>
          <div className="bg-gray-800 rounded-xl place-items-center col-span-2 col-start-2">
            <video ref={myVideo10} autoPlay className='object-cover rounded-[inherit]'></video>
          </div>
          <div className="bg-gray-800 rounded-xl place-items-center col-span-2">
            <video ref={myVideo11} autoPlay className='object-cover rounded-[inherit]'></video>
          </div>
        </CarouselItem>
        <CarouselItem className='grid grid-flow-row grid-cols-6 gap-2 place-items-center'>
          <div className="bg-gray-800 rounded-xl place-items-center col-span-3">
            <video ref={myVideo12} autoPlay className='object-cover w-8/12'></video>
          </div>
          <div className="bg-gray-800 rounded-xl place-items-center col-span-3">
            <video ref={myVideo13} autoPlay className='object-cover w-8/12'></video>
          </div>
          <div className="bg-gray-800 rounded-xl place-items-center col-span-3">
            <video ref={myVideo14} autoPlay className='object-cover w-8/12'></video>
          </div>
          <div className="bg-gray-800 rounded-xl place-items-center col-span-3">
            <video ref={myVideo15} autoPlay className='object-cover w-8/12'></video>
          </div>
        </CarouselItem>
        <CarouselItem className='grid grid-flow-row grid-cols-6 gap-2'>
          <div className="bg-gray-800 rounded-xl place-items-center content-center col-span-2">
            <video ref={myVideo16} autoPlay className='object-cover aspect-square'></video>
          </div>
          <div className="bg-gray-800 rounded-xl place-items-center content-center col-span-2">
            <video ref={myVideo17} autoPlay className='object-cover aspect-square'></video>
          </div>
          <div className="bg-gray-800 rounded-xl place-items-center content-center col-span-2">
            <video ref={myVideo18} autoPlay className='object-cover aspect-square'></video>
          </div>
        </CarouselItem>
        <CarouselItem className='grid grid-flow-row grid-cols-6 gap-2'>
          <div className="bg-gray-800 rounded-xl place-items-center content-center col-span-3">
            <video ref={myVideo19} autoPlay className='object-cover'></video>
          </div>
          <div className="bg-gray-800 rounded-xl place-items-center content-center col-span-3">
            <video ref={myVideo20} autoPlay className='object-cover'></video>
          </div>
        </CarouselItem>
        <CarouselItem className='grid grid-flow-row grid-cols-6 gap-2 place-items-center'>
          <div className="bg-gray-800 rounded-xl place-items-center col-span-full">
            <video ref={myVideo21} autoPlay className='object-cover w-8/12'></video>
          </div>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
