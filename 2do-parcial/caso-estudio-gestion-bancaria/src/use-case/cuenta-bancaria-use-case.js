import { CuentaBancariaRepository } from '../repository/cuenta-bancaria-repository.js'
import { ClienteRespository } from '../repository/cliente-repository.js'
import { Ahorro, Corriente } from '../entity/model.js'

export class CuentaBancariaUseCase {
  constructor() {
    this.cuentaBancariaRepository = new CuentaBancariaRepository()
    this.clienteRespository = new ClienteRespository()
  }

  getCuentasBancaria() {
    return this.cuentaBancariaRepository.getCuentasBancaria()
  }

  setCreateCuentaBancaria(data) {  // data.cedula = '009999999'

    // generamos el numero de cuenta secuencial en formato string: "000001"
    const numeroCuenta = this.getGenerarNumeroCuenta()
    // Buscamos al cliemte por el numero de cedula
    const cliente = this.getBuscarCliente(data.cedula)
    let cuenta = null

    // opciones: depende del tipo cuenta bancaria
    switch (data.tipoCuenta) {
      case 'AHORRO':
        cuenta = new Ahorro(
          numeroCuenta,
          cliente,
          data.fechaApertura,
          data.saldo,
          data.tipoInteres
        )

        break

      case 'CORRIENTE':
        cuenta = new Corriente(
          numeroCuenta,
          cliente,
          data.fechaApertura,
          data.saldo,
          data.tipoInteres
        )
        break

    }
    this.cuentaBancariaRepository.setCreateCuentaBancaria(cuenta)
    return cuenta
  }

  getGenerarNumeroCuenta() {
    const cuentasLength = this.cuentaBancariaRepository.getCuentasLength() + 1
    const numeroCuenta = String(cuentasLength).padStart(6, "0") // 000001
    return numeroCuenta
  }

  getBuscarCliente(cedula) {
    const cliente = this.clienteRespository.getClientes().find(c => c.cedula == cedula)
    return cliente
  }

}
