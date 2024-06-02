import { Column, Entity, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';
// Column  列/字段
// Entity 实体
// PrimaryGeneratedColumn  创建一个主列，该值将使用自动增量值自动生成，他将使用auto-increment/sercial/sequence  创建Int列（取决于数据），不必保存之前的该值将自动生成
// BaseEntity  继承基础实类
export class Cat {}
