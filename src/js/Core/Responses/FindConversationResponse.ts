class FindConversationResponse extends ServiceResponse {
    Conversations: Conversation[];//System.Collections.ObjectModel.Collection<Conversation>;
    Results: FindConversationResults;
    ReadElementsFromJson(responseObject: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
    ReadElementsFromXml(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
}
export = FindConversationResponse;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
