function customParse(json) {
    let index = 0;
    const char = () => json[index];
    const nextChar = () => json[++index];
  
    const parseValue = () => {
      switch (char()) {
        case '{': return parseObject();
        case '[': return parseArray();
        case '"': return parseString();
        case 't': return parseLiteral('true', true);
        case 'f': return parseLiteral('false', false);
        case 'n': return parseLiteral('null', null);
        default: return parseNumber();
      }
    };
  
    const parseObject = () => {
      const obj = {};
      index++; // skip '{'
      while (char() !== '}') {
        skipWhitespace();
        const key = parseString();
        skipWhitespace();
        index++; // skip ':'
        skipWhitespace();
        obj[key] = parseValue();
        skipWhitespace();
        if (char() === ',') index++; // skip ','
      }
      index++; // skip '}'
      return obj;
    };
  
    const parseArray = () => {
      const arr = [];
      index++; // skip '['
      while (char() !== ']') {
        skipWhitespace();
        arr.push(parseValue());
        skipWhitespace();
        if (char() === ',') index++; // skip ','
      }
      index++; // skip ']'
      return arr;
    };
  
    const parseString = () => {
      let str = '';
      index++; // skip opening quote
      while (char() !== '"') {
        str += char();
        nextChar();
      }
      index++; // skip closing quote
      return str;
    };
  
    const parseLiteral = (literal, value) => {
      for (let i = 0; i < literal.length; i++) {
        if (json[index + i] !== literal[i]) throw new Error(`Unexpected token at ${index}`);
      }
      index += literal.length;
      return value;
    };
  
    const parseNumber = () => {
      let numStr = '';
      while (/[0-9.eE+-]/.test(char())) {
        numStr += char();
        nextChar();
      }
      return Number(numStr);
    };
  
    const skipWhitespace = () => {
      while (/\s/.test(char())) nextChar();
    };
  
    return parseValue();
  }
  
  // Test case
  console.log(customParse('{"name": "John", "age": 30, "isStudent": false, "scores": [100, 95, 92]}'));