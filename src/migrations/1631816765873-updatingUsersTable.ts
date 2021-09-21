import { MigrationInterface, QueryRunner } from 'typeorm';

export class updatingUsersTable1631816765873 implements MigrationInterface {
  name = 'updatingUsersTable1631816765873';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "user" ADD "phoneNumber" text NOT NULL`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "phoneNumber"`);
  }
}
