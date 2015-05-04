import ComplexProperty = require("./ComplexProperty");
import EmailPosition = require("../Enumerations/EmailPosition");
import EwsServiceXmlReader = require("../Core/EwsServiceXmlReader");

    class ExtractedEntity extends ComplexProperty {
        Position: EmailPosition;
        TryReadElementFromXml(reader: EwsServiceXmlReader): boolean { throw new Error("Not implemented."); }
    }

//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
