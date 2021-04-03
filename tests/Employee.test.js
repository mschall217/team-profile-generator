const Employee = require('../lib/employee');

test("Employee", () => {
    const emp = new Employee();
    expect(typeof(emp)).toBe('object');
});
test("Employee", () => {
    const name = 'Morgan'
    const emp = new Employee(name);
    expect(emp.getName()).toBe('Morgan');
});
test("Employee", () => {
    const id = 1234
    const emp = new Employee('Morgan',id);
    expect(emp.getID()).toBe(1234);
});
test("Employee", () => {
    const email = 'morgan@me.com'
    const emp = new Employee('Morgan', 1234, email);
    expect(emp.getEmail()).toBe('morgan@me.com');
});
test("Employee", () => {
    const role = 'employee';
    const emp = new Employee('Morgan', 1234, 'morgan@me.com', role);
    expect(emp.role).toBe('employee');
});