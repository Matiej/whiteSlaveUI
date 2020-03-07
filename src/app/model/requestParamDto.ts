import { FormValueType } from './enum/formValueType.enum';
export class RequestParamDto {

    constructor(
        public date: Date = new Date(),
        public valueTypeEnum?: FormValueType,
        public valueType?: string,
        public value?: string,
        public bankaAccount?: string,
        public invoice?: string
    ) {
        
    }

}