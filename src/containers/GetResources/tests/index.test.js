import React from "react";
import { mount } from "enzyme";
import { enzymeFind } from "styled-components/test-utils";
// import { Provider } from "react-redux";

import { GetResources } from "../index";
import SelectorLayout from "../../../components/SelectorLayout";
// import store from "../../../store/configureStore";

describe("<GetResources />", () => {
  let props;
  let loadOptions;
  const getResources = props => {
    const wrapper = mount(
      // <Provider store={store}>
      <GetResources {...props} />
      // </Provider>
    );
    return wrapper;
  };
  beforeEach(() => {
    loadOptions = jest.fn();
    props = { loadOptions };
  });
  it("SelectorLayout component is always mounted", () => {
    let component = getResources(props);
    const selectorLayout = component.find(SelectorLayout);
    expect(selectorLayout.length).not.toBe(0);
  });

  it("load options called on app mount", () => {
    props = { ...props, loadOptions };
    let component = getResources(props);
    expect(loadOptions).toHaveBeenCalled();
  });
});
