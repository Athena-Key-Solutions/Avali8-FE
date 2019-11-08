const confirmX = required('./confirmPassword');

test('compare password and confirm password inputs', () =>{
    expect(confirmX().toBe("Welcome to Avali8!"));
});