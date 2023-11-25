import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, Modal, Button, TextInput, AsyncStorage } from 'react-native';
import Card from '../Card';

const Alunos = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isModalVisible, setModalVisible] = useState(false);
  const [primeiroNome, setPrimeiroNome] = useState('');
  const [ultimoNome, setUltimoNome] = useState('');
  const [email, setEmail] = useState('');

 useEffect(() => {
  const listarAlunos = async () => {
    try {
      const response = await fetch('https://reqres.in/api/users?page=2');

      if (response.ok) {
        const data = await response.json();
        setUsers(data.data);
      } else {
        console.error('Erro na requisição:', response.status);
      }
    } catch (error) {
      console.error('Erro ao obter dados:', error);
    } finally {
      setIsLoading(false);
    }
  };

  listarAlunos();
}, []);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const addNewUser = async () => {
    console.log('Testando valores antes de enviar a solicitação:');
    console.log('Primeiro Nome:', primeiroNome);
    console.log('Último Nome:', ultimoNome);
    console.log('Email:', email);

    try {
      const response = await fetch('https://reqres.in/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          first_name: primeiroNome,
          last_name: ultimoNome,
          email: email
        }),
      });

      if (response.ok) {
        const data = await response.json();
        
        setUsers([...users, data]);
        setPrimeiroNome('');
        setUltimoNome('');
        setEmail('');
        
        toggleModal();

      } else {
        console.error('Erro ao adicionar novo usuário:', response.status);
      }
    } catch (error) {
      console.error('Erro ao adicionar novo usuário:', error);
    }
  };


  return (
    <View style={styles.container}>
      <Button title="Adicionar Novo Usuário" onPress={toggleModal} />
      <Modal visible={isModalVisible} animationType="slide">
        <View style={styles.modalContainer}>
          <Text>Adicionar Novo Usuário</Text>
          <TextInput
            style={styles.input}
            placeholder="Primeiro nome do usuário: "
            value={primeiroNome}
            onChangeText={(text) => setPrimeiroNome(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Segundo nome do usuário: "
            value={ultimoNome}
            onChangeText={(text) => setUltimoNome(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="E-mail:"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
          <Button title="Adicionar" onPress={addNewUser} />
          <Button title="Cancelar" onPress={toggleModal} />
        </View>
      </Modal>
      {isLoading ? (
        <Text>Carregando...</Text>
      ) : (
        <FlatList
          data={users}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <Card data={item} />}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: 200,
    height: 40,
    borderWidth: 1,
    marginBottom: 20,
    padding: 10,
  },
});

export default Alunos;
