import * as React from 'react';
import { memo } from 'react';

import Svg, { SvgProps, Path } from 'react-native-svg';

function StopWatch(props: SvgProps) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={25} fill="none" {...props}>
      <Path
        fill="#06122F"
        fillRule="evenodd"
        d="M21 14.915a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-5a1 1 0 0 0-1 1v4a1 1 0 1 0 2 0v-4a1 1 0 0 0-1-1Z"
        clipRule="evenodd"
      />
      <Path
        fill="#06122F"
        d="M10 1.915a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2h-4ZM20.707 5.208a1 1 0 1 0-1.414 1.414l1 1a1 1 0 1 0 1.414-1.414l-1-1Z"
      />
    </Svg>
  );
}
const MemoStopWatch = memo(StopWatch);
export default MemoStopWatch;
