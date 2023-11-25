import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles';

const Login = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      const response = await fetch('https://reqres.in/api/login', {
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
        const dados = await response.json();
        console.log('Login bem-sucedido', JSON.stringify(dados));

        navigation.navigate('Principal');
      } else {
        const errorData = await response.json();
        setError(`Erro ao fazer login: ${errorData.erro}`);
      }
    } catch (erro) {
      console.error('Erro ao fazer login:', erro);
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
      <TouchableOpacity style={styles.botao} onPress={handleLogin}>
        <Text style={styles.textoBotao}>Entrar</Text>
      </TouchableOpacity>
      {error ? <Text>{error}</Text> : null}

      <TouchableOpacity style={styles.botao2} onPress={() => navigation.navigate('Cadastro')}>
        <Text style={styles.textoBotao2} >Não possuo uma conta</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
