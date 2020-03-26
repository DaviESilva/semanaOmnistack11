import React from 'react';
import './global.css';

//JSX Java Script XML (Código HTML dentro do JS)

// import Header from './Header'; Não será usado, mas será mantido para fins educacionais XD
import Routes from './routes';

function App() {

  // const [counter, setCounter] = useState(0);
//o useState é na verdade um ARRAY, em que as posições são: [value, function to update the value],
// este é o conceito de imutabilidade
//caso queira usar o useState, é necessário importá-lo junto com o react (import React, { useState })
  

  // function increment(){
  //   setCounter(counter + 1);
  // }

//Comandos HTML:
//<p></p> enquadra um parágrafo 
//<br /> Quebra de linha 

  return (
    <Routes />
  );
}

export default App;
