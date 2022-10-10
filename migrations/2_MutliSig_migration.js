const MultiSigWallet = artifacts.require("MultiSigWallet");

module.exports = function (deployer) {
  deployer.deploy(MultiSigWallet, ["0x8f567Cda6Aa0e7dA47210E835f1DFA30311AF141","0xc466f728a7eED253fee5267c6fA24154B7cf32E7","0x6821BF188bfa056E47Af90A571a792508360E1C5"], 2);
};
