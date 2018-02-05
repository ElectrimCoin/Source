var ConvertLib = artifacts.require("./ConvertLib.sol");
var Electrim = artifacts.require("./Electrim.sol");

module.exports = function(deployer) {
  deployer.deploy(ConvertLib);
  deployer.deploy(Electrim, 1000000000);
};
