import {HttpException, HttpStatus, Injectable} from"@nestjs/common"
import { InjectRepository } from "@nestjs/typeorm";
import { DeleteResult, ILike, Repository } from "typeorm";
import { Tarefa } from "../entities/tarefa.entity";

@Injectable()
export class TarefaService{

constructor(
    @InjectRepository(Tarefa)
    private tarefaRepository: Repository<Tarefa>
){}


async findAll(): Promise<Tarefa[]>{
return this.tarefaRepository.find()

}

async findById(id: number): Promise<Tarefa>{//Retorna uma promisse unica
    let tarefa = await this.tarefaRepository.findOne({//Encontra um  na tarefa repository
        where: {
            id//onde o Id seja esse
        }
    })

    if (!tarefa)//Se tarefa for vazia
        throw new HttpException('Tarefa não foi encontrada', HttpStatus.NOT_FOUND)//Retorna um erro do tipo notfound

    return tarefa
    }

async findByNome (nome :String): Promise<Tarefa[]>{
return this.tarefaRepository.find({
    where: {
        nome: ILike(`%${nome}%`)
    }
})
    
}

async create(tarefa : Tarefa): Promise<Tarefa>{
    return this.tarefaRepository.save(tarefa)
}

async update(tarefa : Tarefa): Promise<Tarefa>{

let tarefaUpDate = await this.findById(tarefa.id)

if(!tarefaUpDate || !tarefa.id)
throw new HttpException('Tarefa não encontrada!' , HttpStatus.NOT_FOUND)

return this.tarefaRepository.save(tarefa)
}

async delete(id : number): Promise<DeleteResult>{

    let tarefaDelete = await this.findById(id)
    if (!tarefaDelete)
throw new HttpException('Tarefa não foi encontrada',HttpStatus.NOT_FOUND)
return this.tarefaRepository.delete(id)

}

}

