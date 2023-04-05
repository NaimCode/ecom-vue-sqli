import { mount } from "@vue/test-utils";
import ProductCard from "@/components/ProductCard.vue";

const product = {
  id: 1,
  title: "Product title",
  price: 10,
  urls: ["/img1.jpg", "/img2.jpg"],
  colors: ["red", "blue"],
  tags: ["tag1", "tag2"],
};

describe("ProductCard", () => {
  it("should update imgs when product.urls is updated", async () => {
    const wrapper = mount(ProductCard, {
      props: { product },
    });

    product.urls.push("/img3.jpg");
    await wrapper.vm.$nextTick();

    expect(wrapper.vm.imgs.length).toBe(3);
  });

  it("should update imgIndex to 1 on mouse enter when imgs.length > 1", async () => {
    const wrapper = mount(ProductCard, {
      props: { product },
    });

    wrapper.trigger("mouseover");
    await wrapper.vm.$nextTick();

    expect(wrapper.vm.imgIndex).toBe(1);
  });

  it("should update imgIndex to 0 on mouse leave", async () => {
    const wrapper = mount(ProductCard, {
      props: { product },
    });

    wrapper.trigger("mouseover");
    await wrapper.vm.$nextTick();

    wrapper.trigger("mouseleave");
    await wrapper.vm.$nextTick();

    expect(wrapper.vm.imgIndex).toBe(0);
  });

  it("should dispatch addToCart action with correct payload on button click", async () => {
    const addToCart = jest.fn();
    const store = {
      state: { user: { user: { uid: "user-id" } } },
      dispatch: addToCart,
    };
    const wrapper = mount(ProductCard, {
      props: { product },
      global: {
        plugins: [store],
      },
    });

    await wrapper.find("button").trigger("click");

    expect(addToCart).toHaveBeenCalledWith(expect.anything(), {
      product,
      user: "user-id",
      quantity: 1,
      size: "",
      color: "red",
    });
  });

  it("should display success toast message when addToCart dispatch is successful", async () => {
    const store = {
      state: { user: { user: { uid: "user-id" } } },
      dispatch: jest.fn().mockResolvedValue({}),
    };
    const wrapper = mount(ProductCard, {
      props: { product },
      global: {
        plugins: [store],
      },
    });

    await wrapper.find("button").trigger("click");

    expect(wrapper.vm.isLoading).toBe(false);
    expect(wrapper.find(".toast-success").exists()).toBe(true);
  });
});
