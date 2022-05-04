import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
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
      

      <View style={styles.details}>

      <Image style={styles.image} source={image}/>

          <Text style={styles.name}>{name}</Text>
          <Text style={styles.quantity}>Price: M{price}</Text>
        <Text style={styles.quantity}>Quantity: {items}</Text>

        <View style={styles.addRemove}>
            <TouchableOpacity> 
               <MaterialIcons name="add-shopping-cart" size={24} color="black" onPress={addToCart}/>
            </TouchableOpacity>
        
            <TouchableOpacity>
               <MaterialCommunityIcons name="cart-minus" size={24} color="black" onPress={removeFromCart}/>
            </TouchableOpacity>
        </View>
      
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
    backgroundColor: '#e6e8fa',
  },

  details: {
    margin: 5,
    padding:5,
    justifyContent: 'center',
    alignItems: 'center',
  },

  addRemove:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop:10,
    alignSelf:"stretch"
  },

  image: {
    height: 200,
    width: 250,
    borderRadius:20,
    padding:20,
    
  },

  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop:5
    
  },
  quantity: {
    fontSize: 18,
    margin: 5

  },
})