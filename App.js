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

      <ImageBackground source={require('./assets/food.jpg')} resizeMode="cover" style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity >
              <MaterialIcons name="arrow-back" size={24} color="#f8f8ff" />
          </TouchableOpacity>
          <Text style={styles.text}>Cart</Text>
          <TouchableOpacity>
            <AntDesign name="bars" size={24} color="#f8f8ff" />
          </TouchableOpacity>
        </View>
        <View style={styles.slogan}>
            <Text style={styles.text}>Foodies Welcome to Limkokwing Wings Cafe. What can we get you?</Text>
        </View>

      </ImageBackground>
      
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
          <Text style={styles.text}>Balance: M{totalPrice}</Text>
    </View>
    <View style={styles.navigationBar}>

        <TouchableOpacity>
        <AntDesign name="home" size={24} color="#f8f8ff" />
        </TouchableOpacity>
        <TouchableOpacity>
        <AntDesign name="shoppingcart" size={24} color="#e32636" />
        </TouchableOpacity>
        <TouchableOpacity>
        <AntDesign name="profile" size={24} color="#f8f8ff" />
        </TouchableOpacity>
    </View>

  </View>

</>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f0f0f',
 
  },
 
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin:5
  },

  text:{
    fontSize:24,
    fontWeight: 'bold',
    color:'#fff8dc',
    textShadowColor: 'black', 
    textShadowOffset: { width: -1, height: 0 },
    textShadowRadius: 10,
    
  },
  slogan:{
    alignSelf: 'center',
    marginTop:85,
    justifyContent: 'center',
    padding:10
  },

  body:{
    alignItems: 'center',
    justifyContent: 'center',
    height:"50%",
 
  },

  footer:{
    backgroundColor:"#003153",
    width:"98%",
    alignItems: 'center',
    margin:5,
    padding:5,
    borderRadius:10,
    height:"5%"
  },
  navigationBar:{
    flexDirection:"row",
    justifyContent:"space-between",
    margin:10,
    padding:10,
    height:"7%",
  },
});