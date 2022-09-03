import {
  defineDocumentType,
  defineNestedType,
  makeSource,
} from 'contentlayer/source-files';

const Language = defineDocumentType(() => ({
  name: 'Language',
  filePathPattern: '**/*.mdx',
  contentType: 'mdx',
  fields: {
    name: { type: 'string', required: true },
    logo: { type: 'string', required: true },
    styles: { type: 'list', of: { type: 'string' }, required: true },
    creator: { type: 'nested', of: LanguageCreator, required: true },
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (source) => source._id.replace('.mdx', ''),
    },
  },
}));

const LanguageCreator = defineNestedType(() => ({
  name: 'LanguageCreator',
  fields: {
    name: { type: 'string', required: true },
    url: { type: 'string', required: true },
  },
}));

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Language],
});
