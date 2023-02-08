import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './components/Home/HomeScreen';
import FormScreen from './components/Form/Form';
import dataTask from './db/task.json';

const Stack = createNativeStackNavigator();

export default function App() {
  const [allTask, setAllTask] = useState([{ title: "Hello", state: true, bgColor: "#d3d3d3" }, { title: "Hello", state: true, bgColor: "#d3d3d3" }]);

  const addTaskFunc = (task, bgColor) => {
    setAllTask([...allTask, { title: task, state: false, bgColor: bgColor }]);
  }

  const checkTask = (indexTask) => {
    allTask[indexTask].state = !allTask[indexTask].state;
  }

  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home'>
          {(props) => <HomeScreen {...props} allTask={allTask} checkTask={checkTask} />}
        </Stack.Screen>
        <Stack.Screen name='New Task'>
          {(props) => <FormScreen {...props} addTaskFunc={addTaskFunc} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}