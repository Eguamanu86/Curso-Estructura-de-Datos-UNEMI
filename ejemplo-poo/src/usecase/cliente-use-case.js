import { ClienteRepositorio } from '../repository/cliente-repositorio.js'

export class ClienteUseCase {
  constructor() {
    this.clienteRepositorio = new ClienteRepositorio()
  }

  crear(cliente) {
    // validaciones
    if (this.#validarCedula(cliente.cedula)) {
      this.clienteRepositorio.crear(cliente)
    }
  }

  #validarCedula(cedula) {
    // codigo
    return true
  }

  leer() {
    return this.clienteRepositorio.leer()
  }
}
