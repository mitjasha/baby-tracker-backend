import { Request } from 'express';
import { UserEntity } from 'src/auth/user.entity';

export interface ExpressRequest extends Request {
  user?: UserEntity;
}
