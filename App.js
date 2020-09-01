 import React,{useState, version} from 'react';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
import { StyleSheet,View,FlatList, Button} from 'react-native';

export default function App() {
  const [courseGoals,setCourseGoals] = useState([]);
  const [isAddMode,setIsAddMode] = useState(false);
  
  const adddgoalHandler = (goalTitle) => {
    setCourseGoals(courseGoals => [ 
      ...courseGoals,
      {key:Math.random().toString(),value:goalTitle}
    ]);
    setIsAddMode(false);
    console.log("enteredGoal:",goalTitle);
  }

  const removegoalHandler = (goalId) => {
    setCourseGoals(courseGoals =>{
      return courseGoals.filter(goal => goalId !=  goal.key)
    })
  }

  const cancelGoalHnadler = () => {
    setIsAddMode(false);
  }
  return (
      <View style={styles.screen}>
        <Button title="Add new Goal" onPress={() => setIsAddMode(true)}></Button>
        <GoalInput visibleModal={isAddMode} adddgoalHandler={adddgoalHandler} cancelGoalHnadler={cancelGoalHnadler}/>
        <FlatList 
          keyExtractor={(item,index) => item.key}
          data={courseGoals} renderItem={
            itemData =>(
              <GoalItem title={itemData.item.value} id={itemData.item.key} onDelete={removegoalHandler}/>
          )}>
        </FlatList>
      </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding:50
  },
});
