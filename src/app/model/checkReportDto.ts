export class CheckReportDto {
    private _accountAssigned: string;
    private _requestId: string;

    private _searchNip: string;
    private _serachRegon: string;
    private _searchDate: Date;
    private _searchAccount:string;
    private _searchInvoice: string;

    /**
     * Getter accountAssigned
     * @return {string}
     */
    public get accountAssigned(): string {
        return this._accountAssigned;
    }

    /**
     * Getter requestId
     * @return {string}
     */
    public get requestId(): string {
        return this._requestId;
    }

    /**
     * Setter accountAssigned
     * @param {string} value
     */
    public set accountAssigned(value: string) {
        this._accountAssigned = value;
    }

    /**
     * Setter requestId
     * @param {string} value
     */
    public set requestId(value: string) {
        this._requestId = value;
    }

    /**
     * Getter searchDate
     * @return {Date}
     */
	public get searchDate(): Date {
		return this._searchDate;
	}

    /**
     * Getter searchAccount
     * @return {string}
     */
	public get searchAccount(): string {
		return this._searchAccount;
	}

    /**
     * Setter searchDate
     * @param {Date} value
     */
	public set searchDate(value: Date) {
		this._searchDate = value;
	}

    /**
     * Setter searchAccount
     * @param {string} value
     */
	public set searchAccount(value: string) {
		this._searchAccount = value;
	}


    /**
     * Getter searchNip
     * @return {string}
     */
	public get searchNip(): string {
		return this._searchNip;
	}

    /**
     * Getter serachRegon
     * @return {string}
     */
	public get serachRegon(): string {
		return this._serachRegon;
	}

    /**
     * Setter searchNip
     * @param {string} value
     */
	public set searchNip(value: string) {
		this._searchNip = value;
	}

    /**
     * Setter serachRegon
     * @param {string} value
     */
	public set serachRegon(value: string) {
		this._serachRegon = value;
    }
    

    /**
     * Getter searchInvoice
     * @return {string}
     */
	public get searchInvoice(): string {
		return this._searchInvoice;
	}

    /**
     * Setter searchInvoice
     * @param {string} value
     */
	public set searchInvoice(value: string) {
		this._searchInvoice = value;
	}



}