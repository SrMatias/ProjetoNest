import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, MaxLength } from "class-validator";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Categoria } from "../../categoria/entities/categoria.entity";

@Entity({name: 'tb_tarefa'})
export class Tarefa {
    
    @PrimaryGeneratedColumn()
    @ApiProperty()
    id : number

    @IsNotEmpty()
    @MaxLength(255)
    @Column({ nullable: false, length: 50 })
    @ApiProperty()
    nome: string
    
    @IsNotEmpty()
    @MaxLength(500)
    @Column({nullable: false, length: 500})
    @ApiProperty()
    descricao: string

    @IsNotEmpty()
    @MaxLength(255)
    @Column({nullable: false, length: 255})
    @ApiProperty()
    responsavel:string

    @Column()
    data :Date

    @Column()
    status:boolean

    @ManyToOne(()=> Categoria,(Categoria )=> Categoria.tarefas,{
    onDelete: "CASCADE"
    
})@ApiProperty({type:() => Categoria })
    categoria: Categoria
}