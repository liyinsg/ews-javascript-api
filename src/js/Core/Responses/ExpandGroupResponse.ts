import ServiceResponse = require("./ServiceResponse");
import ExpandGroupResults = require("../../Misc/ExpandGroupResults");
import EwsServiceXmlReader = require("../EwsServiceXmlReader");
class ExpandGroupResponse extends ServiceResponse {
    Members: ExpandGroupResults;
    private members: ExpandGroupResults;
    ReadElementsFromXml(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
}

export = ExpandGroupResponse;


//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
