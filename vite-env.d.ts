/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_RECAPTCHA_SITE_KEY: string;
    readonly VITE_BACKEND_URL: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
