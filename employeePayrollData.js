class EmployeePayrollData{
    id;
    salary;
    gender;
    startDate;

    constructor(...params){
        this.id = params[0];
        this.name = params[1];
        this.salary = params[2];
        this.gender = params[3];
        this.startDate = params[4];
    }

    get name(){return this._name}    
    set name(name){
        let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
        if(nameRegex.test(name)){
            this._name = name;
        }
        else{
            throw 'Invalid name';
        }
        
    }

    toString(){
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const empDate = this.startDate === undefined ? "undefined" : this.startDate.toLocaleDateString("en-US", options);

       return "Id:" + this.id + ", Name: " + this.name + ", Salary: "+ this.salary + ", Gender: " + this.gender + ", Start date: " + empDate;
    }
}

let employeePayrollData = new EmployeePayrollData(1, "Mark", 9000000);
    console.log(employeePayrollData.toString());
try{
    employeePayrollData.name = "Jo";
    console.log(employeePayrollData.toString());    
}
catch(e){
    console.log(e);
}

employeePayrollData = new EmployeePayrollData(2, "Terisa", 10000000, "F", new Date());
console.log(employeePayrollData.toString());

