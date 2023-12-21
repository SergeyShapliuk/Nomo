import * as React from 'react';
import { memo } from 'react';

import Svg, { SvgProps, Path } from 'react-native-svg';

function DiagonalArrow(props: SvgProps) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width={8} height={8} fill="none" {...props}>
      <Path
        fill="#fff"
        d="M8 .7a.666.666 0 0 0-.666-.667L2.003 0a.666.666 0 1 0 0 1.333h3.705L.198 6.857a.666.666 0 0 0 .216 1.092.666.666 0 0 0 .73-.146l5.523-5.524v3.718a.666.666 0 1 0 1.333 0V.7Z"
      />
    </Svg>
  );
}
const MemoDiagonalArrow = memo(DiagonalArrow);
export default MemoDiagonalArrow;
