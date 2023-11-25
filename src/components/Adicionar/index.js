import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';
import { styles } from './styles';

const Adicionar = () => {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    const fetchUsuarios = async () => {
      try {
        const response = await fetch('https://reqres.in/api/users?per_page=12');
        const data = await response.json();
        setUsuarios(
          data.data.map((usuario) => ({
            ...usuario,
            curso: 'SI',
            turno: 'Diurno',
            limite: 0,
          }))
        );
      } catch (error) {
        console.error('Erro ao obter a lista de usuários:', error);
      }
    };

    fetchUsuarios();
  }, []);

  const adicionarUsuario = async (usuario) => {
    try {
      const usuariosSalvos = await AsyncStorage.getItem('usuarios');
      const listaUsuarios = usuariosSalvos ? JSON.parse(usuariosSalvos) : [];

      const usuarioComInformacoes = {
        ...usuario,
        turno: usuario.turno,
        limite: usuario.limite,
      };

      const usuarioExistente = listaUsuarios.some((u) => u.id === usuario.id);

      if (!usuarioExistente) {
        listaUsuarios.push(usuarioComInformacoes);
        await AsyncStorage.setItem('usuarios', JSON.stringify(listaUsuarios));
        console.log('Usuário adicionado com sucesso:', usuarioComInformacoes);
      } else {
        console.log(
          'Usuário já adicionado anteriormente:',
          usuarioComInformacoes
        );
      }
    } catch (error) {
      console.error('Erro ao adicionar usuário:', error);
    }
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.titulo}>Adicionar na lista de alunos:</Text>
        <FlatList
          data={usuarios}
          keyExtractor={(usuario) => usuario.id.toString()}
          renderItem={({ item: usuario, index }) => (
            <View key={usuario.id}>
              <Text style={styles.texto}>
                Nome: {usuario.first_name} {usuario.last_name}
              </Text>
              <Text style={styles.texto}>E-mail: {usuario.email}</Text>
              <View>
                <Text style={styles.texto}>Curso:</Text>
                <Picker
                  selectedValue={usuario.curso}
                  onValueChange={(itemValue) => {
                    const novaLista = [...usuarios];
                    novaLista[index].curso = itemValue;
                    setUsuarios(novaLista);
                  }}
                  style={styles.picker}>
                  <Picker.Item
                    label="Sistemas para Internet"
                    value="Sistemas para Internet"
                  />
                  <Picker.Item
                    label="Ciência de Dados"
                    value="Ciência de Dados"
                  />
                  <Picker.Item
                    label="Análise e Desenvolvimento de Sistemas"
                    value="Análise e Desenvolvimento de Sistemas"
                  />
                  <Picker.Item
                    label="Gestão portuária"
                    value="Gestão portuária"
                  />
                  <Picker.Item
                    label="Gestão Empresarial"
                    value="Gestão Empresarial"
                  />
                  <Picker.Item label="Administração" value="Administração" />
                </Picker>
              </View>
              <View key={usuario.id}>
                <Text style={styles.texto}>Turno:</Text>
                <Slider
                  minimumValue={0}
                  maximumValue={2}
                  step={1}
                  onValueChange={(valorSelecionado) => {
                    const novaLista = [...usuarios];
                    novaLista[index].turno = [
                      'Diurno',
                      'Vespertino',
                      'Noturno',
                    ][Math.floor(valorSelecionado)];
                    setUsuarios(novaLista);
                  }}
                  value={['Diurno', 'Vespertino', 'Noturno'].indexOf(
                    usuario.turno
                  )}
                  style={styles.turno}
                />
                <Text style={styles.turno}>{usuario.turno}</Text>
              </View>
              <TouchableOpacity
                style={styles.botao}
                onPress={() => adicionarUsuario(usuario)}>
                <Text style={styles.textoBotao}>Adicionar</Text>
              </TouchableOpacity>
              <Text>--------------------------------------------------------</Text>
            </View>
          )}
        />
      </View>
    </ScrollView>
  );
};

export default Adicionar;
