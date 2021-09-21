/* eslint-disable @typescript-eslint/no-namespace */

import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

export namespace UserModel {
  @Entity()
  export class User {
    @PrimaryGeneratedColumn('uuid')
    public id: string;
    @Column('text')
    public name: string;
    @Column('text')
    public email: string;
    @Column('text')
    public phoneNumber: string;
  }
}
