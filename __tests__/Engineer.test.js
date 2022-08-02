const Engineer = require('../lib/Engineer.js');

test('creates a new engineer', () => {
    const engineer = new Engineer("Bob", 123, "bob@email.com", "AlexCourtney18" );

    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.github).toEqual(expect.any(String));
    expect(engineer.getRole()).toBe('Engineer');
});