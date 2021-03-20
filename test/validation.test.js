const {
  validateBundleDescriptorFile,
  validatePluginDescriptorFile,
  validateWidgetDescriptorFile,
  validateFragmentDescriptorFile,
  validatePagetemplateDescriptorFile,
  validatePageDescriptorFile,
  validateCmsassetDescriptorFile,
  validateContenttemplateDescriptorFile,
  validateContenttypeDescriptorFile,
  validateContentDescriptorFile,
  validateCategoriesDescriptorFile,
  validateGroupsDescriptorFile,
  validateLabelsDescriptorFile,
  validateLanguagesDescriptorFile,
  validateType
} = require('../lib/file-validator')
test('check documentation-bundle-descriptor.yaml', () => {
  const {path, errors} = validateBundleDescriptorFile('test/file-examples/documentation-bundle-descriptor.yaml');
  expect(path).toBe('test/file-examples/documentation-bundle-descriptor.yaml')
  expect(errors).toHaveLength(0)
})
test('check bundle-descriptor-broken1.yaml', () => {
  const {path, errors} = validateBundleDescriptorFile('test/file-examples/bundle-descriptor-broken1.yaml');
  expect(path).toBe('test/file-examples/bundle-descriptor-broken1.yaml')
  const expected =  [{"message": "code is required.", "path": "code"}, {"message": "components.plugins must be of type Array.", "path": "components.plugins"}, {"message": "components.plugins is not present in schema", "path": "components.plugins"}]
  expect(errors).toEqual(expected)
})

test('check documentation-plugin-descriptor.yaml', () => {
  const {path, errors} = validatePluginDescriptorFile('test/file-examples/documentation-plugin-descriptor.yaml');
  expect(path).toBe('test/file-examples/documentation-plugin-descriptor.yaml')
  expect(errors).toHaveLength(0)
})

test('check documentation-widget-descriptor.yaml', () => {
  const {path, errors} = validateWidgetDescriptorFile('test/file-examples/documentation-widget-descriptor.yaml');
  expect(path).toBe('test/file-examples/documentation-widget-descriptor.yaml')
  expect(errors).toHaveLength(0)
})

test('check documentation-fragment-descriptor.yaml', () => {
  const {path, errors} = validateFragmentDescriptorFile('test/file-examples/documentation-fragment-descriptor.yaml');
  expect(path).toBe('test/file-examples/documentation-fragment-descriptor.yaml')
  expect(errors).toHaveLength(0)
})

test('check documentation-pagetemplate-descriptor.yaml', () => {
  const {path, errors} = validatePagetemplateDescriptorFile('test/file-examples/documentation-pagetemplate-descriptor.yaml');
  expect(path).toBe('test/file-examples/documentation-pagetemplate-descriptor.yaml')
  expect(errors).toHaveLength(0)
})
test('check documentation-page-descriptor.yaml', () => {
  const {path, errors} = validatePageDescriptorFile('test/file-examples/documentation-page-descriptor.yaml');
  expect(path).toBe('test/file-examples/documentation-page-descriptor.yaml')
  expect(errors).toHaveLength(0)
})
test('check documentation-cmsasset-descriptor.yaml', () => {
  const {path, errors} = validateCmsassetDescriptorFile('test/file-examples/documentation-cmsasset-descriptor.yaml');
  expect(path).toBe('test/file-examples/documentation-cmsasset-descriptor.yaml')
  expect(errors).toHaveLength(0)
})

test('check documentation-contenttemplate-descriptor.yaml', () => {
  const {path, errors} = validateContenttemplateDescriptorFile('test/file-examples/documentation-contenttemplate-descriptor.yaml');
  expect(path).toBe('test/file-examples/documentation-contenttemplate-descriptor.yaml')
  expect(errors).toHaveLength(0)
})
test('check documentation-contenttype-descriptor.yaml', () => {
  const {path, errors} = validateContenttypeDescriptorFile('test/file-examples/documentation-contenttype-descriptor.yaml');
  expect(path).toBe('test/file-examples/documentation-contenttype-descriptor.yaml')
  expect(errors).toHaveLength(0)
})
test('check documentation-content-descriptor.yaml', () => {
  const {path, errors} = validateContentDescriptorFile('test/file-examples/documentation-content-descriptor.yaml');
  expect(path).toBe('test/file-examples/documentation-content-descriptor.yaml')
  expect(errors).toHaveLength(0)
})
test('check documentation-categories-descriptor.yaml', () => {
  const {path, errors} = validateCategoriesDescriptorFile('test/file-examples/documentation-categories-descriptor.yaml');
  expect(path).toBe('test/file-examples/documentation-categories-descriptor.yaml')
  expect(errors).toHaveLength(0)
})
test('check documentation-groups-descriptor.yaml', () => {
  const {path, errors} = validateGroupsDescriptorFile('test/file-examples/documentation-groups-descriptor.yaml');
  expect(path).toBe('test/file-examples/documentation-groups-descriptor.yaml')
  expect(errors).toHaveLength(0)
})
test('check documentation-labels-descriptor.yaml', () => {
  const {path, errors} = validateLabelsDescriptorFile('test/file-examples/documentation-labels-descriptor.yaml');
  expect(path).toBe('test/file-examples/documentation-labels-descriptor.yaml')
  expect(errors).toHaveLength(0)
})
test('check documentation-languages-descriptor.yaml', () => {
  const {path, errors} = validateLanguagesDescriptorFile('test/file-examples/documentation-languages-descriptor.yaml');
  expect(path).toBe('test/file-examples/documentation-languages-descriptor.yaml')
  expect(errors).toHaveLength(0)
})


