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
import { ApiTags, ApiResponse, ApiBody } from '@nestjs/swagger';
@ApiTags('Estacionamento')
@Controller('estacionamento')
export class EstacionamentoController {
  constructor(private readonly estacionamentoService: EstacionamentoService) {}

  @Post('/criar')
  @ApiBody({
    description: 'Criar estacionamento ',
    type: CreateEstacionamentoDto,
  })
  @ApiResponse({
    status: 201,
    description: 'Criar estacionamento',
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async create(@Body() createEstacionamentoDto: CreateEstacionamentoDto) {
    return await this.estacionamentoService.create(createEstacionamentoDto);
  }

  @Get('/encontrar/:id')
  @ApiResponse({
    status: 200,
    description: 'Recupera um estacionamento',
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async findOne(@Param('id') id: string) {
    return await this.estacionamentoService.findOne(+id);
  }

  @Patch('/atualizar/:id')
  @ApiBody({
    description: 'Atualiza estacionamento ',
    type: UpdateEstacionamentoDto,
  })
  @ApiResponse({
    status: 200,
    description: 'Atualiza estacionamento',
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
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
  @ApiResponse({
    status: 200,
    description: 'Deleta estacionamento',
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async remove(@Param('id') id: string) {
    return await this.estacionamentoService.removeOne(+id);
  }
}
