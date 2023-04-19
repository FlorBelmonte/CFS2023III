import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { PistasController } from './controllers/pistas.controller';
import { UsuarioController } from './usuario/usuario.controller';
import { UsuarioService } from './usuario/usuario.service';


@Module({
  imports: [
   ServeStaticModule.forRoot({ rootPath: join(__dirname, '..', 'client') }),
    // ServeStaticModule.forRoot({ rootPath: join(__dirname, '..', 'ejercicio2')}),
    // ServeStaticModule.forRoot({rootPath: join(__dirname, '..', 'ejercicio3')}),
 
  ],
  controllers: [AppController, PistasController, UsuarioController],
  providers: [AppService, UsuarioService],
})
export class AppModule {}
