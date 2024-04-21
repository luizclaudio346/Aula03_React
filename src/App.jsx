import React from 'react';
import EstouConseguindoAprenderReact from "./components/EstouConseguindoAprenderReact";
import Aluno from './components/Aluno';
import Aluno2 from './components/Aluno2';

function App() {
  const alunos = [
      { nome: "Laura Alencar", email: "lauraalencar@example.com", curso: "Engenharia de Software", media: 8.5 },
      { nome: "Lineu Silva", email: "lineusilva@example.com", curso: "Gestão Saude Pública", media: 10.0 },
      { nome: "Elma Dias", email: "elmadias@example.com", curso: "Ciências Políticas", media: 7.8 }
  ];

  return (
      <div className="App">
          {alunos.map((aluno, index) => (
              <div className="card" key={index}>
                  <Aluno2
                      nome={aluno.nome}
                      email={aluno.email}
                      curso={aluno.curso}
                      media={aluno.media}
                  />
              </div>
          ))}
      </div>
  );
}

export default App;
