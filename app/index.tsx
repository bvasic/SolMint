
import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';

// Main App Component
const App = () => {
    // State to manage which view is active
    const [activeView, setActiveView] = useState('creator'); // 'creator', 'faq', 'contact'

    // SVG Icons
    const FreezeIcon = () => ( // Using SparklesIcon as a stylized snowflake/freeze visual
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-2 text-purple-400">
          <path fillRule="evenodd" d="M9 4.5a.75.75 0 01.75.75v3.44l1.72-1.72a.75.75 0 111.06 1.06l-3.25 3.25a.75.75 0 01-1.06 0L5.22 7.03a.75.75 0 011.06-1.06l1.72 1.72V5.25a.75.75 0 01.75-.75zm6.75 3a.75.75 0 01.75.75v3.44l1.72-1.72a.75.75 0 111.06 1.06l-3.25 3.25a.75.75 0 01-1.06 0L12.22 7.03a.75.75 0 011.06-1.06l1.72 1.72V8.25a.75.75 0 01.75-.75zm-3.75 9a.75.75 0 01.75.75v3.44l1.72-1.72a.75.75 0 111.06 1.06l-3.25 3.25a.75.75 0 01-1.06 0l-3.25-3.25a.75.75 0 111.06-1.06l1.72 1.72V17.25a.75.75 0 01.75-.75z" clipRule="evenodd" />
        </svg>
    );

    const MintIcon = () => ( // Squares2X2Icon
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2 text-purple-400">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
        </svg>
    );

    const UpdateIcon = () => ( // PencilIcon
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2 text-purple-400">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
        </svg>
    );


    // Component for the navigation bar
    const Navbar = () => {
        const [isWalletConnected, setIsWalletConnected] = useState(false);

        const handleConnectWallet = () => {
            if (!isWalletConnected) {
                console.log("Attempting to connect wallet...");
                // Simulate wallet connection logic
                // In a real app, this would involve integrating with a wallet adapter (e.g., @solana/wallet-adapter-react)
                setTimeout(() => { // Simulate async operation
                    setIsWalletConnected(true);
                    console.log("Wallet connected (simulated).");
                }, 500);
            }
        };

        return (
            <nav className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-30 backdrop-filter backdrop-blur-lg border-b border-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-20">
                        <div className="flex-shrink-0">
                            <span className="text-white text-2xl font-bold tracking-wider">
                                <svg className="inline-block w-8 h-8 mr-2 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                                SolMint
                            </span>
                        </div>
                        
                        {/* Right side container for nav links (desktop) and wallet button (all screens) */}
                        <div className="flex items-center">
                            {/* Desktop Navigation Links */}
                            <div className="hidden md:block">
                                <div className="ml-10 flex items-baseline space-x-4">
                                    <button onClick={() => setActiveView('creator')} className={`px-3 py-2 rounded-md text-sm font-medium ${activeView === 'creator' ? 'text-white bg-purple-600' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`}>Token Creator</button>
                                    <button onClick={() => setActiveView('faq')} className={`px-3 py-2 rounded-md text-sm font-medium ${activeView === 'faq' ? 'text-white bg-purple-600' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`}>FAQ</button>
                                    <button onClick={() => setActiveView('contact')} className={`px-3 py-2 rounded-md text-sm font-medium ${activeView === 'contact' ? 'text-white bg-purple-600' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`}>Contact</button>
                                </div>
                            </div>

                            {/* Connect Wallet Button */}
                            <button
                                onClick={handleConnectWallet}
                                disabled={isWalletConnected}
                                className={`ml-4 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-150 ease-in-out
                                            ${isWalletConnected 
                                                ? 'bg-green-500 hover:bg-green-600 text-white cursor-not-allowed' 
                                                : 'bg-purple-600 hover:bg-purple-700 text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-purple-500'
                                            }`}
                                aria-label={isWalletConnected ? "Wallet Connected" : "Connect Wallet"}
                            >
                                {isWalletConnected ? 'Connected' : 'Connect Wallet'}
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        );
    };

    // Component for the main token creator UI
    const TokenCreator = () => {
        const [tokenName, setTokenName] = useState('');
        const [tokenSymbol, setTokenSymbol] = useState('');
        const [decimals, setDecimals] = useState(9);
        const [supply, setSupply] = useState(1000000);
        const [description, setDescription] = useState('');
        
        const [revokeFreeze, setRevokeFreeze] = useState(false);
        const [revokeMint, setRevokeMint] = useState(false);
        const [revokeUpdate, setRevokeUpdate] = useState(false);

        const [isCreating, setIsCreating] = useState(false);
        const [creationResult, setCreationResult] = useState(null);

        const REVOKE_OPTION_COST = 0.1;
        const BASE_CREATION_COST = 0.002;

        const calculateTotalCost = () => {
            let total = BASE_CREATION_COST;
            if (revokeFreeze) total += REVOKE_OPTION_COST;
            if (revokeMint) total += REVOKE_OPTION_COST;
            if (revokeUpdate) total += REVOKE_OPTION_COST;
            return total;
        };

        const totalCost = calculateTotalCost();

        const handleCreateToken = async () => {
            setIsCreating(true);
            setCreationResult(null);

            const tokenData = {
                name: tokenName,
                symbol: tokenSymbol,
                decimals,
                supply,
                description,
                revokeFreeze,
                revokeMint,
                revokeUpdate,
                totalCost: totalCost.toFixed(3) 
            };

            console.log("Creating token with the following data:", tokenData);
            
            try {
                // Simulate API call
                await new Promise(resolve => setTimeout(resolve, 3000));
                
                // On success:
                setCreationResult({
                    success: true,
                    message: "Token created successfully!",
                    mintAddress: "FAKE_MINT_ADDRESS_FROM_BACKEND_" + Math.random().toString(36).substring(2, 15),
                    transactionId: "FAKE_TRANSACTION_ID_FROM_BACKEND_" + Math.random().toString(36).substring(2, 15)
                });

            } catch (error) {
                 // On failure:
                setCreationResult({
                    success: false,
                    message: "Failed to create token. Please try again."
                });
            } finally {
                setIsCreating(false);
            }
        };
        
        const RevokeAuthorityCard = ({ id, icon, title, descriptionText, costText, checked, onChange }) => (
            <label htmlFor={id} className="flex items-start justify-between p-4 bg-gray-800 bg-opacity-60 rounded-lg border border-gray-700 hover:border-purple-500 transition-colors duration-200 cursor-pointer shadow-md">
                <div className="flex-1 mr-4">
                    <div className="flex items-center mb-1">
                        {icon}
                        <h4 className="font-semibold text-gray-100">{title}</h4>
                    </div>
                    <p className="text-xs text-gray-400 mb-2">{descriptionText}</p>
                    <p className="text-xs text-purple-400 font-medium">{costText}</p>
                </div>
                <input
                    type="checkbox"
                    id={id}
                    checked={checked}
                    onChange={onChange}
                    className="form-checkbox h-5 w-5 text-purple-600 bg-gray-700 border-gray-600 rounded focus:ring-purple-500 shrink-0 mt-1"
                    aria-describedby={`${id}-desc`}
                />
                 <span id={`${id}-desc`} className="sr-only">{descriptionText} - {costText}</span>
            </label>
        );


        return (
            <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
                        Create your Solana Token
                    </h1>
                    <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-400">
                        Launch your own cryptocurrency on the Solana blockchain in just a few clicks. No coding required.
                    </p>
                </div>

                <div className="mt-12 bg-gray-900 bg-opacity-50 rounded-2xl shadow-2xl p-6 sm:p-8 backdrop-filter backdrop-blur-md border border-gray-800">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-8">
                        <div>
                            <label htmlFor="tokenName" className="block text-sm font-medium text-gray-300">Token Name</label>
                            <input type="text" name="tokenName" id="tokenName" value={tokenName} onChange={(e) => setTokenName(e.target.value)} className="mt-1 block w-full bg-gray-800 border-gray-700 rounded-md shadow-sm py-3 px-4 text-white focus:outline-none focus:ring-purple-500 focus:border-purple-500" placeholder="e.g., SolMint Coin" required aria-required="true" />
                        </div>
                        <div>
                            <label htmlFor="tokenSymbol" className="block text-sm font-medium text-gray-300">Token Symbol</label>
                            <input type="text" name="tokenSymbol" id="tokenSymbol" value={tokenSymbol} onChange={(e) => setTokenSymbol(e.target.value)} className="mt-1 block w-full bg-gray-800 border-gray-700 rounded-md shadow-sm py-3 px-4 text-white focus:outline-none focus:ring-purple-500 focus:border-purple-500" placeholder="e.g., SMC" required aria-required="true" />
                        </div>
                        <div>
                            <label htmlFor="decimals" className="block text-sm font-medium text-gray-300">Decimals</label>
                            <input type="number" name="decimals" id="decimals" value={decimals} onChange={(e) => setDecimals(parseInt(e.target.value))} className="mt-1 block w-full bg-gray-800 border-gray-700 rounded-md shadow-sm py-3 px-4 text-white focus:outline-none focus:ring-purple-500 focus:border-purple-500" aria-describedby="decimals-description" />
                             <p id="decimals-description" className="mt-1 text-xs text-gray-500">The number of decimal places for your token (e.g., 9 for most tokens).</p>
                        </div>
                         <div>
                            <label htmlFor="supply" className="block text-sm font-medium text-gray-300">Total Supply</label>
                            <input type="number" name="supply" id="supply" value={supply} onChange={(e) => setSupply(parseInt(e.target.value))} className="mt-1 block w-full bg-gray-800 border-gray-700 rounded-md shadow-sm py-3 px-4 text-white focus:outline-none focus:ring-purple-500 focus:border-purple-500" />
                        </div>
                         <div className="md:col-span-2">
                             <label htmlFor="description" className="block text-sm font-medium text-gray-300">Description (Optional)</label>
                             <textarea name="description" id="description" rows={3} value={description} onChange={(e) => setDescription(e.target.value)} className="mt-1 block w-full bg-gray-800 border-gray-700 rounded-md shadow-sm py-3 px-4 text-white focus:outline-none focus:ring-purple-500 focus:border-purple-500" placeholder="A brief description of your token."></textarea>
                        </div>
                    </div>

                    {/* Revoke Authorities Section */}
                    <div className="mt-10 pt-6 border-t border-gray-800">
                        <h3 className="text-xl font-semibold text-gray-100 mb-1">Revoke Authorities</h3>
                        <p className="text-sm text-gray-400 mb-6">
                            Solana Token has 3 authorities: Freeze Authority, Mint Authority, and Update Authority. Revoke them to attract more investors.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            <RevokeAuthorityCard
                                id="revokeFreeze"
                                icon={<FreezeIcon />}
                                title="Revoke Freeze"
                                descriptionText="No one will be able to freeze holders' token accounts anymore."
                                costText={`+${REVOKE_OPTION_COST} SOL`}
                                checked={revokeFreeze}
                                onChange={() => setRevokeFreeze(!revokeFreeze)}
                            />
                            <RevokeAuthorityCard
                                id="revokeMint"
                                icon={<MintIcon />}
                                title="Revoke Mint"
                                descriptionText="No one will be able to create more tokens anymore."
                                costText={`+${REVOKE_OPTION_COST} SOL`}
                                checked={revokeMint}
                                onChange={() => setRevokeMint(!revokeMint)}
                            />
                            <RevokeAuthorityCard
                                id="revokeUpdate"
                                icon={<UpdateIcon />}
                                title="Revoke Update"
                                descriptionText="No one will be able to modify token metadata anymore."
                                costText={`+${REVOKE_OPTION_COST} SOL`}
                                checked={revokeUpdate}
                                onChange={() => setRevokeUpdate(!revokeUpdate)}
                            />
                        </div>
                    </div>


                    <div className="mt-8 pt-6 border-t border-gray-800">
                        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                            <p className="text-lg text-white">Creation Cost: <span className="font-bold text-purple-400">{totalCost.toFixed(3)} SOL</span></p>
                            <button
                                onClick={handleCreateToken}
                                disabled={isCreating || !tokenName || !tokenSymbol}
                                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full shadow-lg text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 disabled:bg-gray-500 disabled:cursor-not-allowed transition-all duration-300"
                                aria-live="polite"
                            >
                                {isCreating ? (
                                    <>
                                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" role="status" aria-label="Loading">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Creating...
                                    </>
                                ) : 'Create Token'}
                            </button>
                        </div>
                        <p className="mt-3 text-xs text-gray-500 text-right">This cost covers the Solana network fees. Connect your wallet to proceed.</p>
                    </div>

                    {creationResult && (
                        <div role="alert" className={`mt-6 p-4 rounded-md ${creationResult.success ? 'bg-green-500 bg-opacity-20 text-green-300' : 'bg-red-500 bg-opacity-20 text-red-300'}`}>
                           <p className="font-bold">{creationResult.message}</p>
                           {creationResult.success && (
                               <div className="mt-2 text-sm">
                                   <p><strong>Mint Address:</strong> <span className="break-all">{creationResult.mintAddress}</span></p>
                                   <p><strong>Transaction ID:</strong> <span className="break-all">{creationResult.transactionId}</span></p>
                                   <button 
                                     onClick={() => navigator.clipboard.writeText(creationResult.mintAddress)} 
                                     className="mt-2 text-xs text-purple-400 hover:text-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-400 rounded"
                                     aria-label="Copy Mint Address to clipboard"
                                   >
                                     Copy Mint Address
                                   </button>
                               </div>
                           )}
                        </div>
                    )}
                </div>
            </div>
        );
    };

    // Component for the FAQ section
    const FAQ = () => {
         const faqs = [
            {
                q: "What is the cost to create a token?",
                a: "The base cost is a small Solana network fee (for rent and transaction). Additional features like revoking authorities incur small extra fees. The total cost is displayed before creation."
            },
            {
                q: "Do I own the token?",
                a: "Yes. You will be the sole owner of the token. You can choose to revoke minting authority to make the supply fixed, or freeze authority to prevent accounts from being frozen."
            },
            {
                q: "Where can I use my token?",
                a: "Once created, your token exists on the Solana blockchain. You can airdrop it to users, provide liquidity on a DEX like Raydium or Orca, or integrate it into your own application."
            },
            {
                q: "What are 'decimals'?",
                a: "Decimals determine how divisible your token is. For example, if a token has 6 decimals, the smallest unit is 0.000001 tokens. Most tokens on Solana use 6 or 9 decimals."
            },
            {
                q: "What are Freeze, Mint, and Update Authorities?",
                a: "Freeze Authority allows freezing specific token accounts. Mint Authority allows creating more tokens. Update Authority allows changing token metadata. Revoking these can increase trust by making the token's properties immutable or supply fixed."
            }
        ];
        return (
             <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-extrabold text-white text-center">Frequently Asked Questions</h2>
                 <div className="mt-8 space-y-4">
                     {faqs.map((faq, i) => (
                         <details key={i} className="bg-gray-900 bg-opacity-50 rounded-lg p-0 backdrop-filter backdrop-blur-md border border-gray-800 group">
                            <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                                 <h3 className="text-lg font-medium text-purple-400 group-hover:text-purple-300">{faq.q}</h3>
                                 <span className="text-purple-400 group-hover:text-purple-300 transform transition-transform duration-200 group-open:rotate-180">
                                     <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                 </span>
                            </summary>
                             <div className="p-6 pt-0">
                                <p className="text-base text-gray-300">{faq.a}</p>
                             </div>
                         </details>
                     ))}
                 </div>
            </div>
        );
    };
    
    // Component for the Contact section
    const Contact = () => (
         <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-extrabold text-white">Get in Touch</h2>
             <p className="mt-4 text-lg text-gray-400">
                Have questions or need a custom solution? We're here to help.
            </p>
            <div className="mt-8">
                 <a href="mailto:contact@solmint.example.com" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-lg text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
                    Email Us
                </a>
            </div>
        </div>
    );

    // Main render logic
    return (
        <div className="min-h-screen bg-gray-900 text-white font-sans relative overflow-x-hidden"> {/* Changed overflow-hidden to overflow-x-hidden */}
            {/* Background decorative shapes */}
            <div className="absolute top-0 left-0 w-72 h-72 md:w-96 md:h-96 bg-purple-900 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob pointer-events-none"></div>
            <div className="absolute top-0 right-0 w-72 h-72 md:w-96 md:h-96 bg-indigo-900 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob animation-delay-2000 pointer-events-none"></div>
            <div className="absolute bottom-0 left-1/4 w-72 h-72 md:w-96 md:h-96 bg-pink-900 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob animation-delay-4000 pointer-events-none"></div>

            <div className="relative z-10">
                <Navbar />
                <main className="pt-24 pb-12"> {/* Adjusted padding top for navbar and added padding bottom */}
                    {activeView === 'creator' && <TokenCreator />}
                    {activeView === 'faq' && <FAQ />}
                    {activeView === 'contact' && <Contact />}
                </main>
                 <footer className="bg-black bg-opacity-20"> 
                    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 text-center text-gray-500 text-sm">
                        <p>&copy; {new Date().getFullYear()} SolMint. All Rights Reserved.</p>
                         <p className="mt-1">A fictional service for demonstration purposes.</p>
                    </div>
                </footer>
            </div>
        </div>
    );
};

const container = document.getElementById('root');
const root = createRoot(container!); 
root.render(<App />);
export default App;
