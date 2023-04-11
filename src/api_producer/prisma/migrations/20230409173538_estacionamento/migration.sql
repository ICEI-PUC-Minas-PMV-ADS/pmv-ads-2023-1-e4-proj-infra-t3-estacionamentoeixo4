/*
  Warnings:

  - You are about to alter the column `email` on the `cliente` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(50)`.
  - You are about to alter the column `name` on the `cliente` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(50)`.
  - You are about to alter the column `cpf` on the `cliente` table. The data in that column could be lost. The data in that column will be cast from `Text` to `Char(11)`.
  - Made the column `name` on table `cliente` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "cliente" ALTER COLUMN "email" SET DATA TYPE VARCHAR(50),
ALTER COLUMN "name" SET NOT NULL,
ALTER COLUMN "name" SET DATA TYPE VARCHAR(50),
ALTER COLUMN "cpf" SET DATA TYPE CHAR(11);

-- CreateTable
CREATE TABLE "estacionamento" (
    "id" SERIAL NOT NULL,
    "preco" DECIMAL(9,2) NOT NULL,
    "vagas_preferenciais" INTEGER NOT NULL,
    "vagas_gerais" INTEGER NOT NULL,
    "razao_social" VARCHAR(255) NOT NULL,
    "cnpj" CHAR(14) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "estacionamento_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "veiculo" (
    "id" SERIAL NOT NULL,
    "placa" VARCHAR(10) NOT NULL,
    "modelo" VARCHAR(20) NOT NULL,
    "cliente_id" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "veiculo_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "veiculo" ADD CONSTRAINT "veiculo_cliente_id_fkey" FOREIGN KEY ("cliente_id") REFERENCES "cliente"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
