/*
  Warnings:

  - You are about to drop the column `id_estacionamento` on the `administrador` table. All the data in the column will be lost.
  - Added the required column `administrador_id` to the `estacionamento` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "administrador" DROP COLUMN "id_estacionamento";

-- AlterTable
ALTER TABLE "estacionamento" ADD COLUMN     "administrador_id" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "estacionamento" ADD CONSTRAINT "estacionamento_administrador_id_fkey" FOREIGN KEY ("administrador_id") REFERENCES "administrador"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
