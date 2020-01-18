import { ArchReportSyncRequest } from './archReportSyncRequest';

export class ArchResponseReport {

    private _id: number;
    private _requestId: string;
    private _accountAssigned: string;
    private _archRerpotSyncRequest: ArchReportSyncRequest;


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
     * Getter archRerpotSyncRequest
     * @return {ArchReportSyncRequest}
     */
	public get archRerpotSyncRequest(): ArchReportSyncRequest {
		return this._archRerpotSyncRequest;
	}

    /**
     * Setter archRerpotSyncRequest
     * @param {ArchReportSyncRequest} value
     */
	public set archRerpotSyncRequest(value: ArchReportSyncRequest) {
		this._archRerpotSyncRequest = value;
	}


}