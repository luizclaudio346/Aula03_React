import React, { Fragment } from 'react';

const Aluno2 = ({ nome, email, curso, media }) => (
  <Fragment>
    <h2>{nome}</h2>
    <p>Email: {email}</p>
    <p>Curso: {curso}</p>
    <p>Média: {media}</p>
    <p>Status: {media >= 7 ? 'APROVADO(A)' : 'REPROVADO(A)'}</p>
  </Fragment>
);

export default Aluno2;