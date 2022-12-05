import useAccounts from "./useAccounts"

const useAccount = (accountID: string) => {
    
    const { userAccounts, deposit: accountsDeposit, withdraw: accountsWithdraw } = useAccounts();

    const deposit = (amount: number) => {
        accountsDeposit(accountID, amount);
    }

    const withdraw = (amount: number) => {
        accountsWithdraw(accountID, amount);
    }


    return {
        account: userAccounts.find(account => account.accountID === accountID),
        deposit,
        withdraw
    }
}

export default useAccount