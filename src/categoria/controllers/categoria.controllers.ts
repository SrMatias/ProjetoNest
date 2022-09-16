import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { Categoria } from "../entities/categoria.entity";
import { CategoriaService } from "../services/categoria.service";

@ApiTags('Categoria')
@Controller('/categoria')
export class categoriaContoller{
    constructor(private readonly service:CategoriaService){}
    @Get()
    @HttpCode(HttpStatus.OK)
    findAll():Promise<Categoria[]>{
        return this.service.findAll()
    }

   
    @Get('/:id')//Passar o caminho de categoria/id
    @HttpCode(HttpStatus.OK)
    findById(@Param('id', ParseIntPipe) id: number): Promise<Categoria>{//Esperando um Id, que vai ser do tipo inteiro
        return this.service.findById(id)//Buscando um Id
    }
    
@Get('/descricao/:descricao')
@HttpCode(HttpStatus.OK)
findByDescri(@Param('descricao') descricao: string): Promise<Categoria[]>{
    return this.service.findByDescricao(descricao)
}

@Post()
@HttpCode(HttpStatus.CREATED)
create(@Body()categoria : Categoria): Promise<Categoria>{
    return this.service.create(categoria)
}

@Put()
@HttpCode(HttpStatus.CREATED)
update(@Body()categoria : Categoria): Promise<Categoria>{
    return this.service.update(categoria)

}


@Delete('/:id')
@HttpCode(HttpStatus.NO_CONTENT)
delete(@Param('id', ParseIntPipe) id: number){
return this.service.delete(id)

}
}