import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ManagerService } from '../services/manager.service';
import { CreateManagerDto } from '../dto/create-manager.dto';
import { UpdateManagerDto } from '../dto/update-manager.dto';
import { ManagerMapper } from '../mapper/manager.mapper';

@Controller('manager')
export class ManagerController {
  constructor(
    private readonly managerService: ManagerService,
    private readonly mapper: ManagerMapper,
  ) {}

  @Post()
  create(@Body() createManagerDto: CreateManagerDto) {
    return this.managerService.create(
      this.mapper.mapCreateManagerDtoToCreateManagerModel(createManagerDto),
    );
  }

  @Get()
  getAll() {
    return this.managerService.getAll();
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return this.managerService.findById(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateManagerDto: UpdateManagerDto) {
    return this.managerService.update(
      +id,
      this.mapper.mapUpdateManagerDtoToUpdateManagerModel(updateManagerDto),
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.managerService.remove(+id);
  }
}
