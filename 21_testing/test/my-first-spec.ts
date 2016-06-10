/// <reference path="../src/my-first-script.ts"/>

describe("An add function", () => {
    it("can add 2 integers", ()=> {
        expect(add(1, 1)).toEqual(2);
        expect(add(2, 3)).toEqual(5);
    });

    it("can not add string values", ()=> {
        expect(add(1, "1")).not.toEqual(2);
        expect(add("2", 3)).not.toEqual(5);

        expect(add(1, "1")).toEqual("11");
        expect(add("2", 3)).toEqual("23");
    });
});

