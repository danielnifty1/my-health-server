import { Module } from '@nestjs/common';
import { MailService } from './services/mail.service';
 
 

@Module({
  providers: [MailService, MailService]
})
export class MailerModule {}
