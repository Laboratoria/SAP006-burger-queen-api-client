const STORAGE_KEY = 'burger-queen-api-client'

export const hasStorageKey = () => !! localStorage.getItem(STORAGE_KEY)
export const saveStorageKey = token => localStorage.setItem(STORAGE_KEY, 'token')
export const removeStorageKey = () => localStorage.removeItem(STORAGE_KEY)