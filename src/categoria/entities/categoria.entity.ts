import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, MaxLength } from "class-validator";
import { Column, Entity, OneToMany, PrimaryColumn, PrimaryColumnCannotBeNullableError, PrimaryGeneratedColumn } from "typeorm";
import { Tarefa } from "../../tarefa/entities/tarefa.entity";

@Entity('tbcategoria')
export class Categoria{

@PrimaryGeneratedColumn()
@ApiProperty()
id :number

@IsNotEmpty()
@MaxLength(255)
@Column({nullable: false, length:255})
@ApiProperty()
nome: string

@IsNotEmpty()
@MaxLength(255)
@Column({nullable: false, length:255})
@ApiProperty()
descricao: string

@OneToMany(()=> Tarefa,(tarefa)=> tarefa.categoria)
@ApiProperty({type:() => Tarefa })

tarefas:Tarefa[]

}
