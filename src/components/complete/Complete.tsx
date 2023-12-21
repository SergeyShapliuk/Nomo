import React from 'react';

import { StyleSheet, Text, View } from 'react-native';

import MemoCheckBoxActive from '../../assets/svg/CheckBoxActive';
import MemoCheckBoxUnActive from '../../assets/svg/CheckBoxUnActive';

type CompletePropsType = {
  isActive: boolean;
};
function Complete({ isActive }: CompletePropsType) {
  return isActive ? (
    <View style={styles.completeStepActive}>
      <Text style={[styles.textStepTitle, { fontSize: 16, color: '#4ACC37' }]}>Completed</Text>
      <Text style={[styles.textStepTitle, { fontSize: 20, color: '#06122F', paddingTop: 12 }]}>
        You are done Step 1
      </Text>
      <MemoCheckBoxActive style={{ top: 24 }} />
    </View>
  ) : (
    <View style={[styles.completeStepUnActive, styles.shadow]}>
      <Text style={[styles.textStepTitle, { fontSize: 16, color: '#7E8593' }]}>Step 1</Text>
      <Text style={[styles.textStepTitle, { fontSize: 20, color: '#06122F', paddingTop: 12 }]}>Complete quiz</Text>
      <MemoCheckBoxUnActive style={{ top: 24 }} />
    </View>
  );
}
const styles = StyleSheet.create({
  completeStepActive: {
    height: 168,
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 30,
    borderRadius: 21,
    backgroundColor: '#E7FCD7',
    marginVertical: 28,
  },
  completeStepUnActive: {
    height: 168,
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 30,
    borderRadius: 21,
    borderWidth: 1,
    borderColor: '#A4EF86',
    backgroundColor: '#FFF',
    marginVertical: 28,
  },
  shadow: {
    elevation: 10,
    shadowColor: 'rgba(0,0,0,0.15)',
    // shadowColor: '#171717',
    // shadowOffset: { width: -5, height: 15 },
    // shadowOpacity: 1,
    // shadowRadius: 21,
  },
  textStepTitle: {
    color: '#0055FB',
    fontSize: 18,
    fontWeight: '600',
    lineHeight: 27,
  },
});
export default Complete;
