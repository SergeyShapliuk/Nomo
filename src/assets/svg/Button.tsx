import * as React from 'react';
import { memo } from 'react';

import Svg, { SvgProps, Path } from 'react-native-svg';

function Button(props: SvgProps) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width={19} height={19} fill="none" {...props}>
      <Path
        fill="#0055FB"
        fillRule="evenodd"
        d="M9.412 16.56a7.348 7.348 0 1 0 0-14.696 7.348 7.348 0 0 0 0 14.697ZM8.332 6.24a.735.735 0 0 0-1.124.624v4.697c0 .577.635.929 1.124.623l3.757-2.349a.735.735 0 0 0 0-1.246L8.332 6.241Z"
        clipRule="evenodd"
      />
    </Svg>
  );
}
const MemoButton = memo(Button);
export default MemoButton;
