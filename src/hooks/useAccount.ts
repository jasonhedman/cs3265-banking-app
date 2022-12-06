import useAccounts from "./useAccounts"

const useAccount = (accountID: string) => {
    
    const { userAccounts, deposit: accountsDeposit, withdraw: accountsWithdraw, deleteAccount: accountsDeleteAccount } = useAccounts();

    const deposit = (amount: number) => {
        accountsDeposit(accountID, amount);
    }

    const withdraw = (amount: number) => {
        accountsWithdraw(accountID, amount);
    }

    const deleteAccount = () => {
        accountsDeleteAccount(accountID);
    }


    return {
        account: userAccounts.find(account => account.accountID === accountID),
        deposit,
        withdraw,
        deleteAccount
    }
}

export default useAccount