import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateEstudianteDto } from './dto/create-estudiante.dto';
import { UpdateEstudianteDto } from './dto/update-estudiante.dto';
import { Estudiante } from './entities/estudiante.entity';

@Injectable()
export class EstudiantesService {
  private estudiantes: Estudiante[] = [];

  create(createEstudianteDto: CreateEstudianteDto) {
    this.estudiantes.push(createEstudianteDto);
    return createEstudianteDto;
  }

  findAll() {
    return this.estudiantes;
  }

  findOne(carne: string) {
    const estudiante = this.estudiantes.find(
      (estudiante) => estudiante.carne === carne,
    );

    if (!estudiante) {
      throw new NotFoundException(`Estudiante con carné ${carne} no encontrado`);
    }

    return estudiante;
  }

  update(carne: string, updateEstudianteDto: UpdateEstudianteDto) {
    const estudiante = this.findOne(carne);

    Object.assign(estudiante, updateEstudianteDto);

    return estudiante;
  }

  remove(carne: string) {
    const index = this.estudiantes.findIndex(
      (estudiante) => estudiante.carne === carne,
    );

    if (index === -1) {
      throw new NotFoundException(`Estudiante con carné ${carne} no encontrado`);
    }

    const eliminado = this.estudiantes.splice(index, 1);

    return eliminado[0];
  }
}