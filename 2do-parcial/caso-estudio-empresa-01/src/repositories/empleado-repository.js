import { LocalStorageRepository } from './local-storage-repository.js'
import { Empleado } from '../entity/models.js'

export class EmpleadoRepository extends LocalStorageRepository {

  constructor() {
    super('empleados')
    this.empleados = this.getItems().map(c => Empleado.storeData(c))
    console.log(this.empleados)
  }

  create(empleado) {
    this.empleados.push(empleado)
    this.setItems(this.empleados)
  }

  read() {
    return this.empleados
  }

}
