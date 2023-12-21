import * as React from 'react';
import { memo } from 'react';

import Svg, { SvgProps, Path } from 'react-native-svg';

function Arrow(props: SvgProps) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width={18} height={19} fill="none" {...props}>
      <Path
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.948}
        d="m4.622 13.832 8.765-8.764M4.622 5.068h8.765v8.765"
      />
    </Svg>
  );
}
const MemoArrow = memo(Arrow);
export default MemoArrow;
