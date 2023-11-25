import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

  titulo: {
    fontFamily: 'serif',
    textAlign: 'center',
    fontSize: 72,
    marginBottom: 50,
  },

  input: {
    height: 45,
    borderWidth: 1,
    borderColor: '#222',
    margin: 15,
    fontSize: 20,
    padding: 15,
    backgroundColor: 'white',
        borderRadius: 5,
  },

  botao: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    paddingVertical: 8,
    paddingHorizontal: 75,
    backgroundColor: '#1979C2',
    borderRadius: 30,
  },

    botao2: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    paddingVertical: 10,
    paddingHorizontal: 22,
    backgroundColor: '#1979C2',
    borderRadius: 30,
  },

 textoBotao: {
    fontSize: 20,
    textAlign: 'center',
    color: "white"
  },

 textoBotao2: {
    fontSize: 13,
    textAlign: 'center',
    color: "white"
  },

  texto: {
    fontSize: 20,
    textAlign: 'center',
    color: "red"
  },
  
  fundo: {
    height: '100vh', // Ajuste conforme necessário
    background: '#E6E6E6',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export { styles };
