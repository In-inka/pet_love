import { z } from 'zod';

const schema = z.object({
keyword: z.string(),
  locationId: z.string(),
  category: z.string(),
  sex: z.string(),
  species: z.string(),
  popularity:z.boolean()
});

export default schema;
