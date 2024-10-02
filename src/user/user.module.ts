import { Module } from '@nestjs/common';
import { UserService } from './services/user.service';
import { UserController } from './controller/user.controller';
import { MailModule } from 'src/mail/mail.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContactUs } from './entity/contactus.entity';
import { MailService } from 'src/mail/services/mail.service';

@Module({
  imports:[

    TypeOrmModule.forFeature([ ContactUs]),MailModule],
  providers: [UserService,MailService],
  controllers: [UserController]
})
export class UserModule {}
