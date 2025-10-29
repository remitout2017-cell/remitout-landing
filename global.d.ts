declare global {
    interface Window {
        fbq: (...args: any[]) => void;
        gtag: (...args: any[]) => void;
        dataLayer: Record<string, any>[];
    }
}

export { };