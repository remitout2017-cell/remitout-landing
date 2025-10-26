"use client";

import { useGoogleConversion } from "@/app/hooks/useGoogleConversion";

interface WhatsAppButtonProps {
    phoneNumber: string; // WhatsApp number with country code, e.g., "919999999999"
    prefilledMessage?: string; // Default message
    label?: string; // Button text
}

export default function WhatsAppButton({
    phoneNumber,
    prefilledMessage = "Hello, I want to inquire about education loans.",
    label = "Chat on WhatsApp",
}: WhatsAppButtonProps) {
    const { triggerConversion } = useGoogleConversion();

    const handleClick = () => {
        // Fire Google Ads conversion
        triggerConversion("WHATSAPP_CLICK", 1);

        // Open WhatsApp link
        const encodedMessage = encodeURIComponent(prefilledMessage);
        const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
        window.open(url, "_blank");
    };

    return (
        <button
            onClick={handleClick}
            className="fixed bottom-5 right-5 bg-green-500 text-white px-5 py-3 rounded-full shadow-lg hover:bg-green-600 transition z-50 cursor-pointer"
        >
            {label}
        </button>
    );
}
