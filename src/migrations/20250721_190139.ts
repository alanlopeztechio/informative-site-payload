import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-vercel-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_pages_blocks_content_with_media_text_position" AS ENUM('Left', 'Right');
  CREATE TYPE "public"."enum__pages_v_blocks_content_with_media_text_position" AS ENUM('Left', 'Right');
  CREATE TABLE "pages_blocks_content_with_media" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"content" jsonb,
  	"image_id" integer,
  	"text_position" "enum_pages_blocks_content_with_media_text_position" DEFAULT 'Left',
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_content_with_media" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"content" jsonb,
  	"image_id" integer,
  	"text_position" "enum__pages_v_blocks_content_with_media_text_position" DEFAULT 'Left',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  ALTER TABLE "pages_blocks_content_with_media" ADD CONSTRAINT "pages_blocks_content_with_media_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_content_with_media" ADD CONSTRAINT "pages_blocks_content_with_media_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_content_with_media" ADD CONSTRAINT "_pages_v_blocks_content_with_media_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_content_with_media" ADD CONSTRAINT "_pages_v_blocks_content_with_media_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "pages_blocks_content_with_media_order_idx" ON "pages_blocks_content_with_media" USING btree ("_order");
  CREATE INDEX "pages_blocks_content_with_media_parent_id_idx" ON "pages_blocks_content_with_media" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_content_with_media_path_idx" ON "pages_blocks_content_with_media" USING btree ("_path");
  CREATE INDEX "pages_blocks_content_with_media_image_idx" ON "pages_blocks_content_with_media" USING btree ("image_id");
  CREATE INDEX "_pages_v_blocks_content_with_media_order_idx" ON "_pages_v_blocks_content_with_media" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_content_with_media_parent_id_idx" ON "_pages_v_blocks_content_with_media" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_content_with_media_path_idx" ON "_pages_v_blocks_content_with_media" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_content_with_media_image_idx" ON "_pages_v_blocks_content_with_media" USING btree ("image_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "pages_blocks_content_with_media" CASCADE;
  DROP TABLE "_pages_v_blocks_content_with_media" CASCADE;
  DROP TYPE "public"."enum_pages_blocks_content_with_media_text_position";
  DROP TYPE "public"."enum__pages_v_blocks_content_with_media_text_position";`)
}
