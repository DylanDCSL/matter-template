let keyMap = {};

function keyMapper(e) {
    e = e || event; // to deal with IE
    keyMap[e.code] = e.type == 'keydown';
}

export { keyMap, keyMapper };