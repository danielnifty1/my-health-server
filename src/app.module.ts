import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
 
 
 
import { UserModule } from './user/user.module';

 
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfigAsync } from 'config/config';
 
import { MailModule } from './mail/mail.module';
 
 

@Module({
   
  imports: [
    ConfigModule.forRoot(
      {
        isGlobal: true,
        expandVariables: true,
       
      }
    ),
    TypeOrmModule.forRootAsync(typeOrmConfigAsync),
    UserModule, MailModule],




  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
