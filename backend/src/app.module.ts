import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {MongooseModule} from '@nestjs/mongoose'
import { ProductModule } from './product/product.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://admin:admin@cluster0.m0mie.mongodb.net/test?authSource=admin&replicaSet=atlas-i3yct3-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true'), ProductModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
