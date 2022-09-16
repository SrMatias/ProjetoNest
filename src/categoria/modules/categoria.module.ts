import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { categoriaContoller } from "../../categoria/controllers/categoria.controllers";
import { CategoriaService } from "../../categoria/services/categoria.service";
import { Categoria } from "../entities/categoria.entity";

@Module({
imports:[TypeOrmModule.forFeature([Categoria])],
providers:[CategoriaService],
controllers:[categoriaContoller],
exports:[TypeOrmModule]

})
export class CategoriaModule{}