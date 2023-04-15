import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { EstacionamentoService } from './estacionamento.service';
import { CreateEstacionamentoDto } from './dto/create-estacionamento.dto';
import { UpdateEstacionamentoDto } from './dto/update-estacionamento.dto';

@Controller('estacionamento')
export class EstacionamentoController {
  constructor(private readonly estacionamentoService: EstacionamentoService) {}

  @Post('/criar')
  async create(@Body() createEstacionamentoDto: CreateEstacionamentoDto) {
    return await this.estacionamentoService.create(createEstacionamentoDto);
  }

  @Get('/encontrar/:id')
  async findOne(@Param('id') id: string) {
    return await this.estacionamentoService.findOne(+id);
  }

  @Patch('/atualizar/:id')
  async update(
    @Param('id') id: string,
    @Body() updateEstacionamentoDto: UpdateEstacionamentoDto,
  ) {
    return await this.estacionamentoService.updateOne(
      +id,
      updateEstacionamentoDto,
    );
  }

  @Delete('/deletar/:id')
  async remove(@Param('id') id: string) {
    return await this.estacionamentoService.removeOne(+id);
  }
}
