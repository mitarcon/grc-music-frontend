export class Parameter {
  perpage: number;
  orderby: string;
  starton: number;
  query: string;
  hash: string;

  constructor(){
    this.perpage = 5;
    this.orderby = 'name';
    this.starton = 0;
    this.query = '';
    this.hash = undefined;
  }

  getParamFromUrl ( qparams: any ){
    this.perpage = qparams['perpage'] ? qparams['perpage'] : this.perpage;
    this.orderby = qparams['orderby'] ? qparams['orderby'] : this.orderby;
    this.starton = qparams['starton'] ? qparams['starton'] : this.starton;
    this.query = qparams['query'] ? qparams['query'] : this.query;
    this.hash = qparams['hash'] ? qparams['hash'] : undefined;
  }

}
