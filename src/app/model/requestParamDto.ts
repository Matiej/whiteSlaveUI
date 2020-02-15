export class RequestParamDto {

    constructor(
        public date: Date = new Date(),
        public valueType?: string,
        public value?: string,
        public bankaAccount?: string,
        public invoice?: string
    ) {
        
    }

}