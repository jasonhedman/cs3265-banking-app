import React from 'react';
import { singletonHook } from 'react-singleton-hook';

import { accounts, getAccountDataByUserID } from '../data/accounts';
import { getBranchDataByBranchID } from '../data/branches';

import { AccountData } from '../types/account';
import useAuth from './useAuth';

const initValues = {
    userAccounts: [],
    addAccount: (branchID: string) => {},
    deposit: (accountID: string, amount: number) => {},
    withdraw: (accountID: string, amount: number) => {},
    deleteAccount: (accountID: string) => {},
}

const useAccounts = () => {

    const { user } = useAuth();

    const [userAccounts, setUserAccounts] = React.useState<AccountData[]>([]);
    
    React.useEffect(() => {
        setUserAccounts(getAccountDataByUserID(user?.userID || ''));
    }, [user]);

    const addAccount = (branchID: string) => {
        let branchData = getBranchDataByBranchID(branchID);
        let newAccount: AccountData = {
            accountID: (accounts.length + 1).toString(),
            userID: user?.userID || '',
            branchID,
            openDate: new Date().toISOString().split('T')[0],
            balance: 0,
            branchName: branchData?.branchName || '',
            bankID: branchData?.bankID || '',
            bankName: branchData?.bankName || '',
        }
        setUserAccounts([...userAccounts, newAccount]);
    }

    const deposit = (accountID: string, amount: number) => {
        const accountsCopy = [...userAccounts];
        let account = accountsCopy.find(account => account.accountID === accountID);
        if (account) {
            account.balance += amount;
            setUserAccounts([...accountsCopy]);
        }
    }

    const withdraw = (accountID: string, amount: number) => {
        const accountsCopy = [...userAccounts];
        let account = accountsCopy.find(account => account.accountID === accountID);
        if (account) {
            account.balance -= amount;
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