import LocalStorage from "./localStorage";

class StorageService{
    constructor(storage) {
        this.storage = storage;
    }
    addToStorage(key, value) {
        this.storage.addToStorage(key, value);
    }
    removeFromStorage(key) {
        this.storage.removeFromStorage(key);
    }
    getInfoFromStorage(key) {
        return this.storage.getInfoFromStorage(key);
    }
}

const localStoraveService = new LocalStorage();
export const storage = new StorageService(localStoraveService)

