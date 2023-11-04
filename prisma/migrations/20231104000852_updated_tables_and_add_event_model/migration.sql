/*
  Warnings:

  - The primary key for the `Aluno` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Area` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Comissao` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Added the required column `eventoId` to the `Area` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Area` DROP FOREIGN KEY `Area_comissaoId_fkey`;

-- AlterTable
ALTER TABLE `Aluno` DROP PRIMARY KEY,
    MODIFY `id` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `Area` DROP PRIMARY KEY,
    ADD COLUMN `eventoId` VARCHAR(191) NOT NULL,
    MODIFY `id` VARCHAR(191) NOT NULL,
    MODIFY `comissaoId` VARCHAR(191) NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `Comissao` DROP PRIMARY KEY,
    MODIFY `id` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- CreateTable
CREATE TABLE `Event` (
    `id` VARCHAR(191) NOT NULL,
    `nome` VARCHAR(191) NOT NULL,
    `descricao` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `tipo` VARCHAR(191) NOT NULL,
    `assuntoPrincipal` VARCHAR(191) NOT NULL,
    `local` VARCHAR(191) NOT NULL,
    `dataInicio` DATETIME(3) NOT NULL,
    `dataFinal` DATETIME(3) NOT NULL,
    `privado` BOOLEAN NOT NULL,
    `anais` BOOLEAN NOT NULL,
    `certificados` BOOLEAN NOT NULL,
    `logo` VARCHAR(191) NULL,
    `periodo` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `comissaoId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Event_comissaoId_key`(`comissaoId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Area` ADD CONSTRAINT `Area_eventoId_fkey` FOREIGN KEY (`eventoId`) REFERENCES `Event`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Area` ADD CONSTRAINT `Area_comissaoId_fkey` FOREIGN KEY (`comissaoId`) REFERENCES `Comissao`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Event` ADD CONSTRAINT `Event_comissaoId_fkey` FOREIGN KEY (`comissaoId`) REFERENCES `Comissao`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
