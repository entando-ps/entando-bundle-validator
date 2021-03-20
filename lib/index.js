const bundleValidator = require('./bundle-validator')

const fileValidator = require('./file-validator')

module.exports.entandoBundleValidator = {
    ...bundleValidator,
    ...fileValidator
}
