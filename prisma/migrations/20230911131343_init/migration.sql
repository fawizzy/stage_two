-- CreateTable
CREATE TABLE "Person" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "email" TEXT NOT NULL,
    "firstName" TEXT,
    "lastName" TEXT,

    CONSTRAINT "Person_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Person_email_key" ON "Person"("email");