//=====================validate types

test('check bundle', () => {
  const {path, errors} = validateType('Bundle','test/file-examples/documentation-bundle-descriptor.yaml');
  expect(path).toBe('test/file-examples/documentation-bundle-descriptor.yaml')
  expect(errors).toHaveLength(0)
})

test('check plugin', () => {
  const {path, errors} = validateType('Plugin','test/file-examples/documentation-plugin-descriptor.yaml');
  expect(path).toBe('test/file-examples/documentation-plugin-descriptor.yaml')
  expect(errors).toHaveLength(0)
})
test('check widget', () => {
  const {path, errors} = validateType('Widget', 'test/file-examples/documentation-widget-descriptor.yaml');
  expect(path).toBe('test/file-examples/documentation-widget-descriptor.yaml')
  expect(errors).toHaveLength(0)
})

test('check fragment', () => {
  const {path, errors} = validateType('Fragment','test/file-examples/documentation-fragment-descriptor.yaml');
  expect(path).toBe('test/file-examples/documentation-fragment-descriptor.yaml')
  expect(errors).toHaveLength(0)
})

test('check pagetemplate', () => {
  const {path, errors} = validateType('Pagetemplate','test/file-examples/documentation-pagetemplate-descriptor.yaml');
  expect(path).toBe('test/file-examples/documentation-pagetemplate-descriptor.yaml')
  expect(errors).toHaveLength(0)
})
test('check page', () => {
  const {path, errors} = validateType('Page','test/file-examples/documentation-page-descriptor.yaml');
  expect(path).toBe('test/file-examples/documentation-page-descriptor.yaml')
  expect(errors).toHaveLength(0)
})
test('check cmsasset', () => {
  const {path, errors} = validateType('Cmsasset','test/file-examples/documentation-cmsasset-descriptor.yaml');
  expect(path).toBe('test/file-examples/documentation-cmsasset-descriptor.yaml')
  expect(errors).toHaveLength(0)
})

test('check contenttemplate', () => {
  const {path, errors} = validateType('Contenttemplate','test/file-examples/documentation-contenttemplate-descriptor.yaml');
  expect(path).toBe('test/file-examples/documentation-contenttemplate-descriptor.yaml')
  expect(errors).toHaveLength(0)
})
test('check contenttype', () => {
  const {path, errors} = validateType('Contenttype','test/file-examples/documentation-contenttype-descriptor.yaml');
  expect(path).toBe('test/file-examples/documentation-contenttype-descriptor.yaml')
  expect(errors).toHaveLength(0)
})
test('check content', () => {
  const {path, errors} = validateType('Content','test/file-examples/documentation-content-descriptor.yaml');
  expect(path).toBe('test/file-examples/documentation-content-descriptor.yaml')
  expect(errors).toHaveLength(0)
})
test('check categories', () => {
  const {path, errors} = validateType('Categories', 'test/file-examples/documentation-categories-descriptor.yaml');
  expect(path).toBe('test/file-examples/documentation-categories-descriptor.yaml')
  expect(errors).toHaveLength(0)
})
test('check groups', () => {
  const {path, errors} = validateType('Groups', 'test/file-examples/documentation-groups-descriptor.yaml');
  expect(path).toBe('test/file-examples/documentation-groups-descriptor.yaml')
  expect(errors).toHaveLength(0)
})
test('check labels', () => {
  const {path, errors} = validateType('Labels', 'test/file-examples/documentation-labels-descriptor.yaml');
  expect(path).toBe('test/file-examples/documentation-labels-descriptor.yaml')
  expect(errors).toHaveLength(0)
})
test('check languages', () => {
  const {path, errors} = validateType('Languages','test/file-examples/documentation-languages-descriptor.yaml');
  expect(path).toBe('test/file-examples/documentation-languages-descriptor.yaml')
  expect(errors).toHaveLength(0)
})



