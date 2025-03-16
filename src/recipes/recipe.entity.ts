import { Ingredient } from '../ingredients/ingredient.entity';
import { User } from '../users/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, DeleteDateColumn, ManyToOne, ManyToMany, JoinTable } from 'typeorm';

@Entity()
export class Recipe {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  header: string;

  @Column()
  description: string;

  @ManyToOne(() => User)
  creator: User

  @ManyToMany(() => Ingredient)
  @JoinTable()
  ingredients: Ingredient

  @CreateDateColumn()
  created_at: Date;

  @DeleteDateColumn()
  deleted_at: Date;
}