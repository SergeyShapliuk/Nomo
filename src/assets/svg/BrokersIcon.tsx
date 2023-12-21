import * as React from 'react';
import { memo } from 'react';

import Svg, { SvgProps, Path, Rect } from 'react-native-svg';

function BrokersIcon(props: SvgProps) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" {...props}>
      <Path
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        d="M6.667 2h2.667c.736 0 1.333.597 1.333 1.333v1.334H5.334V3.333C5.333 2.597 5.93 2 6.667 2Z"
        clipRule="evenodd"
      />
      <Rect
        width={12}
        height={9.333}
        x={2}
        y={4.667}
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        rx={2}
      />
      <Path
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        d="M5.333 10 7 8.333 8.667 10l2-2"
      />
    </Svg>
  );
}
const MemoBrokersIcon = memo(BrokersIcon);
export default MemoBrokersIcon;
