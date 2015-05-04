import SimpleServiceRequestBase = require("./SimpleServiceRequestBase");
import UninstallAppResponse = require("../Responses/UninstallAppResponse");
import ExchangeVersion = require("../../Enumerations/ExchangeVersion");
import EwsServiceXmlReader = require("../EwsServiceXmlReader");
import EwsServiceXmlWriter = require("../EwsServiceXmlWriter");
			
 class UninstallAppRequest extends SimpleServiceRequestBase {
	private ID: string;
	Execute(): UninstallAppResponse{ throw new Error("Not implemented.");}
	GetMinimumRequiredServerVersion(): ExchangeVersion{ throw new Error("Not implemented.");}
	GetResponseXmlElementName(): string{ throw new Error("Not implemented.");}
	GetXmlElementName(): string{ throw new Error("Not implemented.");}
	ParseResponse(reader: EwsServiceXmlReader): any{ throw new Error("Not implemented.");}
	WriteElementsToXml(writer: EwsServiceXmlWriter): void{ throw new Error("Not implemented.");}
}
export = UninstallAppRequest;


//------------modulename->Microsoft.Exchange.WebServices.Data------------


			
