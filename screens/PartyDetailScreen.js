import * as React from 'react';
import { Button, View, Text } from 'react-native';



DetailsScreen = ({ navigation }) => {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Party screen</Text>
        <Button title="Go back" onPress={() => navigation.goBack()} />
      </View>
    );
}


export default DetailsScreen;