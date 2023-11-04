/*
  Warnings:

  - You are about to drop the column `email` on the `event` table. All the data in the column will be lost.
  - You are about to drop the column `nome` on the `event` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[emailEvento]` on the table `Event` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `cep` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `emailEvento` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `horarioFim` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `horarioInicio` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nomeEvento` to the `Event` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `event` DROP COLUMN `email`,
    DROP COLUMN `nome`,
    ADD COLUMN `cep` VARCHAR(191) NOT NULL,
    ADD COLUMN `emailEvento` VARCHAR(191) NOT NULL,
    ADD COLUMN `horarioFim` VARCHAR(191) NOT NULL,
    ADD COLUMN `horarioInicio` VARCHAR(191) NOT NULL,
    ADD COLUMN `nomeEvento` VARCHAR(191) NOT NULL,
    MODIFY `dataInicio` DATETIME(3) NULL,
    MODIFY `dataFinal` DATETIME(3) NULL;

-- CreateTable
CREATE TABLE `Sala` (
    `id` VARCHAR(191) NOT NULL,
    `andar` INTEGER NOT NULL,
    `tipo` VARCHAR(191) NOT NULL,
    `numero` INTEGER NOT NULL,
    `limitePessoas` INTEGER NOT NULL,
    `temaSala` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Sala_numero_key`(`numero`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `Event_emailEvento_key` ON `Event`(`emailEvento`);
