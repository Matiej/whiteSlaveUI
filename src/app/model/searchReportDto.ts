export class SearchReportDto {
    private _companyName: string;
    private _firstName: string;
    private _lastName: string;
    private _nip: string;
    private _pesel: string;


    /**
     * Getter companyName
     * @return {string}
     */
    public get companyName(): string {
        return this._companyName;
    }

    /**
     * Getter firstName
     * @return {string}
     */
    public get firstName(): string {
        return this._firstName;
    }

    /**
     * Getter lastName
     * @return {string}
     */
    public get lastName(): string {
        return this._lastName;
    }

    /**
     * Getter nip
     * @return {string}
     */
    public get nip(): string {
        return this._nip;
    }

    /**
     * Getter pesel
     * @return {string}
     */
    public get pesel(): string {
        return this._pesel;
    }

    /**
     * Setter companyName
     * @param {string} value
     */
    public set companyName(value: string) {
        this._companyName = value;
    }

    /**
     * Setter firstName
     * @param {string} value
     */
    public set firstName(value: string) {
        this._firstName = value;
    }

    /**
     * Setter lastName
     * @param {string} value
     */
    public set lastName(value: string) {
        this._lastName = value;
    }

    /**
     * Setter nip
     * @param {string} value
     */
    public set nip(value: string) {
        this._nip = value;
    }

    /**
     * Setter pesel
     * @param {string} value
     */
    public set pesel(value: string) {
        this._pesel = value;
    }

}