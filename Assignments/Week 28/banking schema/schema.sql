createdb bankingapp

create table branch (
    branch_id serial,
    branch_name VARCHAR(100),
    branch_city VARCHAR(101),
    total_reserve BIGINT,
    CONSTRAINT pk_branch_id PRIMARY KEY (branch_id)
);

create table accounts (
    account_id serial,
    customer_id int REFERENCES customer(customer_id),
    account_type VARCHAR(200),
    branch_name VARCHAR(100) REFERENCES branch(branch_name),
    branch_city VARCHAR(101) REFERENCES branch(branch_city),
    account_bal BIGINT,
    CONSTRAINT pk_account_id PRIMARY KEY (account_id)
);

create table customer (
    customer_id serial,
    customer_name VARCHAR(200),
    customer_city VARCHAR(100),
    customer_phone INT,
    customer_address VARCHAR(250),
    CONSTRAINT pk_customer_id PRIMARY KEY (customer_id)
)

create table transactions (
    transaction_id serial,
    credit BOOLEAN,
    debit BOOLEAN,
    credited_to INT REFERENCES accounts(account_id),
    debited_from INT REFERENCES accounts(account_id),
    amount BIGINT,
    transaction_time TIMESTAMP,
     CONSTRAINT pk_transaction_id PRIMARY KEY (transaction_id)
)

create table loan (
    loan_id serial,
    loan_type VARCHAR(100),
    taken_by INT REFERENCES accounts(account_id),
    loan_amount BIGINT,
    pending_amount BIGINT,
    repayed_amount BIGINT,
    payed_interest BIGINT,
    sanction_date DATETIME,
     CONSTRAINT pk_loan_id PRIMARY KEY (loan_id)
)

create table deposit (
    deposit_id serial,
    deposited_by VARCHAR(100),
    deposited_to INT REFERENCES accounts(account_id),
    deposited_at INT REFERENCES branch(branch_id),
    deposit_time TIMESTAMP,
    CONSTRAINT pk_deposit_id PRIMARY KEY (deposit_id)
)



-- Write an SQL query for returning all the customers who has an account in the Bangalore branch.

SELECT * FROM accounts WHERE branch_city = 'Banglore';










