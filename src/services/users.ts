import { UserData } from "../types/user"

interface UserRecord {
    UserID: number,
    Email: string,
    PhoneNumber: string
    SSN: string,
    DateOfBirth: string
}

export const getUserByEmail = async (email: string): Promise<UserData | undefined> => {
    const response = await fetch(`https://hedbot2022.herokuapp.com/user?email=${email}`)
    if(response.status === 200){
        const data: UserRecord[] = await response.json()
        if(data.length === 0){
            return undefined
        }
        return {
            userID: data[0].UserID.toString(),
            email: data[0].Email,
            ssn: data[0].SSN,
            dateOfBirth: data[0].DateOfBirth,
            phoneNumbers: data.map((userRecord) => userRecord.PhoneNumber)
        }
    } else {
        return undefined
    }
}

export const createUser = async (email: string, ssn: string, dateOfBirth: string, phoneNumber: string): Promise<number | undefined> => {
    const response = await fetch(`https://hedbot2022.herokuapp.com/user/create`, {
        method: 'POST',
        body: JSON.stringify({
            email,
            ssn,
            dateOfBirth,
            phoneNumber
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    if(response.status === 200){
        const data: {userID: number} = await response.json()
        return data.userID
    } else {
        return undefined
    }
}