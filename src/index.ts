import { Aluno } from "./aluno";
import { Pessoa } from "./pessoa";

const exercicio1 = (): void => {
  const list: number[] = [
    8, 72, 1, 37, 21, 54, 7, 81, 23, 92, 12, 87, 3, 12, 6, 4,
  ];

  const listImpar = list.filter((item: number) => {
    if (item % 2 != 0) {
      return true;
    }
    return false;
  });
  console.log(`LISTA ANTIGA`);
  console.log(list);
  console.log(`\nLISTA IMPAR`);
  console.log(listImpar);
};

//exercicio1();

const exercicio2 = (): void => {
  const list = [8, 72, 1, 37, 21, 54, 7, 81, 23, 92, 12, 87, 3, 12, 6, 4];

  const total = list.reduce((value: number, sum: number) => value + sum, 0);

  console.log(`A soma de todos os números do array é ${total}`);
};

//exercicio2();

const pessoas = [
  new Pessoa("Adriano", 23),
  new Pessoa("Joao", 1),
  new Pessoa("Maria", 45),
  new Pessoa("Jose", 15),
  new Pessoa("Matheus", 10),
  new Pessoa("Pedro", 11),
  new Pessoa("Leticia", 110),
  new Pessoa("Beatriz", 22),
  new Pessoa("Marta", 23, 5000),
  new Pessoa("Gabriela", 1, 4000),
  new Pessoa("Emanuelle", 45, 3000),
  new Pessoa("Roberto", 15, 2000),
  new Pessoa("Marialia", 10, 1000),
  new Pessoa("Bellatrix", 11, 500),
  new Pessoa("Ravena", 110, 250),
  new Pessoa("Debora", 22, 125),
];

const exercicio3 = (): void => {
  const menosIdade = pessoas.filter((pessoa) => {
    if (pessoa.idade < 23) {
      return true;
    }
    return false;
  });
  console.log(menosIdade);
};

//exercicio3();

const exercicio4 = (): void => {
  const menorTrinta = pessoas.filter((pessoa) => {
    if (pessoa.idade < 30) {
      return true;
    }
    return false;
  });

  const idadesMenorTrinta = menorTrinta.map((pessoa) => {
    return pessoa.idade;
  });
  const mediaIdade = idadesMenorTrinta.reduce((value, sum) => value + sum, 0);
  console.log(mediaIdade / idadesMenorTrinta.length);
};

//exercicio4();

const exercicio5 = (): void => {
  const salarioMenor = pessoas.filter((pessoa) => {
    if (pessoa.salario) {
      if (pessoa.salario < 1027) {
        return true;
      }
    }

    return false;
  });
  console.log(salarioMenor);
};

//exercicio5();

const exercicio6 = (): void => {
  let alunos: Aluno[] = [
    new Aluno("Adriano", 23),
    new Aluno("Roberta", 24),
    new Aluno("Maria", 25),
    new Aluno("Luisa", 26),
    new Aluno("Letica", 27),
    new Aluno("Robert", 28),
    new Aluno("Joao", 29),
    new Aluno("Antonio", 30),
    new Aluno("Joel", 31),
    new Aluno("Ellie", 32),
  ];

  const gabarito: string[] = ["A", "B", "C", "D", "A", "B", "C", "C", "D", "A"];

  alunos.map((aluno) => aluno.addPoints(gabarito));
  const aprovados = alunos
    .filter((aluno) => aluno.status === "Aprovado")
    .map((item) => {
      return `Nome: ${item.nome} - Nota: ${item.nota}`;
    });
  const reprovados = alunos
    .filter((aluno) => aluno.status === "Reprovado")
    .map((item) => {
      return `Nome: ${item.nome} - Nota: ${item.nota}`;
    });

  const mediaTurma =
    alunos.reduce((current, item) => {
      return current + item.nota;
    }, 0) / alunos.length;

  const melhorNota = alunos.reduce((current, item) => {
    return Math.max(current, item.nota);
  }, -Infinity);

  const piorNota = alunos.reduce((current, item) => {
    return Math.min(current, item.nota);
  }, melhorNota);

  const melhorAluno = alunos
    .filter((aluno) => aluno.nota === melhorNota)
    .map((aluno) => {
      return `Nome: ${aluno.nome} - Nota ${aluno.nota}`;
    });

  const piorAluno = alunos
    .filter((aluno) => aluno.nota === piorNota)
    .map((aluno) => {
      return `Nome: ${aluno.nome} - Nota ${aluno.nota}`;
    });

  console.log(`== Alunos aprovados ==`);
  console.log(aprovados);
  console.log(`\n\== Alunos reprovados ==`);
  console.log(reprovados);
  console.log(`\n\== Média da turma ==`);
  console.log(`Média: ${mediaTurma}`);
  console.log(`\n\== Melhor aluno da turma ==`);
  console.log(melhorAluno);
  console.log(`\n\== Pior aluno da turma ==`);
  console.log(piorAluno);
};

exercicio6();
