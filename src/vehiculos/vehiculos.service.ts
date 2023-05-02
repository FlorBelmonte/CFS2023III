import { Injectable, NotFoundException } from "@nestjs/common";
import { Vehiculo } from "src/class/vehiculos";
import * as fs from "fs";
import { CreateVehiculoDto } from '../dto/create-vehiculos.dto';



@Injectable() 
export class VehiculoService{
    private Vehiculos : Vehiculo[] = [];
    private url: string =  "./src/vehiculos/vehiculos.txt" ;

    constructor() {
        const datos = fs.readFileSync(this.url, "utf-8");
    
        if (datos.length) {
          const renglon = datos.split("\r\n");
    
          for (let linea of renglon) {
            let partes = linea.split(",");
    
            let vehiculo = new Vehiculo(
              partes[0],
              partes[1],
              partes[2], 
              parseInt(partes[3]),
              parseInt(partes[4]),
              parseInt(partes[5]),
            );
    
            this.Vehiculos.push(vehiculo);
          }
        }
      }
    getVehiculos(): Vehiculo[]{
        return this.Vehiculos
    }
    getVehiculoByPatente(patente: string): Vehiculo{
        const vehiculo = this.Vehiculos.find((vehiculo) => vehiculo.patente === patente);
        if (!vehiculo){
            throw new NotFoundException();
        }
        return vehiculo;
    }


    createVehiculo(CreateVehiculoDto : CreateVehiculoDto){
            const newVehiculo: Vehiculo = new Vehiculo(
              CreateVehiculoDto.marca,
              CreateVehiculoDto.patente, 
              CreateVehiculoDto.modelo, 
              CreateVehiculoDto.año, 
              CreateVehiculoDto.precio, 
              CreateVehiculoDto.capCarga
              );
        
            const dataAppend = this.Vehiculos.length
              ? "\n" + newVehiculo.toString()
              : newVehiculo.toString();
        
            this.Vehiculos.push(newVehiculo);
        
            fs.appendFileSync(this.url, dataAppend);
          }
    }
