import React,{useState} from 'react';
import {View,TextInput,StyleSheet,Button,Modal} from 'react-native';

const GoalInput = props => {
    const [enteredGoal,setEnteredGoal] = useState('');
    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
    };
    const adddgoalHandler = () => {
        props.adddgoalHandler(enteredGoal);
        setEnteredGoal('');
    };
    
    const cancelGoalHnadler = () => {
        props.cancelGoalHnadler();
        setEnteredGoal('');
    }
    return (
    <Modal visible={props.visibleModal} animationType='slide'>
        <View style={styles.inputContaner}>
            <TextInput 
                placeholder='Course Goal' 
                style={styles.input}
                value={enteredGoal}
                onChangeText={goalInputHandler}>
            </TextInput>
            <View style={styles.buttonContainer}>
                <Button title="ADD" onPress={adddgoalHandler}/>
                <Button title="CANCEL" onPress={cancelGoalHnadler} color='red'/>
            </View>
        </View>
    </Modal>
  )
}
const styles = StyleSheet.create({
    inputContaner:{
        // flexDirection: "row",
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    input:{
        width:'80%',
        borderColor:'black',
        padding:10,
        marginBottom:10,
        borderWidth:1 
      },
    buttonContainer:{
        flexDirection:"row",
        justifyContent:'space-between',
        width:'60%'
    }
})
export default GoalInput ;