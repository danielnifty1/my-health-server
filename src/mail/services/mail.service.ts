import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { ContactUs } from 'src/user/entity/contactus.entity';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class MailService {

    constructor(
        private mailerService: MailerService,
        private configService: ConfigService,
      ) {}


    
  // contact us mails
  async sendContactusMail(ContactUs: ContactUs) {
    const sender = await this.mailerService.sendMail({
      from: process.env.SITE_EMAIL,
      to: process.env.SITE_EMAIL,
      subject: 'Enquiry from ' + ContactUs.name,
      template: './contactUs',
      context: {
        name: ContactUs.name,
        email: ContactUs.email,
        phone: ContactUs.phone,
        message: ContactUs.message,
      },
    });

    // send auto response mail to the sender
     await this.mailerService.sendMail({
      from: process.env.SITE_EMAIL,
      to:ContactUs.email,
      subject: 'Enquiry from ' + ContactUs.name,
      template: './contactUsResponse',
      context: {
        name: ContactUs.name,
        email: ContactUs.email,
        phone: ContactUs.phone,
        message: ContactUs.message,
      },
    });

    return sender
  }
}
