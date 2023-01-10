export function removItem() {
    window.localStorage.clear();
}

export function getItem(item) {
    return window.localStorage.getItem(item);
}

export function addItem(itemNom, val) {
    window.localStorage.removeItem(itemNom, val);
}