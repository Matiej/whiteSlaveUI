import { RepresentativesDto } from './representativesDto';
import { AuthorizedClerksDto } from './authorizedClerksDto';
import { PartnersDto } from './partnersDto';

export class SubjectDto {

    private _name: string;
    private _nip: string;
    private _statusVat: string;
    private _regon: string;
    private _pesel: string;
    private _krs: string;
    private _residenceAddress: string;
    private _workingAddress: string;
    private _representativesDtoList: Array<RepresentativesDto>;
    private _authorizedClerksDtoList: Array<AuthorizedClerksDto>;
    private _partnersDtoList: Array<PartnersDto>;
    private _registrationLegalDate: string; // ewentualnie data
    private _registrationDenialBasis: string;
    private _registrationDenialDate:string; //ewentualnie data
    private _restorationBasis :string ;
    private _restorationDate: string; //ewe data
    private _removalBasis: string;
    private _removalDate: string; //ewedata
    private _accountNumbersList: Array<string>;
    private _hasVirtualAccounts: true;

    /**
     * Getter name
     * @return {string}
     */
	public get name(): string {
		return this._name;
	}

    /**
     * Getter nip
     * @return {string}
     */
	public get nip(): string {
		return this._nip;
	}

    /**
     * Getter statusVat
     * @return {string}
     */
	public get statusVat(): string {
		return this._statusVat;
	}

    /**
     * Getter regon
     * @return {string}
     */
	public get regon(): string {
		return this._regon;
	}

    /**
     * Getter pesel
     * @return {string}
     */
	public get pesel(): string {
		return this._pesel;
	}

    /**
     * Getter krs
     * @return {string}
     */
	public get krs(): string {
		return this._krs;
	}

    /**
     * Getter residenceAddress
     * @return {string}
     */
	public get residenceAddress(): string {
		return this._residenceAddress;
	}

    /**
     * Getter workingAddress
     * @return {string}
     */
	public get workingAddress(): string {
		return this._workingAddress;
	}

    /**
     * Getter representativesDtoList
     * @return {Array<RepresentativesDto>}
     */
	public get representativesDtoList(): Array<RepresentativesDto> {
		return this._representativesDtoList;
	}

    /**
     * Getter authorizedClerksDtoList
     * @return {Array<AuthorizedClerksDto>}
     */
	public get authorizedClerksDtoList(): Array<AuthorizedClerksDto> {
		return this._authorizedClerksDtoList;
	}

    /**
     * Getter partnersDtoList
     * @return {Array<PartnersDto>}
     */
	public get partnersDtoList(): Array<PartnersDto> {
		return this._partnersDtoList;
	}

    /**
     * Getter registrationLegalDate
     * @return {string}
     */
	public get registrationLegalDate(): string {
		return this._registrationLegalDate;
	}

    /**
     * Getter registrationDenialBasis
     * @return {string}
     */
	public get registrationDenialBasis(): string {
		return this._registrationDenialBasis;
	}

    /**
     * Getter registrationDenialDate
     * @return {string}
     */
	public get registrationDenialDate(): string {
		return this._registrationDenialDate;
	}

    /**
     * Getter restorationBasis
     * @return {string }
     */
	public get restorationBasis(): string  {
		return this._restorationBasis;
	}

    /**
     * Getter restorationDate
     * @return {string}
     */
	public get restorationDate(): string {
		return this._restorationDate;
	}

    /**
     * Getter removalBasis
     * @return {string}
     */
	public get removalBasis(): string {
		return this._removalBasis;
	}

    /**
     * Getter removalDate
     * @return {string}
     */
	public get removalDate(): string {
		return this._removalDate;
	}

    /**
     * Getter accountNumbersList
     * @return {Array<string>}
     */
	public get accountNumbersList(): Array<string> {
		return this._accountNumbersList;
	}

    /**
     * Getter hasVirtualAccounts
     * @return {true}
     */
	public get hasVirtualAccounts(): true {
		return this._hasVirtualAccounts;
	}

    /**
     * Setter name
     * @param {string} value
     */
	public set name(value: string) {
		this._name = value;
	}

    /**
     * Setter nip
     * @param {string} value
     */
	public set nip(value: string) {
		this._nip = value;
	}

    /**
     * Setter statusVat
     * @param {string} value
     */
	public set statusVat(value: string) {
		this._statusVat = value;
	}

    /**
     * Setter regon
     * @param {string} value
     */
	public set regon(value: string) {
		this._regon = value;
	}

    /**
     * Setter pesel
     * @param {string} value
     */
	public set pesel(value: string) {
		this._pesel = value;
	}

    /**
     * Setter krs
     * @param {string} value
     */
	public set krs(value: string) {
		this._krs = value;
	}

    /**
     * Setter residenceAddress
     * @param {string} value
     */
	public set residenceAddress(value: string) {
		this._residenceAddress = value;
	}

    /**
     * Setter workingAddress
     * @param {string} value
     */
	public set workingAddress(value: string) {
		this._workingAddress = value;
	}

    /**
     * Setter representativesDtoList
     * @param {Array<RepresentativesDto>} value
     */
	public set representativesDtoList(value: Array<RepresentativesDto>) {
		this._representativesDtoList = value;
	}

    /**
     * Setter authorizedClerksDtoList
     * @param {Array<AuthorizedClerksDto>} value
     */
	public set authorizedClerksDtoList(value: Array<AuthorizedClerksDto>) {
		this._authorizedClerksDtoList = value;
	}

    /**
     * Setter partnersDtoList
     * @param {Array<PartnersDto>} value
     */
	public set partnersDtoList(value: Array<PartnersDto>) {
		this._partnersDtoList = value;
	}

    /**
     * Setter registrationLegalDate
     * @param {string} value
     */
	public set registrationLegalDate(value: string) {
		this._registrationLegalDate = value;
	}

    /**
     * Setter registrationDenialBasis
     * @param {string} value
     */
	public set registrationDenialBasis(value: string) {
		this._registrationDenialBasis = value;
	}

    /**
     * Setter registrationDenialDate
     * @param {string} value
     */
	public set registrationDenialDate(value: string) {
		this._registrationDenialDate = value;
	}

    /**
     * Setter restorationBasis
     * @param {string } value
     */
	public set restorationBasis(value: string ) {
		this._restorationBasis = value;
	}

    /**
     * Setter restorationDate
     * @param {string} value
     */
	public set restorationDate(value: string) {
		this._restorationDate = value;
	}

    /**
     * Setter removalBasis
     * @param {string} value
     */
	public set removalBasis(value: string) {
		this._removalBasis = value;
	}

    /**
     * Setter removalDate
     * @param {string} value
     */
	public set removalDate(value: string) {
		this._removalDate = value;
	}

    /**
     * Setter accountNumbersList
     * @param {Array<string>} value
     */
	public set accountNumbersList(value: Array<string>) {
		this._accountNumbersList = value;
	}

    /**
     * Setter hasVirtualAccounts
     * @param {true} value
     */
	public set hasVirtualAccounts(value: true) {
		this._hasVirtualAccounts = value;
	}



}