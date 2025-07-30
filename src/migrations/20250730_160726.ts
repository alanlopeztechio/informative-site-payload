import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-vercel-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "pages_blocks_acordeon_items" CASCADE;
  DROP TABLE "pages_blocks_acordeon" CASCADE;
  DROP TABLE "pages_blocks_carousel_imagenes" CASCADE;
  DROP TABLE "pages_blocks_carousel" CASCADE;
  DROP TABLE "pages_blocks_price_block" CASCADE;
  DROP TABLE "pages_blocks_text" CASCADE;
  DROP TABLE "pages_blocks_column" CASCADE;
  DROP TABLE "pages_blocks_row" CASCADE;
  DROP TABLE "pages_blocks_section" CASCADE;
  DROP TABLE "pages_blocks_carousel_avatar_empleados" CASCADE;
  DROP TABLE "pages_blocks_carousel_avatar" CASCADE;
  DROP TABLE "_pages_v_blocks_acordeon_items" CASCADE;
  DROP TABLE "_pages_v_blocks_acordeon" CASCADE;
  DROP TABLE "_pages_v_blocks_carousel_imagenes" CASCADE;
  DROP TABLE "_pages_v_blocks_carousel" CASCADE;
  DROP TABLE "_pages_v_blocks_price_block" CASCADE;
  DROP TABLE "_pages_v_blocks_text" CASCADE;
  DROP TABLE "_pages_v_blocks_column" CASCADE;
  DROP TABLE "_pages_v_blocks_row" CASCADE;
  DROP TABLE "_pages_v_blocks_section" CASCADE;
  DROP TABLE "_pages_v_blocks_carousel_avatar_empleados" CASCADE;
  DROP TABLE "_pages_v_blocks_carousel_avatar" CASCADE;
  DROP TYPE "public"."enum_pages_blocks_column_column_width";
  DROP TYPE "public"."enum__pages_v_blocks_column_column_width";`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_pages_blocks_column_column_width" AS ENUM('auto', '4/5', '3/4', '2/3', '1/2', '1/3', '1/4', '1/5');
  CREATE TYPE "public"."enum__pages_v_blocks_column_column_width" AS ENUM('auto', '4/5', '3/4', '2/3', '1/2', '1/3', '1/4', '1/5');
  CREATE TABLE "pages_blocks_acordeon_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"titulo" varchar,
  	"contenido" varchar
  );
  
  CREATE TABLE "pages_blocks_acordeon" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"titulo" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_carousel_imagenes" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"imagen_id" integer,
  	"alt" varchar
  );
  
  CREATE TABLE "pages_blocks_carousel" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"titulo" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_price_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"price_id" integer,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_text" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"content" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_column" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"column_width" "enum_pages_blocks_column_column_width" DEFAULT 'auto',
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_row" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"total_width" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_section" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_carousel_avatar_empleados" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"imagen_id" integer,
  	"puesto" varchar,
  	"descripcion" varchar
  );
  
  CREATE TABLE "pages_blocks_carousel_avatar" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_acordeon_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"titulo" varchar,
  	"contenido" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_acordeon" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"titulo" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_carousel_imagenes" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"imagen_id" integer,
  	"alt" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_carousel" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"titulo" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_price_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"price_id" integer,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_text" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"content" jsonb,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_column" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"column_width" "enum__pages_v_blocks_column_column_width" DEFAULT 'auto',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_row" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"total_width" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_section" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_carousel_avatar_empleados" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"imagen_id" integer,
  	"puesto" varchar,
  	"descripcion" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_carousel_avatar" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  ALTER TABLE "pages_blocks_acordeon_items" ADD CONSTRAINT "pages_blocks_acordeon_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_acordeon"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_acordeon" ADD CONSTRAINT "pages_blocks_acordeon_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_carousel_imagenes" ADD CONSTRAINT "pages_blocks_carousel_imagenes_imagen_id_media_id_fk" FOREIGN KEY ("imagen_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_carousel_imagenes" ADD CONSTRAINT "pages_blocks_carousel_imagenes_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_carousel"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_carousel" ADD CONSTRAINT "pages_blocks_carousel_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_price_block" ADD CONSTRAINT "pages_blocks_price_block_price_id_prices_id_fk" FOREIGN KEY ("price_id") REFERENCES "public"."prices"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_price_block" ADD CONSTRAINT "pages_blocks_price_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_text" ADD CONSTRAINT "pages_blocks_text_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_column" ADD CONSTRAINT "pages_blocks_column_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_row" ADD CONSTRAINT "pages_blocks_row_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_section" ADD CONSTRAINT "pages_blocks_section_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_carousel_avatar_empleados" ADD CONSTRAINT "pages_blocks_carousel_avatar_empleados_imagen_id_media_id_fk" FOREIGN KEY ("imagen_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_carousel_avatar_empleados" ADD CONSTRAINT "pages_blocks_carousel_avatar_empleados_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_carousel_avatar"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_carousel_avatar" ADD CONSTRAINT "pages_blocks_carousel_avatar_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_acordeon_items" ADD CONSTRAINT "_pages_v_blocks_acordeon_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_acordeon"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_acordeon" ADD CONSTRAINT "_pages_v_blocks_acordeon_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_carousel_imagenes" ADD CONSTRAINT "_pages_v_blocks_carousel_imagenes_imagen_id_media_id_fk" FOREIGN KEY ("imagen_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_carousel_imagenes" ADD CONSTRAINT "_pages_v_blocks_carousel_imagenes_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_carousel"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_carousel" ADD CONSTRAINT "_pages_v_blocks_carousel_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_price_block" ADD CONSTRAINT "_pages_v_blocks_price_block_price_id_prices_id_fk" FOREIGN KEY ("price_id") REFERENCES "public"."prices"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_price_block" ADD CONSTRAINT "_pages_v_blocks_price_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_text" ADD CONSTRAINT "_pages_v_blocks_text_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_column" ADD CONSTRAINT "_pages_v_blocks_column_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_row" ADD CONSTRAINT "_pages_v_blocks_row_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_section" ADD CONSTRAINT "_pages_v_blocks_section_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_carousel_avatar_empleados" ADD CONSTRAINT "_pages_v_blocks_carousel_avatar_empleados_imagen_id_media_id_fk" FOREIGN KEY ("imagen_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_carousel_avatar_empleados" ADD CONSTRAINT "_pages_v_blocks_carousel_avatar_empleados_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_carousel_avatar"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_carousel_avatar" ADD CONSTRAINT "_pages_v_blocks_carousel_avatar_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "pages_blocks_acordeon_items_order_idx" ON "pages_blocks_acordeon_items" USING btree ("_order");
  CREATE INDEX "pages_blocks_acordeon_items_parent_id_idx" ON "pages_blocks_acordeon_items" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_acordeon_order_idx" ON "pages_blocks_acordeon" USING btree ("_order");
  CREATE INDEX "pages_blocks_acordeon_parent_id_idx" ON "pages_blocks_acordeon" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_acordeon_path_idx" ON "pages_blocks_acordeon" USING btree ("_path");
  CREATE INDEX "pages_blocks_carousel_imagenes_order_idx" ON "pages_blocks_carousel_imagenes" USING btree ("_order");
  CREATE INDEX "pages_blocks_carousel_imagenes_parent_id_idx" ON "pages_blocks_carousel_imagenes" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_carousel_imagenes_imagen_idx" ON "pages_blocks_carousel_imagenes" USING btree ("imagen_id");
  CREATE INDEX "pages_blocks_carousel_order_idx" ON "pages_blocks_carousel" USING btree ("_order");
  CREATE INDEX "pages_blocks_carousel_parent_id_idx" ON "pages_blocks_carousel" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_carousel_path_idx" ON "pages_blocks_carousel" USING btree ("_path");
  CREATE INDEX "pages_blocks_price_block_order_idx" ON "pages_blocks_price_block" USING btree ("_order");
  CREATE INDEX "pages_blocks_price_block_parent_id_idx" ON "pages_blocks_price_block" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_price_block_path_idx" ON "pages_blocks_price_block" USING btree ("_path");
  CREATE INDEX "pages_blocks_price_block_price_idx" ON "pages_blocks_price_block" USING btree ("price_id");
  CREATE INDEX "pages_blocks_text_order_idx" ON "pages_blocks_text" USING btree ("_order");
  CREATE INDEX "pages_blocks_text_parent_id_idx" ON "pages_blocks_text" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_text_path_idx" ON "pages_blocks_text" USING btree ("_path");
  CREATE INDEX "pages_blocks_column_order_idx" ON "pages_blocks_column" USING btree ("_order");
  CREATE INDEX "pages_blocks_column_parent_id_idx" ON "pages_blocks_column" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_column_path_idx" ON "pages_blocks_column" USING btree ("_path");
  CREATE INDEX "pages_blocks_row_order_idx" ON "pages_blocks_row" USING btree ("_order");
  CREATE INDEX "pages_blocks_row_parent_id_idx" ON "pages_blocks_row" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_row_path_idx" ON "pages_blocks_row" USING btree ("_path");
  CREATE INDEX "pages_blocks_section_order_idx" ON "pages_blocks_section" USING btree ("_order");
  CREATE INDEX "pages_blocks_section_parent_id_idx" ON "pages_blocks_section" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_section_path_idx" ON "pages_blocks_section" USING btree ("_path");
  CREATE INDEX "pages_blocks_carousel_avatar_empleados_order_idx" ON "pages_blocks_carousel_avatar_empleados" USING btree ("_order");
  CREATE INDEX "pages_blocks_carousel_avatar_empleados_parent_id_idx" ON "pages_blocks_carousel_avatar_empleados" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_carousel_avatar_empleados_imagen_idx" ON "pages_blocks_carousel_avatar_empleados" USING btree ("imagen_id");
  CREATE INDEX "pages_blocks_carousel_avatar_order_idx" ON "pages_blocks_carousel_avatar" USING btree ("_order");
  CREATE INDEX "pages_blocks_carousel_avatar_parent_id_idx" ON "pages_blocks_carousel_avatar" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_carousel_avatar_path_idx" ON "pages_blocks_carousel_avatar" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_acordeon_items_order_idx" ON "_pages_v_blocks_acordeon_items" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_acordeon_items_parent_id_idx" ON "_pages_v_blocks_acordeon_items" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_acordeon_order_idx" ON "_pages_v_blocks_acordeon" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_acordeon_parent_id_idx" ON "_pages_v_blocks_acordeon" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_acordeon_path_idx" ON "_pages_v_blocks_acordeon" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_carousel_imagenes_order_idx" ON "_pages_v_blocks_carousel_imagenes" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_carousel_imagenes_parent_id_idx" ON "_pages_v_blocks_carousel_imagenes" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_carousel_imagenes_imagen_idx" ON "_pages_v_blocks_carousel_imagenes" USING btree ("imagen_id");
  CREATE INDEX "_pages_v_blocks_carousel_order_idx" ON "_pages_v_blocks_carousel" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_carousel_parent_id_idx" ON "_pages_v_blocks_carousel" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_carousel_path_idx" ON "_pages_v_blocks_carousel" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_price_block_order_idx" ON "_pages_v_blocks_price_block" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_price_block_parent_id_idx" ON "_pages_v_blocks_price_block" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_price_block_path_idx" ON "_pages_v_blocks_price_block" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_price_block_price_idx" ON "_pages_v_blocks_price_block" USING btree ("price_id");
  CREATE INDEX "_pages_v_blocks_text_order_idx" ON "_pages_v_blocks_text" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_text_parent_id_idx" ON "_pages_v_blocks_text" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_text_path_idx" ON "_pages_v_blocks_text" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_column_order_idx" ON "_pages_v_blocks_column" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_column_parent_id_idx" ON "_pages_v_blocks_column" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_column_path_idx" ON "_pages_v_blocks_column" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_row_order_idx" ON "_pages_v_blocks_row" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_row_parent_id_idx" ON "_pages_v_blocks_row" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_row_path_idx" ON "_pages_v_blocks_row" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_section_order_idx" ON "_pages_v_blocks_section" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_section_parent_id_idx" ON "_pages_v_blocks_section" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_section_path_idx" ON "_pages_v_blocks_section" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_carousel_avatar_empleados_order_idx" ON "_pages_v_blocks_carousel_avatar_empleados" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_carousel_avatar_empleados_parent_id_idx" ON "_pages_v_blocks_carousel_avatar_empleados" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_carousel_avatar_empleados_imagen_idx" ON "_pages_v_blocks_carousel_avatar_empleados" USING btree ("imagen_id");
  CREATE INDEX "_pages_v_blocks_carousel_avatar_order_idx" ON "_pages_v_blocks_carousel_avatar" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_carousel_avatar_parent_id_idx" ON "_pages_v_blocks_carousel_avatar" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_carousel_avatar_path_idx" ON "_pages_v_blocks_carousel_avatar" USING btree ("_path");`)
}
