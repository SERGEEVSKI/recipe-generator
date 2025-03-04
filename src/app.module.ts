import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { IngredientsModule } from './ingredients/ingredients.module';
import { RecipesModule } from './recipes/recipes.module';
import { IngredientRecipeModule } from './ingredient_recipe/ingredient_recipe.module';
import { IngredientRecipeModule } from './ingredient-recipe/ingredient-recipe.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'admin',
      password: 'admin',
      database: 'recipedb',
      entities: [],
      synchronize: false,
    }),
    UsersModule,
    IngredientsModule,
    RecipesModule,
    IngredientRecipeModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
