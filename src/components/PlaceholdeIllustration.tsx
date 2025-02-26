import placeholder from "../assets/view-3d-cinema-elements.jpg";
import { motion } from "framer-motion";

export default function PlaceholderIllustration() {
  return (
    <div className="flex flex-col items-center justify-center h-96 text-center text-gray-100">
      {/* Illustration */}
      <img
        src={placeholder}
        alt="Upload Placeholder"
        className="w-64 h-40 object-cover rounded-lg shadow-md"
      />

      {/* Animated Text */}
      <motion.p
        className="mt-4 text-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
      >
        Paste a video URL above to get started!
      </motion.p>
    </div>
  );
}
