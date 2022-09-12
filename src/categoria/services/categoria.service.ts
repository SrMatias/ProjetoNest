import { HttpException, HttpStatus } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DeleteResult, ILike, Repository } from "typeorm";
import { Categoria } from "../entities/categoria.entity";

export class CategoriaService{
    findByDescricao(descricao: any): Promise<Categoria[]> {
        throw new Error("Method not implemented.");
    }
    constructor(
        @InjectRepository(Categoria)
        private categoriaRepository: Repository<Categoria>
    ){}


    async findAll(): Promise<Categoria[]>{
        return this.categoriaRepository.find({
            relations: {
           tarefas: true
            }
        })
        
        }
        
        async findById(id: number): Promise<Categoria>{//Retorna uma promisse unica
            let categoria = await this.categoriaRepository.findOne({//Encontra um  na categoria repository
                where: {
                    id//onde o Id seja esse
                },
                relations:{
                    tarefas: true
              }
            })
        
            if (!categoria)//Se categoria for vazia
                throw new HttpException('Categoria não foi encontrada', HttpStatus.NOT_FOUND)//Retorna um erro do tipo notfound
        
            return categoria
            }
        
        async findByDescri (descricao :string): Promise<Categoria[]>{
        return this.categoriaRepository.find({
            where : {
                descricao: ILike(`%${descricao}%`)
            }
        })
            
        }
        
        async create(categoria : Categoria): Promise<Categoria>{
            return this.categoriaRepository.save(categoria)
        }
        
        async update(categoria : Categoria): Promise<Categoria>{
        
        let tarefaUpDate = await this.findById(categoria.id)
        
        if(!tarefaUpDate || !categoria.id)
        throw new HttpException('Categoria não encontrada!' , HttpStatus.NOT_FOUND)
        
        return this.categoriaRepository.save(categoria)
        }
        
        async delete(id : number): Promise<DeleteResult>{
        
            let categoriaDelete = await this.findById(id)
            if (!categoriaDelete)
        throw new HttpException('Categoria não foi encontrada',HttpStatus.NOT_FOUND)
        return this.categoriaRepository.delete(id)
        
        }
        

}