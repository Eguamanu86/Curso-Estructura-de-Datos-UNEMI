import { EmpleadoRepository } from '../repositories/empleado-repository.js'
import { Empleado } from '../entity/models.js'

export class EmpleadoUseCase {
  constructor() {
    this.empleadoRepository = new EmpleadoRepository()
  }

  crear(data) {
    const empleado = Empleado.storeData(data)
    this.empleadoRepository.create(empleado)
  }

  getEmpleados() {
    return this.empleadoRepository.read()
  }

}
