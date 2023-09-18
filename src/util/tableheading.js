export const tableheading = [
  // "requestId",
  // "canFlag",
  "contacted.email",
  "contacted.mobNum",
  "contacted.name",
  // "ppr",
  // "cmpRt",
  "tradeNam",
  "nba",
  "mbr",
  // "adadr",
  "pradr",
  "stjCd",
  "Istupdt",
  "gstin",
  "ctjCd",
  "stj",
  "dty",
  "cxdt",
  "ctb",
  "sts",
  "lgnm",
  "ctj",
  "bzgddtls",
  "bzsdtls",
  "aggreTurnOver",
  "mandatedeInvoice",
 "ntcrbs",
  "adhrVFlag",
  "gtiFY",
  "ekycVFlag",
  "percentTaxInCash",
  "compDetl",
  "gti",
  "aggreTurnOverFY",
  "percentTaxInCashFY",
  // "statusCode"
];
 
export const Transform =(raw_data)=>{
  const ans=[];
  for(let i=0;i<raw_data.length;i++){
    const data=raw_data[i];
    const res = [];
    // res.push(data["requestId"]);
    const temp = data.result;
    // res.push(temp.canFlag);
    res.push(temp.contacted.email);
    res.push(temp.contacted.mobNum);
    res.push(temp.contacted.name);
    // res.push(temp.ppr);
    // res.push(temp.cmpRt);
    res.push(temp.tradeNam);
    // res.push(temp.nba);
    res.push(temp.nba.join("\r,\n"));
    // res.push(temp.mbr);
    res.push(temp.mbr.join("\r,\n"));
    // res.push(temp.adadr);
    // res.push(temp.adadr.map((a) => `${Object.values(a)}\n`).join("\n"));
    // res.push(temp.pradr);
    res.push(temp.pradr.adr);
    res.push(temp.stjCd);
    res.push(temp.Istupdt);
    res.push(temp.gstin);
    res.push(temp.ctjCd);
    res.push(temp.stj);
    res.push(temp.dty);
    res.push(temp.cxdt);
    res.push(temp.ctb);
    res.push(temp.sts);
    res.push(temp.lgnm);
    res.push(temp.ctj);
    // res.push(temp.bzgddtls);
    res.push(temp.bzgddtls.map((a) => `${Object.values(a)}\n\n`).join("\n\n"));
    // res.push(temp.bzsdtls);
    res.push(temp.bzsdtls.map((a) => `${Object.values(a)}\n\n`).join("\n\n"));
    res.push(temp.aggreTurnOver);
    res.push(temp.mandatedeInvoice);
    res.push(temp.ntcrbs);
    res.push(temp.adhrVFlag);
    res.push(temp.gtiFY);
    res.push(temp.ekycVFlag);
    res.push(temp.percentTaxInCash);
    res.push(temp.compDetl);
    res.push(temp.gti);
    res.push(temp.aggreTurnOverFY);
    res.push(temp.percentTaxInCashFY);
    // res.push(data.statusCode);
    ans.push(res);
  }
  return ans;
}