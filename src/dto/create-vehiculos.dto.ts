import { IsNumber, IsString } from "class-validator";

export class CreateVehiculoDto{
    @IsString()
    readonly marca: string;
    @IsString()
    readonly patente: string;
    @IsString()
    readonly modelo: string;


    @IsNumber()
    readonly año: number;
    @IsNumber()
    readonly precio: number;
    @IsNumber()
    readonly capCarga: number;


}