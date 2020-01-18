import { SubjectDto } from './subject';

export class SearchReport {

    private _requestId: string;
    private _subjectDtoList: Array<SubjectDto>;

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


    
}