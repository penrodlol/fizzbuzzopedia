import { defineDocumentType, makeSource } from 'contentlayer/source-files';

const Language = defineDocumentType(() => ({
  name: 'Language',
  filePathPattern: '**/*.mdx',
  contentType: 'mdx',
  fields: {
    name: { type: 'string', required: true },
    logo: { type: 'string', required: true },
    released: { type: 'string', required: true },
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (source) => source._id.replace('.mdx', ''),
    },
  },
}));

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Language],
});
