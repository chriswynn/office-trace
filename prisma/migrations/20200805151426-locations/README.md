# Migration `20200805151426-locations`

This migration has been generated by chriswynn at 8/5/2020, 11:14:26 AM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE "public"."locations" (
"id" text  NOT NULL ,
"token" text  NOT NULL ,
"created_at" timestamp(3)  NOT NULL DEFAULT CURRENT_TIMESTAMP,
"updated_at" timestamp(3)  NOT NULL DEFAULT CURRENT_TIMESTAMP,
PRIMARY KEY ("id"))

CREATE UNIQUE INDEX "locations.token_unique" ON "public"."locations"("token")
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20200804195118-users..20200805151426-locations
--- datamodel.dml
+++ datamodel.dml
@@ -1,7 +1,7 @@
 datasource db {
   provider = "postgresql"
-  url = "***"
+  url = "***"
 }
 generator client {
   provider = "prisma-client-js"
@@ -60,4 +60,13 @@
   updatedAt  DateTime  @default(now()) @map(name: "updated_at")
   @@map(name: "verification_requests")
 }
+
+model Location {
+  id         String    @default(uuid()) @id
+  token      String    @unique
+  createdAt  DateTime  @default(now()) @map(name: "created_at")
+  updatedAt  DateTime  @default(now()) @map(name: "updated_at")
+
+  @@map(name: "locations")
+}
```

