const util = require("util");
const fs = require("fs");

const sourcePath = "../components";
const targetPath = "./src/components";
const targetFileName = "setup.js";

const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

const generateComponentsAndSettingsFiles = async () => {
  const folderNames = ["blok", "content", "partial"];
  const componentNames = {};
  const orderedComponentNames = [];

  await Promise.all(folderNames.map((folderName) => {
    const setupObjects = require(`${sourcePath}/${folderName}/${targetFileName}`).names;
    componentNames[folderName] = setupObjects;
    let classImports = "";
    let settingsImports = "";
    let objectExports = "";
    setupObjects.forEach((object) => {
      if (object.technical) {
        orderedComponentNames.push(object);
      }
      classImports += `import ${object.class} from "./${object.folder}/${object.folder}"\n`;
      settingsImports += `import ${object.class} from "./${object.folder}/settings"\n`;
      objectExports += `  ${object.class},\n`;
    });
    const postImportLines = `\nexport {\n${objectExports}};\n`;
    const componentFile = classImports + postImportLines;
    const componentSettingsFile = settingsImports + postImportLines;
    return Promise.all([ 
      writeFile(`${targetPath}/${folderName}/index.js`, componentFile),
      writeFile(`${targetPath}/${folderName}/settings.js`, componentSettingsFile),
    ]);
  }));

  orderedComponentNames.sort((obj1, obj2) => obj1.technical.localeCompare(obj2.technical));
  const componentExportListString = orderedComponentNames.map((object) => (object.technical ? `  ${object.technical}: ${object.class},\n` : "")).join("");

  let componentsJSFile = "";
  let settingsJSFile = "";
  folderNames.forEach((folderName) => {
    componentsJSFile += "import {\n";
    settingsJSFile += "import {\n"
    componentNames[folderName].forEach((componentNameObject) => {
      if (componentNameObject.technical) {
        componentsJSFile += `  ${componentNameObject.class},\n`;
        settingsJSFile += `  ${componentNameObject.class},\n`;
      }
    });
    componentsJSFile += `} from "./${folderName}"\n\n`;
    settingsJSFile += `} from "./${folderName}/settings"\n\n`;
  });
  componentsJSFile += `const components = {\n${componentExportListString}};\n\nexport default components;\n`;
  settingsJSFile += `const settings = {\n${componentExportListString}};\n\nexport default settings;\n`;

  await Promise.all([ 
    writeFile(`${targetPath}/components.js`, componentsJSFile),
    writeFile(`${targetPath}/settings.js`, settingsJSFile),
  ]);
};

if (require.main === module) {
  generateComponentsAndSettingsFiles()
    .catch((error) => {
      console.error(error.message);
      process.exit(1);
    });
}
