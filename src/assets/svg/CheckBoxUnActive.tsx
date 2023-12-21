import * as React from 'react';
import { memo } from 'react';

import Svg, { SvgProps, Rect } from 'react-native-svg';

function CheckBoxUnActive(props: SvgProps) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={25} fill="none" {...props}>
      <Rect width={23} height={23} x={0.5} y={0.585} fill="#E7FCD7" rx={5.5} />
      <Rect width={23} height={23} x={0.5} y={0.585} stroke="#4ACC37" strokeLinejoin="round" rx={5.5} />
    </Svg>
  );
}
const MemoCheckBoxUnActive = memo(CheckBoxUnActive);
export default MemoCheckBoxUnActive;
