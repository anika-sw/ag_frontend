/// <reference types="vite/client" />

interface ImportMetaEnv {
    // Add other environment variables here as needed
    readonly VITE_RECAPTCHA_SITE_KEY: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
