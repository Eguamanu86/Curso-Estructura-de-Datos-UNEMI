import { Cliente } from '../entity/model.js'

export class ClienteRespository {
  constructor() {
    this.clientes = JSON.parse(localStorage.getItem('clientes')) || []
    this.clientes = this.clientes.map(c => {
      return new Cliente(
        c.cedula,
        c.nombres,
        c.apellidos,
        c.genero,
        c.ciudad,
        c.direccion,
        c.telefono
      )
    })
  }

  getClientes() {
    return this.clientes
  }

  setCreate(cliente) {
    this.clientes.push(cliente)
    localStorage.setItem('clientes', JSON.stringify(this.clientes))
  }

}
