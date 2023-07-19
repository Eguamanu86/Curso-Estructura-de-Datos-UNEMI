import { ClienteUseCase } from '../../src/usecase/cliente-use-case.js'
import { Cliente } from '../../src/entity/cliente.js'


const cliente1 = new Cliente(
  '0926400615',
  'Ernesto',
  'Guaman',
  'Masculino'
)
const cliente2 = new Cliente(
  '099999999',
  'Juanito',
  'Perez',
  'Masculino'
)


const clienteUseCase = new ClienteUseCase()

clienteUseCase.crear(cliente1)
clienteUseCase.crear(cliente2)

const clientes = clienteUseCase.leer()
console.log(clientes)
