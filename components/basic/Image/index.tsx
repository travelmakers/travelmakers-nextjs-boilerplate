import type { ImageProps } from 'next/image';
import BaseImage from 'next/image';

interface Props extends ImageProps {
  className?: string;
}

const Image = (props: Props) => {
  const { alt, className, src, ...rest } = props;

  return <BaseImage alt={alt} src={src} className={className} {...rest} />;
};
export default Image;
