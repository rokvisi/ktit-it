interface ImportMetaEnv {
    readonly VITE_FIREBASE_PROJECT_ID: string
    readonly VITE_FIREBASE_AUTH_DOMAIN: string
    readonly VITE_FIREBASE_API_KEY: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}