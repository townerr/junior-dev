-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Postings" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "employer" TEXT NOT NULL,
    "employerImg" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "level" TEXT NOT NULL,
    "salary" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "skills" TEXT NOT NULL,
    "link" TEXT NOT NULL DEFAULT ''
);
INSERT INTO "new_Postings" ("createdAt", "description", "employer", "employerImg", "id", "level", "location", "salary", "skills", "title", "type") SELECT "createdAt", "description", "employer", "employerImg", "id", "level", "location", "salary", "skills", "title", "type" FROM "Postings";
DROP TABLE "Postings";
ALTER TABLE "new_Postings" RENAME TO "Postings";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
