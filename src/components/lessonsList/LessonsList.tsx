import React from 'react';

import { FlatList, ListRenderItem, StyleSheet, View } from 'react-native';

import ItemList from './ItemList';

function LessonsList() {
  const data = [
    {
      complete: 'finish',
      title: 'How can modern trading tools help you to get started with trading?',
      time: 38,
      numberLesson: 1,
      description: 'Discover the importance of adapting to changing financial landscapes and...',
    },
    {
      complete: 'process',
      title: 'How to have a ‘wealth mindset’ instead of a ‘poor mindset’ as an investor?',
      time: 40,
      numberLesson: 2,
      description: 'Learn essential money lessons rarely taught in traditional education, from...',
    },
    {
      complete: '',
      title: 'How to choose where to invest or whom to follow?',
      time: 57,
      numberLesson: 3,
      description: 'Learn essential money lessons rarely taught in traditional education, from...',
    },
  ];
  const renderItem: ListRenderItem<{
    complete: string;
    title: string;
    time: number;
    numberLesson: number;
    description: string;
  }> = ({ item }) => <ItemList item={item} />;
  const itemSeparator = () => <View style={styles.viewSeparator} />;
  return (
    // <View style={styles.container}>
    <FlatList
      data={data}
      showsVerticalScrollIndicator={false}
      renderItem={renderItem}
      ItemSeparatorComponent={itemSeparator}
    />
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: '#F5F7FA',
  },
  viewSeparator: {
    height: 23,
  },
});
export default LessonsList;
