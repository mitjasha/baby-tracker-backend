import { NestMiddleware } from '@nestjs/common';
import { NextFunction } from 'express';
import { JwtPayload, verify } from 'jsonwebtoken';
import { ExpressRequest } from 'src/types/expressReqest.interface';
import { AuthService } from '../auth.service';

export class AuthMiddleware implements NestMiddleware {
  constructor(private authService: AuthService) {}
  async use(req: ExpressRequest, _: Response, next: NextFunction) {
    if (!req.headers.authorization) {
      req.user = null;
      next();
      return;
    }
    const token = req.headers.authorization.split(' ')[1];
    try {
      const decode = verify(token, process.env.JWT_SECRET);
      const user = await this.authService.findById((decode as JwtPayload).id);
      req.user = user;
      next();
    } catch (err) {
      req.user = null;
      next();
    }
  }
}
