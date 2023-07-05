class Genero {
  constructor(codigo) {
    this.codigo = codigo
    //            condicion ? true : false
    this.nombre = codigo == 'M' ? 'Masculino' : 'Femenino'
  }
}

class Persona {
  // metodo constructor
  constructor(cedula, nombres, apellidos, fechaNacimiento, direccion, telefono, correo, genero) {
    this.cedula = cedula
    this.nombres = nombres
    this.apellidos = apellidos
    this.fechaNacimiento = new Date(fechaNacimiento)
    this.direccion = direccion
    this.telefono = telefono
    this.correo = correo
    // atributo de tipo objeto = class genero
    this.genero = new Genero(genero)
  }

  // metodo para calcular la Edad
  getEdad() {
    const hoy = new Date()
    let edad = hoy.getFullYear() - this.fechaNacimiento.getFullYear()
    const diferenciaMeses = hoy.getMonth() - this.fechaNacimiento.getMonth()
    if (diferenciaMeses < 0 || (diferenciaMeses === 0 && hoy.getDate() < fechaNacimiento.getDate())) {
      edad--
    }
    return edad
  }

}

class Cliente extends Persona {
  // metodo constructor
  constructor(cedula, nombres, apellidos, fechaNacimiento, direccion, telefono, correo, genero = 'M', fechaIngreso = new Date(), montoVenta = 0, tipoPago = 'EFECTIVO', fechaVenta, vencimiento) {
    // metodo constructor de la clase Padre = Persona
    super(cedula, nombres, apellidos, fechaNacimiento, direccion, telefono, correo, genero)

    this.fechaIngreso = new Date(fechaIngreso)
    this.montoVenta = Number(montoVenta)
    this.tipoPago = this.#getTipoPago(tipoPago, montoVenta, fechaVenta, vencimiento)
  }

  // metodo que retorna una instancia de Tipo de Pago: Efectivo, Debito, Credito etc.
  #getTipoPago(tipoPago, montoVenta, fechaVenta, vencimiento) {
    switch (tipoPago) {
      case 'EFECTIVO':
        return new Efectivo(montoVenta)
      case 'DEBITO':
        return new Debito(montoVenta, fechaVenta)
      case 'CREDITO':
        return new Credito(montoVenta, fechaVenta, vencimiento)
      case 'CHEQUE':
        return new Cheque(montoVenta)
      default:
        return null
    }
  }

  static storeData(data) {
    return new Cliente(
      data.cedula,
      data.nombres,
      data.apellidos,
      data.fechaNacimiento,
      data.direccion,
      data.telefono,
      data.correo,
      data.genero?.codigo || data.genero,
      data.fechaIngreso,
      data.montoVenta,
      data.tipoPago?.codigo || data.tipoPago,
      data.fechaVenta,
      data.vencimiento
    )
  }

  getJson() {
    return JSON.parse(JSON.stringify(this))
  }
}

class Empleado extends Persona {

  constructor(cedula, nombres, apellidos, fechaNacimiento, direccion, telefono, correo, genero = 'M', fechaIngreso, sueldoBase = 0, horasTrabajadasMes = 0) {
    super(cedula, nombres, apellidos, fechaNacimiento, direccion, telefono, correo, genero)
    this.fechaIngreso = new Date(fechaIngreso)
    this.sueldoBase = Number(sueldoBase)
    this.horasTrabajadasMes = Number(horasTrabajadasMes)
    this.sueldoPorHora = (this.sueldoBase / 20) / 8
  }

  static storeData(data) {
    return new Empleado(
      data.cedula,
      data.nombres,
      data.apellidos,
      data.fechaNacimiento,
      data.direccion,
      data.telefono,
      data.correo,
      data.genero?.codigo || data.genero,
      data.fechaIngreso,
      data.sueldoBase,
      data.horasTrabajadasMes
    )
  }

  getSueldoPagarFinMes() {
    return this.sueldoPorHora * this.horasTrabajadasMes
  }

}

class Directivo extends Empleado {
  constructor(cedula, nombres, apellidos, fechaNacimiento, direccion, telefono, correo, genero, fechaIngreso, sueldoBase, horasTrabajadas, cargo) {
    super(cedula, nombres, apellidos, fechaNacimiento, direccion, telefono, correo, genero, fechaIngreso, sueldoBase, horasTrabajadas)
    this.cargo = cargo
  }
}

class FormaPago {
  constructor(monto) {
    this.monto = monto
  }
}

class Efectivo extends FormaPago {
  constructor(monto) {
    super(monto)
    this.codigo = 'EFECTIVO'
  }

}

class Debito extends FormaPago {
  constructor(monto, fecha) {
    super(monto)
    this.codigo = 'DEBITO'
    this.fecha = fecha
  }

}
class Credito extends FormaPago {
  constructor(monto, fecha, vencimiento) {
    super(monto)
    this.codigo = 'CREDITO'
    this.fecha = fecha
    this.vencimiento = vencimiento
  }

}
class Cheque extends FormaPago {
  constructor(monto) {
    this.codigo = 'CHEQUE'
    super(monto)
  }
}

export {
  Cliente,
  Empleado,
  Directivo
}
