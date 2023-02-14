export class TaskList{
  id: number;
  desc: string;
  img: string;
  status : any;
  reason: any;

  constructor(id: number, desc: string, img: string){
    this.id=id;
    this.desc=desc;
    this.img=img;
    this.status=null;
    this.reason=null;
  }
}
