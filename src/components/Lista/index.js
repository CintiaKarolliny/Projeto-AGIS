import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { styles } from './styles';

const Lista = () => {
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

  return (
    <ScrollView><View style={styles.container}>
      <Text style={styles.titulo}>Lista de alunos:</Text>
      <FlatList
        data={usuarios}
        keyExtractor={(usuario) => usuario.id.toString()}
        renderItem={({ item: usuario }) => (
          <View>
            <Image source={{ uri: usuario.avatar }} style={styles.avatar} />
            <Text style={styles.texto}>
              Nome: {usuario.first_name} {usuario.last_name}
            </Text>
            <Text style={styles.texto}>E-mail: {usuario.email}</Text>
            <Text style={styles.texto}>Curso: {usuario.curso}</Text>
            <Text style={styles.texto}>Turno: {usuario.turno}</Text>
            <Text>
              --------------------------------------------------------
            </Text>
          </View>
        )}
      />
    </View> </ScrollView>
  );
};

export default Lista;
