export class Vehiculo{
    marca: string;
    patente: string;
    modelo: string;
    año: number;
    precio: number; 
    capCarga? : number;

constructor(
    marca: string, patente: string, modelo: string, año: number, precio: number, capCarga: number)
{

    this.marca = marca;
    this.patente = patente;
    this.modelo = modelo;
    this.año = año;
    this.precio = precio;
    this.capCarga = capCarga;
}
toString(): string {
    return `${this.marca},${this.patente},${this.modelo},${this.año},${this.precio}, ${this.capCarga}`;
  }

setMarca(nuevaMarca: string): void{
    this.marca = nuevaMarca;
}
setPatente(nuevaPatente: string): void {
    this.patente = nuevaPatente;
}
setModelo(nuevoModelo: string): void{
    this.modelo = nuevoModelo;
}
setAño(nuevoAño: number): void {
    this.año = nuevoAño;
}
setPrecio(nuevoPrecio: number): void {
    this.precio = nuevoPrecio;
}
setcapCarga(nuevacapCarga: number): void {
    this.capCarga = nuevacapCarga;
}
}