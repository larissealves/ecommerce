import { pgTable, uuid,  text, integer, boolean, timestamp } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";

export const userTable = pgTable('user', {
  id: uuid().primaryKey().defaultRandom(),
  name: text().notNull(),
});

export const categoryTable = pgTable('category', {
  id: uuid().primaryKey().defaultRandom(),
  categoryName: text("category_name").notNull().unique(),
  slug: text().unique(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  isActive: boolean("is_active"),
});

export const categoryRelations = relations(categoryTable, ({many}) => ({
    products: many(productTable),
}));

export const productTable = pgTable('product', {
  id: uuid().primaryKey().defaultRandom(),
  categoryId: uuid("category_id").notNull().references(() => categoryTable.id),
  productName: text("product_name").notNull(),
  slug: text().notNull().unique(),
  description: text(),

  createdAt: timestamp("created_at").notNull().defaultNow(),
});

export const productVariantTable = pgTable("product_variant", {
  id: uuid().primaryKey().defaultRandom(),
  productId: uuid('product_id').notNull().references (()=> productTable.id),
  priceInCents: integer("price_in_cents").notNull(),
  //R$ 10,00 --> save with: 1000
  //conversion: 1000/100 => 10
  createdAt: timestamp("created_at").notNull().defaultNow(),
  slug: text().notNull().unique(),
  name: text().notNull(),
  imageUrl: text('image_url').notNull(),
  // salvar imagem em serviço de armazenamento de imagens estáticas, 
  // pega o url e salva no BD interno.
  color: text().notNull(),
})

export const productRelations = relations(productTable, ({one, many}) => ({
    category: one(categoryTable, {
      fields: [productTable.categoryId],
      references: [categoryTable.id],
    }),
    variants: many(productVariantTable),
}));

export const productVariantRelations = relations(
  productVariantTable,
  ({ one }) => ({
    product: one(productTable, {
      fields: [productVariantTable.productId],
      references: [productTable.id],
    }),
  }),
);

