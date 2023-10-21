import React, { useEffect, useState } from "react";

import { tokenAbi } from "../../../Blockend/registry";

import { Box, Flex, FormLabel, Heading, Modal, ModalBody, ModalCloseButton, ModalContent, ModalOverlay, Text, useDisclosure } from '@chakra-ui/react';

import { ResolverContract } from "../../../Blockend/interact";
import web3js from "../../../Blockend/web3";

interface TokenProps {
    tokenAddress: string | undefined;
}
const TransferToken: React.FC<TokenProps> = ({ tokenAddress }) => {

    const [account, setAccount] = useState("");

    const [inputAddress, setInputAddress] = useState("");

    const { isOpen, onOpen, onClose } = useDisclosure()

    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)

    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [showFailureMessage, setShowFailureMessage] = useState(false);
    const [error, setError] = useState("");
    const [tokenAmount, setTokenAmount] = useState("");

    useEffect(() => {
        const getAccount = async () => {
            const accounts = await web3js.eth.getAccounts();
            setAccount(accounts[0]);
        };
        getAccount();
    }, []);

    // async function Transfer(tokenAbi, _to, Amount) {
    //     const provider = new ethers.providers.Web3Provider(window.ethereum);
    //     const signer = provider.getSigner();
    //     let contract = new ethers.Contract(tokenAddress, tokenAbi, signer);

    //     const To = await ResolverContract.resolve(_to);
    //     await contract.transfer(To, Amount);
    // }
    const handleTokenTransfer = async (e: React.FormEvent) => {
        e.preventDefault();

        let resolvedAddress;

        const tokenContract = new web3js.eth.Contract(tokenAbi, tokenAddress)
        const tokenAmountInWei: number = web3js.utils.toWei(tokenAmount, 'ether');


        try {

            resolvedAddress = await ResolverContract.methods.resolver(inputAddress).call();
            await tokenContract.methods.transfer(resolvedAddress, tokenAmountInWei).send({ from: account });
            console.log("resolvedAddress: ", resolvedAddress);
            setShowSuccessMessage(true);

        } catch (err) {
            setShowFailureMessage(true);
            setError("An unknown error occurred, please try once again!")
            console.log(err);
        }

    }



    return (
        <>
            <button style={{ width: "100%", fontWeight: "700", fontSize: "15px", backgroundColor: "#6f1ab6", borderRadius: "100px" }} className="submit-btn" onClick={onOpen}>Transfer Tokens</button>
            <Modal initialFocusRef={initialRef}
                finalFocusRef={finalRef}
                isOpen={isOpen}
                onClose={onClose} >
                <ModalOverlay />

                <ModalContent>
                    <Flex bg="#6f1ab6" color={"white"} justifyContent={"center"} p={5} >
                        <Heading fontSize={25}>Transfer Tokens</Heading>
                    </Flex>
                    <ModalCloseButton color={"white"} />
                    <ModalBody pb={6} px={5} width={"100%"} bg="white" color={"black"}>
                        <Box p={1} mt={5} width={"100%"} bg="white" color={"black"} >
                            <form onSubmit={handleTokenTransfer} style={{ width: "100%", fontSize: "15px", color: "black" }}>

                                <FormLabel fontWeight={800}>Wallet Address to send tokens</FormLabel>
                                <input
                                    style={{ color: "black", backgroundColor: "white" }}
                                    className="input-adel"
                                    placeholder="Enter the wallet address"
                                    type="text"
                                    name="inputaddress"
                                    value={inputAddress}
                                    onChange={(e) => setInputAddress(e.target.value)}
                                    required></input>
                                <FormLabel fontWeight={800}>Token Amount in Eth</FormLabel>
                                <input className="input-adel"
                                    style={{ color: "black", backgroundColor: "white" }}
                                    placeholder="Enter the token amount"
                                    type="text"
                                    name="tokenAmount"
                                    value={tokenAmount}
                                    onChange={(e) => setTokenAmount(e.target.value)}
                                    required></input>


                                <button className="submit-btn" type="submit">Send</button>
                                <button style={{ backgroundColor: "red", marginLeft: "20px" }} className="submit-btn" onClick={onClose}>Cancel</button>
                            </form>
                        </Box>
                        <Box mt="5">
                            <Text color={"green"}>{showSuccessMessage ? "Sent the Tokens!" : ""}</Text>
                            <Text color={"red"}>{showFailureMessage ? error : ""}</Text>
                        </Box>
                    </ModalBody>

                </ModalContent>

            </Modal>


        </>
    )

}
export default TransferToken;