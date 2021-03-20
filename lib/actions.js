const bundleValidator = require('./bundle-validator')

function validateBundle(bundleFolderPath) {
    bundleValidator.validate$(bundleFolderPath).subscribe(validationResult => {
            console.log(validationResult)
        }, e => {
            console.error(e);
        }
    )
}


module.exports.validateBundle = validateBundle
