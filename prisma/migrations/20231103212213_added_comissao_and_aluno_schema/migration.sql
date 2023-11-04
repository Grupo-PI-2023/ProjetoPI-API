/*
  Warnings:

  - You are about to drop the `Profile` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `user` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `Profile`;

-- DropTable
DROP TABLE `user`;

-- CreateTable
CREATE TABLE `Comissao` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `senha` VARCHAR(191) NOT NULL,
    `cpf` VARCHAR(191) NOT NULL,
    `instituicao` VARCHAR(191) NOT NULL,
    `certificado` VARCHAR(191) NULL,
    `turno` VARCHAR(191) NOT NULL,
    `lattes` VARCHAR(191) NOT NULL,
    `adm` BOOLEAN NULL,
    `organizador` BOOLEAN NULL,
    `avaliador` BOOLEAN NULL,
    `chair` BOOLEAN NULL,

    UNIQUE INDEX `Comissao_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Area` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,
    `comissaoId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Aluno` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `senha` VARCHAR(191) NOT NULL,
    `cpf` VARCHAR(191) NOT NULL,
    `instituicao` VARCHAR(191) NOT NULL,
    `certificado` VARCHAR(191) NULL,
    `periodo` VARCHAR(191) NOT NULL,
    `curso` VARCHAR(191) NOT NULL,
    `autor` BOOLEAN NOT NULL,
    `apresentador` BOOLEAN NULL,
    `presenca` BOOLEAN NULL,

    UNIQUE INDEX `Aluno_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Area` ADD CONSTRAINT `Area_comissaoId_fkey` FOREIGN KEY (`comissaoId`) REFERENCES `Comissao`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
