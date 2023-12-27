import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity, Alert} from 'react-native';

export default function App() {
  return (
  <View style={styles.container}>

    {/* To do List */}
    <View style={styles.taskWrapper}> 
    <Text style={styles.sectionTitle}>To do List</Text>

    {/* Adding the image */}
    <View style={styles.image}>
          <Image source={{ 
            width:155,
            height:130,
            uri: "https://academy.avvoka.com/wp-content/uploads/2020/10/Untitled-design.png" }} />
      </View>

      {/*Add Button*/}
      <View style={styles.btnAdd}>
        <Button
                title="ADD"
                color="#00008B"
                onPress={() => Alert.alert(
                  'You are going to add a new task!')}/>
        </View>

        {/* Save Button */}
        <View style={styles.btnSave}>
          <Button
            title="SAVE"
            color="#00008B"
            onPress={() => Alert.alert(
              'Changes are saved')}/>
        </View>
        
        {/* Task Items */}
        <View style={styles.items}>
          <Tasks text={'Task 1'}/>
          <Tasks text={'Task 2'}/>
          <Tasks text={'Task 3'}/>
          <Tasks text={'Task 4'}/>
          <Tasks text={'Task 5'}/>
        </View>
    </View>
  </View>
  );
}

{/* Tasks Section */}
const Tasks = (props) => {
  return (
      <View style={styles.item}>
          <View style={styles.itemLeft}>
              <View style={styles.square}></View>
              <Text style={styles.itemText}>{props.text}</Text>
          </View>
          <View style={styles.circle}></View>
      </View>
  )
}
{/* StyleSheet */}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E0FFFF',
  },
  taskWrapper: {
    paddingTop: 50,
    paddingHorizontal: 20, 
  },
  sectionTitle: {
    fontSize: 30,
    letterSpacing: 2,
    color: '#00008B',
    fontWeight: 'bold',
  },
  image:{
    alignItems: 'center',
  },
  btnAdd:{
    width:60,
    height:80,
    marginLeft:1,
    marginTop:10,
  },
  btnSave:{
    width:60,
    height:80,
    marginLeft:258,
    marginTop:-75,
  },
  items: {
    marginTop: -20,
  },
  item: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius:10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  square: {
    height: 20,
    width: 20,
    borderColor: '#808080', 
    opacity: 0.4,
    borderWidth: 3,
    marginRight: 15,
    borderRadius: 2,
  },
  itemText: {
    color: '#00008B',
    fontSize: 16,
  },
  circle: {
    height: 12,
    width: 12,
    borderWidth: 2,
    borderColor: '#880808',
    borderRadius: 5,
  },
});
