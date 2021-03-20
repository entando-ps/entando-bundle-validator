
const cwd = process.cwd()
const folderName = 'entando-bundle-validator'
const programContext = cwd.substr(0,cwd.indexOf(folderName))


module.exports.programContext = programContext+folderName+'/'
