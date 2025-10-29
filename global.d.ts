declare global {
    interface Window {
        gtag?: (command: string, eventName: string, params?: GoogleEventParams) => void;
        fbq?: (action: string, eventName: string, data?: FacebookEventData) => void;
        dataLayer?: Record<string, any>[];    }
}

export { };
