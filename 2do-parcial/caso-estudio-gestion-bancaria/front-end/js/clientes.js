import { ClienteUseCase } from '../../src/use-case/cliente-use-case.js'
import { renderClientes } from "../../src/util/table-render.js"

const clienteUseCase = new ClienteUseCase()

const formCliente = document.getElementById('id-form-cliente')
const tableClientes = document.querySelector('#id-table-clientes > tbody')

formCliente.addEventListener('submit', event => {
  event.preventDefault()
  const formdata = new FormData(event.target)
  // covertimos los datos en objeto key: values (diccionario)
  const data = Object.fromEntries(formdata.entries())

  const cliente = clienteUseCase.setCreate(data)

  if (!cliente) {
    alert('Cliente ya se encuentra Registrado..')
  }

  let template = renderClientes(clienteUseCase.getClientes())
  tableClientes.innerHTML = template
})

window.addEventListener("DOMContentLoaded", (event) => {
  let template = renderClientes(clienteUseCase.getClientes())
  tableClientes.innerHTML = template
})
