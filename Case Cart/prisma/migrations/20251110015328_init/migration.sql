/*
  Warnings:

  - You are about to drop the column `suppplierId` on the `Stock` table. All the data in the column will be lost.
  - Added the required column `supplierId` to the `Stock` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "public"."Stock" DROP CONSTRAINT "Stock_suppplierId_fkey";

-- AlterTable
ALTER TABLE "Stock" DROP COLUMN "suppplierId",
ADD COLUMN     "supplierId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Stock" ADD CONSTRAINT "Stock_supplierId_fkey" FOREIGN KEY ("supplierId") REFERENCES "supplier"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
