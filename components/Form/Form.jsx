import { View, Text, Button, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import styles from './style.Form';

const listColor = [
    // { color: "#566572" },
    { color: "#D3D3D3" },
    { color: "#EC3A48" },
    { color: "#FFBAAD" },
    { color: "#3EADC7" },
    { color: "#A33272" },
    { color: "#60B235" }
]

const FormScreen = (props) => {
    const [task, setTask] = useState('');
    const [bgColor, setBgColor] = useState(listColor[0].color);

    const handleAddTask = () => {
        if (task.length <= 0) {
            alert("Please enter a to-do !!!");
            return false;
        }
        props.addTaskFunc(task, bgColor);
        props.navigation.navigate('Home');
    }

    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Title</Text>
                <TextInput style={styles.titleInput} placeholder='Todo...' value={task} onChangeText={setTask} />
            </View>

            <View style={styles.colorAndTime}>
                <View style={styles.colorContainer}>
                    <Text style={styles.title}>Background</Text>
                    <View style={styles.listColor}>
                        {listColor.map((color, index) => {
                            return (
                                <TouchableOpacity key={index} onPress={() => setBgColor(color.color)} style={bgColor !== color.color ? [[styles.square, { backgroundColor: color.color }]] : [styles.square, { backgroundColor: color.color }, styles.checked]}></TouchableOpacity>
                            )
                        })}
                    </View>
                </View>
                <View style={styles.timeContainer}>

                </View>
            </View>
            <View style={styles.bottom}>
                <Button title='Complete' onPress={handleAddTask} />
            </View>
        </View>
    )
}

export default FormScreen;