import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { styles } from './styles';

const Remover = () => {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    const fetchUsuariosSalvos = async () => {
      try {
        const usuariosSalvos = await AsyncStorage.getItem('usuarios');
        const listaUsuarios = usuariosSalvos ? JSON.parse(usuariosSalvos) : [];
        setUsuarios(listaUsuarios);
      } catch (error) {
        console.error('Erro ao obter a lista de usuários salvos:', error);
      }
    };

    fetchUsuariosSalvos();
  }, []);

  const removerUsuario = async (usuarioId) => {
    try {
      const usuariosSalvos = await AsyncStorage.getItem('usuarios');
      const listaUsuarios = usuariosSalvos ? JSON.parse(usuariosSalvos) : [];

      // Remover o usuário da lista local
      const novaListaUsuarios = listaUsuarios.filter(
        (usuario) => usuario.id !== usuarioId
      );
      setUsuarios(novaListaUsuarios);

      // Atualizar o AsyncStorage com a nova lista de usuários
      await AsyncStorage.setItem('usuarios', JSON.stringify(novaListaUsuarios));

      console.log('Usuário removido com sucesso! ID:', usuarioId);
    } catch (error) {
      console.error('Erro ao remover usuário:', error);
    }
  };

  return (
    <ScrollView><View style={styles.container}>
      <Text style={styles.titulo}>Remover da lista de alunos:</Text>
      <FlatList
        data={usuarios}
        keyExtractor={(usuario) => usuario.id.toString()}
        renderItem={({ item: usuario }) => (
          <View>
            <Text>
              Nome: {usuario.first_name} {usuario.last_name}
            </Text>
            <Text>E-mail: {usuario.email}</Text>
            <Text>Curso: {usuario.curso}</Text>
            <Text>Turno: {usuario.turno}</Text>
            <TouchableOpacity
              style={styles.botao}
              onPress={() => removerUsuario(usuario.id)}>
              <Text style={styles.textoBotao}>Remover Aluno</Text>
            </TouchableOpacity>
              <Text>--------------------------------------------------------</Text>
          </View>
        )}
      />
    </View> </ScrollView>
  );
};

export default Remover;
