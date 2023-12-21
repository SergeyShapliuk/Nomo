import * as React from 'react';
import { memo } from 'react';

import Svg, { SvgProps, Path } from 'react-native-svg';

function Level(props: SvgProps) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={25} fill="none" {...props}>
      <Path
        fill="#65A3FD"
        d="M18 10.585a2 2 0 1 1 4 0v10a2 2 0 0 1-4 0v-10ZM10 14.585a2 2 0 1 1 4 0v6a2 2 0 0 1-4 0v-6ZM2 4.585a2 2 0 1 1 4 0v16a2 2 0 0 1-4 0v-16Z"
      />
    </Svg>
  );
}
const MemoLevel = memo(Level);
export default MemoLevel;
