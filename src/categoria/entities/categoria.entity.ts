import { IsNotEmpty, MaxLength } from "class-validator";
import { Tarefa } from "src/tarefa/entities/tarefa.entity";
import { Column, Entity, OneToMany, PrimaryColumn, PrimaryColumnCannotBeNullableError, PrimaryGeneratedColumn } from "typeorm";

@Entity('tbcategoria')
export class Categoria{

@PrimaryGeneratedColumn()
id :number

@IsNotEmpty()
@MaxLength(255)
@Column({nullable: false, length:255})
descricao: string
@OneToMany(()=> Tarefa,(tarefa)=> tarefa.categoria)
tarefas:Tarefa[]

}