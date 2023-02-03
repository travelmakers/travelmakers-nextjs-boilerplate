import { getImageUrl } from '@/utils/getImageUrl';
import BaseImage from 'next/image';
import type { ImageProps } from 'next/image';
import { getPlaiceholder } from 'plaiceholder';
import React from 'react';

interface ServerProps {
  blurDataURL?: string;
  src: ImageProps['src'];
}

async function getStaticProps(props: ImageProps): Promise<{
  props: ServerProps;
}> {
  const imgUrl = getImageUrl(props.src);
  const { base64, img } = await getPlaiceholder(imgUrl);

  return {
    props: {
      ...img,
      blurDataURL: base64 ?? process.env.NEXT_PUBLIC_BLUR_DATA_URL,
    },
  };
}

const Image = async (imageProps: ImageProps) => {
  const { props: fetchImage } = await getStaticProps(imageProps);

  return (
    <div style={{ position: 'relative', display: 'block', overflow: 'hidden' }}>
      <BaseImage {...imageProps} {...fetchImage} placeholder="blur" />
    </div>
  );
};

const DefaultImage = (imageProps: ImageProps) => (
  // @ts-ignore
  <Image {...imageProps} />
);

export default DefaultImage;
