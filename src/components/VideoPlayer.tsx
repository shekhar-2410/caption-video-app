import { useState, useEffect, useRef } from "react";
import ReactPlayer from "react-player";

export default function VideoPlayer({
  videoUrl,
  captions,
  setPlayerRef,
}: {
  videoUrl: string;
  captions: { text: string; time: number }[];
  setPlayerRef: (ref: ReactPlayer | null) => void;
}) {
  const playerRef = useRef<ReactPlayer | null>(null);
  const [currentCaption, setCurrentCaption] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      if (playerRef.current) {
        const currentTime = playerRef.current.getCurrentTime();
        const activeCaption = captions.find(
          (c) => Math.floor(c.time) === Math.floor(currentTime)
        );
        setCurrentCaption(activeCaption ? activeCaption.text : "");
      }
    }, 500);
    return () => clearInterval(interval);
  }, [captions]);

  return (
    <div className="relative">
      <ReactPlayer
        ref={(player) => {
          playerRef.current = player;
          setPlayerRef(player);
        }}
        url={videoUrl}
        controls
        width="100%"
        height="360px"
      />

      {/* Captions Display */}
      {currentCaption && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black text-white px-4 py-2 rounded">
          {currentCaption}
        </div>
      )}
    </div>
  );
}
