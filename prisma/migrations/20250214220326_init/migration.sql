/*
  Warnings:

  - You are about to drop the column `email` on the `Student` table. All the data in the column will be lost.
  - Added the required column `age` to the `Student` table without a default value. This is not possible if the table is not empty.
  - Added the required column `document` to the `Student` table without a default value. This is not possible if the table is not empty.
  - Added the required column `gender` to the `Student` table without a default value. This is not possible if the table is not empty.
  - Added the required column `grade` to the `Student` table without a default value. This is not possible if the table is not empty.
  - Added the required column `turn` to the `Student` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Student" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "document" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "gender" TEXT NOT NULL,
    "turn" TEXT NOT NULL,
    "grade" INTEGER NOT NULL
);
INSERT INTO "new_Student" ("id", "name") SELECT "id", "name" FROM "Student";
DROP TABLE "Student";
ALTER TABLE "new_Student" RENAME TO "Student";
CREATE UNIQUE INDEX "Student_document_key" ON "Student"("document");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
