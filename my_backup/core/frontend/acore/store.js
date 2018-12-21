let store = null;

export function setStore(s)
{
    store = s;
    // save store for plugins to use.
    window.acoreStore = store;
}

export {
    store
};
