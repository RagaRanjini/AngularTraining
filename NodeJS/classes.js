var employee = /** @class */ (function () {
    function employee(sno, name, city) {
        this.sno = sno;
        this.name = name;
        this.city = city;
    }
    employee.prototype.display = function () {
        console.log(this.sno, this.name, this.city);
    };
    return employee;
}());
