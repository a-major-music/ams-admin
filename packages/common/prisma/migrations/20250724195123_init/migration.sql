-- CreateTable
CREATE TABLE "NextNumber" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "value" INTEGER NOT NULL,

    CONSTRAINT "NextNumber_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AuditEvent" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "eventType" TEXT NOT NULL,
    "sourceId" TEXT,
    "targetId" TEXT,
    "data" TEXT,

    CONSTRAINT "AuditEvent_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CustomSale" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "orderURL" TEXT NOT NULL,
    "title" TEXT NOT NULL,

    CONSTRAINT "CustomSale_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CustomSaleIgnoreList" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "title" TEXT NOT NULL,

    CONSTRAINT "CustomSaleIgnoreList_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "NextNumber_name_key" ON "NextNumber"("name");

-- CreateIndex
CREATE INDEX "AuditEvent_sourceId_idx" ON "AuditEvent"("sourceId");

-- CreateIndex
CREATE UNIQUE INDEX "CustomSaleIgnoreList_title_key" ON "CustomSaleIgnoreList"("title");

-- CreateIndex
CREATE INDEX "CustomSaleIgnoreList_title_idx" ON "CustomSaleIgnoreList"("title");
