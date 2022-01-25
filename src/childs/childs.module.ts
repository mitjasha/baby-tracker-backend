import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { ChildsController } from './childs.controller';
import { ChildsRepository } from './childs.repository';
import { ChildsService } from './childs.service';

@Module({
  imports: [AuthModule, TypeOrmModule.forFeature([ChildsRepository])],
  controllers: [ChildsController],
  providers: [ChildsService],
})
export class ChildsModule {}
