import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
  <StatusBar style="auto" />
 
      {/* view1 */}
      <View style={styles.view1}>
        <View style={styles.circle}></View>
      </View>
      {/* view2 */}
      <View style={styles.view2}>
          <Text style={styles.Text1}>GROW</Text>
          <Text style={styles.Text2}>YOUR BUSINESS</Text>
      </View>
      {/* view3 */}
      <View style={styles.view3}>
          <Text style={styles.Text3}>We will help you to grow your business using online server</Text>
      </View>
      {/* view4 */}
      <View style={styles.view4}>
          <button style={styles.btlogin}>LOGIN</button>
          <button style={styles.btsignup}>SIGN UP</button>      
      </View>
      <View style={styles.view5}>
          <Text style={styles.Text5}>HOW WE WORK</Text>
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'linear-gradient(to bottom, rgba(0, 204, 249, 0.1), #00CCF9 )'
    ,
    alignItems: 'center',
    justifyContent: 'center',
  },
  view1: {
    flex:2  ,
    justifyContent: 'center',
  },
  circle :{
    width: 170,
    height: 170,
    borderRadius: 170/2,
    borderColor: 'black',
    borderWidth: 18,
  },
  view2: {
    flex:1,
  },
  Text1:{
      textAlign: 'center',
      color: 'Black',
      fontSize:25,
      fontWeight: 700,
  },
  Text2:{
    fontVariant: 'small-caps',
    color: 'Black',
    fontSize:24,
    fontWeight: 700,
    justifyContent: 'center',
  },
  view3: {
    flex:1,
  },
  Text3:{
    textAlign: 'center',
    color: 'Black',
    fontSize:15,
    fontWeight: 700,
    marginLeft:20,
    marginRight:20,
  },
  Text5 :{
    textAlign: 'center',
    color: 'Black',
    fontSize:15,
    fontWeight: 700,
    marginLeft:20,
    marginRight:20,
  },
  view4: {
    flex:1,
    flexDirection: 'row',
  },
  btlogin:{
    display: 'flex',
    backgroundColor:'#E3C000',
    alignItems: 'center',
    justifyContent: 'center',
    width: 125,
    height: 45,
    borderRadius: 5,
  },
  btsignup:{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#E3C000',
    width: 125,
    height: 45,
    marginLeft: 40,
    borderRadius: 5,
  },
});