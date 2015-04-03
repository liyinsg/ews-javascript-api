import OutlookUser = require("./OutlookUser");
import OutlookAccount = require("./OutlookAccount");
import ConfigurationSettingsBase = require("../ConfigurationSettingsBase");
import AutodiscoverResponseType = require("../../../Enumerations/AutodiscoverResponseType");
import EwsXmlReader = require("../../../Core/EwsXmlReader");
import UserSettingName = require("../../../Enumerations/UserSettingName");
import GetUserSettingsResponse = require("../../Responses/GetUserSettingsResponse");

class OutlookConfigurationSettings extends ConfigurationSettingsBase {
    ResponseType: AutodiscoverResponseType;
    RedirectTarget: string;
    private user: OutlookUser;
    private account: OutlookAccount;
    private static allOutlookProviderSettings: Microsoft.Exchange.WebServices.Data.LazyMember<T>;
    ConvertSettings(smtpAddress: string, requestedSettings: UserSettingName[]): GetUserSettingsResponse { throw new Error("Not implemented."); }
    GetNamespace(): string { throw new Error("Not implemented."); }
    IsAvailableUserSetting(setting: UserSettingName): boolean { throw new Error("Not implemented."); }
    MakeRedirectionResponse(redirectUrl: string /*System.Uri*/): any { throw new Error("Not implemented."); }
    ReportUnsupportedSettings(requestedSettings: UserSettingName[], response: GetUserSettingsResponse): any { throw new Error("Not implemented."); }
    TryReadCurrentXmlElement(reader: EwsXmlReader): boolean { throw new Error("Not implemented."); }
}

export = OutlookConfigurationSettings;


//module Microsoft.Exchange.WebServices.Autodiscover {
//}
//import _export = Microsoft.Exchange.WebServices.Autodiscover;
//export = _export;