function renderClientes(clientes) {
  return clientes.map((c) => {
    return `<tr>
            <td>${c.cedula}</td>
            <td>${c.nombres} ${c.apellidos}</td>
            <td>${c.genero}</td>
            <td>${c.telefono}</td>
            <td>${c.ciudad}</td>
            <td><div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                  Acciones
                </button>
                <ul class="dropdown-menu sm" aria-labelledby="dropdownMenuButton1">
                  <li>
                    <a class="dropdown-item" href="#" rel="accion-depositar" data-id="${c.cedula}">Editar</a>
                    <a class="dropdown-item" href="#" rel="accion-debitar" data-id="${c.cedula}">Eliminar</a>
                  </li>
                </ul>
              </div>
            </td>
        </tr>`
  }).join('')
}

function renderCuentasBancaria(cuentas) {
  return cuentas.map((c) => {
    return `<tr>
            <td>${c.numeroCuenta}</td>
            <td>${c.tipoCuenta}</td>
            <td>${c.cliente.nombres} ${c.cliente.apellidos}</td>
            <td>${new Date(c.fechaApertura).toLocaleDateString("en-US")}</td>
            <td>${c.saldo}</td>
            <td><div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                  Acciones
                </button>
                <ul class="dropdown-menu sm" aria-labelledby="dropdownMenuButton1">
                  <li>
                    <a class="dropdown-item" href="#" rel="accion-depositar" data-id="${c.numeroCuenta}">Editar</a>
                    <a class="dropdown-item" href="#" rel="accion-debitar" data-id="${c.numeroCuenta}">Eliminar</a>
                    <a class="dropdown-item" href="#" rel="accion-debitar" data-id="${c.numeroCuenta}">Depositar</a>
                    <a class="dropdown-item" href="#" rel="accion-debitar" data-id="${c.numeroCuenta}">Retiros</a>
                    <a class="dropdown-item" href="#" rel="accion-debitar" data-id="${c.numeroCuenta}">Agregar productos</a>
                  </li>
                </ul>
              </div>
            </td>
        </tr>`
  }).join('')
}

export { renderClientes, renderCuentasBancaria }
