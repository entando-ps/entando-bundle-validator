const validateSchema = require('./schema-validator')
const fs = require('fs')
const yaml = require('js-yaml')
const {programContext} = require('./utils')


const BUNDLE_DESCRIPTOR_SCHEMA_PATH = programContext + 'lib/schemas/bundle-descriptor-schema.yaml'
const PLUGIN_DESCRIPTOR_SCHEMA_PATH = programContext + 'lib/schemas/plugin-descriptor-schema.yaml'
const WIDGET_DESCRIPTOR_SCHEMA_PATH = programContext + 'lib/schemas/widget-descriptor-schema.yaml'
const FRAGMENT_DESCRIPTOR_SCHEMA_PATH = programContext + 'lib/schemas/fragment-descriptor-schema.yaml'
const PAGETEMPLATE_DESCRIPTOR_SCHEMA_PATH = programContext + 'lib/schemas/pagetemplate-descriptor-schema.yaml'
const PAGE_DESCRIPTOR_SCHEMA_PATH = programContext + 'lib/schemas/page-descriptor-schema.yaml'
const CMSASSET_DESCRIPTOR_SCHEMA_PATH = programContext + 'lib/schemas/cmsasset-descriptor-schema.yaml'
const CONTENTTEMPLATE_DESCRIPTOR_SCHEMA_PATH = programContext + 'lib/schemas/contenttemplate-descriptor-schema.yaml'
const CONTENTTYPE_DESCRIPTOR_SCHEMA_PATH = programContext + 'lib/schemas/contenttype-descriptor-schema.yaml'
const CONTENT_DESCRIPTOR_SCHEMA_PATH = programContext + 'lib/schemas/content-descriptor-schema.yaml'
const CATEGORIES_DESCRIPTOR_SCHEMA_PATH = programContext + 'lib/schemas/categories-descriptor-schema.yaml'
const GROUPS_DESCRIPTOR_SCHEMA_PATH = programContext + 'lib/schemas/groups-descriptor-schema.yaml'
const LABELS_DESCRIPTOR_SCHEMA_PATH = programContext + 'lib/schemas/labels-descriptor-schema.yaml'
const LANGUAGES_DESCRIPTOR_SCHEMA_PATH = programContext + 'lib/schemas/languages-descriptor-schema.yaml'


const _addPath = func => {
    return path => {
        const contentObj = yaml.load(fs.readFileSync(path, 'utf8'))
        return {path, errors: func(contentObj), contentObj}
    }
}

const _validateSchema = (fileContent, schema) =>
    validateSchema(fileContent, {
        logLevel: 'none',
        schemaPath: schema
    })


const _validateBundleDescriptorFile = fileContent =>
    _validateSchema(fileContent, BUNDLE_DESCRIPTOR_SCHEMA_PATH)

const _validatePluginDescriptorFile = fileContent =>
    _validateSchema(fileContent, PLUGIN_DESCRIPTOR_SCHEMA_PATH)

const _validateWidgetDescriptorFile = fileContent =>
    _validateSchema(fileContent, WIDGET_DESCRIPTOR_SCHEMA_PATH)

const _validateFragmentDescriptorFile = fileContent =>
    _validateSchema(fileContent, FRAGMENT_DESCRIPTOR_SCHEMA_PATH)

const _validatePageTemplateDescriptorFile = fileContent =>
    _validateSchema(fileContent, PAGETEMPLATE_DESCRIPTOR_SCHEMA_PATH)

const _validatePageDescriptorFile = fileContent =>
    _validateSchema(fileContent, PAGE_DESCRIPTOR_SCHEMA_PATH).filter(item => {
            const {message, path} = item
            const noConfigPath = path.indexOf('.config.') === -1
            const noMessageConfig = message.indexOf('.config.') === -1
            const noMessage = message.indexOf('is not present in schema"') === -1
            return noConfigPath && noMessageConfig && noMessage
        }
    )

const _validateCmsassetDescriptorFile = fileContent =>
    _validateSchema(fileContent, CMSASSET_DESCRIPTOR_SCHEMA_PATH)

