import { useState } from "react";
import { motion } from "framer-motion";
import * as React from "react";

interface TiltImageProps {
    src: string;
    alt: string;
}

export const TiltImage = ({ src, alt }: TiltImageProps) => {
    const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0, translateZ: 0 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width - 0.5) * 25;
        const y = ((e.clientY - rect.top) / rect.height - 0.5) * 25;
        const z = Math.abs(x) * 5;
        setTilt({ rotateX: -y, rotateY: x, translateZ: z });
    };

    const handleMouseLeave = () => {
        setTilt({ rotateX: 0, rotateY: 0, translateZ: 0 });
    };

    return (
        <div
            className="rounded-lg shadow-xl"
            style={{ perspective: 1000 }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            <motion.img
                src={src}
                alt={alt}
                className="w-full h-full object-cover rounded-lg"
                animate={{
                    rotateX: tilt.rotateX,
                    rotateY: tilt.rotateY,
                    translateZ: tilt.translateZ,
                    boxShadow: "10px 10px 30px rgba(0, 0, 0, 0.5)",
                }}
                transition={{ type: "spring", stiffness: 100, damping: 10 }}
                style={{ transformStyle: "preserve-3d", willChange: "transform" }}
            />
        </div>
    );
};

export default function MainPageHeroImage() {
    return (
        <div className="relative rounded-2xl w-full max-w-4xl mx-auto transform hover:scale-[1.01] transition-transform duration-300">
            <TiltImage src="./mainPage/background.jpg" alt="Hero Image" />
        </div>
    );
}
