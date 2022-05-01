import { StyleSheet, Text, View, ScrollView , StatusBar, TouchableOpacity,ImageBackground } from 'react-native';
import {useState} from 'react';
import Cart from './Cart';
import { MaterialIcons,AntDesign } from '@expo/vector-icons';



export default function App() {
  const [totalPrice, setTotalPrice] = useState(0);

  return (
<>
  <StatusBar autoSize="auto"/>

    <View style={styles.container}>

      <View style={styles.header}>
        <TouchableOpacity>
        <MaterialIcons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.text}>Cart</Text>
        <TouchableOpacity>
        <AntDesign name="bars" size={24} color="black" />
        </TouchableOpacity>
      </View>


    <View style={styles.body}>
      <ScrollView>
      
          <Cart name="Fat Cakes" price={1}  totalPrice={totalPrice} setTotalPrice={setTotalPrice} image={require('./assets/Mangwinya-vetkoeks-fat-cakes.png')} />

          <Cart name="Candy" price={10} totalPrice={totalPrice} setTotalPrice = {setTotalPrice} image={require('./assets/candy.jpg')}/>
          <Cart name="Sausages" price={7.50} totalPrice={totalPrice} setTotalPrice = {setTotalPrice} image={require('./assets/russians.jpg')}/>
          <Cart name="Chips" price={20} totalPrice={totalPrice} setTotalPrice = {setTotalPrice} image={require('./assets/chips-in-gmcfunplace.jpg')}/>
          <Cart name="Fish and Chips" price={30} totalPrice={totalPrice} setTotalPrice={setTotalPrice} image={require('./assets/fishandchips.webp')}/>
          <Cart name="Soda" price={12}  totalPrice={totalPrice} setTotalPrice={setTotalPrice} image={require('./assets/sodas.jpeg')} />
          <Cart name="Latte" price={18} totalPrice={totalPrice} setTotalPrice={setTotalPrice} image={require('./assets/Latte_art_3.jpg')}/>
      </ScrollView>
    </View>

    <View style={styles.footer}>
          <Text style={styles.text}>The total is: M{totalPrice}</Text>
    </View>

  </View>

</>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#99badd',

  },
 
  header: {
  backgroundColor: '#f8f8ff',
    marginBottom:10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
    height:"5%"

  },
  text:{
    fontSize:24,
    fontWeight: 'bold',
    
  },

  body:{
  
  alignItems: 'center',
   justifyContent: 'center',
   height:"87%"
    
    
  },

  footer:{
    backgroundColor:"#dcdcdc",
    width:"98%",
    alignItems: 'center',
    margin:5,
    padding:5,
    borderWidth:1,
    borderRadius:10,
    height:"5%"
  
  },
});