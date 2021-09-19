require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'install inhale fresh turn bitter birth spike essay guess enrich orange toy'; 
let testAccounts = [
"0xd79f335adba8fc27f1a855761557d66f32710ed8e1f4a235e9c5a4a1233558f8",
"0xfb0c27b1999b8374b5e26895fc6483113ab9c9a42383fe505ee7db032820906b",
"0x3d0b6e006717dda67b7c1d244f70f7e119c7159a1d299184d660c6dcacc88cda",
"0x01dc846998b2bdb26682eb088bd88594caf6500e1f51bd6f01b804176ba53f32",
"0xb918cd4ce82905ebbb129700ff073e5da7de861a665baf9e2dd3ff7519dcb042",
"0x2d03814e540c67bd067d149fa872cd343fb75eaa5ecdeac315ef4cde36580487",
"0xeda27e29839afdcdc4661551eee3277ad244e6c1bce368285f6c14f352ac8145",
"0x4f7115e5577a47b45a8e70fe7d5f9a4671a6bf0e47565425046106b678e62ea5",
"0xb801a8693ae448c4b947172da729db5513ccd1ecf29c2a9b18f5a5fa33c4602a",
"0xc0e5c68fa6750874555fcc3edc9440c4183b5a494bf1ae62fad80d7295f8814b"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


