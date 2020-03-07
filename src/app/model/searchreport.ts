import { SubjectDto } from './subject';

export class SearchReport {

    private _requestId: string;
    private _subjectDtoList: Array<SubjectDto>;
    private _searchDate: Date;

    /**
     * Getter requestId
     * @return {string}
     */
	public get requestId(): string {
		return this._requestId;
	}

    /**
     * Getter subjectDtoList
     * @return {Array<SubjectDto>}
     */
	public get subjectDtoList(): Array<SubjectDto> {
		return this._subjectDtoList;
	}

    /**
     * Setter requestId
     * @param {string} value
     */
	public set requestId(value: string) {
		this._requestId = value;
	}

    /**
     * Setter subjectDtoList
     * @param {Array<SubjectDto>} value
     */
	public set subjectDtoList(value: Array<SubjectDto>) {
        this._subjectDtoList = value;
    }
    

    /**
     * Getter searchDate
     * @return {Date}
     */
	public get searchDate(): Date {
		return this._searchDate;
	}

    /**
     * Setter searchDate
     * @param {Date} value
     */
	public set searchDate(value: Date) {
		this._searchDate = value;
	}
    


    
}