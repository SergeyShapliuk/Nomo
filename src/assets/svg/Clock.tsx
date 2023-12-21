import * as React from 'react';
import { memo } from 'react';

import Svg, { SvgProps, Path } from 'react-native-svg';

function Clock(props: SvgProps) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={25} fill="none" {...props}>
      <Path
        fill="#65A3FD"
        fillRule="evenodd"
        d="M12 22.585c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10Zm1-15a1 1 0 1 0-2 0v5a1 1 0 0 0 .293.707l2.5 2.5a1 1 0 0 0 1.414-1.414L13 12.17V7.585Z"
        clipRule="evenodd"
      />
    </Svg>
  );
}
const MemoClock = memo(Clock);
export default MemoClock;
