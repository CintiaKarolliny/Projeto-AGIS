import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  titulo: {
    fontFamily: 'arial',
    textAlign: 'center',
    fontSize: 28,
    marginBottom: 30,
  },

  objetivo: {
    marginHorizontal: 10,
    fontFamily: 'arial',
    fontSize: 15,
    marginBottom: 15,
    textAlign: 'justify',
  },

  subtitulo: {
    marginHorizontal: 10,
    fontFamily: 'arial',
    fontSize: 16,
    marginBottom: 5,
  },

  texto: {
    padding: 2,
    fontSize: 14,
    color: 'black',
    marginBottom: 10,
    marginHorizontal: 10,
    textAlign: 'justify',
  },

  fundo: {
    height: '100vh',
    background: '#E6E6E6',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export { styles };
