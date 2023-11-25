import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  titulo: {
    fontFamily: 'arial',
    textAlign: 'center',
    fontSize: 24,
    marginBottom: 30,
  },

  texto: {
    padding: 2,
    fontSize: 15,
    color: 'black',
    marginBottom: 5,
    paddingHorizontal: 4,
  },

  textoBotao: {
    fontSize: 20,
    textAlign: 'center',
    color: 'white',
  },

  turno: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 10,
  },

  container: {
    paddingTop: 35,
  },

  avatar: {
    width: 120,
    height: 120,
    marginBottom: 10,
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
