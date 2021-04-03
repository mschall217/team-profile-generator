const Intern = require('../lib/intern');

test("Intern", () => {
    const inte = new Intern();
    expect(typeof(inte)).toBe('object');
});
test("Intern", () => {
    const role = 'Intern';
    const inte = new Intern('Morgan', 1234, 'morgan@me.com');
    expect(inte.getRole()).toBe('Intern');
});
test("Intern", () => {
    const school = 'OSU';
    const inte = new Intern('Morgan', 1234, 'morgan@me.com', school);
    expect(inte.getSchool()).toBe('OSU');
});