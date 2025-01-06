import { type SchemaTypeDefinition } from 'sanity';
import blog from './blog';
import blogpost from './blogpost';
import offer from './offer';
import { allProducts } from './allProducts';
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blog, blogpost, offer, allProducts],
}
