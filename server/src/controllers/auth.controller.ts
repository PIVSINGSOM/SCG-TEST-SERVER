import { NextFunction, Request, Response } from 'express';
import { CreateUserDto } from '@dtos/users.dto';
import { User } from '@interfaces/users.interface';
import { RequestWithUser, TokenData } from '@interfaces/auth.interface';
import AuthService from '@services/auth.service';
import { machineCreationAttributes, machineAttributes } from '@/models/machine';

class AuthController {
  public authService = new AuthService();

  // public signUp = async (req: Request, res: Response, next: NextFunction) => {
  //   try {
  //     const userData: CreateUserDto = req.body;
  //     const signUpUserData: User = await this.authService.signup(userData);

  //     res.status(201).json({ data: signUpUserData, message: 'signup' });
  //   } catch (error) {
  //     next(error);
  //   }
  // };

  public logIn = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const machineData: machineCreationAttributes = req.body;
      const token: TokenData = await this.authService.login(machineData);

      // res.setHeader('Set-Cookie', [cookie]);
      res.status(200).json({ data: token, message: 'login' });
    } catch (error) {
      next(error);
    }
  };

  // public logOut = async (req: RequestWithUser, res: Response, next: NextFunction) => {
  //   try {
  //     const userData: User = req.user;
  //     const logOutUserData: User = await this.authService.logout(userData);

  //     res.setHeader('Set-Cookie', ['Authorization=; Max-age=0']);
  //     res.status(200).json({ data: logOutUserData, message: 'logout' });
  //   } catch (error) {
  //     next(error);
  //   }
  // };
}

export default AuthController;
