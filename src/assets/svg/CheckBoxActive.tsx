import * as React from 'react';
import { memo } from 'react';

import Svg, { SvgProps, Rect, Path } from 'react-native-svg';

function CheckBoxActive(props: SvgProps) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={25} fill="none" {...props}>
      <Rect width={23} height={23} x={0.5} y={0.585} fill="#2EAF28" rx={5.5} />
      <Rect width={23} height={23} x={0.5} y={0.585} stroke="#2EAF28" rx={5.5} />
      <Path
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m16.666 8.585-6.416 6.417-2.917-2.917"
      />
    </Svg>
  );
}
const MemoCheckBoxActive = memo(CheckBoxActive);
export default MemoCheckBoxActive;
