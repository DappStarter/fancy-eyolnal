require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid arena occur venture stone royal sad miss gesture ghost army gaze'; 
let testAccounts = [
"0xdb5ecc3dd279e7b0af713f86952171aac5b9278c2daf7aa5b4d43b8bae0d4ceb",
"0xea0731fa06e1b9038fc854c51ef38dbfeef11ee8457eff8afe7f017a2c3baa74",
"0x470a76058a2052ccc6ce7bbb74191fc61917b62022bf6692563f338b6c39d359",
"0x58f6758c04260bef69ed544b0b59d1d1959988cf471e276790a76b679b858868",
"0x6b8a3fc71efe1e2f821b5128ad6694eb6be8f7ac0828c847dd1dab7fb951c18f",
"0xa967bcb0a26ac4a4918e1cad0658b102bb19e9cd7ddef17523f46f481d627e3d",
"0xcb212c26984037ee881a36731e6cbf6342b9fe4c4c45c62eddf4b4f8517aca9c",
"0x6a6058441d23e0a204d96d26a64add68f7b65cffbda9e35e84d352774dae9f48",
"0x785d0bec2cc98ee33e560f6f9bfef7ff3d84a31444e70846aaf82afd676a5281",
"0xca20b7f1bc259f6d0a98699e37af9a25555be6d21cf0ce769b06a2c9cfffa0e7"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

