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
    // this.clientes = [Cliente(),Cliente().... n]
  }

  //get: retornar valores
  getClientes() {
    return this.clientes
  }

  // set: asignar valores o crear
  setCreate(cliente) {             // 0 ,     1  ,     2
    this.clientes.push(cliente) // [Cliente1,Cliente2,Cliente(end)... n]
    //                     JSON  [{nombre: "ernesto"}]
    //                     key    ,  JSON: [{"nombre":"ernesto"},{}]
    localStorage.setItem('clientes', JSON.stringify(this.clientes))
  }

}
