import { z } from 'zod';

const schema = z.object({
  keyword: z.string(),
  locationId: z.string(),
  category: z.union([z.string(), z.null()]).optional(),
  species: z.union([z.string(), z.null()]).optional(),
   popularity: z.union([z.boolean(), z.null()]).optional(),
    price: z.union([z.boolean(), z.null()]).optional(),
});

export default schema;
