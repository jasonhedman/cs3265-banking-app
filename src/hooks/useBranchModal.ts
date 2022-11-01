import React from "react";
import { Branch } from "../types/branches";

const useBranchModal = () => {

    const [isBranchModalOpen, setIsBranchModalOpen] = React.useState(false);
    const [selectedBranch, setSelectedBranch] = React.useState<Branch | null>(null);

    const openBranchModal = (selectedBranch: Branch) => {
        setSelectedBranch(selectedBranch);
        setIsBranchModalOpen(true);
    }

    const closeBranchModal = () => {
        setIsBranchModalOpen(false);
    }

    return {
        isBranchModalOpen,
        selectedBranch,
        openBranchModal,
        closeBranchModal
    }
}

export default useBranchModal