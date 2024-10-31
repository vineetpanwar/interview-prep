/**
 * @param {object} source
 * @param {string | string[]} path
 * @param {any} [defaultValue]
 * @return {any}
 */
function get(source, path, defaultValue = undefined) {
    if(path == "") return defaultValue;
    let updatedPath = path;
    if(!Array.isArray(updatedPath)) {
      updatedPath = updatedPath.split(/[\[\]\.]/).filter(a => a !== "");
    }
    if(updatedPath.length === 1) {
      return source[isNaN(Number(updatedPath[0])) ? updatedPath[0] : Number(updatedPath[0])] || defaultValue;
    }
    return get(source[updatedPath[0]], updatedPath.slice(1), defaultValue)
}
const obj = {
    a: {
      b: {
        c: [1,2,3]
      }
    }
  }
//   console.log(get(obj, 'a.b.c')) // [1,2,3]
//   console.log(get(obj, 'a.b.c.0')) // 1
//   console.log(get(obj, 'a.b.c[1]')) // 2
//   console.log(get(obj, ['a', 'b', 'c', '2'])) // 3
  console.log(get(obj, 'a.b.c[3]')) // undefined
  console.log(get(obj, 'a.c', 'bfe')) // 'bfe'
  
