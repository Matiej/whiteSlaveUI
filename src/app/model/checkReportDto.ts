export class CheckReportDto {
    private _accountAssigned: string;
    private _requestId: string;

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

}