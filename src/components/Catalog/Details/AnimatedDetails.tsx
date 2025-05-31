import React, { useRef, useState } from "react";

interface AnimatedDetailsProps {
    label?: string;
    children: React.ReactNode;
}

const AnimatedDetails: React.FC<AnimatedDetailsProps> = ({ label = "Разделы", children }) => {
    const [open, setOpen] = useState(true);
    const contentRef = useRef<HTMLDivElement>(null);

    return (
        <div className="w-fit">
            <button
                type="button"
                className="flex items-center cursor-pointer text-xl text-gray-900 select-none w-full"
                onClick={() => setOpen((prev) => !prev)}
                aria-expanded={open}
            >
                <span className="mr-2">{label}</span>
                <div className="flex-1 h-px bg-gray-200 mx-2 min-w-[100px]" />
                <svg
                    className={`w-5 h-5 text-gray-700 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
                </svg>
            </button>
            <div
                ref={contentRef}
                style={{
                    maxHeight: open ? contentRef.current?.scrollHeight : 0,
                }}
                className={`overflow-hidden transition-all duration-500`}
            >
                <div className="mt-2">{children}</div>
            </div>
        </div>
    );
};

export default AnimatedDetails;