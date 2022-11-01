import { Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { GraphQLModule } from '@nestjs/graphql'
import { MongooseModule } from '@nestjs/mongoose'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { configuration } from '../config/configuration' // this is new
import { MikroOrmModule } from '@mikro-orm/nestjs'
import { WinstonModule } from 'nest-winston';
import { UsersModule } from './users/users.module';
import * as winston from 'winston';
import path from 'path'
@Module({
  imports: [
    WinstonModule.forRoot({
      format: winston.format.combine(
        winston.format.timestamp({
          format: 'YYYY-MM-DD HH:mm:ss'
        }),
        // for the log file
        winston.format.printf(info => `${info.timestamp} ${info.level}: ${info.message}`)
      ),
      transports: [
        new winston.transports.Console(),
        new winston.transports.File({
          dirname: path.join(__dirname, './../log/debug/'),
          filename: 'debug.log',
          level: 'debug',
        }),
        new winston.transports.File({
          dirname: path.join(__dirname, './../log/info/'),
          filename: 'info.log',
          level: 'info',
        }),
        new winston.transports.File({
          dirname: path.join(__dirname, './../log/error/'),
          filename: 'error.log',
          level: 'error',
        }),
        new winston.transports.File({
          dirname: path.join(__dirname, './../log/warning/'),
          filename: 'warning.log',
          level: 'warn',
        }),
      ]
    }),
    MikroOrmModule.forRoot(),
    // MongooseModule.forRoot('mongodb://127.0.0.1:27017/roniaDB', {
    //   connectionName: 'ronia',
    // }),
    // GraphQLModule.forRoot({
    //   autoSchemaFile: 'schema.gql',
    // }),
    ConfigModule.forRoot({
      load: [configuration],
      isGlobal: true,
      expandVariables: true
    }),
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
