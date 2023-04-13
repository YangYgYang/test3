import { Controller, Get, Post, Body, Patch, Param, Delete,BadRequestException, HttpStatus,Catch,UseFilters } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags,ApiProperty } from '@nestjs/swagger';
// import { ExceptionsHandler } from '@nestjs/core/exceptions/exceptions-handler';
import { HttpExceptionFilter } from '../../common/filters/http-exception.filters';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  
  // @Get()
  // getHello() {
  //   return this.userService.findAll();
  // }

  @Post()
  @ApiOperation({ summary: '新增使用者' })
  @ApiResponse({ 
    status: 200, 
    description: '回傳新增的使用者.' ,
    type:CreateUserDto
  })
  create(
    @Body() createUserDto: CreateUserDto) {
    throw new BadRequestException('錯誤！')
    return this.userService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
