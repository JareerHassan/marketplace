"use client";

import { useEffect, useState } from "react";

export default function CookieConsent() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if (typeof window !== "undefined") {
            const consent = localStorage.getItem("cookie_consent");
            if (!consent) setVisible(true);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem("cookie_consent", "accepted");
        setVisible(false);
    };

    const handleReject = () => {
        localStorage.setItem("cookie_consent", "rejected");
        setVisible(false);
    };

    if (!visible) return null;

    return (
        <div className="fixed bottom-0 left-0 w-full bg-[#AEEC27] bg-opacity-80 backdrop-blur-md text-white p-5 z-[9999] shadow-xl">
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">

                <p className="text-sm md:text-base leading-6">
                    We use cookies to enhance your experience.
                    You can accept or reject cookie usage.
                </p>

                <div className="flex gap-4">
                    <button
                        onClick={handleReject}
                        className="bg-white text-black px-5 py-2 rounded 
               shadow-[0_5px_15px_rgba(0,0,0,0.1),0_-2px_4px_rgba(255,255,255,0.4)_inset]
               transition-all duration-300 ease-out
               hover:-translate-y-1 hover:scale-[1.03]
               hover:shadow-[0_12px_25px_rgba(0,0,0,0.18),0_-3px_6px_rgba(255,255,255,0.55)_inset] text-center
               whitespace-nowrap"
                    >
                        Reject
                    </button>

                    <button
                        onClick={handleAccept}
                        className="bg-[#1b163f] text-white px-5 py-2 rounded 
               shadow-[0_5px_15px_rgba(0,0,0,0.1),0_-2px_4px_rgba(255,255,255,0.4)_inset]
               transition-all duration-300 ease-out
               hover:-translate-y-1 hover:scale-[1.03]
               hover:shadow-[0_12px_25px_rgba(0,0,0,0.18),0_-3px_6px_rgba(255,255,255,0.55)_inset] text-center
               whitespace-nowrap"
                    >
                        Accept
                    </button>
                </div>
            </div>
        </div>
    );
}
