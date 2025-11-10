/*
  Warnings:

  - You are about to drop the column `usersId` on the `Posts` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."Posts" DROP CONSTRAINT "Posts_usersId_fkey";

-- AlterTable
ALTER TABLE "Posts" DROP COLUMN "usersId";
