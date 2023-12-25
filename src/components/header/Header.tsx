import React, { useState } from 'react';

import { StyleSheet, TouchableOpacity, View } from 'react-native';

import MemoNomoLogo from '../../assets/svg/NomoLogo';

type HeaderPropsType = {
  open: boolean;
  onChangeHandler: () => void;
};
function Header({ open, onChangeHandler }: HeaderPropsType) {
  // const [open, setOpen] = useState<boolean>(false);

  // const onChangeHandler = () => {
  //   if (!open) {
  //     setOpen(true);
  //   } else {
  //     setOpen(false);
  //   }
  // };
  return (
    <View style={styles.container}>
      <MemoNomoLogo />
      <View style={styles.btnContainer}>
        {/* <TouchableOpacity style={{ gap: 2.5, flexShrink: 0 }}> */}
        {/*  <View style={styles.line} /> */}
        {/*  <View style={styles.line} /> */}
        {/*  <View style={styles.line} /> */}
        {/* </TouchableOpacity> */}
        <TouchableOpacity hitSlop={{ left: 10, right: 10, top: 10, bottom: 10 }} onPress={onChangeHandler}>
          {!open && (
            <View>
              <View style={styles.line} />
              <View style={styles.line} />
              <View style={styles.line} />
            </View>
          )}
          {open && (
            <View>
              <View
                style={[
                  styles.line,
                  {
                    transform: [{ rotate: '45deg' }, { translateY: 2 }, { translateX: 1.5 }],
                  },
                ]}
              />
              <View
                style={[
                  styles.line,
                  {
                    transform: [{ rotate: '-45deg' }, { translateY: -2 }, { translateX: 1.5 }],
                  },
                ]}
              />
            </View>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 66,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    alignSelf: 'stretch',
    backgroundColor: '#E2F0FF',
  },
  btnContainer: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 2,
    paddingHorizontal: 4,
    borderRadius: 8,
    backgroundColor: '#F5F7FA',
  },
  line: {
    width: 16,
    height: 2,
    margin: 1.5,
    backgroundColor: '#06122F',
  },
});
export default Header;
