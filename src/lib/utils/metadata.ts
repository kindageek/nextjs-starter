import type { Metadata } from 'next';

export function getMetadata(data?: Metadata): Metadata {
  const title = 'App';
  const description = 'App Description';
  return {
    title,
    description,
    ...data,
    openGraph: {
      title,
      description,
      images: ['/opengraph-image.png'],
      ...data?.openGraph,
    },
    twitter: {
      title,
      description,
      images: ['/twitter-image.png'],
      ...data?.twitter,
    },
    metadataBase: new URL('http://localhost:3000'),
  };
}
