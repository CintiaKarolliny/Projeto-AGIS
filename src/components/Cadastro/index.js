import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles';

const Cadastro = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleRegister = async () => {
    try {
      const response = await fetch('https://reqres.in/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      if (response.ok) {
        navigation.navigate('Principal');
      } else {
        const errorData = await response.json();
        setError(`Erro ao fazer cadastro: ${errorData.error}`);
      }
    } catch (error) {
      console.error('Erro ao fazer cadastro:', error);
      setError('Erro ao fazer cadastro. Tente novamente.');
    }
  };

  return (
    <View style={styles.fundo}>
      <Text style={styles.titulo}>AGIS</Text>
      <TextInput
        style={styles.input}
        placeholder="E-mail"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <TouchableOpacity style={styles.botao} onPress={handleRegister}>
        <Text style={styles.textoBotao}>Cadastrar</Text>
      </TouchableOpacity>
      {error ? <Text>{error}</Text> : null}
      <TouchableOpacity
        style={styles.botao2}
        onPress={() => navigation.navigate('Login')}>
        <Text style={styles.textoBotao2}>Já possui uma conta? Faça login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Cadastro;
