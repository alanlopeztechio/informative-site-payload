import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-vercel-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_pages_blocks_media_block_image_size" AS ENUM('sm', 'md', 'lg');
  CREATE TYPE "public"."enum_pages_blocks_imagen_con_texto_posicion" AS ENUM('izquierda', 'derecha');
  CREATE TYPE "public"."enum_pages_blocks_imagen_con_texto_ancho_imagen" AS ENUM('25', '33', '50');
  CREATE TYPE "public"."enum_pages_blocks_content_with_media_text_position" AS ENUM('Left', 'Right');
  CREATE TYPE "public"."enum__pages_v_blocks_media_block_image_size" AS ENUM('sm', 'md', 'lg');
  CREATE TYPE "public"."enum__pages_v_blocks_imagen_con_texto_posicion" AS ENUM('izquierda', 'derecha');
  CREATE TYPE "public"."enum__pages_v_blocks_imagen_con_texto_ancho_imagen" AS ENUM('25', '33', '50');
  CREATE TYPE "public"."enum__pages_v_blocks_content_with_media_text_position" AS ENUM('Left', 'Right');
  CREATE TABLE "pages_blocks_imagen_con_texto" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"texto" jsonb,
  	"imagen_id" integer,
  	"posicion" "enum_pages_blocks_imagen_con_texto_posicion" DEFAULT 'izquierda',
  	"ancho_imagen" "enum_pages_blocks_imagen_con_texto_ancho_imagen" DEFAULT '33',
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_bloque_informativo" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"titulo" varchar,
  	"descripcion_corta" varchar,
  	"descripcion_larga" varchar,
  	"icono_id" integer,
  	"block_name" varchar
  );
  
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
  
  CREATE TABLE "_pages_v_blocks_imagen_con_texto" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"texto" jsonb,
  	"imagen_id" integer,
  	"posicion" "enum__pages_v_blocks_imagen_con_texto_posicion" DEFAULT 'izquierda',
  	"ancho_imagen" "enum__pages_v_blocks_imagen_con_texto_ancho_imagen" DEFAULT '33',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_bloque_informativo" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"titulo" varchar,
  	"descripcion_corta" varchar,
  	"descripcion_larga" varchar,
  	"icono_id" integer,
  	"_uuid" varchar,
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
  
  DROP INDEX "redirects_from_idx";
  ALTER TABLE "pages_blocks_media_block" ADD COLUMN "caption" jsonb;
  ALTER TABLE "pages_blocks_media_block" ADD COLUMN "image_size" "enum_pages_blocks_media_block_image_size" DEFAULT 'md';
  ALTER TABLE "_pages_v_blocks_media_block" ADD COLUMN "caption" jsonb;
  ALTER TABLE "_pages_v_blocks_media_block" ADD COLUMN "image_size" "enum__pages_v_blocks_media_block_image_size" DEFAULT 'md';
  ALTER TABLE "pages_blocks_imagen_con_texto" ADD CONSTRAINT "pages_blocks_imagen_con_texto_imagen_id_media_id_fk" FOREIGN KEY ("imagen_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_imagen_con_texto" ADD CONSTRAINT "pages_blocks_imagen_con_texto_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_bloque_informativo" ADD CONSTRAINT "pages_blocks_bloque_informativo_icono_id_media_id_fk" FOREIGN KEY ("icono_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_bloque_informativo" ADD CONSTRAINT "pages_blocks_bloque_informativo_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_content_with_media" ADD CONSTRAINT "pages_blocks_content_with_media_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_content_with_media" ADD CONSTRAINT "pages_blocks_content_with_media_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_imagen_con_texto" ADD CONSTRAINT "_pages_v_blocks_imagen_con_texto_imagen_id_media_id_fk" FOREIGN KEY ("imagen_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_imagen_con_texto" ADD CONSTRAINT "_pages_v_blocks_imagen_con_texto_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_bloque_informativo" ADD CONSTRAINT "_pages_v_blocks_bloque_informativo_icono_id_media_id_fk" FOREIGN KEY ("icono_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_bloque_informativo" ADD CONSTRAINT "_pages_v_blocks_bloque_informativo_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_content_with_media" ADD CONSTRAINT "_pages_v_blocks_content_with_media_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_content_with_media" ADD CONSTRAINT "_pages_v_blocks_content_with_media_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "pages_blocks_imagen_con_texto_order_idx" ON "pages_blocks_imagen_con_texto" USING btree ("_order");
  CREATE INDEX "pages_blocks_imagen_con_texto_parent_id_idx" ON "pages_blocks_imagen_con_texto" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_imagen_con_texto_path_idx" ON "pages_blocks_imagen_con_texto" USING btree ("_path");
  CREATE INDEX "pages_blocks_imagen_con_texto_imagen_idx" ON "pages_blocks_imagen_con_texto" USING btree ("imagen_id");
  CREATE INDEX "pages_blocks_bloque_informativo_order_idx" ON "pages_blocks_bloque_informativo" USING btree ("_order");
  CREATE INDEX "pages_blocks_bloque_informativo_parent_id_idx" ON "pages_blocks_bloque_informativo" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_bloque_informativo_path_idx" ON "pages_blocks_bloque_informativo" USING btree ("_path");
  CREATE INDEX "pages_blocks_bloque_informativo_icono_idx" ON "pages_blocks_bloque_informativo" USING btree ("icono_id");
  CREATE INDEX "pages_blocks_content_with_media_order_idx" ON "pages_blocks_content_with_media" USING btree ("_order");
  CREATE INDEX "pages_blocks_content_with_media_parent_id_idx" ON "pages_blocks_content_with_media" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_content_with_media_path_idx" ON "pages_blocks_content_with_media" USING btree ("_path");
  CREATE INDEX "pages_blocks_content_with_media_image_idx" ON "pages_blocks_content_with_media" USING btree ("image_id");
  CREATE INDEX "_pages_v_blocks_imagen_con_texto_order_idx" ON "_pages_v_blocks_imagen_con_texto" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_imagen_con_texto_parent_id_idx" ON "_pages_v_blocks_imagen_con_texto" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_imagen_con_texto_path_idx" ON "_pages_v_blocks_imagen_con_texto" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_imagen_con_texto_imagen_idx" ON "_pages_v_blocks_imagen_con_texto" USING btree ("imagen_id");
  CREATE INDEX "_pages_v_blocks_bloque_informativo_order_idx" ON "_pages_v_blocks_bloque_informativo" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_bloque_informativo_parent_id_idx" ON "_pages_v_blocks_bloque_informativo" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_bloque_informativo_path_idx" ON "_pages_v_blocks_bloque_informativo" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_bloque_informativo_icono_idx" ON "_pages_v_blocks_bloque_informativo" USING btree ("icono_id");
  CREATE INDEX "_pages_v_blocks_content_with_media_order_idx" ON "_pages_v_blocks_content_with_media" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_content_with_media_parent_id_idx" ON "_pages_v_blocks_content_with_media" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_content_with_media_path_idx" ON "_pages_v_blocks_content_with_media" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_content_with_media_image_idx" ON "_pages_v_blocks_content_with_media" USING btree ("image_id");
  CREATE UNIQUE INDEX "redirects_from_idx" ON "redirects" USING btree ("from");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "pages_blocks_imagen_con_texto" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_bloque_informativo" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_content_with_media" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_imagen_con_texto" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_bloque_informativo" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_content_with_media" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "pages_blocks_imagen_con_texto" CASCADE;
  DROP TABLE "pages_blocks_bloque_informativo" CASCADE;
  DROP TABLE "pages_blocks_content_with_media" CASCADE;
  DROP TABLE "_pages_v_blocks_imagen_con_texto" CASCADE;
  DROP TABLE "_pages_v_blocks_bloque_informativo" CASCADE;
  DROP TABLE "_pages_v_blocks_content_with_media" CASCADE;
  DROP INDEX "redirects_from_idx";
  CREATE INDEX "redirects_from_idx" ON "redirects" USING btree ("from");
  ALTER TABLE "pages_blocks_media_block" DROP COLUMN "caption";
  ALTER TABLE "pages_blocks_media_block" DROP COLUMN "image_size";
  ALTER TABLE "_pages_v_blocks_media_block" DROP COLUMN "caption";
  ALTER TABLE "_pages_v_blocks_media_block" DROP COLUMN "image_size";
  DROP TYPE "public"."enum_pages_blocks_media_block_image_size";
  DROP TYPE "public"."enum_pages_blocks_imagen_con_texto_posicion";
  DROP TYPE "public"."enum_pages_blocks_imagen_con_texto_ancho_imagen";
  DROP TYPE "public"."enum_pages_blocks_content_with_media_text_position";
  DROP TYPE "public"."enum__pages_v_blocks_media_block_image_size";
  DROP TYPE "public"."enum__pages_v_blocks_imagen_con_texto_posicion";
  DROP TYPE "public"."enum__pages_v_blocks_imagen_con_texto_ancho_imagen";
  DROP TYPE "public"."enum__pages_v_blocks_content_with_media_text_position";`)
}
