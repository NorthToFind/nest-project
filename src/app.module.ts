// 应用模块的根模块
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatModule } from './cat/cat.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import configuration from '../config/configuration';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [
    // 配置数据库
    TypeOrmModule.forRoot({
      //连接数据库
      type: 'mysql', // 数据库类型
      host: 'localhost', //数据库ip地址
      port: 3306, //端口
      username: 'root', //登录名
      password: 'root', //密码
      database: 'admin-system', //数据库名称
      entities: [__dirname + '/**/*.entity{.ts,.js}'], //扫描本项目中.entity.ts或者.entity.js文件
      synchronize: true, //定义数据表结构与实体类字段同步（一旦数据库少了字段就会自动加入）
    }),
    ConfigModule.forRoot({
      // 配置环境变量
      envFilePath: '.development.env',
      // 禁用环境变量
      ignoreEnvFile: true,
      // 全局使用模块
      isGlobal: true,
      // 加载配置文件
      load: [configuration],
    }),
    CatModule,
  ],
})
export class AppModule {}
