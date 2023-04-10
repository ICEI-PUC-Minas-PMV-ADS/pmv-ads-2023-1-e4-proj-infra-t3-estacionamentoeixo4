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
import { UpdatedManagerDto } from '../dto/update-manager.dto';
import { UpdateManagerPasswordDto } from '../dto/reset-password.dto';

@Controller('manager')
export class ManagerController {
  constructor(private readonly managerService: ManagerService) {}

  @Post()
  create(@Body() createManagerDto: CreateManagerDto) {
    return this.managerService.create(createManagerDto);
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
  update(
    @Param('id') id: string,
    @Body() updatedManagerDto: UpdatedManagerDto,
  ) {
    return this.managerService.update(+id, updatedManagerDto);
  }

  @Patch('/resetPassword/:id')
  resetPassword(
    @Param('id') id: string,
    @Body() updateManagerPasswordDto: UpdateManagerPasswordDto,
  ) {
    return this.managerService.resetPassword(+id, updateManagerPasswordDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.managerService.remove(+id);
  }
}
