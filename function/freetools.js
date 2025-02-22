// Modifikasi di yumetools.js
const fs = require('fs');
const path = require('path');
const JsConfuser = require('js-confuser');

let userNameForObfuscation = '';

const setUserName = (name) => {
  userNameForObfuscation = name; 
};

async function appolofree(filePath) {
  const originalFileName = path.basename(filePath, '.js');
  const outputDir = path.resolve(__dirname, 'obfuscated');
const obfuscatedFileName = `${originalFileName}-@tearsinsilencee-.js`;
  const obfuscatedFilePath = path.join(outputDir, obfuscatedFileName);

  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  try {
    const sourceCode = fs.readFileSync(filePath, 'utf-8');
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

console.log(obfuscatedCode);
    console.log("@luminelll Result:\n", obfuscatedCode);
    const obfuscatedCodeString = typeof obfuscatedCode === 'string' ? obfuscatedCode : obfuscatedCode.code;
    const header = `/*
~ Advanced Obfuscator
~ Telegram: t.me/tearsinsilencee

© tearsinsilencee
*/`;

    await fs.promises.writeFile(obfuscatedFilePath, header + '\n' + obfuscatedCodeString);

    const writtenCode = await fs.promises.readFile(obfuscatedFilePath, 'utf-8');
    console.log("@luminelll Result Enc:\n", writtenCode);

    console.log('File hasil obfuscate telah dibuat di:', obfuscatedFilePath);

    return obfuscatedFilePath;
  } catch (error) {
    console.error('Terjadi kesalahan saat obfuscation dengan jsconfuser:', error);
    throw error;
  }
}

module.exports = { appolofree, setUserName };