const validateSchema = require('yaml-schema-validator')
const fs = require('fs')
const yaml = require('js-yaml')

const BUNDLE_DESCRIPTOR_SCHEMA_PATH = 'src/schemas/bundle-descriptor-schema.yaml'
const PLUGIN_DESCRIPTOR_SCHEMA_PATH = 'src/schemas/plugin-descriptor-schema.yaml'
const WIDGET_DESCRIPTOR_SCHEMA_PATH = 'src/schemas/widget-descriptor-schema.yaml'
const FRAGMENT_DESCRIPTOR_SCHEMA_PATH = 'src/schemas/fragment-descriptor-schema.yaml'
const PAGETEMPLATE_DESCRIPTOR_SCHEMA_PATH = 'src/schemas/pagetemplate-descriptor-schema.yaml'
const PAGE_DESCRIPTOR_SCHEMA_PATH = 'src/schemas/page-descriptor-schema.yaml'
const CMSASSET_DESCRIPTOR_SCHEMA_PATH = 'src/schemas/cmsasset-descriptor-schema.yaml'
const CONTENTTEMPLATE_DESCRIPTOR_SCHEMA_PATH = 'src/schemas/contenttemplate-descriptor-schema.yaml'

const _addPath = func => {
  return path => {
    const content = yaml.load(fs.readFileSync(path, 'utf8'))
    return {path, errors: func(content)}
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


module.exports.validateBundleDescriptorFile = _addPath(_validateBundleDescriptorFile)
module.exports.validatePluginDescriptorFile = _addPath(_validatePluginDescriptorFile)
module.exports.validateWidgetDescriptorFile = _addPath(_validateWidgetDescriptorFile)
module.exports.validateFragmentDescriptorFile = _addPath(_validateFragmentDescriptorFile)
module.exports.validatePagetemplateDescriptorFile = _addPath(_validatePageTemplateDescriptorFile)
module.exports.validatePageDescriptorFile = _addPath(_validatePageDescriptorFile)
module.exports.validateCmsassetDescriptorFile = _addPath(_validateCmsassetDescriptorFile)
module.exports.validateContenttemplateDescriptorFile = _addPath(_validateContenttemplateDescriptorFile)





