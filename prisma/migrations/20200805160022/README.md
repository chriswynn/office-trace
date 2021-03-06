# Migration `20200805160022`

This migration has been generated by chriswynn at 8/5/2020, 12:00:22 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TYPE "Role" AS ENUM ('USER', 'ADMIN');

CREATE TABLE "public"."accounts" (
"id" SERIAL,
"compound_id" text  NOT NULL ,
"user_id" integer  NOT NULL ,
"provider_type" text  NOT NULL ,
"provider_id" text  NOT NULL ,
"provider_account_id" text  NOT NULL ,
"refresh_token" text   ,
"access_token" text   ,
"access_token_expires" timestamp(3)   ,
"created_at" timestamp(3)  NOT NULL DEFAULT CURRENT_TIMESTAMP,
"updated_at" timestamp(3)  NOT NULL DEFAULT CURRENT_TIMESTAMP,
PRIMARY KEY ("id"))

CREATE TABLE "public"."sessions" (
"id" SERIAL,
"user_id" integer  NOT NULL ,
"expires" timestamp(3)  NOT NULL ,
"session_token" text  NOT NULL ,
"access_token" text  NOT NULL ,
"created_at" timestamp(3)  NOT NULL DEFAULT CURRENT_TIMESTAMP,
"updated_at" timestamp(3)  NOT NULL DEFAULT CURRENT_TIMESTAMP,
PRIMARY KEY ("id"))

CREATE TABLE "public"."users" (
"id" SERIAL,
"name" text   ,
"email" text   ,
"email_verified" timestamp(3)   ,
"image" text   ,
"role" "Role" NOT NULL DEFAULT E'USER',
"created_at" timestamp(3)  NOT NULL DEFAULT CURRENT_TIMESTAMP,
"updated_at" timestamp(3)  NOT NULL DEFAULT CURRENT_TIMESTAMP,
PRIMARY KEY ("id"))

CREATE TABLE "public"."verification_requests" (
"id" SERIAL,
"identifier" text  NOT NULL ,
"token" text  NOT NULL ,
"expires" timestamp(3)  NOT NULL ,
"created_at" timestamp(3)  NOT NULL DEFAULT CURRENT_TIMESTAMP,
"updated_at" timestamp(3)  NOT NULL DEFAULT CURRENT_TIMESTAMP,
PRIMARY KEY ("id"))

CREATE TABLE "public"."locations" (
"id" SERIAL,
"name" text  NOT NULL ,
"created_at" timestamp(3)  NOT NULL DEFAULT CURRENT_TIMESTAMP,
"updated_at" timestamp(3)  NOT NULL DEFAULT CURRENT_TIMESTAMP,
PRIMARY KEY ("id"))

CREATE UNIQUE INDEX "accounts.compound_id_unique" ON "public"."accounts"("compound_id")

CREATE  INDEX "providerAccountId" ON "public"."accounts"("provider_account_id")

CREATE  INDEX "providerId" ON "public"."accounts"("provider_id")

CREATE  INDEX "userId" ON "public"."accounts"("user_id")

CREATE UNIQUE INDEX "sessions.session_token_unique" ON "public"."sessions"("session_token")

CREATE UNIQUE INDEX "sessions.access_token_unique" ON "public"."sessions"("access_token")

CREATE UNIQUE INDEX "users.email_unique" ON "public"."users"("email")

CREATE UNIQUE INDEX "verification_requests.token_unique" ON "public"."verification_requests"("token")

CREATE UNIQUE INDEX "locations.name_unique" ON "public"."locations"("name")
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20200805152223-userroles..20200805160022
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
@@ -68,9 +68,9 @@
   @@map(name: "verification_requests")
 }
 model Location {
-  id         String    @default(uuid()) @id
+  id         Int       @default(autoincrement()) @id
   name       String    @unique
   createdAt  DateTime  @default(now()) @map(name: "created_at")
   updatedAt  DateTime  @default(now()) @map(name: "updated_at")
```


