import { Injectable } from '@nestjs/common';
import {ContactusParam } from '../util/types';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ContactUs } from '../entity/contactus.entity';
import { MailService } from 'src/mail/services/mail.service';

@Injectable()
export class UserService {

    constructor(
     
        @InjectRepository(ContactUs) private ContactUsRepository: Repository<ContactUs>,
    
    
        private readonly mailService: MailService,
      ) {}







    async ContactUs(ContactusParam:ContactusParam){

        try {
          const createContactUs= this.ContactUsRepository.create(ContactusParam);
        const saveContactUs = this.ContactUsRepository.save(createContactUs)
        
        if(!saveContactUs){
        return "Failed"
        }
        
        const sendMail=await this.mailService.sendContactusMail({...ContactusParam, id:1})
        return saveContactUs
        } catch (error) {
          return error
        }
        
        
        
          }
}
