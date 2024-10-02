import { Module } from '@nestjs/common';
import { MailerService } from './services/mailer/mailer.service';

@Module({
  providers: [MailerService]
})
export class MailerModule {}
