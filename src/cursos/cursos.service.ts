import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCursoDto } from './dto/create-curso.dto';
import { UpdateCursoDto } from './dto/update-curso.dto';
import { Curso } from './entities/curso.entity';

@Injectable()
export class CursosService {
  private cursos: Curso[] = [];

  create(createCursoDto: CreateCursoDto) {
    this.cursos.push(createCursoDto);
    return createCursoDto;
  }

  findAll() {
    return this.cursos;
  }

  findOne(id: number) {
    const curso = this.cursos.find((curso) => curso.id === id);

    if (!curso) {
      throw new NotFoundException(`Curso con ID ${id} no encontrado`);
    }

    return curso;
  }

  update(id: number, updateCursoDto: UpdateCursoDto) {
    const curso = this.findOne(id);

    Object.assign(curso, updateCursoDto);

    return curso;
  }

  remove(id: number) {
    const index = this.cursos.findIndex((curso) => curso.id === id);

    if (index === -1) {
      throw new NotFoundException(`Curso con ID ${id} no encontrado`);
    }

    const eliminado = this.cursos.splice(index, 1);

    return eliminado[0];
  }
}