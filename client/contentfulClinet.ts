// main.js
import * as contentful from 'contentful';

export const client = contentful.createClient({
  // host: 'cdn.contentful.com',
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID as string,
  environment: 'develop',
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN as string,
});

export const previewClient = contentful.createClient({
  host: 'preview.contentful.com',
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID as string,
  environment: 'develop',
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_PREVIEW_ACCESS_TOKEN as string,
});
