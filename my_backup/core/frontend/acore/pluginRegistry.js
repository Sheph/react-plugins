class PluginRegistry
{
    constructor()
    {
        this._emitChange = null;
        this._plugins = {};
    }

    getPlugins()
    {
        return { ...this._plugins };
    }

    register(name, component)
    {
        this._plugins = { ...this._plugins, [name]: component };
        if (this._emitChange) {
            this._emitChange(this.getPlugins());
        }
    }

    setChangeListener(listener)
    {
        this._emitChange = listener;
    }
}

const pluginRegistry = new PluginRegistry();

export default pluginRegistry;
