import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { PistasController } from './controllers/pistas.controller';
import { UsuarioController } from './usuario/usuario.controller';
import { UsuarioService } from './usuario/usuario.service';
import { VehiculosController } from './vehiculos/vehiculos.controller';
import { VehiculoService } from './vehiculos/vehiculos.service';


@Module({
  imports: [
   ServeStaticModule.forRoot({ rootPath: join(__dirname, '..', 'client', 'frontConcesionaria') }),
    // ServeStaticModule.forRoot({ rootPath: join(__dirname, '..', 'ejercicio2')}),
    // ServeStaticModule.forRoot({rootPath: join(__dirname, '..', 'ejercicio3')}),
 
  ],
  controllers: [AppController, PistasController, UsuarioController, VehiculosController],
  providers: [AppService, UsuarioService, VehiculoService],
})
export class AppModule {}
