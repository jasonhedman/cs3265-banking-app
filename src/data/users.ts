import { User, UserData, UserPhoneNumber } from "../types/user";

export let users: User[] = [
    {
        userID: "1",
        email: 'a@gmail.com',
        ssn: '123456789',
        dateOfBirth: '1990-01-01',
    },
    {
        userID: "2",
        email: 'b@gmail.com',
        ssn: '234567890',
        dateOfBirth: '1990-01-02',
    },
    {
        userID: "3",
        email: 'c@gmail.com',
        ssn: '345678901',
        dateOfBirth: '1990-01-03',
    },
    {
        userID: "4",
        email: 'd@gmail.com',
        ssn: '456789012',
        dateOfBirth: '1990-01-04',
    },
    {
        userID: "5",
        email: 'e@gmail.com',
        ssn: '567890123',
        dateOfBirth: '1990-01-05',
    },
]

export let userPhoneNumbers: UserPhoneNumber[] = [
    {
        userID: "1",
        phoneNumber: '1234567890',
    },
    {
        userID: "1",
        phoneNumber: '0987654321',
    },
    {
        userID: "2",
        phoneNumber: '1234567890',
    },
    {
        userID: "2",
        phoneNumber: '0987654321',
    },
    {
        userID: "3",
        phoneNumber: '1234567890',
    },
    {
        userID: "3",
        phoneNumber: '0987654321',
    },
    {
        userID: "4",
        phoneNumber: '1234567890',
    },
    {
        userID: "4",
        phoneNumber: '0987654321',
    },
    {
        userID: "5",
        phoneNumber: '1234567890',
    },
    {
        userID: "5",
        phoneNumber: '0987654321',
    }
]

export const getUserDataByEmail = (email: string): UserData | undefined => {
    let userData = users.find(user => user.email === email);
    if (userData !== undefined) {
        let phoneNumbers = userPhoneNumbers
            .filter(userPhoneNumber => userPhoneNumber.userID === userData?.userID)
            .map(userPhoneNumber => userPhoneNumber.phoneNumber);
        return {
            ...userData,
            phoneNumbers
        }
    }
}