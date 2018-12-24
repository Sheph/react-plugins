let translations = {};

function getTr(plugin, s)
{
    let tr = translations[plugin];
    if (tr === undefined)
        tr = translations[''];
    if (tr === undefined)
        return s;
    tr = tr[s];
    return (tr === undefined) ? s : tr;
}

function setTrs(trs)
{
    translations = trs;
}

export {
    getTr,
    setTrs
};
