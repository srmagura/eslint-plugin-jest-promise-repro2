it("cancels the asynchronous failure callback", async () => {
  const p = Promise.reject(new Error("myError")).then(undefined, (e) => {
    expect(e).toBeInstanceOf(Error);

    throw new Error("myError2");
  });

  await expect(p).rejects.toThrow("myError2");
});
