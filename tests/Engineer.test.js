const Engineer = require('../lib/engineer');

test("Engineer", () => {
    const eng = new Engineer();
    expect(typeof(eng)).toBe('object');
});
test("Engineer", () => {
    const role = 'Engineer';
    const eng = new Engineer('Morgan', 1234, 'morgan@me.com');
    expect(eng.getRole()).toBe('Engineer');
});
test("Engineer", () => {
    const github = 'mschall217';
    const eng = new Engineer('Morgan', 1234, 'morgan@me.com', github);
    expect(eng.getGitHub()).toBe('mschall217');
});