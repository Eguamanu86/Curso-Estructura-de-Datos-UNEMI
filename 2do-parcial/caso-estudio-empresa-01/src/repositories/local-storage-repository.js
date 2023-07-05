export class LocalStorageRepository {
  //  parametro: Entity = "clientes"/"empleados"
  constructor(entity) {
    this.entity = entity
  }
  // Almacena el listado de Objetos Clientes/Empleados en LocalStorage del Navegador
  setItems(items) {
    localStorage.setItem(this.entity, JSON.stringify(items))
  }

  // Retorna el listado de Objetos Clientes/Empleados de LocalStorage del Navegador
  getItems() {
    return JSON.parse(localStorage.getItem(this.entity)) || []
  }

  // Elimina el listado de Objetos Clientes/Empleados de LocalStorage del Navegador
  removeItems() {
    localStorage.removeItem(this.entity)
  }

}
