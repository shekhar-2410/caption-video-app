import { motion } from "framer-motion";

const FloatingParticles = () => {
  const particles = Array.from({ length: 10 }, (_, i) => (
    <motion.div
      key={i}
      className="absolute bg-white rounded-full opacity-20"
      style={{
        width: `${Math.random() * 10 + 10}px`,
        height: `${Math.random() * 10 + 10}px`,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
      }}
      animate={{
        y: [0, -20, 0],
        opacity: [0.3, 1, 0.3],
      }}
      transition={{
        duration: Math.random() * 5 + 3,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  ));

  return <>{particles}</>;
};

export default FloatingParticles;
