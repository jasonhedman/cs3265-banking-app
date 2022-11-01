import React from 'react';

import { accounts } from '../data/accounts';

import { Account } from '../types/account';

const useAccounts = (userId: string) => {
    const [userAccounts, setUserAccounts] = React.useState<Account[]>([]);
    
    React.useEffect(() => {
        setUserAccounts(accounts.filter(account => account.userId === userId));
    }, [userId]);
    
    return {
        userAccounts
    };
}

export default useAccounts