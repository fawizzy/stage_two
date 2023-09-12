/*
  Warnings:

  - You are about to drop the column `email` on the `Person` table. All the data in the column will be lost.
  - You are about to drop the column `firstName` on the `Person` table. All the data in the column will be lost.
  - You are about to drop the column `lastName` on the `Person` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Person_email_key";

-- AlterTable
ALTER TABLE "Person" DROP COLUMN "email",
DROP COLUMN "firstName",
DROP COLUMN "lastName",
ADD COLUMN     "name" TEXT;
