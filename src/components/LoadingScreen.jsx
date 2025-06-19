import { useEffect } from "react";
import { useState } from "react"; 
// 4.2k (gzipper: 1.8k)

export const LoadingScreen = ({ onComplete }) => {
    const [text, setText] = useState("");
    const fullText = "Loading";

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setText(fullText.substring(0, index))
            index++;

            if (index > fullText.length) {
                clearInterval(interval)
            };
            setTimeout(() => {
                onComplete();
            },
            2000);

        }, 100);

        return () => clearInterval(interval);

    },[onComplete]);




    return (
        <div class="fixed inset-0 z-50 bg-black text-gray-100 flex flex-col items-center justify-center">
            <div class="mb-4 text-4xl font-mono font-bold"> {text} <span class="animate-blink ml-1"> | </span></div>

            <div class="w-[200px] h-[2px] bg-gray-800 rounded relative overflow-hidden">
                <div class="w-[40%] h-full bg-blue-500 shadow-[0_0_15px_#3b82f6] animate-loading-bar">
                    {""}
                </div>
            </div>
        </div>
    );
};