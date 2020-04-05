export class ArchCheckReport {

     private _id: number;
     private _requestId: string;
     private _accountAssigned: string;
     private _requestDate: string;
     private _reportDate: string;
     private _pdfFileName: string;
     private _searchResult: string;
     private _reportType: string;
     private _requestNip: string;
     private _requestRegon: string;
     private _requestBankAccount: string;


     /**
      * Getter id
      * @return {number}
      */
     public get id(): number {
          return this._id;
     }

     /**
      * Getter requestId
      * @return {string}
      */
     public get requestId(): string {
          return this._requestId;
     }

     /**
      * Getter accountAssigned
      * @return {string}
      */
     public get accountAssigned(): string {
          return this._accountAssigned;
     }

     /**
      * Setter id
      * @param {number} value
      */
     public set id(value: number) {
          this._id = value;
     }

     /**
      * Setter requestId
      * @param {string} value
      */
     public set requestId(value: string) {
          this._requestId = value;
     }

     /**
      * Setter accountAssigned
      * @param {string} value
      */
     public set accountAssigned(value: string) {
          this._accountAssigned = value;
     }


     /**
      * Getter requestDate
      * @return {string}
      */
     public get requestDate(): string {
          return this._requestDate;
     }

     /**
      * Getter reportDate
      * @return {string}
      */
     public get reportDate(): string {
          return this._reportDate;
     }

     /**
      * Getter pdfFileName
      * @return {string}
      */
     public get pdfFileName(): string {
          return this._pdfFileName;
     }

     /**
      * Getter searchResult
      * @return {string}
      */
     public get searchResult(): string {
          return this._searchResult;
     }

     /**
      * Getter reportType
      * @return {string}
      */
     public get reportType(): string {
          return this._reportType;
     }

     /**
      * Getter requestNip
      * @return {string}
      */
     public get requestNip(): string {
          return this._requestNip;
     }

     /**
      * Getter requestRegon
      * @return {string}
      */
     public get requestRegon(): string {
          return this._requestRegon;
     }

     /**
      * Getter requestBankAccount
      * @return {string}
      */
     public get requestBankAccount(): string {
          return this._requestBankAccount;
     }

     /**
      * Setter requestDate
      * @param {string} value
      */
     public set requestDate(value: string) {
          this._requestDate = value;
     }

     /**
      * Setter reportDate
      * @param {string} value
      */
     public set reportDate(value: string) {
          this._reportDate = value;
     }

     /**
      * Setter pdfFileName
      * @param {string} value
      */
     public set pdfFileName(value: string) {
          this._pdfFileName = value;
     }

     /**
      * Setter searchResult
      * @param {string} value
      */
     public set searchResult(value: string) {
          this._searchResult = value;
     }

     /**
      * Setter reportType
      * @param {string} value
      */
     public set reportType(value: string) {
          this._reportType = value;
     }

     /**
      * Setter requestNip
      * @param {string} value
      */
     public set requestNip(value: string) {
          this._requestNip = value;
     }

     /**
      * Setter requestRegon
      * @param {string} value
      */
     public set requestRegon(value: string) {
          this._requestRegon = value;
     }

     /**
      * Setter requestBankAccount
      * @param {string} value
      */
     public set requestBankAccount(value: string) {
          this._requestBankAccount = value;
     }



}