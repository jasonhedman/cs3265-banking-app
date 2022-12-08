import React from 'react';
import { singletonHook } from 'react-singleton-hook';

import { getAccountsForUserId, deposit as depositFetch, withdraw as withdrawFetch, createAccount } from '../services/accounts';

import { AccountData } from '../types/account';
import useAuth from './useAuth';

const initValues = {
    userAccounts: [],
    addAccount: async (branchID: string) => {},
    deposit: async (accountID: string, amount: number) => {},
    withdraw: async (accountID: string, amount: number) => {},
    deleteAccount: (accountID: string) => {},
}

const useAccounts = () => {

    const { user } = useAuth();

    const [userAccounts, setUserAccounts] = React.useState<AccountData[]>([]);
    
    React.useEffect(() => {
        const getAccounts = async () => {
            const accounts = await getAccountsForUserId(user?.userID || '');
            if (accounts) {
                setUserAccounts(accounts);
            }
        }
        getAccounts();
    }, [user]);

    const addAccount = async (branchID: string) => {
        const accounts = await createAccount(user?.userID || '', branchID);
        if (accounts) {
            setUserAccounts(accounts);
        }
    }

    const deposit = async (accountID: string, amount: number) => {
        const newBalance = await depositFetch(accountID, amount);
        const accountsCopy = [...userAccounts];
        let account = accountsCopy.find(account => account.accountID === accountID);
        if (account) {
            account.balance = newBalance || account.balance;
            setUserAccounts([...accountsCopy]);
        }
    }

    const withdraw = async (accountID: string, amount: number) => {
        const newBalance = await withdrawFetch(accountID, amount);
        const accountsCopy = [...userAccounts];
        let account = accountsCopy.find(account => account.accountID === accountID);
        if (account) {
            account.balance = newBalance || account.balance;
            setUserAccounts([...accountsCopy]);
        }
    }

    const deleteAccount = (accountID: string) => {
        const accountsCopy = [...userAccounts];
        setUserAccounts(accountsCopy.filter(account => account.accountID !== accountID));
    }
    
    return {
        userAccounts,
        addAccount,
        deposit,
        withdraw,
        deleteAccount
    };
}

export default singletonHook(initValues, useAccounts)