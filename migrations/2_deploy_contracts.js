var OpenEvents = artifacts.require("OpenEvents");
var FyfyTicketToken = artifacts.require("FyfyTicketToken");

module.exports = function(deployer) {
	deployer.deploy(FyfyTicketToken).then(function() {
		return deployer.deploy(OpenEvents, FyfyTicketToken.address);
	});
};
