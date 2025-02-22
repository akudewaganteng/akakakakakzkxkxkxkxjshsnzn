const JsConfuser = require('js-confuser');

let userNameForObfuscation = '';

const setUserName = (name) => {
  userNameForObfuscation = name; 
};

async function appolofree(sourceCode) {
  try {
    console.log("@luminelll Result:\n", sourceCode);

    const obfuscatedCode = await JsConfuser.obfuscate(sourceCode, {
      target: 'node',
      variableMasking: true,    
      preserveFunctionLength: true,
      stringCompression: true,
      duplicateLiteralsRemoval: 0.20,  
      globalConcealing: 0.50,
      hexadecimalNumbers: true,
      movedDeclarations: 0.30,
      objectExtraction: false,
      renameVariables: true,
      renameGlobals: true,
      astScrambler: true,
      renameLabels: true,
      calculator: true,
      shuffle: true,
      minify: true,
      stringConcealing: true,
      rgf: false,
      lock: {
        antiDebug: true,    
      },
      identifierGenerator: function () {
        const randomValue = Math.floor(Math.random() * 9000) + 1000;
        console.log(randomValue);
        
        const repeatedChar = "气".repeat(1);
        return userNameForObfuscation + repeatedChar + randomValue;     
      },
    });

    console.log("@luminelll Result Enc:\n", obfuscatedCode);
    return obfuscatedCode;
  } catch (error) {
    console.error('Terjadi kesalahan saat obfuscation dengan jsconfuser:', error);
    throw error;
  }
}

module.exports = { appolofree, setUserName };