const _validateContenttemplateDescriptorFile = fileContent =>
    _validateSchema(fileContent, CONTENTTEMPLATE_DESCRIPTOR_SCHEMA_PATH).filter(item => {
        const {message, path} = item
        const noConfigPath = path.indexOf('.config.') === -1
        const noMessageConfig = message.indexOf('.config.') === -1
        const noMessage = message.indexOf('is not present in schema"') === -1
        return noConfigPath && noMessageConfig && noMessage
    })

const _validateContenttypeDescriptorFile = fileContent =>
    _validateSchema(fileContent, CONTENTTYPE_DESCRIPTOR_SCHEMA_PATH)

const _validateContentDescriptorFile = fileContent =>
    _validateSchema(fileContent, CONTENT_DESCRIPTOR_SCHEMA_PATH).filter(item => {
        const {message, path} = item
        const noEnPath = path.indexOf('.en') === -1
        const noMessageEn = message.indexOf('.en') === -1
        const noIsNotPresentMessage = message.indexOf('is not present in schema"') === -1
        return noEnPath && noMessageEn && noIsNotPresentMessage
    }).filter(item => {
        const {message, path} = item
        const noElementsPath = path.indexOf('.elements') === -1
        const noMessageElements = message.indexOf('.elements') === -1
        const noIsNotPresentMessage = message.indexOf('is not present in schema"') === -1
        return noElementsPath && noMessageElements && noIsNotPresentMessage
    })

const _validateCategoriesDescriptorFile = fileContent =>
    _validateSchema(fileContent, CATEGORIES_DESCRIPTOR_SCHEMA_PATH)

const _validateGroupsDescriptorFile = fileContent =>
    _validateSchema(fileContent, GROUPS_DESCRIPTOR_SCHEMA_PATH)

const _validateLabelsDescriptorFile = fileContent =>
    _validateSchema(fileContent, LABELS_DESCRIPTOR_SCHEMA_PATH)

const _validateLanguagesDescriptorFile = fileContent =>
    _validateSchema(fileContent, LANGUAGES_DESCRIPTOR_SCHEMA_PATH)

module.exports.validateBundleDescriptorFile = _addPath(_validateBundleDescriptorFile)
module.exports.validatePluginDescriptorFile = _addPath(_validatePluginDescriptorFile)
module.exports.validateWidgetDescriptorFile = _addPath(_validateWidgetDescriptorFile)
module.exports.validateFragmentDescriptorFile = _addPath(_validateFragmentDescriptorFile)
module.exports.validatePagetemplateDescriptorFile = _addPath(_validatePageTemplateDescriptorFile)
module.exports.validatePageDescriptorFile = _addPath(_validatePageDescriptorFile)
module.exports.validateCmsassetDescriptorFile = _addPath(_validateCmsassetDescriptorFile)
module.exports.validateContenttemplateDescriptorFile = _addPath(_validateContenttemplateDescriptorFile)
module.exports.validateContenttypeDescriptorFile = _addPath(_validateContenttypeDescriptorFile)
module.exports.validateContentDescriptorFile = _addPath(_validateContentDescriptorFile)
module.exports.validateCategoriesDescriptorFile = _addPath(_validateCategoriesDescriptorFile)
module.exports.validateGroupsDescriptorFile = _addPath(_validateGroupsDescriptorFile)
module.exports.validateLabelsDescriptorFile = _addPath(_validateLabelsDescriptorFile)
module.exports.validateLanguagesDescriptorFile = _addPath(_validateLanguagesDescriptorFile)
module.exports.validateFtlDescriptorFile = path => {
    const contentObj = fs.readFileSync(path, 'utf8')
    return {path, errors: [], contentObj}
}

const _convertType = (type) => {
    if(type==='plugins') return 'Plugin'
    if(type==='fragments') return 'Fragment'
    if(type==='pageModels') return 'Pagetemplate'
    if(type==='widgets') return 'Widget'
    return type

}

const _validateType = (type, fileContent) => {
    const convertedType = _convertType(type)
    const validationInvocation = `module.exports.validate${convertedType}DescriptorFile(fileContent)`
    return eval(validationInvocation)
}

module.exports.validateType = _validateType
module.exports.convertType = _convertType


