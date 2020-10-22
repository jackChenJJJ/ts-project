import Index from '../src/index'

test("version is 0.0.1?", () => {
    const test = Index
    expect(test()).toBe("this is version is 0.0.1")
})