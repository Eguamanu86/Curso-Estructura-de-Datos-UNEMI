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
    // si no existe numero de cedula registrado continuamos: guardar Cliente
    // const objeto = this.buscarPorCedula(data.cedula)
    // si el objeto esta vacio o
    if (!this.buscarPorCedula(data.cedula)) {
      // creamos la instancia del objeto Cliente
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
    const clientes = this.clienteRespository.getClientes() // [CLiente1(),Cliente2() ... n]
    const cliente = clientes.find(c => c.cedula == cedula) // Cliente() : undefined
    //const cliente1 = clientes.map(c => c.cedula) // [Cliente1(),Cliente2()] : []
    ///const cliente2 = clientes.filter(c => c.cedula == cedula)[0] // [Cliente1()]: []
    return cliente
  }

}
