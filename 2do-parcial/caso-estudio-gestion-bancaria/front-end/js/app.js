import { CuentaBancariaUseCase } from '../../src/use-case/cuenta-bancaria-use-case.js'
import { ClienteUseCase } from '../../src/use-case/cliente-use-case.js'
import { renderCuentasBancaria } from "../../src/util/table-render.js"

const cuentaBancariaUseCase = new CuentaBancariaUseCase()
const clienteUseCase = new ClienteUseCase()

const tableCuentas = document.querySelector('#id-table-cuentas > tbody')
const modalCuentas = document.getElementById('modalCuentas')
const selectCliente = document.getElementById('id-cliente')

const formCuentaBancaria = document.getElementById('id-form-cuenta-bancaria')
const numeroCuenta = document.getElementById('id-numero-cuenta')


window.addEventListener("DOMContentLoaded", (event) => {
  const cuentasBancarias = cuentaBancariaUseCase.getCuentasBancaria()
  let template = renderCuentasBancaria(cuentasBancarias)
  tableCuentas.innerHTML = template
})


modalCuentas.addEventListener('shown.bs.modal', function () {
  modalCuentas.focus()
  numeroCuenta.value = cuentaBancariaUseCase.getGenerarNumeroCuenta()

  const clientes = clienteUseCase.getClientes()
  selectCliente.options.length = 0
  for (const c of clientes) {
    const option = document.createElement('option');
    option.value = c.cedula
    option.text = `${c.nombres} ${c.apellidos}`
    selectCliente.add(option)
  }

})


formCuentaBancaria.addEventListener('submit', event => {
  event.preventDefault()
  const formdata = new FormData(event.target)
  // covertimos los datos en objeto key: values (diccionario) JSON
  // {"cedula":"09264022566","nombres":"Ernesto","apellidos":"Guaman"}
  const data = Object.fromEntries(formdata.entries())
  cuentaBancariaUseCase.setCreateCuentaBancaria(data)

  const cuentasBancarias = cuentaBancariaUseCase.getCuentasBancaria()
  let template = renderCuentasBancaria(cuentasBancarias)
  tableCuentas.innerHTML = template

})
