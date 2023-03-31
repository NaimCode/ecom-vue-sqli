import { client } from "../utils/contentful";

const get = async (collection) => {
  const res = await client.getEntries({
    content_type: collection,
    order: "sys.createdAt",
  });
  return res.items.map((entry) => ({
    id: entry.sys.id,
    ...entry.fields,
  }));
};

export default {
  get,
};
