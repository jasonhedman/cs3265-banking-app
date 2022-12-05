import React from "react";
import { BranchData } from "../types/branches";

const useBranchModal = () => {

    const [isBranchModalOpen, setIsBranchModalOpen] = React.useState(false);
    const [selectedBranch, setSelectedBranch] = React.useState<BranchData | null>(null);

    const openBranchModal = (selectedBranch: BranchData) => {
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