"use strict";

import { expect } from "chai";
import { main } from "../dist/index";

describe("main", () => {
  it("should return true", () => {
    expect(main()).to.be.true;
  });
});
