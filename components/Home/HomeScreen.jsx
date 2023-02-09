import { View, Text, Button, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './style.HomeScreen'
import { ScrollView } from 'react-native'
import Task from '../Task/Task';

const HomeScreen = (props) => {
    const { allTask } = props;
    const { navigation } = props;

    return (
        <View style={styles.homeContainer}>
            <View style={styles.topContainer}>
                <Text style={styles.title}>Todo List</Text>

                <ScrollView style={styles.taskContainer}>
                    {allTask.map((task, index) => {
                        return (
                            <Task key={index} task={task} indexTask={index} checkTask={props.checkTask} handlePressTask={props.handlePressTask} />
                        )
                    })}
                </ScrollView>
            </View>

            <TouchableOpacity style={styles.botContainer} onPress={() => navigation.navigate('New Task')}>
                <Text style={styles.buttonAdd}>+</Text>
            </TouchableOpacity>
        </View>
    )
}

export default HomeScreen