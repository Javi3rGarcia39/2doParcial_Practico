import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { EstudiantesService } from './estudiantes.service';
import { CreateEstudianteDto } from './dto/create-estudiante.dto';
import { UpdateEstudianteDto } from './dto/update-estudiante.dto';

@Controller('estudiantes')
export class EstudiantesController {
  constructor(private readonly estudiantesService: EstudiantesService) {}

  // POST /estudiantes
  @Post()
  create(@Body() createEstudianteDto: CreateEstudianteDto) {
    return this.estudiantesService.create(createEstudianteDto);
  }

  // GET /estudiantes
  @Get()
  findAll() {
    return this.estudiantesService.findAll();
  }

  // GET /estudiantes/:carne
  @Get(':carne')
  findOne(@Param('carne') carne: string) {
    return this.estudiantesService.findOne(carne);
  }

  // PUT /estudiantes/:carne
  @Put(':carne')
  updateComplete(
    @Param('carne') carne: string,
    @Body() updateEstudianteDto: UpdateEstudianteDto,
  ) {
    return this.estudiantesService.update(carne, updateEstudianteDto);
  }

  // PATCH /estudiantes/:carne
  @Patch(':carne')
  updatePartial(
    @Param('carne') carne: string,
    @Body() updateEstudianteDto: UpdateEstudianteDto,
  ) {
    return this.estudiantesService.update(carne, updateEstudianteDto);
  }

  // DELETE /estudiantes/:carne
  @Delete(':carne')
  remove(@Param('carne') carne: string) {
    return this.estudiantesService.remove(carne);
  }
}