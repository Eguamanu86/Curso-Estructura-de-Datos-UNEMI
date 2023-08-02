
export class CuentaBancariaRepository {
  constructor() {
    this.cuentasBancaria = JSON.parse(localStorage.getItem('cuentas-bancaria')) || []

  }

  getCuentasBancaria() {
    return this.cuentasBancaria
  }

  setCreateCuentaBancaria(cuentaBancaria) {
    this.cuentasBancaria.push(cuentaBancaria)
    localStorage.setItem('cuentas-bancaria', JSON.stringify(this.cuentasBancaria))
  }

  setRemoveCuentas() {
    this.cuentasBancaria.length = 0
    localStorage.removeItem('cuentas-bancaria')
  }

  getCuentasLength() {
    return this.cuentasBancaria.length
  }

}
