class Banco {
  constructor(ruc, razonSocial, nombre, direccion, correo) {
    this.ruc = ruc
    this.razonSocial = razonSocial
    this.nombre = nombre
    this.direccion = direccion
    this.correo = correo
  }

}

class Ciudad {
  constructor(codigo, nombre) {
    this.codigo = codigo // GYE
    this.nombre = nombre // Guayaquil
  }
}

class Sucursal {
  constructor(identificador, direccion) {
    this.identificador = identificador
    this.direccion = direccion
  }

}


class Persona {
  constructor(cedula, nombres, apellidos, genero, ciudad, direccion, telefono, correo) {
    this.cedula = cedula
    this.nombres = nombres
    this.apellidos = apellidos
    // M/F o MASCULINO/FEMENINO
    this.genero = genero
    this.ciudad = ciudad
    this.direccion = direccion
    this.telefono = telefono
    this.correo = correo
  }

}

class Cliente extends Persona {
  constructor(cedula, nombres, apellidos, genero, ciudad, direccion, telefono, correo) {
    super(cedula, nombres, apellidos, genero, ciudad, direccion, telefono, correo)
  }

}
class Empleado extends Persona {
  constructor(cedula, nombres, apellidos, genero, ciudad, direccion, telefono, correo, sucursal) {
    super(cedula, nombres, apellidos, genero, ciudad, direccion, telefono, correo)
    this.sucursal = sucursal
  }

}

class CuentaBancaria {
  constructor(numeroCuenta, cliente, fechaApertura, saldo, tipoInteres) {
    this.numeroCuenta = numeroCuenta
    this.cliente = cliente
    this.fechaApertura = new Date(fechaApertura)
    this.saldo = Number(saldo)
    this.tipoInteres = tipoInteres
  }

}

class FondoInversion {
  constructor(nombre, importe, rentabilidad, fechaApertura, vencimiento) {
    this.nombre = nombre
    this.importe = Number(importe)
    this.rentabilidad = Number(rentabilidad)
    this.fechaApertura = new Date(fechaApertura)
    this.vencimiento = new Date(vencimiento)
  }
}

class CarteraValor {
  constructor(valor) {
    this.valor = valor
  }
}

class Valor {
  constructor(nombreValor, numeroTitulo, precioCotizacion) {
    this.nombreValor = nombreValor
    this.numeroTitulo = numeroTitulo
    this.precioCotizacion = Number(precioCotizacion)
  }
}

class Ahorro extends CuentaBancaria {
  constructor(numeroCuenta, cliente, fechaApertura, saldo, tipoInteres) {
    super(numeroCuenta, cliente, fechaApertura, saldo, tipoInteres)
  }
}

class Corriente extends CuentaBancaria {
  constructor(numeroCuenta, cliente, fechaApertura, saldo, tipoInteres) {
    super(numeroCuenta, cliente, fechaApertura, saldo, tipoInteres)
  }
}

class TarjetaCredito {
  constructor(tipo, numero, titular, fechaCaducidad) {
    this.tipo = tipo
    this.numero = numero
    this.titular = titular
    this.fechaCaducidad = new Date(fechaCaducidad)
  }

}


export {
  Banco,
  Cliente,
  Empleado,
  Ahorro,
  Corriente,
  FondoInversion,
  CarteraValor,
  Valor,
  TarjetaCredito,
  Sucursal,
}
