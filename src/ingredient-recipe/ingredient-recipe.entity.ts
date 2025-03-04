import { Ingredient } from '../ingredients/ingredient.entity';
import { Recipe } from '../recipes/recipe.entity';
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, DeleteDateColumn, OneToOne, JoinColumn } from 'typeorm';

@Entity()
export class IngredientRecipe {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  quantity: string;

  @OneToOne(() => Ingredient)
  @JoinColumn()
  ingredient: Ingredient

  @OneToOne(() => Recipe)
  @JoinColumn()
  recipe: Recipe

  @CreateDateColumn()
  created_at: Date;

  @DeleteDateColumn()
  deleted_at: Date;
}