// types/global.d.ts
interface Window {
    /** Facebook Pixel */
    fbq?(
        command: string,
        eventName: string,
        params?: Record<string, unknown>
    ): void;

    /** Google Analytics / Ads */
    gtag?(
        command: string,
        event: string,
        params?: Record<string, unknown>
    ): void;
}