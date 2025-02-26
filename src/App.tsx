import { useState } from "react";
import VideoPlayer from "./components/VideoPlayer";
import CaptionInput from "./components/CaptionInput";
import CaptionsList from "./components/CaptionList";
import PlaceholderIllustration from "./components/PlaceholdeIllustration";
import { motion } from "framer-motion";

export default function App() {
  const [videoUrl, setVideoUrl] = useState("");
  const [captions, setCaptions] = useState<{ text: string; time: number }[]>(
    []
  );
  const [playerRef, setPlayerRef] = useState<any>(null);

  const addCaption = (text: string) => {
    if (!playerRef) return;
    const currentTime = playerRef.getCurrentTime();
    setCaptions((prev) => [...prev, { text, time: currentTime }]);
  };

  const handleDeleteCaption = (index: number) => {
    setCaptions(captions.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500 p-6 text-white">
      {/* Animated Heading */}
      <motion.h1
        className="text-4xl md:text-5xl font-bold mb-4 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Interactive Video Captioning
      </motion.h1>

      {/* Animated Subtitle */}
      <motion.p
        className="text-lg text-center mb-6 px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Upload a video and start adding captions to enhance your content!
      </motion.p>

      {/* Video URL Input */}
      <input
        type="text"
        placeholder="Enter hosted video URL..."
        className="w-full max-w-lg p-3 border rounded-lg text-black mb-6"
        value={videoUrl}
        onChange={(e) => setVideoUrl(e.target.value)}
      />

      {/* Video Player or Placeholder */}
      {videoUrl ? (
        <div className="w-full flex justify-center">
          <div className="w-full max-w-3xl">
            <VideoPlayer
              videoUrl={videoUrl}
              captions={captions}
              setPlayerRef={setPlayerRef}
            />
          </div>
        </div>
      ) : (
        <PlaceholderIllustration />
      )}

      {/* Caption Input & List */}
      {videoUrl && (
        <div className="w-full max-w-2xl mt-6">
          <CaptionInput addCaption={addCaption} />
          <div className="mt-3">
            <CaptionsList
              captions={captions}
              onSeek={() => {}}
              onDelete={handleDeleteCaption}
            />
          </div>
        </div>
      )}
    </div>
  );
}
