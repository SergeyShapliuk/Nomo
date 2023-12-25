import * as React from 'react';
import { memo } from 'react';

import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg';

function ArrowRight(props: SvgProps) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width={16} height={14} fill="none" {...props}>
      <G clipPath="url(#a)">
        <Path
          fill="#06122F"
          d="M.264 6.137h12.04L7.934 1.96 9.103.846l6.362 6.08-6.362 6.08-1.167-1.116 4.369-4.175H.264V6.137Z"
        />
      </G>
      <Defs>
        <ClipPath id="a">
          <Path fill="#fff" d="M0 .846h16v12.308H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}
const MemoArrowRight = memo(ArrowRight);
export default MemoArrowRight;
