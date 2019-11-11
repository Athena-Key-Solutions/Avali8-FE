const confirmX = required('./confirmPassword');

test('compare password and confirm password inputs', () =>{
    expect(confirmX("senha123","senha123").toBe("Welcome to Avali8!"));
});