import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import {useState} from 'react'
import { MaterialIcons,MaterialCommunityIcons } from '@expo/vector-icons';

export default function Cart({price, name, image , totalPrice, setTotalPrice}) {

  const [items, setItems]= useState(0);
 

  function addToCart(){
  
    setItems(items + 1)
    setTotalPrice(totalPrice + price);
  }

  function removeFromCart(){
    setItems(items - 1)
    setTotalPrice(totalPrice - price);
  }

  return (
    <View style={styles.cart}>
      <Image style={styles.image} source={image}/>

      <View style={styles.details}>

        <Text style={styles.name}>{name}</Text>
        <Text style={styles.name}>Price: M{price}</Text>
        
        <TouchableOpacity> 
        <MaterialIcons name="add-shopping-cart" size={24} color="black" onPress={addToCart}/>
         </TouchableOpacity>
         <Text style={styles.name}>Quantity: {items}</Text>
         <TouchableOpacity>
         <MaterialCommunityIcons name="cart-minus" size={24} color="black" onPress={removeFromCart}/>
         </TouchableOpacity>

      
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  cart: {
    margin: 5,
    padding: 15,
    flexDirection: 'row',
    borderColor: '#999',
    borderRadius: 10,
    backgroundColor: '#dcdcdc'
  },

  details: {
    marginLeft: 20,
    padding:25
  },

  image: {
    height: 100,
    width: 100,
    borderRadius:70,
    padding:20,
    
  },

  name: {
    fontSize: 18,
    fontWeight: 'bold'
  }
})