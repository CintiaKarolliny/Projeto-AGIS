import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

function Card({ data, onSave }) {
  const [id] = useState(data?.id);
  const [title] = useState(data?.first_name + ' ' + data?.last_name);
  const [email] = useState(data?.email);
  const [avatar] = useState(data?.avatar);

const editarAluno = (itemId, firstName, lastName, userEmail) => {
    setId(itemId);
    setPrimeiroNome(firstName);
    setUltimoNome(lastName);
    setEmail(userEmail);
    toggleModal();
  };

  const Editar = async () => {
    // Lógica para editar
    console.log('Botão Editar pressionado para o usuário:', id);

    // Atualizar os dados
    const updatedData = 
    onSave(updatedData);
  };

  const Excluir = async () => {
    // Lógica para excluir
    console.log('Botão Excluir pressionado para o usuário:', id);

    // Excluir os dados
    const deletedData = 
    onSave(deletedData);
  };

  return (
    <View style={styles.card}>
    <Text>ID: {id}</Text>
      <Text>Nome: {title}</Text>
      <Text>Email: {email}</Text>
      <View style={styles.avatarContainer}>
        <Text>Avatar:</Text>
        <View style={styles.avatar} />
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button} onPress={Editar}>
          <Text>Editar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={Excluir}>
          <Text>Excluir</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
  },
  avatarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#ddd',
    marginLeft: 8,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  button: {
    backgroundColor: 'lightblue',
    padding: 8,
    borderRadius: 4,
  },
});

export default Card;
