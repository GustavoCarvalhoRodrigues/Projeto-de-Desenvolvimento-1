import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

const products = [
  { id: 1, name: 'Camiseta', brand: 'Nike', price: 59.99 },
  { id: 2, name: 'Calça', brand: 'Adidas', price: 79.99 },
  { id: 3, name: 'Jaqueta', brand: 'Puma', price: 129.99 },
  { id: 4, name: 'Tênis', brand: 'Reebok', price: 99.99 },
  { id: 5, name: 'Bermuda', brand: 'Under Armour', price: 39.99 },
  { id: 6, name: 'Meia', brand: 'Asics', price: 9.99 },
  { id: 7, name: 'Boné', brand: 'New Era', price: 29.99 },
  { id: 8, name: 'Mochila', brand: 'Vans', price: 79.99 },
  { id: 9, name: 'Óculos de sol', brand: 'Ray-Ban', price: 149.99 },
  { id: 10, name: 'Cinto', brand: 'Gucci', price: 199.99 },
  { id: 11, name: 'Chapéu', brand: 'Stetson', price: 49.99 },
  { id: 12, name: 'Relógio', brand: 'Casio', price: 99.99 },
  { id: 13, name: 'Luvas', brand: 'The North Face', price: 19.99 },
  { id: 14, name: 'Carteira', brand: 'Louis Vuitton', price: 299.99 },
  { id: 15, name: 'Lenço', brand: 'Hermes', price: 89.99 },
  { id: 16, name: 'Camisa social', brand: 'Ralph Lauren', price: 149.99 },
  { id: 17, name: 'Vestido', brand: 'Zara', price: 59.99 },
  { id: 18, name: 'Sapato', brand: 'Prada', price: 299.99 },
]
