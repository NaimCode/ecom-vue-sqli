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

const search = async (collection, query) => {
  const res = await client.getEntries({
    content_type: collection,
    query,
  });
  return res.items.map((entry) => ({
    id: entry.sys.id,
    ...entry.fields,
  }));
};
const getSingle = async (collection, id) => {
  const res = await client.getEntry(id);
  return {
    id: res.sys.id,
    ...res.fields,
  };
};
export default {
  get,
  search,
  getSingle,
};
