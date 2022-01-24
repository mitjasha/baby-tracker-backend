import { Module } from '@nestjs/common';
import { ChildsController } from './childs.controller';
import { ChildsService } from './childs.service';

@Module({
  controllers: [ChildsController],
  providers: [ChildsService]
})
export class ChildsModule {}
