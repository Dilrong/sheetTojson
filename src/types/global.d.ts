export {}

declare global {
    interface Err extends Error {
        status: number
        data?: any
    }
}

declare module 'express' {
    interface Request {
        user?: any
    }
}
