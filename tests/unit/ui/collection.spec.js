import { shallowMount } from "@vue/test-utils";
import CollectionsSection from "@/views/Home/CollectionSection.vue";
import api from "@/api";

jest.mock("@/api", () => ({
  get: jest.fn(),
}));

describe("CollectionsSection", () => {
  let wrapper;

  const mockCollections = [
    {
      id: 1,
      title: "Collection 1",
      url: "/assets/collection_1.webp",
    },
    {
      id: 2,
      title: "Collection 2",
      url: "/assets/collection_2.webp",
    },
  ];

  beforeEach(() => {
    api.get.mockResolvedValue(mockCollections);
    wrapper = shallowMount(CollectionsSection);
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it("should fetch collections on mount", async () => {
    await wrapper.vm.$nextTick();
    expect(api.get).toHaveBeenCalledWith("category");
    expect(wrapper.vm.collections).toEqual(mockCollections);
  });

  it("should render a collection for each item in collections", async () => {
    await wrapper.vm.$nextTick();
    const collectionItems = wrapper.findAll(".overflow-hidden");
    expect(collectionItems).toHaveLength(mockCollections.length);
  });

  it("should render the first collection with a col-span of 2", async () => {
    await wrapper.vm.$nextTick();
    const firstCollection = wrapper.find(".overflow-hidden:first-child");
    expect(firstCollection.classes()).toContain("col-span-2");
  });
});
