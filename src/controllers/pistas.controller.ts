/* eslint-disable prettier/prettier */
import { Controller, Get } from "@nestjs/common";
import { AppService } from "src/app.service";
import { Pista } from "src/class/pista";
import fs from 'fs'

@Controller("pistas")
export class PistasController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getPistas(): any {
    const Pistas = [];

    for (let i = 0; i < 20; i++) {
      const pista = new Pista(
        i,
        "N" + this.appService.getRandomString(),
        360,
        "I" + this.appService.getRandomString(),
      );

      Pistas.push(pista);
    }
    const data = {
      cant: Pistas.length,
      pistas: Pistas,
    };

    return data;
  }

  @Get() 
  getJsonMock(): any {
    const data = fs.readFileSync('./pistas.json', 'utf8');
    return JSON.parse(data);
  }
}