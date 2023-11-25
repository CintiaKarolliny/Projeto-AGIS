import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Home() {

const navigation = useNavigation();

 return (
   <View>
     <Text>Seja bem vindo ao</Text>
     <Text>Sistema de Gerenciamento Escolar</Text>

     <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.link}>Entrar na minha conta</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
        <Text style={styles.link}>Cadastrar-me</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('menu', { screen: 'Sobre' })}>
        <Text style={styles.link}>sobre aqui</Text>
      </TouchableOpacity>

   </View>
  );
}

const styles = StyleSheet.create({  
  link: {
    marginTop: 10,
    color: 'blue',
  }
});