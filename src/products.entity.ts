import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm'

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: false })
  name: string;

  @Column({ default: null })
  price: number;
}
