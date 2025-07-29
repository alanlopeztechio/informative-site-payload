import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-vercel-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
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
  
  ALTER TABLE "pages_blocks_carousel_avatar_empleados" ADD CONSTRAINT "pages_blocks_carousel_avatar_empleados_imagen_id_media_id_fk" FOREIGN KEY ("imagen_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_carousel_avatar_empleados" ADD CONSTRAINT "pages_blocks_carousel_avatar_empleados_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_carousel_avatar"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_carousel_avatar" ADD CONSTRAINT "pages_blocks_carousel_avatar_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_carousel_avatar_empleados" ADD CONSTRAINT "_pages_v_blocks_carousel_avatar_empleados_imagen_id_media_id_fk" FOREIGN KEY ("imagen_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_carousel_avatar_empleados" ADD CONSTRAINT "_pages_v_blocks_carousel_avatar_empleados_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_carousel_avatar"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_carousel_avatar" ADD CONSTRAINT "_pages_v_blocks_carousel_avatar_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "pages_blocks_carousel_avatar_empleados_order_idx" ON "pages_blocks_carousel_avatar_empleados" USING btree ("_order");
  CREATE INDEX "pages_blocks_carousel_avatar_empleados_parent_id_idx" ON "pages_blocks_carousel_avatar_empleados" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_carousel_avatar_empleados_imagen_idx" ON "pages_blocks_carousel_avatar_empleados" USING btree ("imagen_id");
  CREATE INDEX "pages_blocks_carousel_avatar_order_idx" ON "pages_blocks_carousel_avatar" USING btree ("_order");
  CREATE INDEX "pages_blocks_carousel_avatar_parent_id_idx" ON "pages_blocks_carousel_avatar" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_carousel_avatar_path_idx" ON "pages_blocks_carousel_avatar" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_carousel_avatar_empleados_order_idx" ON "_pages_v_blocks_carousel_avatar_empleados" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_carousel_avatar_empleados_parent_id_idx" ON "_pages_v_blocks_carousel_avatar_empleados" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_carousel_avatar_empleados_imagen_idx" ON "_pages_v_blocks_carousel_avatar_empleados" USING btree ("imagen_id");
  CREATE INDEX "_pages_v_blocks_carousel_avatar_order_idx" ON "_pages_v_blocks_carousel_avatar" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_carousel_avatar_parent_id_idx" ON "_pages_v_blocks_carousel_avatar" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_carousel_avatar_path_idx" ON "_pages_v_blocks_carousel_avatar" USING btree ("_path");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "pages_blocks_carousel_avatar_empleados" CASCADE;
  DROP TABLE "pages_blocks_carousel_avatar" CASCADE;
  DROP TABLE "_pages_v_blocks_carousel_avatar_empleados" CASCADE;
  DROP TABLE "_pages_v_blocks_carousel_avatar" CASCADE;`)
}
