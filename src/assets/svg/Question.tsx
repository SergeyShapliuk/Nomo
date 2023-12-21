import * as React from 'react';
import { memo } from 'react';

import Svg, { SvgProps, Path } from 'react-native-svg';

function Question(props: SvgProps) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={25} fill="none" {...props}>
      <Path
        fill="#65A3FD"
        fillRule="evenodd"
        d="M12 22.585c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10ZM9.767 10.451a1 1 0 0 0 1.366-.365c.957-1.386 2.807.459 1.29 1.36a3.59 3.59 0 0 0-.9.763c-.257.313-.492.743-.52 1.272a1 1 0 0 0 .995 1.104c.762 0 .907-.405 1.053-.814.094-.263.19-.527.449-.686.827-.506 1.5-1.402 1.5-2.5a3 3 0 0 0-5.598-1.5 1 1 0 0 0 .365 1.366Zm1.23 6.134a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z"
        clipRule="evenodd"
      />
    </Svg>
  );
}
const MemoQuestion = memo(Question);
export default MemoQuestion;
