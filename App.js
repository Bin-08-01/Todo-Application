import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './components/Home/HomeScreen';
import FormScreen from './components/Form/Form';
import { Alert } from 'react-native';

const Stack = createNativeStackNavigator();

export default function App() {
  const [allTask, setAllTask] = useState([{ title: "Hello", state: true, bgColor: "#d3d3d3" }, { title: "Hello", state: true, bgColor: "#d3d3d3" }]);

  const addTaskFunc = (task, bgColor) => {
    setAllTask([...allTask, { title: task, state: false, bgColor: bgColor }]);
  }

  const checkTask = (indexTask) => {
    allTask[indexTask].state = !allTask[indexTask].state;
  }

  const handlePressTask = (indexTask) => {
    console.log(indexTask);
    Alert.alert("Hello", "dqwdq", [
      {
        text: 'Ask me later',
        onPress: () => console.log('Ask me later pressed'),
      },
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      { text: 'OK', onPress: () => console.log('OK Pressed') },
    ]);
  }

  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home'>
          {(props) => <HomeScreen {...props} allTask={allTask} checkTask={checkTask} handlePressTask={handlePressTask} />}
        </Stack.Screen>
        <Stack.Screen name='New Task'>
          {(props) => <FormScreen {...props} addTaskFunc={addTaskFunc} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}