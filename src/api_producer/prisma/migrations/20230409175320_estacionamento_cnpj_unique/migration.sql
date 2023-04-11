/*
  Warnings:

  - A unique constraint covering the columns `[cnpj]` on the table `estacionamento` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "estacionamento_cnpj_key" ON "estacionamento"("cnpj");
