import { ClienteUseCase } from '../../src/use-case/cliente-use-case.js'
import { renderClientes } from "../../src/util/table-render.js"
//    Creamos la instancia del caso de uso
const clienteUseCase = new ClienteUseCase()

const formCliente = document.getElementById('id-form-cliente')
const tableClientes = document.querySelector('#id-table-clientes > tbody')

formCliente.addEventListener('submit', event => {
  event.preventDefault()
  const formdata = new FormData(event.target)
  // covertimos los datos en objeto key: values (diccionario) JSON
  // {"cedula":"09264022566","nombres":"Ernesto","apellidos":"Guaman"}
  const data = Object.fromEntries(formdata.entries())

  // le pasamos el parametro Data =  {"cedula":"09264022566","nombres":"Ernesto","apellidos":"Guaman"}
  const cliente = clienteUseCase.setCreate(data)

  if (!cliente) {
    alert('Cliente ya se encuentra Registrado..')
  }
  // Actualizar listado del cliente en la pantalla GUI-HTML
  let template = renderClientes(clienteUseCase.getClientes())
  tableClientes.innerHTML = template
})

window.addEventListener("DOMContentLoaded", (event) => {
  const clientes = clienteUseCase.getClientes()
  let template = renderClientes(clientes)
  tableClientes.innerHTML = template
})
