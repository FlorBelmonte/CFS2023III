/* eslint-disable prettier/prettier */
import { Controller, Get } from "@nestjs/common";
import { AppService } from "src/app.service";
import { Pista } from "src/class/pista";
import fs from 'fs'
import * as path from 'path';


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
  async getJsonMock(): Promise<any> {
  const filePath = path.join(__dirname, '../../Client/pistas.json');
  const contenido = await fs.promises.readFile(filePath, 'utf-8');
    return {
      pistas: JSON.parse(contenido),
    }
  }
}