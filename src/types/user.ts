export interface UserPhoneNumber {
    userID: string,
    phoneNumber: string
}

export interface User {
    userID: string,
    email: string,
    ssn: string, 
    dateOfBirth: string
}

export interface UserData extends User {
    phoneNumbers: string[]
}