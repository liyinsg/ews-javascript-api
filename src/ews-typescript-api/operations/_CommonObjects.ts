﻿module Microsoft.Exchange.WebServices.Data {
    export class EmailAddressCollection extends ComplexPropertyCollection<EmailAddress> {
        private collectionItemXmlElementName: string;
        Add(emailAddress: EmailAddress): any { throw new Error("Not implemented."); }
        //Add(smtpAddress: string): EmailAddress { throw new Error("Not implemented."); }
        //Add(name: string, smtpAddress: string): EmailAddress { throw new Error("Not implemented."); }
        AddRange(emailAddresses: any[]/*System.Collections.Generic.IEnumerable<T>*/): any { throw new Error("Not implemented."); }
        //AddRange(smtpAddresses: string[]/*System.Collections.Generic.IEnumerable<string>*/): any { throw new Error("Not implemented."); }
        Clear(): any { throw new Error("Not implemented."); }
        CreateComplexProperty(xmlElementName: string): EmailAddress { throw new Error("Not implemented."); }
        CreateDefaultComplexProperty(): EmailAddress { throw new Error("Not implemented."); }
        GetCollectionItemXmlElementName(emailAddress: EmailAddress): string { throw new Error("Not implemented."); }
        Remove(emailAddress: EmailAddress): boolean { throw new Error("Not implemented."); }
        RemoveAt(index: number): any { throw new Error("Not implemented."); }
        ShouldWriteToRequest(): boolean { throw new Error("Not implemented."); }
    }

    export class MobilePhone {
        Name: string;
        PhoneNumber: string;
        private name: string;
        private phoneNumber: string;
    }


    export class ViewBase {
        PropertySet: PropertySet;
        private propertySet: PropertySet;
        AddJsonProperties(jsonRequest: any/*JsonObject*/, service: ExchangeService): any { throw new Error("Not implemented."); }
        GetMaxEntriesReturned(): number { throw new Error("Not implemented."); }
        GetPropertySetOrDefault(): PropertySet { throw new Error("Not implemented."); }
        GetServiceObjectType(): ServiceObjectType { throw new Error("Not implemented."); }
        GetViewJsonTypeName(): string { throw new Error("Not implemented."); }
        GetViewXmlElementName(): string { throw new Error("Not implemented."); }
        InternalValidate(request: ServiceRequestBase): any { throw new Error("Not implemented."); }
        InternalWritePagingToJson(jsonView: any/*JsonObject*/, service: ExchangeService): any { throw new Error("Not implemented."); }
        InternalWriteSearchSettingsToXml(writer: EwsServiceXmlWriter, groupBy: Grouping): any { throw new Error("Not implemented."); }
        InternalWriteViewToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
        WriteAttributesToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
        WriteGroupingToJson(service: ExchangeService, groupBy: Grouping): any { throw new Error("Not implemented."); }
        WriteOrderByToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
        WritePagingToJson(service: ExchangeService): any { throw new Error("Not implemented."); }
        WriteShapeToJson(jsonRequest: any/*JsonObject*/, service: ExchangeService): any { throw new Error("Not implemented."); }
        WriteToXml(writer: EwsServiceXmlWriter, groupBy: Grouping): any { throw new Error("Not implemented."); }
    }
    class PagedView extends ViewBase {
        PageSize: number;
        OffsetBasePoint: OffsetBasePoint;
        Offset: number;
        private pageSize: number;
        private offsetBasePoint: OffsetBasePoint;
        private offset: number;
        GetMaxEntriesReturned(): number { throw new Error("Not implemented."); }
        InternalValidate(request: ServiceRequestBase): any { throw new Error("Not implemented."); }
        InternalWritePagingToJson(jsonView: any/*JsonObject*/, service: ExchangeService): any { throw new Error("Not implemented."); }
        InternalWriteSearchSettingsToXml(writer: EwsServiceXmlWriter, groupBy: Grouping): any { throw new Error("Not implemented."); }
        InternalWriteViewToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
        WriteGroupingToJson(service: ExchangeService, groupBy: Grouping): any { throw new Error("Not implemented."); }
        WriteOrderByToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
    }
    class ItemView extends PagedView {
        Traversal: ItemTraversal;
        OrderBy: OrderByCollection;
        private traversal: ItemTraversal;
        private orderBy: OrderByCollection;
        AddJsonProperties(jsonRequest: any/*JsonObject*/, service: ExchangeService): any { throw new Error("Not implemented."); }
        GetServiceObjectType(): ServiceObjectType { throw new Error("Not implemented."); }
        GetViewJsonTypeName(): string { throw new Error("Not implemented."); }
        GetViewXmlElementName(): string { throw new Error("Not implemented."); }
        InternalValidate(request: ServiceRequestBase): any { throw new Error("Not implemented."); }
        InternalWriteSearchSettingsToXml(writer: EwsServiceXmlWriter, groupBy: Grouping): any { throw new Error("Not implemented."); }
        WriteAttributesToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
        WriteOrderByToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
    }
    class FolderView extends PagedView {
        Traversal: FolderTraversal;
        private traversal: FolderTraversal;
        AddJsonProperties(jsonRequest: any/*JsonObject*/, service: ExchangeService): any { throw new Error("Not implemented."); }
        GetServiceObjectType(): ServiceObjectType { throw new Error("Not implemented."); }
        GetViewJsonTypeName(): string { throw new Error("Not implemented."); }
        GetViewXmlElementName(): string { throw new Error("Not implemented."); }
        WriteAttributesToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
    }

    export class FindFoldersResults {
        TotalCount: number;
        NextPageOffset: number;
        MoreAvailable: boolean;
        Folders: Folder[];//System.Collections.ObjectModel.Collection<Folder>;
        private totalCount: number;
        private nextPageOffset: number;
        private moreAvailable: boolean;
        private folders: Folder[];//System.Collections.ObjectModel.Collection<Folder>;
        GetEnumerator(): any { throw new Error("Not implemented."); }
    }

    class OrderByCollection {
        Count: number;
        Item: /*System.Collections.Generic.KeyValuePair<PropertyDefinitionBase, SortDirection>*/any;
        private propDefSortOrderPairList: /*System.Collections.Generic.List<T>*/any;
        Add(propertyDefinition: PropertyDefinitionBase, sortDirection: SortDirection): any { throw new Error("Not implemented."); }
        Clear(): any { throw new Error("Not implemented."); }
        Contains(propertyDefinition: PropertyDefinitionBase): boolean { throw new Error("Not implemented."); }
        GetEnumerator(): any { throw new Error("Not implemented."); }
        Remove(propertyDefinition: PropertyDefinitionBase): boolean { throw new Error("Not implemented."); }
        RemoveAt(index: number): any { throw new Error("Not implemented."); }
        TryGetValue(propertyDefinition: PropertyDefinitionBase, sortDirection: any): boolean { throw new Error("Not implemented."); }
        WriteToXml(writer: EwsServiceXmlWriter, xmlElementName: string): any { throw new Error("Not implemented."); }
    }


    export class Grouping {
        SortDirection: SortDirection;
        GroupOn: PropertyDefinitionBase;
        AggregateOn: PropertyDefinitionBase;
        AggregateType: AggregateType;
        private sortDirection: SortDirection;
        private groupOn: PropertyDefinitionBase;
        private aggregateOn: PropertyDefinitionBase;
        private aggregateType: AggregateType;
        InternalValidate(): any { throw new Error("Not implemented."); }
        WriteToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
    }
    export class ItemGroup<TItem extends Item> {
        GroupIndex: string;
        Items: TItem[];//System.Collections.ObjectModel.Collection<TItem>;
    }
    export class GroupedFindItemsResults<TItem extends Item> {
        TotalCount: number;
        NextPageOffset: number;
        MoreAvailable: boolean;
        ItemGroups: ItemGroup<TItem>[];//System.Collections.ObjectModel.Collection<ItemGroup<TItem>>;
        private totalCount: number;
        private nextPageOffset: number;
        private moreAvailable: boolean;
        private itemGroups: ItemGroup<TItem>[];//System.Collections.ObjectModel.Collection<ItemGroup<TItem>>;
        GetEnumerator(): any { throw new Error("Not implemented."); }
    }



















    export class FolderSchema extends ServiceObjectSchema {
        static Id: PropertyDefinition;
        static FolderClass: PropertyDefinition;
        static ParentFolderId: PropertyDefinition;
        static ChildFolderCount: PropertyDefinition;
        static DisplayName: PropertyDefinition;
        static UnreadCount: PropertyDefinition;
        static TotalCount: PropertyDefinition;
        static ManagedFolderInformation: PropertyDefinition;
        static EffectiveRights: PropertyDefinition;
        static Permissions: PropertyDefinition;
        static WellKnownFolderName: PropertyDefinition;
        static PolicyTag: PropertyDefinition;
        static ArchiveTag: PropertyDefinition;
        static Instance: FolderSchema;
        RegisterProperties(): any { throw new Error("Not implemented."); }
    }

    export class ServiceResponseCollection<TResponse extends ServiceResponse> { // IEnumerable<TResponse> where TResponse : ServiceResponse
        get Count(): number { return this.responses.length; }
        //Item: TResponse;
        get OverallResult(): ServiceResult { return this.overallResult; }
        private responses: TResponse[] = [];// System.Collections.Generic.List<T>;
        private overallResult: ServiceResult = ServiceResult.Success;
        Add(response: TResponse): void {
            EwsUtilities.Assert(
                response != null,
                "EwsResponseList.Add",
                "response is null");

            if (response.Result > this.overallResult) {
                this.overallResult = response.Result;
            }

            this.responses.push(response);
        }
        GetEnumerator(): any { throw new Error("Not implemented."); }
        _propget(index: number) {
            if (index < 0 || index >= this.Count) {
                throw new Error("index out of range: " + index);// ArgumentOutOfRangeException("index", Strings.IndexIsOutOfRange);
            }

            return this.responses[index];
        }

    }


}