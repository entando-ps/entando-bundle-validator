const path = require('path')

const currentDir = path.resolve(__dirname)
const folderName = 'entando-bundle-validator'
const programContext = currentDir.substr(0,currentDir.indexOf(folderName))


module.exports.programContext = programContext+folderName+'/'
