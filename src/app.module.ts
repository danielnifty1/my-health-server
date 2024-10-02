import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
 
import { MailService } from './mail/services/mail.service';
import { MailerModule } from './mail/mailer.module';
 
import { UserModule } from './user/user.module';

import { UserService } from './user/services/user.service';
import { UserController } from './user/controller/user.controller';
 
 

@Module({
  imports: [UserModule, MailerModule],
  controllers: [AppController, UserController],
  providers: [AppService, UserService, MailService],
})
export class AppModule {}
