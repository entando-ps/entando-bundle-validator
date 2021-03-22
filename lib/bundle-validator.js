const {from, of, throwError, EMPTY} = require('rxjs')
const {mergeMap} = require('rxjs/operators')
const _ = require('lodash')
const {
    validateType,
    convertType
} = require('./file-validator')


const _checkValidationErrors$ = mergeMap((validationResult) => {
    const {path, errors, contentObj} = validationResult
    return errors.length !== 0
        ? throwError(`${path} has errors! ==> ${JSON.stringify(errors)}`)
        : of(contentObj)
})


/**
 *
 * @param path bundle folder path
 * @private
 */
const _validate$ = (type, bundleFolderPath, filePath) => {
    const completeFilePath = bundleFolderPath + '/' + filePath;
    console.log(`validating: ${type} ${bundleFolderPath} ${filePath}`)
    const relativeFilePathFolder = filePath.substr(0, filePath.lastIndexOf('/'))
    let stream = of(validateType(type, completeFilePath))
    stream = stream.pipe(_checkValidationErrors$)
    stream = stream.pipe(mergeMap((contentObj) => _extractInnerFiles$(type, contentObj, relativeFilePathFolder)))
    stream = stream.pipe(mergeMap(pair => {
        const name = pair[0]
        const file = pair[1]
        return _validate$(name, bundleFolderPath, file)
    }))
    return stream
}


const _extractInnerFiles$ = (type, contentObj, relativeFilePathFolder) => {
    type = convertType(type)
    let ret = throwError(`unrecognized type: ${type} for content: ${JSON.stringify(contentObj)}`)
    switch (type) {
        case 'Bundle':
            ret = _flattenArray(_.toPairs(contentObj.components))
            break
        case 'Plugin':
            return EMPTY
        case 'Widget':
            if (contentObj.customUiPath === undefined) return EMPTY
            ret = [['Ftl', relativeFilePathFolder + '/' + contentObj.customUiPath]]
            break
        case 'Fragment':
            ret = [['Ftl', relativeFilePathFolder + '/' + contentObj.guiCodePath]]
            break
        case 'Pagetemplate':
            ret = [['Ftl', relativeFilePathFolder + '/' + contentObj.templatePath]]
            break
        case 'Ftl':
            return EMPTY
        case 'Page':
            return EMPTY
    }

    return from(ret)
}

const _flattenArray = (pairsArray) => {
    return _.flatMap(pairsArray.map(pair => {
        [name, files] = pair
        let ret = []
        if (files !== null && files !== undefined) {
            files.forEach((file) => {
                ret.push([name, file])
            })
        }
        return ret;
    }))
}


module.exports.validate$ = (bundleFolderPath) => _validate$('Bundle', bundleFolderPath, 'descriptor.yaml')
