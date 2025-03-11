export default class EndpointResponse {
  status: "ok" | "nok";
  params: any[];
  data: any;
  msg: string;
  beautyMsg: string;

  constructor(
    status: "ok" | "nok",
    params: any[],
    data: any,
    msg: string,
    beautyMsg?: string
  ) {
    this.status = status;
    this.params = params;
    this.data = data;
    this.msg = msg;
    this.beautyMsg = beautyMsg;
  }
}
export class OkEndpointResponse extends EndpointResponse {
  constructor(params: any[], data: any, msg: string = "", beautyMsg?: string) {
    super("ok", params, data, msg, beautyMsg);
  }
}

export class NOkEndpointResponse extends EndpointResponse {
  constructor(params: any[], msg: string, beautyMsg?: string) {
    super("nok", params, null, msg, beautyMsg);
  }
}
