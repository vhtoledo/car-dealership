import { Body, Controller, Delete, Get, Param, ParseIntPipe, ParseUUIDPipe, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.dto';

@Controller('cars')
export class CarsController {

    constructor(
        private readonly carsService: CarsService
      ) {}

    @Get()
    getAllCars() {
        return this.carsService.findAll();
    }

    @Get(':id')
    getCarById( @Param('id', ParseUUIDPipe) id: string ) {
      console.log( {id} );
      return this.carsService.findOneById( id );
    }

    @Post()
    createCart( @Body() createCardDto: CreateCarDto) {
      return createCardDto;
    }

    @Patch(':id')
    updateCart( 
      @Param('id', ParseIntPipe) id: number,
      @Body() body: any) {
      return body;
    }

    @Delete(':id')
    deleteCart( @Param('id', ParseIntPipe) id: number ) {
      return {
        method: 'delete',
        id
      };
    }
  
  
}
