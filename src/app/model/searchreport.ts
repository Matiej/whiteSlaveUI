
export class SearchReport {

    private _requestId: string;


    /**
     * Getter requestId
     * @return {string}
     */
	public get requestId(): string {
		return this._requestId;
	}

    /**
     * Setter requestId
     * @param {string} value
     */
	public set requestId(value: string) {
		this._requestId = value;
	}


    
}