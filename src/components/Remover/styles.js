import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  titulo: {
    fontFamily: 'arial',
    textAlign: 'center',
    fontSize: 24,
    marginBottom: 30,
  },

  subtitulo: {
    marginHorizontal: 10,
    fontFamily: 'arial',
    fontSize: 16,
    marginBottom: 5,
  },

  texto: {
    padding: 2,
    fontSize: 15,
    color: 'black',
    marginBottom: 5,
    paddingHorizontal: 4,
  },

  botao: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    paddingVertical: 5,
    paddingHorizontal: 50,
    backgroundColor: '#1979C2',
    borderRadius: 4,
    marginBottom: 10,
  },

  textoBotao: {
    fontSize: 20,
    textAlign: 'center',
    color: 'white',
  },

  picker: {
    fontSize: 14,
    padding: 5,
  },

  turno: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 10,
  },

  container: {
    paddingTop: 35,
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
