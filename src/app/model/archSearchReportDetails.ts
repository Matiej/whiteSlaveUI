import { BankAccountDto } from './bankAccountDto';
import { PartnersDto } from './partnersDto';
import { AuthorizedClerksDto } from './authorizedClerksDto';
import { RepresentativesDto } from './representativesDto';
import { ArchSearchReport } from './archSearchReport';

export class ArchSearchReportDetails implements ArchSearchReport {
    id: number;
    requestId: string;
    name: string;
    statusVat: string;
    requestDate: string;
    reportDate: String;
    requestNip: string;
    requestRegon: string;
    requestBankAccount: string;
    subjectNo: string;
    searchResult: string;

    reportType: string;
    pdfFileName: string;
    requestEntityId: number;
    representaivesDtoList: Array<RepresentativesDto>;
    authorizedClerksDtoList: Array<AuthorizedClerksDto>;
    partnersDtoList: Array<PartnersDto>;
    bankAccountDtoList: Array<BankAccountDto>;

}