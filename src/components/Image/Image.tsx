import React from 'react';
import styled from '@emotion/styled';

import { GatsbyImage, StaticImage, getSrc, getImage } from 'gatsby-plugin-image';

/**
 * To soften the blur-up we get from the default configuration of gatbsy image
 * we're adding a CSS blur to the image. This makes it smoother!
 */
const StyledGatsbyImage = styled(GatsbyImage)`
  & > img {
    filter: blur(8px);
  }
`;
const StyledStaticImage = styled(StaticImage)`
  & > img {
    filter: blur(8px);
  }
`;

/**
 * src can be one of 3 formats:
 *    * Gatsby fixed image props
 *    * Gatsby fluid image props
 *    * String
 * The component works out the best element to render. You can tell the difference
 * between fluid and fixed Gatsby imagaes by checking to see if a width and height property exist.
 *
 * @example
 * <Img src={...fixed Gatsby image} />
 * <Img src={...fluid Gatsby image} />
 * <Img src="https://..." />
 *
 * todo : lazyload the default img tag
 */
const Image: React.FC<any> = ({ src, alt, ...props }) => {
  // We're going to build our final component's props dynamically.
  // So create a nice default set of props that are relevant to Gatsby and non Gatsby images
  const imgProps = {
    alt,
    ...props,
  };

  // TODO : Find where you have src null returns
  if (!src) return null;

  // Create a bool to tell us if the src is a string (vanilla img) or object (Gatsby)
  const isGatsby = typeof src !== 'string';

  // Now we need to calculate the data that will set the src of the image.
  // This will either be src (for strings) or image for query results.
  const keyForSrc = isGatsby ? 'image' : 'src';
  const dataForSrc = isGatsby ? src : getSrc(src);
  let ComponentForSrc;

  // todo : throw an exception if it is neither src nor fixed nor fluid

  // Now set either src, fixed or fluid to the src prop
  imgProps[keyForSrc] = dataForSrc;

  // We don't want to CSS blur tracedSVG images! Only regular blur-ups.
  if (src.tracedSVG) {
    if (isGatsby) {
      ComponentForSrc = GatsbyImage;
    } else {
      ComponentForSrc = StaticImage;
    }
  } else if (isGatsby) {
    ComponentForSrc = StyledGatsbyImage;
  } else {
    ComponentForSrc = StyledStaticImage;
  }

  // Retrun either the GatsbyImg component or a regular img tag with the spread props
  // eslint-disable-next-line jsx-a11y/alt-text
  return <ComponentForSrc {...imgProps} />;
};

export default Image;
