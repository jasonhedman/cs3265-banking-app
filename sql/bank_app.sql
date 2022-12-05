create table Employee(
        Fname varchar(15) not null,
        Lname varchar(15) not null,
        EmployeeID integer,
        Salary integer,
        BranchID int not null,
        EmployeeType varchar(12) check (EmployeeType = 'Teller' or
                                        EmployeeType = 'LoanOfficer'),
        FOREIGN KEY (BranchID) references BankBranch (BranchID),
        PRIMARY KEY (EmployeeID)
);

create table BankBranch(
        BranchID int,
        Address varchar(30) not null,
        BankName varchar(15) not null,
        FOREIGN KEY (BankName) references Bank (Name),
        PRIMARY KEY (BranchID)
);

create table Bank(
        Name varchar(15),
        PRIMARY KEY (Name)
);

create table Account(
        AccountID int,
        OpenDate date not null,
        Balance int,
        BranchID int not null,
        FOREIGN KEY (BranchID) references BankBranch (BranchID),
        PRIMARY KEY (AccountID)
);

create table User(
        UserID int,
        Email varchar(30),
        SSN char(9) not null,
        DateOfBirth date not null,
        PhoneNumber int,
        AccountID int not null,
        FOREIGN KEY (AccountID) references Account (AccountID),
        PRIMARY KEY (UserID)
);

create table Loan(
        LoanID int,
        TotalAmount int not null,
        InterestRate decimal not null,
        DueBy date not null,
        BranchID int not null,
        AccountID int not null,
        FOREIGN KEY (AccountID) references Account (AccountID),
        FOREIGN KEY (BranchID) references BankBranch (BranchID),
        PRIMARY KEY (LoanID)
);

create table Payment(
        LoanID int,
        PaymentID int,
        Amount int,
        FOREIGN KEY (LoanID) references Loan (LoanID),
        PRIMARY KEY (LoanID, PaymentID)
);

Insert into Bank Values ('Chase');
Insert into BankBranch Values (1, '731, Fonder, Houston, TX', 'Chase');
Insert into Employee Values ('John', 'Smith', 123456789, 35000, 1, 'Teller');

Delete from Employee where EmployeeID = 123456789;

Update BankBranch
    Set BranchID = 01
    Where BranchID = 1;
    
Insert into Employee Values ('John', 'Smith', 123456789, 35000, 1, 'Teller');
Insert into Employee Values ('Jack', 'Goff', 987654321, 20000, 1, 'LoanOfficer');
Insert into Employee Values ('John', 'Smith', 111145678, 40000, 1, 'Teller');
Insert into BankBranch Values (02, '638, Voss, Houston, TX', 'Chase');

Select Fname, Lname
From Employee
where EmployeeType = 'Teller' and Salary > 37500;

-- Operations needed:

-- Create User given email, phone number, SSN, date of birth
-- Get user given email-address
-- Create account for UserId given bank and branch
-- get accounts given UserId
-- get loans given UserId
-- create loan for account
-- repay loan given LoanId
-- get banks by branch
-- get employees by branch