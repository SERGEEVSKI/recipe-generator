import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateRecipe1741105991869 implements MigrationInterface {
    name = 'CreateRecipe1741105991869'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "recipe" ("id" SERIAL NOT NULL, "header" character varying NOT NULL, "description" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "creatorId" integer, CONSTRAINT "REL_6607bb9fec7358e5209b5c30bf" UNIQUE ("creatorId"), CONSTRAINT "PK_e365a2fedf57238d970e07825ca" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "recipe" ADD CONSTRAINT "FK_6607bb9fec7358e5209b5c30bf1" FOREIGN KEY ("creatorId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "recipe" DROP CONSTRAINT "FK_6607bb9fec7358e5209b5c30bf1"`);
        await queryRunner.query(`DROP TABLE "recipe"`);
    }

}
