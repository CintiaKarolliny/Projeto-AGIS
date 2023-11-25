import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles';

export default function Home() {
  const navigation = useNavigation();

  return (
    <ScrollView>
      <View>
        <Text style={styles.titulo}>
          Seja bem vindo ao Aplicativo de Gestão para Instituições de ensino Superior
        </Text>

        <Text style={styles.objetivo}>
          O aplicativo foi projetado para simplificar a administração acadêmica,
          oferecendo funcionalidades para gerenciar seus alunos com facilidade:
        </Text>

        <Text style={styles.subtitulo}>1.Adicionar aluno:</Text>
        <Text style={styles.texto}>
          Insira novos alunos à base de dados do sistema. Nosso processo
          simplificado garante que a entrada de informações seja rápida e
          precisa.
        </Text>

        <Text style={styles.subtitulo}>2.Remover aluno:</Text>
        <Text style={styles.texto}>
          Contenha a estrutura de alunos quando necessário, mantendo sua lista
          de estudantes atualizada com um processo intuitivo que economiza seu
          tempo valioso.
        </Text>

        <Text style={styles.subtitulo}>3.Listar alunos:</Text>
        <Text style={styles.texto}>
          Obtenha uma visão abrangente de todos os alunos matriculados. O
          sistema oferece uma lista completa e atualizada, permitindo que você
          acesse informações cruciais com apenas um olhar.
        </Text>
      </View>{' '}
    </ScrollView>
  );
}
