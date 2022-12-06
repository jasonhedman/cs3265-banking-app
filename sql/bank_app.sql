-- Database Setup

-- create the Bank table with BankId and BankName
-- BankId is the primary key
create table Bank(
        BankID int,
        BankName varchar(20),
        PRIMARY KEY (BankId)
);

-- Insert five banks into the Bank table
insert into Bank values (1, 'Bank of America');
insert into Bank values (2, 'Chase');
insert into Bank values (3, 'Wells Fargo');
insert into Bank values (4, 'Citibank');
insert into Bank values (5, 'Capital One');

create table BankBranch(
        BranchID int,
        BankID int,
        Address varchar(30) not null,
        BranchName varchar(15) not null,
        PRIMARY KEY (BranchID),
        FOREIGN KEY (BankID) references Bank (BankID)
);

-- Insert three branches for each bank
insert into BankBranch values (1, 1, '123 Main Street', 'NYC');
insert into BankBranch values (2, 1, '456 Main Street', 'LA');
insert into BankBranch values (3, 1, '789 Main Street', 'Chicago');
insert into BankBranch values (4, 2, '123 Main Street', 'NYC');
insert into BankBranch values (5, 2, '456 Main Street', 'LA');
insert into BankBranch values (6, 2, '789 Main Street', 'Chicago');
insert into BankBranch values (7, 3, '123 Main Street', 'NYC');
insert into BankBranch values (8, 3, '456 Main Street', 'LA');
insert into BankBranch values (9, 3, '789 Main Street', 'Chicago');
insert into BankBranch values (10, 4, '123 Main Street', 'NYC');
insert into BankBranch values (11, 4, '456 Main Street', 'LA');
insert into BankBranch values (12, 4, '789 Main Street', 'Chicago');
insert into BankBranch values (13, 5, '123 Main Street', 'NYC');
insert into BankBranch values (14, 5, '456 Main Street', 'LA');
insert into BankBranch values (15, 5, '789 Main Street', 'Chicago');

create table Employee(
        Name varchar(20) not null,
        EmployeeID integer,
        Salary integer,
        BranchID int not null,
        EmployeeType varchar(12) check (EmployeeType = 'Teller' or
                                        EmployeeType = 'LoanOfficer'),
        FOREIGN KEY (BranchID) references BankBranch (BranchID),
        PRIMARY KEY (EmployeeID)
);

-- Insert 2 employees for each branch
insert into Employee values ('John Steward', 1, 50000, 1, 'Teller');
insert into Employee values ('Mary Smith', 2, 60000, 1, 'LoanOfficer');
insert into Employee values ('John Steward', 3, 50000, 2, 'Teller');
insert into Employee values ('Mary Smith', 4, 60000, 2, 'LoanOfficer');
insert into Employee values ('John Steward', 5, 50000, 3, 'Teller');
insert into Employee values ('Mary Smith', 6, 60000, 3, 'LoanOfficer');
insert into Employee values ('John Steward', 7, 50000, 4, 'Teller');
insert into Employee values ('Mary Smith', 8, 60000, 4, 'LoanOfficer');
insert into Employee values ('John Steward', 9, 50000, 5, 'Teller');
insert into Employee values ('Mary Smith', 10, 60000, 5, 'LoanOfficer');
insert into Employee values ('John Steward', 11, 50000, 6, 'Teller');
insert into Employee values ('Mary Smith', 12, 60000, 6, 'LoanOfficer');
insert into Employee values ('John Steward', 13, 50000, 7, 'Teller');
insert into Employee values ('Mary Smith', 14, 60000, 7, 'LoanOfficer');
insert into Employee values ('John Steward', 15, 50000, 8, 'Teller');
insert into Employee values ('Mary Smith', 16, 60000, 8, 'LoanOfficer');
insert into Employee values ('John Steward', 17, 50000, 9, 'Teller');
insert into Employee values ('Mary Smith', 18, 60000, 9, 'LoanOfficer');
insert into Employee values ('John Steward', 19, 50000, 10, 'Teller');
insert into Employee values ('Mary Smith', 20, 60000, 10, 'LoanOfficer');
insert into Employee values ('John Steward', 21, 50000, 11, 'Teller');
insert into Employee values ('Mary Smith', 22, 60000, 11, 'LoanOfficer');
insert into Employee values ('John Steward', 23, 50000, 12, 'Teller');
insert into Employee values ('Mary Smith', 24, 60000, 12, 'LoanOfficer');
insert into Employee values ('John Steward', 25, 50000, 13, 'Teller');
insert into Employee values ('Mary Smith', 26, 60000, 13, 'LoanOfficer');
insert into Employee values ('John Steward', 27, 50000, 14, 'Teller');
insert into Employee values ('Mary Smith', 28, 60000, 14, 'LoanOfficer');
insert into Employee values ('John Steward', 29, 50000, 15, 'Teller');
insert into Employee values ('Mary Smith', 30, 60000, 15, 'LoanOfficer');

