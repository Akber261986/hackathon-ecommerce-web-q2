import { type SchemaTypeDefinition } from 'sanity';
import { allProducts } from './allProducts';
import { blog } from './blog';
import { blogPost } from './blogpost';
import { offer } from './offer';
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blog, blogPost, offer, allProducts],
}
