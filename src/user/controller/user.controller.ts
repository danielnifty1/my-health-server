import { Body, Controller, Post } from '@nestjs/common';
import { ContactusDTO } from '../dto/contact.dto';
import { UserService } from '../services/user.service';

@Controller('user')
export class UserController {
  constructor(private UserService: UserService) {}
    @Post('contactus')
    async Contactus(@Body()ContactusDTO:ContactusDTO){
  return await this.UserService.ContactUs(ContactusDTO)
    }


}
