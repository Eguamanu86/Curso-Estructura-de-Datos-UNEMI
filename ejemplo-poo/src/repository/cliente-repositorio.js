export class ClienteRepositorio {
  constructor() {
    this.clientes = []
  }

  crear(cliente) {
    this.clientes.push(cliente)
  }

  leer() {
    return this.clientes
  }
}
