import * as React from 'react';
import { memo } from 'react';

import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg';

function CloseModal(props: SvgProps) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width={22} height={22} fill="none" {...props}>
      <G clipPath="url(#a)">
        <Path fill="#7E8593" d="M11 22c6.075 0 11-4.925 11-11S17.075 0 11 0 0 4.925 0 11s4.925 11 11 11Z" />
        <Path
          fill="#fff"
          d="m11.94 11 2.867-2.86a.67.67 0 1 0-.947-.947L11 10.06 8.14 7.193a.67.67 0 1 0-.947.947L10.06 11l-2.867 2.86a.666.666 0 0 0 .217 1.093.666.666 0 0 0 .73-.146L11 11.94l2.86 2.867a.665.665 0 0 0 .947 0 .667.667 0 0 0 0-.947L11.94 11Z"
        />
      </G>
      <Defs>
        <ClipPath id="a">
          <Path fill="#fff" d="M0 0h22v22H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}
const MemoCloseModal = memo(CloseModal);
export default MemoCloseModal;
