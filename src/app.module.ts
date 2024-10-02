import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ControllerController } from './user/user/controller/controller.controller';
import { MailerService } from './mailer/services/mailer/mailer.service';
import { MailerModule } from './mail/mailer.module';
import { MailerModule } from './maile/mailer/mailer.module';
import { UserModule } from './user/user.module';
import { UserModule } from './user/user/user/user.module';
import { UserService } from './user/services/user.service';
import { UserController } from './user/controller/user/user.controller';
import { UserController } from './user/user/user/user.controller';
import { ControllerController } from './user/controller/controller.controller';
import { ControllerController } from './user/user/controller/controller.controller';

@Module({
  imports: [UserModule, MailerModule],
  controllers: [AppController, ControllerController, UserController],
  providers: [AppService, UserService, MailerService],
})
export class AppModule {}
