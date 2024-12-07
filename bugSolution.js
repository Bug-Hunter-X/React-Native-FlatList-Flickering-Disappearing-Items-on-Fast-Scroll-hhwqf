```javascript
import React from 'react';
import { FlatList, Text, View } from 'react-native';

const data = Array.from({ length: 1000 }, (_, i) => `Item ${i + 1}`);

const BugSolution = () => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => <View style={{ height: 50, justifyContent: 'center', borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
        <Text>{item}</Text>
      </View>}
      removeClippedSubviews={true}
      initialNumToRender={20}
      windowSize={20} // Adjust this based on your data and performance needs
    />
  );
};

export default BugSolution;
```