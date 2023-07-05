import { LocalStorageRepository } from './local-storage-repository.js'
import { Cliente } from '../entity/models.js'

export class ClienteRepository extends LocalStorageRepository {

  constructor() {
    // constructor de la clase Padre (parametro=Clientes)
    super('clientes')
    // Inicializa el listado de Clientes almacenados en LocalStorage
    this.clientes = this.getItems().map(c => Cliente.storeData(c))

    console.log(this.clientes)
  }

  create(cliente) {
    // Almacena un objeto cliente al Listado de Clientes
    this.clientes.push(cliente)
    // Actualiza el listado de clientes en LocalStorage
    this.setItems(this.clientes)
  }

  read() {
    return this.clientes
  }

}
