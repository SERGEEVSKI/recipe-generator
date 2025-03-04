import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateIngredientrecipe1741106536588 implements MigrationInterface {
    name = 'CreateIngredientrecipe1741106536588'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "ingredient_recipe" ("id" SERIAL NOT NULL, "quantity" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "ingredientId" integer, "recipeId" integer, CONSTRAINT "REL_4220083de9256e6df0c7ae6e14" UNIQUE ("ingredientId"), CONSTRAINT "REL_df97e731d3c4ab4b7e1a67f27e" UNIQUE ("recipeId"), CONSTRAINT "PK_1a884e9b70245ac229ded0d8248" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "ingredient_recipe" ADD CONSTRAINT "FK_4220083de9256e6df0c7ae6e146" FOREIGN KEY ("ingredientId") REFERENCES "ingredient"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "ingredient_recipe" ADD CONSTRAINT "FK_df97e731d3c4ab4b7e1a67f27e8" FOREIGN KEY ("recipeId") REFERENCES "recipe"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "ingredient_recipe" DROP CONSTRAINT "FK_df97e731d3c4ab4b7e1a67f27e8"`);
        await queryRunner.query(`ALTER TABLE "ingredient_recipe" DROP CONSTRAINT "FK_4220083de9256e6df0c7ae6e146"`);
        await queryRunner.query(`DROP TABLE "ingredient_recipe"`);
    }

}
