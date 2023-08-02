import { CuentaBancariaUseCase } from '../../src/use-case/cuenta-bancaria-use-case.js'

const cuentaBancariaUseCase = new CuentaBancariaUseCase()
const data = {
  cedula: '0926400615',
  fechaApertura: '2023-08-01',
  saldo: 100,
  tipoInteres: 'Normal',
  tipoCuenta: 'AHORRO'
}

cuentaBancariaUseCase.setCreateCuentaBancaria(data)
