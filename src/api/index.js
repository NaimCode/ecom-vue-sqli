import { client } from "../utils/contentful";

const get = async (collection, options) => {
  const res = await client.getEntries({
    content_type: collection,
    order: "sys.createdAt",
    ...options,
  });
  return res.items.map((entry) => ({
    id: entry.sys.id,
    ...entry.fields,
  }));
};

export default {
  get,
};
