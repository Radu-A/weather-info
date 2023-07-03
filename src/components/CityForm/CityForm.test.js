import React from "react";
import { shallow } from "enzyme";
import CityForm from "./CityForm";

describe("CityForm", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<CityForm />);
    expect(wrapper).toMatchSnapshot();
  });
});
