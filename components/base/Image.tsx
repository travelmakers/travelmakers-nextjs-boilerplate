import { getImageUrl } from '@/utils/getImageUrl';
import { BLUR_DATA_URL } from 'config';
import BaseImage from 'next/image';
import type { ImageProps } from 'next/image';
import { getPlaiceholder } from 'plaiceholder';
import React from 'react';

interface ServerProps {
  blurDataURL?: string;
  src: ImageProps['src'];
}

/**
 * ANCHOR - 이미지 url을 입력받아서 blur 처리된 이미지(base64)와 기본 이미지를 리턴한다.
 * @param props ImageProps
 * @returns blurDataURL, src
 */
async function getData(props: ImageProps): Promise<{
  props: ServerProps;
}> {
  const imgUrl = getImageUrl(props.src);
  const { base64, img } = await getPlaiceholder(imgUrl);

  return {
    props: {
      ...img,
      blurDataURL: base64 ?? BLUR_DATA_URL,
    },
  };
}

const DefaultImage = async (imageProps: ImageProps) => {
  const { props: fetchImage } = await getData(imageProps);

  return (
    <div style={{ position: 'relative', display: 'block', overflow: 'hidden' }}>
      <BaseImage {...imageProps} {...fetchImage} placeholder="blur" />
    </div>
  );
};

const Image = (imageProps: ImageProps) => (
  // @ts-ignore
  <DefaultImage {...imageProps} />
);

export default Image;
