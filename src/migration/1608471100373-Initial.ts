import {MigrationInterface, QueryRunner} from "typeorm";

export class Initial1608471100373 implements MigrationInterface {
    name = 'Initial1608471100373'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP INDEX `IDX_e12875dfb3b1d92d7d7c5377e2` ON `user`");
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `createdAt`");
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `email`");
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `isActive`");
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `updatedAt`");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `user` ADD `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)");
        await queryRunner.query("ALTER TABLE `user` ADD `isActive` tinyint NOT NULL");
        await queryRunner.query("ALTER TABLE `user` ADD `email` varchar(255) NOT NULL");
        await queryRunner.query("ALTER TABLE `user` ADD `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)");
        await queryRunner.query("CREATE UNIQUE INDEX `IDX_e12875dfb3b1d92d7d7c5377e2` ON `user` (`email`)");
    }

}
