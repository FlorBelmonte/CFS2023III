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
}