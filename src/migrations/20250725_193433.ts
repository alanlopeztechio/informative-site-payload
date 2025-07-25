import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-vercel-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_pages_blocks_media_block_image_size" AS ENUM('sm', 'md', 'lg');
  CREATE TYPE "public"."enum__pages_v_blocks_media_block_image_size" AS ENUM('sm', 'md', 'lg');
  ALTER TABLE "pages_blocks_media_block" ADD COLUMN "caption" jsonb;
  ALTER TABLE "pages_blocks_media_block" ADD COLUMN "image_size" "enum_pages_blocks_media_block_image_size" DEFAULT 'md';
  ALTER TABLE "_pages_v_blocks_media_block" ADD COLUMN "caption" jsonb;
  ALTER TABLE "_pages_v_blocks_media_block" ADD COLUMN "image_size" "enum__pages_v_blocks_media_block_image_size" DEFAULT 'md';`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "pages_blocks_media_block" DROP COLUMN "caption";
  ALTER TABLE "pages_blocks_media_block" DROP COLUMN "image_size";
  ALTER TABLE "_pages_v_blocks_media_block" DROP COLUMN "caption";
  ALTER TABLE "_pages_v_blocks_media_block" DROP COLUMN "image_size";
  DROP TYPE "public"."enum_pages_blocks_media_block_image_size";
  DROP TYPE "public"."enum__pages_v_blocks_media_block_image_size";`)
}
