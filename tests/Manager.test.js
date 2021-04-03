const Manager = require('../lib/manager');

test("Manager", () => {
    const man = new Manager();
    expect(typeof(man)).toBe('object');
});
test("Manager", () => {
    const role = 'Manager';
    const man = new Manager('Morgan', 1234, 'morgan@me.com');
    expect(man.getRole()).toBe('Manager');
});
test("Mangaer", () => {
    const officeNum = '777-777-7777';
    const man = new Manager('Morgan', 1234, 'morgan@me.com', officeNum);
    expect(man.getOfficeNum()).toBe('777-777-7777');
});