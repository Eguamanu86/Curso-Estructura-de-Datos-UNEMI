import { ClienteRespository } from '../repository/cliente-repository.js'
import { Cliente } from '../entity/model.js'

export class ClienteUseCase {
  constructor() {
    this.clienteRespository = new ClienteRespository()
  }

  getClientes() {
    return this.clienteRespository.getClientes()
  }

  setCreate(data) {
    if (!this.buscarPorCedula(data.cedula)) {
      const cliente = new Cliente(
        data.cedula,
        data.nombres,
        data.apellidos,
        data.genero,
        data.ciudad,
        data.direccion,
        data.telefono,
        data.correo
      )
      this.clienteRespository.setCreate(cliente)
      return cliente
    }
    return null
  }

  buscarPorCedula(cedula) {
    const clientes = this.clienteRespository.getClientes()
    const cliente = clientes.find(c => c.cedula == cedula)
    return cliente
  }

}
