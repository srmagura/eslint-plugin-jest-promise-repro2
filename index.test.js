it("throws then resolves", async () => {
  const p = Promise.reject(new Error("myError")).then(undefined, (e) => {
    expect(e).toBeInstanceOf(Error);

    return "handled";
  });

  await expect(p).resolves.toBe("handled");
});

it("throws twice", async () => {
  const p = Promise.reject(new Error("myError")).then(undefined, (e) => {
    expect(e).toBeInstanceOf(Error);

    throw new Error("myError2");
  });

  await expect(p).rejects.toThrow("myError2");
});
