import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { categoriaContoller } from "src/categoria/controllers/categoria.controllers";
import { CategoriaService } from "src/categoria/services/categoria.service";
import { Categoria } from "../categoria.entity";

@Module({
imports:[TypeOrmModule.forFeature([Categoria])],
providers:[CategoriaService],
controllers:[categoriaContoller],
exports:[TypeOrmModule]

})
export class CategoriaModule{}