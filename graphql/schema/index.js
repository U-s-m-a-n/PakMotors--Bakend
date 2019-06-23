const { buildSchema } = require('graphql');

module.exports = buildSchema(`

type Person {
    _id: ID!
    name: String
    f_name: String
    image: String
    cast: String
    cnic: String
    address: String
    mobile: [String]
    isSeller: Boolean
    isBuyer: Boolean
    isWitness:Boolean
}
input personInput {
    name: String
    f_name: String
    image: String
    cast: String
    cnic: String
    address: String
    mobile: [String]
    isSeller: Boolean
    isBuyer: Boolean
    isWitness:Boolean
}










type Car {
    _id: ID!
    v_name: String
    horse_power: Int
    color: String
    kota: String
    model: String
    chasis: String
    engine: String
    registration: String
    isSold: Boolean
}
input carInput {
    v_name: String
    horse_power: Int
    color: String
    kota: String
    model: String
    chasis: String
    engine: String
    registration: String
    isSold: Boolean
}





type Transaction{
    _id: ID!
    payment:Int
    date: String
    note:String
}
type Account {
    _id: ID!
    accountTitle: String!
    transactions: [Transaction!]!
}
 input accountInput {
    accountTitle: String!
    payment:Int
    date: String
    note:String
 }








type Sale_transaction {
    _id: ID!
    depositedAmount: Int
    transactionDate: String
    accountId: String
}
type Sale_payment{
    _id: ID!
    totalAmount:Int
    transactions:[Sale_transaction]
}
type Sale {
    _id: ID!
    buyer_id: String
    seller_id: String
    car_id: String
    witness1: String
    witness2: String
    paymentDetails: [Sale_payment]
    date: String
}
input saleInput {
    buyer_id: String
    seller_id: String
    car_id: String
    witness1: String
    witness2: String
    date: String

    totalAmount:Int

    depositedAmount: Int
    transactionDate: String
    accountId: String
} 




 
type  User_accounts {
    _id: ID!
    accountId: String
}
type User {
    _id: ID!
    userName: String
    password: String
    accounts: [User_accounts]
}
input userInput{
    userName: String
    password: String
    accountId: String
}





type rootQuery {
    cars : [Car!]!
    persons: [Person!]!
    accounts: [Account!]!
    sales: [Sale!]!
    users: [User!]!
}


type rootMutation {
    createCar(carValues: carInput): Car
    createPerson(personValues: personInput): Person
    createAccount(accountValues: accountInput): Account
    createSale(saleValues: saleInput): Sale
    createUser(userValues: userInput): User
}


schema {
    query: rootQuery
    mutation: rootMutation
}

`);