
// importamos las clases Casos de Uso.
import { ClienteUseCase } from "../../src/use-case/cliente-use-case.js"
import { EmpleadoUseCase } from "../../src/use-case/empleado-use-case.js"
// Importamos la funciones para general el HTML de la Tablas
import { renderClientes, renderEmpleados } from "../../src/util/table-render.js"

// Crearmos las referencias a los controles HTML Formulario y Tablas para Clientes
const formCliente = document.querySelector('#id-form-cliente')
const tableClientesTbody = document.querySelector('#id-table-clientes > tbody')

// Crearmos las referencias a los controles HTML Formulario y Tablas para Empleados
const formEmpleado = document.querySelector('#id-form-empleado')
const tableEmpleadosTbody = document.querySelector('#id-table-empleados > tbody')

// creamos las Instancias de las clases ClienteUseCase, EmpleadoUseCase
const clienteUseCase = new ClienteUseCase()
const empleadoUseCase = new EmpleadoUseCase()

// creamos un escuchador de evento "DOMContentLoaded" cuando la pagina se termine de Cargar por completo
// Generamos las templates HTML para presentar en las Tablas Tbody.
window.addEventListener("DOMContentLoaded", (event) => {
  let template = renderClientes(clienteUseCase.getClientes())
  tableClientesTbody.innerHTML = template

  template = renderEmpleados(empleadoUseCase.getEmpleados())
  tableEmpleadosTbody.innerHTML = template
})

// Evento "submit" de envio de Datos del Formulario Cliente
formCliente.addEventListener('submit', (event) => {

  event.preventDefault()
  const formdata = new FormData(event.target)
  // covertimos los datos en objeto key: values (diccionario)
  const data = Object.fromEntries(formdata.entries())
  // El caso de uso crea el registro de cliente
  clienteUseCase.crear(data)

  // Presentamos los registros de clientes de la tabla HTML
  const template = renderClientes(clienteUseCase.getClientes())
  tableClientesTbody.innerHTML = template
})

formEmpleado.addEventListener('submit', (event) => {

  event.preventDefault()
  const formdata = new FormData(event.target)
  // // covertimos los datos en objeto key: values (diccionario)
  const data = Object.fromEntries(formdata.entries())

  // El caso de uso crea el registro de empleado
  empleadoUseCase.crear(data)

  // Presentamos los registros de empleados de la tabla HTML
  const template = renderEmpleados(empleadoUseCase.getEmpleados())
  tableEmpleadosTbody.innerHTML = template


})
