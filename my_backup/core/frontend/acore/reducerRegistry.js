class ReducerRegistry
{
    constructor()
    {
        this._emitChange = null;
        this._reducers = {};
    }

    getReducers()
    {
        return { ...this._reducers };
    }

    register(name, reducer)
    {
        this._reducer = { ...this._reducer, [name]: reducer };
        if (this._emitChange) {
            this._emitChange(this.getReducers());
        }
    }

    setChangeListener(listener)
    {
        this._emitChange = listener;
    }
}

const reducerRegistry = new ReducerRegistry();

export default reducerRegistry;
