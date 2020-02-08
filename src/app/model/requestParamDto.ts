export class RequestParamDto {

    constructor(
        public nip?: string,
        public regon?: string,
        public bankaAccount?: string,
        public date?: Date,
        public invoice?: string
    ) {
        
    }

}