create table User(
        UserID int,
        Email varchar(30),
        SSN char(9) not null,
        DateOfBirth date not null,
        PRIMARY KEY (UserID)
);

create table UserPhoneNumber(
        UserID int,
        PhoneNumber char(10),
        FOREIGN KEY (UserID) references User (UserID),
        PRIMARY KEY (UserID, PhoneNumber)
);

-- create User given email, SSN, date of birth, and phone numbers
insert into User values (1, 'a@gmail.com', '123456789', '1990-01-01');
insert into UserPhoneNumber values (1, '1234567890');
insert into UserPhoneNumber values (1, '0987654321');
-- create 4 more users
insert into User values (2, 'b@gmail.com', '234567890', '1990-01-02');
insert into UserPhoneNumber values (2, '1234567890');
insert into UserPhoneNumber values (2, '0987654321');
insert into User values (3, 'c@gmail.com', '345678901', '1990-01-03');
insert into UserPhoneNumber values (3, '1234567890');
insert into UserPhoneNumber values (3, '0987654321');
insert into User values (4, 'd@gmail.com', '456789012', '1990-01-04');
insert into UserPhoneNumber values (4, '1234567890');
insert into UserPhoneNumber values (4, '0987654321');
insert into User values (5, 'd@gmail.com', '567890123', '1990-01-05');
insert into UserPhoneNumber values (5, '1234567890');
insert into UserPhoneNumber values (5, '0987654321');

create table Account(
        AccountID int,
        BranchID int not null,
        UserID int not null,
        OpenDate date not null,
        Balance int,
        FOREIGN KEY (UserID) references User (UserID),
        FOREIGN KEY (BranchID) references BankBranch (BranchID),
        PRIMARY KEY (AccountID)
);

-- create an account for each user at different banks
insert into Account values (1, 1, 1, '2018-01-01', 1000);
insert into Account values (2, 1, 1, '2018-01-02', 2000);
insert into Account values (3, 2, 1, '2018-01-03', 3000);
insert into Account values (4, 3, 2, '2018-01-04', 4000);
insert into Account values (5, 4, 2, '2018-01-05', 5000);
insert into Account values (6, 5, 3, '2018-01-06', 6000);
insert into Account values (7, 6, 3, '2018-01-07', 7000);
insert into Account values (8, 7, 4, '2018-01-08', 8000);

create table Loan(
        LoanID int,
        TotalAmount int not null,
        InterestRate decimal not null,
        DueBy date not null,
        AccountID int not null,
        FOREIGN KEY (AccountID) references Account (AccountID),
        PRIMARY KEY (LoanID)
);

-- create two loans for one account
insert into Loan values (1, 10000, 0.05, '2018-01-01', 1);
insert into Loan values (2, 20000, 0.05, '2018-01-02', 1);
-- create one loan each of the other accounts
insert into Loan values (3, 30000, 0.05, '2018-01-03', 2);
insert into Loan values (4, 40000, 0.05, '2018-01-04', 3);
insert into Loan values (5, 50000, 0.05, '2018-01-05', 4);
insert into Loan values (6, 60000, 0.05, '2018-01-06', 5);
insert into Loan values (7, 70000, 0.05, '2018-01-07', 6);
insert into Loan values (8, 80000, 0.05, '2018-01-08', 7);
insert into Loan values (9, 90000, 0.05, '2018-01-09', 8);

