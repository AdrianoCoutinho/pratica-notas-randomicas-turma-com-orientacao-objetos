export class Aluno {
  public nome: string;
  public idade: number;
  public nota: number;
  status?: "Aprovado" | "Reprovado";

  constructor(nome: string, idade: number) {
    this.nome = nome;
    this.idade = idade;
    this.nota = 0;
  }

  addPoints(gabarito: string[]) {
    const escolhas: string[] = ["A", "B", "C"];
    const gabAluno: string[] = [];
    for (const escolha of gabarito) {
      gabAluno.push(escolhas[Math.floor(Math.random() * escolhas.length)]);
      if (escolha === gabarito[Math.floor(Math.random() * escolhas.length)]) {
        this.nota++;
      }
    }
    this.status = this.nota! >= 6 ? "Aprovado" : "Reprovado";
  }
}
