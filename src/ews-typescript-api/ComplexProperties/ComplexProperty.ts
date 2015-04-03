class ComplexProperty {
    Namespace: XmlNamespace = XmlNamespace.Types;
    //private xmlNamespace: XmlNamespace; ^ no need for pivate property
    OnChange: ComplexPropertyChangedDelegate[];

    constructor() {
        this.OnChange = [];
    }


    Changed(): void {
        if (this.OnChange && this.OnChange.length > 0) {
            this.OnChange.forEach((delegateInstance, index, array) => {
                if (delegateInstance)
                    delegateInstance(this);
            });
        }
    }
    ClearChangeLog(): void { /*virtual method for derived class to implement if needed*/ }
    InternalLoadFromXml(reader: EwsServiceXmlReader, xmlNamespace: XmlNamespace, xmlElementName: string,
        readAction: (reader: EwsServiceXmlReader) => boolean /*System.Func<T, TResult>*/): void {
        //reader.EnsureCurrentNodeIsStartElement(xmlNamespace, xmlElementName);

        this.ReadAttributesFromXml(reader);

        if (!reader.IsEmptyElement) {
            do {
                reader.Read();

                switch (reader.NodeType) {
                    case Node.ELEMENT_NODE:
                        if (!readAction(reader)) {
                            reader.SkipCurrentElement();
                        }
                        break;
                    case Node.TEXT_NODE:
                        this.ReadTextValueFromXml(reader);
                        break;
                }
            }
            while (!reader.HasRecursiveParent(xmlElementName));
            reader.SeekLast(); // go back for next process to read.
        }
    }
    //InternalToJson(service: ExchangeService): any { throw new Error("Not implemented."); }
    InternalValidate(): void { /*virtual method for derived class to implement if needed*/ }
    //LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
    //LoadFromXml(reader: EwsServiceXmlReader, xmlElementName: string): any { throw new Error("Not implemented."); }
    LoadFromXml(reader: EwsServiceXmlReader, xmlElementName: string, xmlNamespace?: XmlNamespace): void {
        this.InternalLoadFromXml(
            reader,
            xmlNamespace || this.Namespace,
            xmlElementName,
            this.TryReadElementFromXml);
    }
    ReadAttributesFromXml(reader: EwsServiceXmlReader): void { /*virtual method for derived class to implement if needed*/ }
    ReadTextValueFromXml(reader: EwsServiceXmlReader): void { /*virtual method for derived class to implement if needed*/ }
    SetFieldValue<T>(field: IRefParam<T>, value: T): void {  //irefparam to workaround ref parameters irefparam.value is actual value;
        var applyChange: boolean = false;

        if (field.value == null) {
            applyChange = value != null;
        }
        else {
            var fieldAny = <any>field.value;
            if (fieldAny.CompareTo) //todo: fix this if find new ways to check if it implements certain interface - if( field is IComparable)
            {
                applyChange = fieldAny.CompareTo(value) != 0; //todo: until fix the interface check (field as IComparable).CompareTo(value) != 0;
            }
            else {
                applyChange = true;
            }
        }

        if (applyChange) {
            field.value = value;
            this.Changed();
        }
    }
    TryReadElementFromXml(reader: EwsServiceXmlReader): boolean { return false; }
    TryReadElementFromXmlToPatch(reader: EwsServiceXmlReader): boolean { return false; }
    //UpdateFromXml(reader: EwsServiceXmlReader, xmlElementName: string): any { throw new Error("Not implemented."); }
    UpdateFromXml(reader: EwsServiceXmlReader, xmlElementName: string, xmlNamespace?: XmlNamespace): void {

        this.InternalLoadFromXml(
            reader,
            xmlNamespace || this.Namespace,
            xmlElementName,
            this.TryReadElementFromXmlToPatch);
    }
    /// <summary>
    /// Implements ISelfValidate.Validate. Validates this instance.
    /// </summary>
    Validate(): void //ISelfValidate interface
    {
        this.InternalValidate();
    }
    WriteAttributesToXml(writer: EwsServiceXmlWriter): void { /*virtual method for derived class to implement if needed*/ }
    WriteElementsToXml(writer: EwsServiceXmlWriter): void { /*virtual method for derived class to implement if needed*/ }
    //WriteToXml(writer: EwsServiceXmlWriter, xmlElementName: string): void { throw new Error("Not implemented."); }
    WriteToXml(writer: EwsServiceXmlWriter, xmlElementName: string, xmlNamespace?: XmlNamespace): void {

        writer.WriteStartElement(xmlNamespace, xmlElementName);
        this.WriteAttributesToXml(writer);
        this.WriteElementsToXml(writer);
        writer.WriteEndElement();
    }
}

export = ComplexProperty;



//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;