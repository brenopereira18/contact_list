class Contato {
  nome: string;
  telefone: string;
  email: string;
  id: string;

  constructor(nome: string, telefone: string, email: string, id: string) {
    this.nome = nome;
    this.telefone = telefone;
    this.email = email;
    this.id = id;
  }
}

export default Contato;
