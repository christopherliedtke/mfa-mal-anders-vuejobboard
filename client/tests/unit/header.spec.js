import { mount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import TheHeader from "@/components/TheHeader.vue";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("Check TheHeader.vue for login btn when loggedIn: false", () => {
  let store;

  store = new Vuex.Store({
    state: {
      auth: {
        loggedIn: false,
        user: {}
      }
    }
  });

  const wrapper = mount(TheHeader, { store, localVue });

  it("renders", () => {
    const allButtons = wrapper.findAll(".btn");
    const loginBtns = allButtons.filter(wrapper => wrapper.text() == "Login");

    expect(loginBtns).toHaveLength(1);
  });
});
