const deepClone = (obj) => {
    // not an object, return
    if(typeof obj !== "object" || obj === null) {
        return obj;
    }
    //handle for array
    if(Array.isArray(obj)) {
        obj.map(deepClone);
    }
    //handle for objetcs
    const clonedObj = {};
    for(const key in obj) {
        if(obj.hasOwnProperty(key)) {
            clonedObj[key] = deepClone(obj[key]);
        }
    }
    return clonedObj;
}