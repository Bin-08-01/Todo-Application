import { View, Text, TouchableOpacity, CheckBox } from 'react-native'
import React, { useState } from 'react'
import styles from './style.Task'

const Task = (props) => {
    const { task } = props;
    const [state, setState] = useState(task.state);
    return (
        <View>
            <View style={[styles.task, { backgroundColor: task.bgColor }]}>
                <View style={styles.tickBox}>
                    <CheckBox value={state} onValueChange={() => {
                        props.checkTask(props.indexTask);
                        setState(!state);
                    }} />
                </View>
                <TouchableOpacity style={styles.contentContainer}>
                    <Text>{task.title}</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Task;