import { Controller , Get} from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { Usuario } from 'src/class/usuario';

@Controller('usuario')
export class UsuarioController {
    constructor (private readonly UsuarioService : UsuarioService) {}


@Get ()
getUsuarios (): Usuario [] {
    return this.UsuarioService.getUsuarios('./src/usuario/usuarios.txt')
}
}