create table Payment(
        PaymentID int,
        LoanID int,
        Amount int,
        FOREIGN KEY (LoanID) references Loan (LoanID),
        PRIMARY KEY (LoanID, PaymentID)
);

-- create two payments for one loan
insert into Payment values (1, 1, 1000);
insert into Payment values (2, 1, 9000);
-- create one payment each of the other loans
insert into Payment values (3, 2, 1000);
insert into Payment values (4, 3, 1000);
insert into Payment values (5, 4, 1000);
insert into Payment values (6, 5, 1000);
insert into Payment values (7, 6, 1000);
insert into Payment values (8, 7, 1000);
insert into Payment values (9, 8, 1000);

-- Application Design

-- Create User given email, phone number, SSN, date of birth, and phone numbers)
insert into User (UserID, Email, SSN, DateOfBirth) values (6, 'jason@hedmans.org', '123456789', '2002-07-09');
insert into UserPhoneNumber (UserID, PhoneNumber) values (6, '1234567890');
insert into UserPhoneNumber (UserID, PhoneNumber) values (6, '0987654321');

-- Get user given email-address
SELECT * 
FROM User, UserPhoneNumber
WHERE Email = 'jason@hedmans.org' AND User.UserID = UserPhoneNumber.UserID;

-- Create account for UserId given branch
insert into Account(AccountID, BranchID, UserID, OpenDate, Balance) values (9, 1, 6, '2018-01-01', 1000);
insert into Account(AccountID, BranchID, UserID, OpenDate, Balance) values (10, 2, 6, '2018-01-02', 2000);

-- get accounts given UserId
SELECT * FROM Account WHERE UserID = 6;

-- get total balance for UserID
SELECT SUM(Balance) FROM Account WHERE UserID = 6;

-- deposit amount to Account given AccountId
update Account set Balance = Balance + 1000 where AccountID = 9;
select Balance from Account where AccountID = 9;

-- withdraw amount from Account given AccountId
update Account set Balance = Balance - 500 where AccountID = 9;
select Balance from Account where AccountID = 9;

-- create loan for account
Insert into Loan values (10, 10000, 0.05, '2023-01-01', 9);
Insert into Loan values (11, 20000, 0.05, '2023-01-02', 10);

-- get loans given UserId
SELECT * FROM Loan WHERE AccountID IN (SELECT AccountID FROM Account WHERE UserID = 6);

-- get sum of loans for UserID
SELECT SUM(TotalAmount) FROM Loan WHERE AccountID IN (SELECT AccountID FROM Account WHERE UserID = 6);

-- repay loan given LoanId
Insert into Payment values (10, 10, 1000);
Insert into Payment values (11, 10, 1000);
Insert into Payment values (12, 11, 1000);

-- get payments given UserId
SELECT * FROM Payment WHERE LoanID IN (SELECT LoanID FROM Loan WHERE AccountID IN (SELECT AccountID FROM Account WHERE UserID = 6));

-- get amount remaining on loan given LoanId
SELECT TotalAmount - SUM(Amount) FROM Payment, Loan WHERE Loan.LoanID = 10 AND Payment.LoanID = 10;

-- get total amount remaining on all loans for UserID
SELECT SUM(Loan.TotalAmount - Payment.Amount) 
FROM Payment, Loan, Account 
WHERE Account.UserID = 6 AND Account.AccountID = Loan.AccountID AND Payment.LoanID = Loan.LoanID;

-- get banks
SELECT * FROM Bank;

-- get branches by BankID
SELECT * 
FROM BankBranch, Bank 
WHERE Bank.BankID = 1 AND BankBranch.BankID = Bank.BankID;

-- get employees by branch
SELECT * FROM Employee WHERE BranchID = 1;

-- get employees by bank
SELECT * FROM Employee WHERE BranchID IN (SELECT BranchID FROM BankBranch WHERE BankID = 1);

-- delete an employee given EmployeeID
DELETE FROM Employee WHERE EmployeeID = 1;