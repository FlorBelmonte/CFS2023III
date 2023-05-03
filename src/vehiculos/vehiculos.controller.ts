import {Body, Controller,Delete, Get, NotFoundException, Param, ParseUUIDPipe, Post, Put,} from "@nestjs/common";
import { VehiculoService } from './vehiculos.service';
import { Vehiculo } from "src/class/vehiculos";
import { CreateVehiculoDto } from "src/dto/create-vehiculos.dto";

@Controller("vehiculos")
    export class VehiculosController {
        constructor (private readonly vehiculoService : VehiculoService){}
    

  @Get("/autos")
  getAutos(): Vehiculo[] {
    return this.vehiculoService.getAutos();
  }

  @Get("/camionetas")
  getCamionetas(): Vehiculo[] {
    return this.vehiculoService.getCamionetas();
  }

    @Get(":patente")
  getVehiculoByPatente(@Param("patente") patente: string): Vehiculo {
    const vehiculo = this.vehiculoService.getVehiculoByPatente(patente);
    if (!vehiculo) {
      throw new NotFoundException();
    }
    return vehiculo;
  }
  @Get() //url/vehiculos
  getVehiculos(): Vehiculo[]{
   return this.vehiculoService.getVehiculos();
  }
@Post()
postVehiculo(@Body() CreateVehiculoDto: CreateVehiculoDto) {
  return this.vehiculoService.createVehiculo(CreateVehiculoDto);
}
@Delete(':patente')
   deleteVehiculo(@Param('patente')patente: string): boolean{
    return this.vehiculoService.deleteVehiculo(patente)
  }
}
