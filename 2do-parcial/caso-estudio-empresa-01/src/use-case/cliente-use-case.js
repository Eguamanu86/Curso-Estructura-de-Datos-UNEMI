import { ClienteRepository } from '../repositories/cliente-repository.js'
import { Cliente } from '../entity/models.js'

export class ClienteUseCase {
  constructor() {
    // Inicializa la Instacia de la Clase ClienteRepositorio
    this.clienteRepository = new ClienteRepository()
  }

  crear(data) {
    // crea una instancia clinte = Cliente.storeData(data) -> devuelve la Instancia
    const cliente = Cliente.storeData(data)
    this.clienteRepository.create(cliente)
  }

  getClientes() {
    return this.clienteRepository.read()
  }

}
