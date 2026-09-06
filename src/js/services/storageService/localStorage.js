class Storage {
    addToStorage(key, value) { };
    removeFromStorage(key) { };
    getInfoFromStorage(key) { };
}

class LocalStorage extends Storage {
    addToStorage(key, value) {
        localStorage.setItem(`${key}`, JSON.stringify(value))
    };
    removeFromStorage(key) {
        localStorage.removeItem(`${key}`)
    };
    getInfoFromStorage(key) {
        return JSON.parse(localStorage.getItem(`${key}`));
    };
}
export default LocalStorage;