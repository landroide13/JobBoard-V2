export class Job{
    constructor(public id?:string, 
                public title?:string, 
                public about?:string,
                public location?: string,
                public logoUrl?:string,
                public qualifications?: string,
                public responsabilities?: string, 
                public company?: string){}
}