import { Module } from '@nestjs/common';
import { UserService } from './services/user.service';
import { UserController } from './controller/user.controller';
import { MailerModule } from 'src/mail/mailer.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContactUs } from './entity/contactus.entity';

@Module({
  imports:[

    TypeOrmModule.forFeature([ ContactUs]),MailerModule],
  providers: [UserService],
  controllers: [UserController]
})
export class UserModule {}
