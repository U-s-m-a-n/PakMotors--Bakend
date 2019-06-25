const { buildSchema } = require('graphql');

module.exports = buildSchema(`

type Person {
    _id: ID!
    name: String
    f_name: String
    image: [String]
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
    image: [String]
    cast: String
    cnic: String
    address: String
    mobile: [String]
    isSeller: Boolean
    isBuyer: Boolean
    isWitness:Boolean
}
input personId{
    _id: String!
}
input personCNIC{
    _id: String!
}
input personName{
    _id: String!
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
input carId{
    _id: String!
}
input horsePower{
    _id: Int!
}
input modelNumber{
    _id: String!
}
input chasisNumber{
    _id: String!
}
input engineNumber{
    _id: String!
}
input registrationNumber{
    _id: String!
}
input isSold{
    _id: Boolean!
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
 input accountId{
    _id: String!
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
    

    totalAmount:Int

    depositedAmount: Int
    transactionDate: String
    accountId: String
} 
input saleId{
    _id: String!
}
input saleBuyerId{
    _id: String!
}
input saleSellerId{
    _id: String!
}
input saleCarId{
    _id: String!
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
input userId{
    _id: String!
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
    findCarById(id: carId): [Car!]!
    findCarByHorsePower(id: horsePower): [Car!]!
    findCarByModel(id: modelNumber): [Car!]!
    findCarByChasis(id: chasisNumber): [Car!]!
    findCarByEngine(id: engineNumber): [Car!]!
    findCarByRegistration(id: registrationNumber): [Car!]!
    findCarByIsSold(id: isSold): [Car!]!

    createPerson(personValues: personInput): Person
    findPersonById(id: personId) : Person
    findPersonByCNIC(id: personCNIC) : [Person!]!
    findPersonByName(id: personName) : [Person!]!


    createAccount(accountValues: accountInput): Account
    findAccountById(id: accountId): Account

    createSale(saleValues: saleInput): Sale
    findSaleById(id: saleId): Sale
    findSaleByBuyerId(id: saleBuyerId): [Sale!]!
    findSaleBySellerId(id: saleSellerId): [Sale!]!
    findSaleByCarId(id: saleCarId): [Sale!]!






    createUser(userValues: userInput): User
    findUserById(id: userId): User
}


schema {
    query: rootQuery
    mutation: rootMutation
}

`);