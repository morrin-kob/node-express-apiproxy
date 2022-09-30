const mfields = {
  //external_ids?: ExternalIDBlock[];
  //pictures?: PictureBlock[];
  //created_at?: string;
  //updated_at: "更新日",
  //created_by?: string;
  //updated_by?: string;
  //face_picture?: PictureBlock;
  //deleted?: boolean;
  lastname: "姓",
  firstname: "名",
  lastkana: "姓フリガナ",
  firstkana: "名フリガナ",
  suffix: "敬称",
  gender: "性別",
  birthdate: "誕生日",
  tags: "タグ",
  code: "顧客コード",
  memo: "メモ",

  "joint_names.0.lastname": "連名1：姓",
  "joint_names.0.firstname": "連名1：名",
  "joint_names.0.lastkana": "連名1：フリガナ姓",
  "joint_names.0.firstkana": "連名1：フリガナ名",
  "joint_names.0.suffix": "連名1：敬称",
  "joint_names.0.gender": "連名1：性別",
  "joint_names.0.birthdate": "連名1：誕生日",

  "joint_names.1.lastname": "連名2：姓",
  "joint_names.1.firstname": "連名2：名",
  "joint_names.1.lastkana": "連名2：フリガナ姓",
  "joint_names.1.firstkana": "連名2：フリガナ名",
  "joint_names.1.suffix": "連名2：敬称",
  "joint_names.1.gender": "連名2：性別",
  "joint_names.1.birthdate": "連名2：誕生日",

  "joint_names.2.lastname": "連名3：姓",
  "joint_names.2.firstname": "連名3：名",
  "joint_names.2.lastkana": "連名3：フリガナ姓",
  "joint_names.2.firstkana": "連名3：フリガナ名",
  "joint_names.2.suffix": "連名3：敬称",
  "joint_names.2.gender": "連名3：性別",
  "joint_names.2.birthdate": "連名3：誕生日",

  "joint_names.3.lastname": "連名4：姓",
  "joint_names.3.firstname": "連名4：名",
  "joint_names.3.lastkana": "連名4：フリガナ姓",
  "joint_names.3.firstkana": "連名4：フリガナ名",
  "joint_names.3.suffix": "連名4：敬称",
  "joint_names.3.gender": "連名4：性別",
  "joint_names.3.birthdate": "連名4：誕生日",

  "joint_names.4.lastname": "連名5：姓",
  "joint_names.4.firstname": "連名5：名",
  "joint_names.4.lastkana": "連名5：フリガナ姓",
  "joint_names.4.firstkana": "連名5：フリガナ名",
  "joint_names.4.suffix": "連名5：敬称",
  "joint_names.4.gender": "連名5：性別",
  "joint_names.4.birthdate": "連名5：誕生日",

  "organization.name": "会社名",
  "organization.kana": "会社名フリガナ",
  "organization.dept1": "部署名1",
  "organization.dept2": "部署名2",
  "organization.title": "役職名",

  //addresses.kindof?: "home" | "office" | null;
  // 0:home, 1:office, 2:other
  "addresses.0.zipcode": "郵便番号",
  "addresses.0.region": "都道府県",
  "addresses.0.city": "市郡区",
  "addresses.0.street": "町村地番",
  "addresses.0.building": "アパート・マンション名",
  "addresses.0.station": "最寄り駅",
  //addresses.label?: string;
  "addresses.0.geolocation": "緯度経度",

  "addresses.1.zipcode": "郵便番号(会社)",
  "addresses.1.region": "都道府県(会社)",
  "addresses.1.city": "市郡区(会社)",
  "addresses.1.street": "町村地番(会社)",
  "addresses.1.building": "建物名(会社)",
  "addresses.1.station": "最寄り駅(会社)",
  //addresses.label?: string;
  "addresses.1.geolocation": "緯度経度(会社)",

  "addresses.2.zipcode": "郵便番号(その他)",
  "addresses.2.region": "都道府県(その他)",
  "addresses.2.city": "市郡区(その他)",
  "addresses.2.street": "町村地番(その他)",
  "addresses.2.building": "建物名(その他)",
  "addresses.2.station": "最寄り駅(その他)",
  "addresses.2.geolocation": "緯度経度(その他)",
  "addresses.2.label": "「その他」の名称",

  //emails: EmailBlock[];
  // 0:home, 1:office, 2:cell, 3:other
  //kindof: "cell" | "home" | "office" | null;
  "emails.0.address": "メールアドレス",
  "emails.1.address": "メールアドレス(仕事)",
  "emails.2.address": "メールアドレス(携帯)",
  "emails.3.address": "メールアドレス(その他1)",
  "emails.3.label": "その他1の名称",
  "emails.4.address": "メールアドレス(その他2)",
  "emails.4.label": "その他2の名称",
  "emails.5.address": "メールアドレス(その他3)",
  "emails.5.label": "その他3の名称",

  //telephones: TelephoneBlock[];
  //kindof: "tel" | "fax" | "cell" | "offtel" | "offfax" | "offcell" | null;
  // 0:tel, 1:cell, 2:offtel, 3:offcell, 4:fax, 5:offfax 6:others
  "telephones.0.number": "TEL(自宅)",
  "telephones.1.number": "TEL(携帯)",
  "telephones.2.number": "TEL(会社)",
  "telephones.3.number": "TEL(仕事携帯)",
  "telephones.4.number": "FAX(自宅)",
  "telephones.5.number": "FAX(会社)",
  "telephones.6.number": "TEL(その他1)",
  "telephones.6.label": "TELその他1の名称",
  "telephones.7.number": "TEL(その他2)",
  "telephones.7.label": "TELその他2の名称",
  "telephones.8.number": "TEL(その他3)",
  "telephones.8.label": "TELその他3の名称",

  //weburls: WebUrlBlock[];
  //kindof: "profile" | "blog" | "hp" | "office" | null;
  // 0:hp, 1:office, 2:blog, 3:profile, 4:others
  "weburls.0.url": "URL(HP)",
  "weburls.1.url": "URL(会社HP)",
  "weburls.2.url": "URL(Blog)",
  "weburls.3.url": "URL(profile)",
  "weburls.4.url": "URL(その他1)",
  "weburls.4.label": "URLその他1の名称",
  "weburls.5.url": "URL(その他2)",
  "weburls.5.label": "URLその他2の名称",
  "weburls.6.url": "URL(その他3)",
  "weburls.6.label": "URLその他3の名称",

  //extendprops: ExtendPropsBlock[];
  "extendprops.0.data.marks": "",
  "extendprops.0.data.primaryName": "",
  "extendprops.0.data.prntaddr": "",
  "extendprops.0.data.corpMemo": "",
  "extendprops.0.family0.bloodtype": "",
  "extendprops.0.family0.ext": "",
  "extendprops.0.family0.relation": "",
  "extendprops.0.family0.prName": "",
  "extendprops.0.family0.eudc": "",
  "extendprops.0.family1.bloodtype": "",
  "extendprops.0.family1.ext": "",
  "extendprops.0.family1.relation": "",
  "extendprops.0.family1.prName": "",
  "extendprops.0.family1.eudc": "",
  "extendprops.0.family2.bloodtype": "",
  "extendprops.0.family2.ext": "",
  "extendprops.0.family2.relation": "",
  "extendprops.0.family2.prName": "",
  "extendprops.0.family2.eudc": "",
  "extendprops.0.family3.bloodtype": "",
  "extendprops.0.family3.ext": "",
  "extendprops.0.family3.relation": "",
  "extendprops.0.family3.prName": "",
  "extendprops.0.family3.eudc": "",
  "extendprops.0.family4.bloodtype": "",
  "extendprops.0.family4.ext": "",
  "extendprops.0.family4.relation": "",
  "extendprops.0.family4.prName": "",
  "extendprops.0.family4.eudc": "",
  "extendprops.0.family5.bloodtype": "",
  "extendprops.0.family5.ext": "",
  "extendprops.0.family5.relation": "",
  "extendprops.0.family5.prName": "",
  "extendprops.0.family5.eudc": "",
  "extendprops.0.data.extra1": "",
  "extendprops.0.data.extra2": "",
  "extendprops.0.data.extra3": "",
  "extendprops.0.data.extra4": "",
  "extendprops.0.data.extra5": "",
  "extendprops.0.data.srdata1": "",
  "extendprops.0.data.srdata2": "",
  "extendprops.0.data.srdata3": "",
  "extendprops.0.data.srdata4": "",
  "extendprops.0.data.srdata5": "",
  "extendprops.0.data.srdata6": ""
};

/**************
type FDataType = {
  id: string;
  data: string; //<title or data>
};
type AResultType = {
  [mfield: string]: { [fieldId: string]: number };
};
type ResponceType = {
  status: "ok" | "error";
  error?: string;
  data?: { [fieldId: string]: string  };
};
****************/

const toHalfWidthNumber = (number) => {
  let num = number;
  return num
    .replace(/０/g, "0")
    .replace(/１/g, "1")
    .replace(/２/g, "2")
    .replace(/３/g, "3")
    .replace(/４/g, "4")
    .replace(/５/g, "5")
    .replace(/６/g, "6")
    .replace(/７/g, "7")
    .replace(/８/g, "8")
    .replace(/９/g, "9");
};

// fieldData: { id: <fieldId>, data: <title or data> }
// result:out { fieldId: [{<mfield>: <possibility>},...] }
const checkMameFieldTitle = (
  fid,
  fdata,
  result /*: AResultType*/,
  pointmax /*: number*/
) => {
  let title = fdata; //.trim();
  if (!title) return;
  title = title.trim();
  if (!title) return;

  let mfield = "";
  let possibility = 0;

  let mr = title.match(/ﾌﾘｶﾞﾅ|フリガナ|ふりがな|読み/);
  if (mr) {
    if (mr[0].length === title.length) {
      mfield = "lastkana";
      possibility = pointmax;
    } else if (title.indexOf("連名") >= 0) {
      let num = 1;
      let point = parseInt(`${pointmax / 2}`, 10);
      mr = title.match(/連名([(（]*)([1-9|１-９])([)）]*)/);
      if (mr) {
        num = toHalfWidthNumber(mr[2]);
        point = pointmax;
      }
      if (1 <= num && num <= 5) {
        mfield = `joint_names.${num - 1}.firstkana`;
        possibility = point;
      }
    } else if (
      title.search(/会社|勤務先|団体|組織|オフィス|job|work|office/i) !== -1
    ) {
      mfield = "organization.kana";
      possibility = pointmax;
    } else {
      if (title.search(/氏名|姓名/) !== -1) {
        mfield = "lastkana";
        possibility = pointmax;
      } else if (
        title.search(/[(（)]名[)）]/) !== -1 ||
        title.search(/名ふりがな|名フリガナ|名ﾌﾘｶﾞﾅ/) !== -1
      ) {
        mfield = "firstkana";
      } else mfield = "lastkana";
      possibility = pointmax;
    }
  }
  //	敬称
  else if (title.indexOf("敬称") >= 0) {
    if (title.indexOf("連名") >= 0) {
      let num = 1;
      let point = parseInt(`${pointmax / 2}`, 10);
      mr = title.match(/連名(?:[(（]*)([1-9|１-９])(?:[)）]*)/);
      if (mr) {
        num = toHalfWidthNumber(mr[1]);
        point = pointmax;
      }
      if (1 <= num && num <= 5) {
        mfield = `joint_names.${num - 1}.suffix`;
        possibility = point;
      }
    } else {
      mfield = "suffix";
      possibility = pointmax;
    }
  }
  //	性別
  if (!mfield && title.indexOf("性別") >= 0) {
    if (title.indexOf("連名") >= 0) {
      let num = 1;
      let point = parseInt(`${pointmax / 2}`, 10);
      mr = title.match(/連名(?:[(（]*)([1-9|１-９])(?:[)）]*)/);
      if (mr) {
        num = toHalfWidthNumber(mr[1]);
        point = pointmax;
      }
      if (1 <= num && num <= 5) {
        mfield = `joint_names.${num - 1}.gender`;
        possibility = point;
      }
    } else {
      mfield = "gender";
      possibility = pointmax;
    }
  }
  //	誕生日
  if (!mfield && title.search(/誕生日|birth|DOB/i) !== -1) {
    if (title.indexOf("連名") >= 0) {
      let num = 1;
      let point = parseInt(`${pointmax / 2}`, 10);
      mr = title.match(/連名(?:[(（]*)([1-9|１-９])(?:[)）]*)/);
      if (mr) {
        num = toHalfWidthNumber(mr[1]);
        point = pointmax;
      }
      if (1 <= num && num <= 5) {
        mfield = `joint_names.${num - 1}.birthdate`;
        possibility = point;
      }
    } else {
      mfield = "birthdate";
      possibility = pointmax;
    }
  }
  // 氏名
  if (!mfield) {
    if (title.search(/^(?:氏名|名前|姓名)$/) !== -1) {
      mfield = title.search(/[(（)]名[)）]/) !== -1 ? "firstname" : "lastname";
      possibility = 10;
    } else if (
      title === "名" ||
      (title.search(/name$/) !== -1 && title.search(/^(?:first|given)/i) !== -1)
    ) {
      mfield = "firstname";
      possibility = 10;
    }
  }
  if (!mfield) {
    mr = title.match(/連名(?:[(（]*)([1-9|１-９])(?:[)）]*)/);
    if (mr) {
      let num = toHalfWidthNumber(mr[1]);
      if (1 <= num && num <= 5) {
        mfield = `joint_names.${num - 1}.firstname`;
        possibility = pointmax;
      }
    }
  }
  if (
    !mfield &&
    title.search(/顧客コード|顧客no|カスタマーコード|customer/i) !== -1
  ) {
    mfield = "code";
    possibility = pointmax;
  }
  //	個人情報
  if (
    !mfield &&
    title.search(/^(?:分類|種別|カテゴリ|タグ|category|tags)/i) !== -1
  ) {
    mfield = "tags";
    possibility = pointmax;
  }
  if (!mfield && title.search(/^(?:メモ|memo|note)/i) !== -1) {
    mfield = "memo";
    possibility = pointmax;
  }
  if (
    !mfield &&
    title.search(/URL|HP|WEB|BLOG|ホームページ|ウェブ｜ブログ/i) !== -1
  ) {
    // "weburls.0.url": "URL(HP)",
    // "weburls.1.url": "URL(会社HP)",
    // "weburls.2.url": "URL(Blog)",
    // "weburls.3.url": "URL(profile)",
    // "weburls.4.url": "URL(その他1)",
    // "weburls.4.label": "URLその他1の名称",
    // "weburls.5.url": "URL(その他2)",
    // "weburls.5.label": "URLその他2の名称",
    // "weburls.6.url": "URL(その他3)",
    // "weburls.6.label": "URLその他3の名称"
    if (
      title.search(/会社|勤務先|団体|組織|オフィス|job|work|office/i) !== -1
    ) {
      mfield = "weburls.1.url";
    } else {
      if (title.search(/BLOG|ブログ/i) !== -1) {
        mfield = "weburls.2.url";
      } else {
        mfield = "weburls.0.url";
      }
    }
    possibility = pointmax;
    if (fid in result && mfield in result[fid]) {
      mfield = "weburls.4.url";
      possibility -= 2;
      if (fid in result && mfield in result[fid]) {
        mfield = "weburls.5.url";
        possibility -= 2;
      }
    }
  }
  //
  // "addresses.0.zipcode": "郵便番号",
  // "addresses.0.region": "都道府県",
  // "addresses.0.city": "市郡区",
  // "addresses.0.street": "町村地番",
  // "addresses.0.building": "アパート・マンション名",
  // "addresses.0.station": "最寄り駅",
  // //addresses.label?: string;
  // "addresses.0.geolocation": "緯度経度",
  //	自宅住所
  if (!mfield) {
    mr = title.match(/〒|郵便番号|zipcode/i);
    if (mr) {
      let num = 0;
      if (
        mr[0].length === title.length ||
        title.search(/自宅|個人|パーソナル|person|private/i) !== -1
      ) {
        num = 0;
      } else if (
        title.search(/会社|勤務先|団体|組織|オフィス|job|work|office/i) !== -1
      ) {
        num = 1;
      } else if (title.search(/その他|予備|extra/i) !== -1) {
        num = 2;
      }
      mfield = `addresses.${num}.zipcode`;
      possibility = pointmax;
    }
  }
  if (!mfield) {
    mr = title.match(/都道府県|region|prefecture/i);
    if (mr) {
      let num = 0;
      if (
        mr[0].length === title.length ||
        title.search(/自宅|個人|パーソナル|person|private/i) !== -1
      ) {
        num = 0;
      } else if (
        title.search(/会社|勤務先|団体|組織|オフィス|job|work|office/i) !== -1
      ) {
        num = 1;
      } else if (title.search(/その他|予備|extra/i) !== -1) {
        num = 2;
      }
      mfield = `addresses.${num}.region`;
      possibility = pointmax;
    }
  }
  if (!mfield) {
    mr = title.match(/市郡区|市|郡|city/i);
    if (mr) {
      let num = 0;
      if (
        mr[0].length === title.length ||
        title.search(/自宅|個人|パーソナル|person|private/i) !== -1
      ) {
        num = 0;
      } else if (
        title.search(/会社|勤務先|団体|組織|オフィス|job|work|office/i) !== -1
      ) {
        num = 1;
      } else if (title.search(/その他|予備|extra/i) !== -1) {
        num = 2;
      }
      mfield = `addresses.${num}.city`;
      possibility = pointmax;
    }
  }
  if (!mfield) {
    mr = title.match(/区町村|地番|番地|town|street/i);
    if (mr) {
      let num = 0;
      if (
        mr[0].length === title.length ||
        title.search(/自宅|個人|パーソナル|person|private/i) !== -1
      ) {
        num = 0;
      } else if (
        title.search(/会社|勤務先|団体|組織|オフィス|job|work|office/i) !== -1
      ) {
        num = 1;
      } else if (title.search(/その他|予備|extra/i) !== -1) {
        num = 2;
      }
      mfield = `addresses.${num}.street`;
      possibility = pointmax;
    }
  }
  if (!mfield) {
    mr = title.match(/アパート|マンション|ビル|building|apartment/i);
    if (mr) {
      let num = 0;
      if (
        mr[0].length === title.length ||
        title.search(/自宅|個人|パーソナル|person|private/i) !== -1
      ) {
        num = 0;
      } else if (
        title.search(/会社|勤務先|団体|組織|オフィス|job|work|office/i) !== -1
      ) {
        num = 1;
      } else if (title.search(/その他|予備|extra/i) !== -1) {
        num = 2;
      }
      mfield = `addresses.${num}.building`;
      possibility = pointmax;
    }
  }
  if (!mfield && title.search(/印刷住所/) !== -1) {
    mfield = "extendprops.0.data.prntaddr";
  }
  if (!mfield) {
    mr = title.match(/住所[１２]*|address/);
    if (mr && title.search(/印刷/) === -1) {
      let num = 0;
      if (
        mr[0].length === title.length ||
        title.search(/自宅|個人|パーソナル|person|private/i) !== -1
      ) {
        num = 0;
      } else if (
        title.search(/会社|勤務先|団体|組織|オフィス|job|work|office/i) !== -1
      ) {
        num = 1;
      } else if (title.search(/その他|予備|extra/i) !== -1) {
        num = 2;
      }
      if (title.search(/2|２/) !== -1) {
        mfield = `addresses.${num}.building`;
      } else {
        mfield = `addresses.${num}.street`;
      }
      possibility = pointmax;
    }
  }
  if (!mfield) {
    mr = title.match(/最寄り駅|station/i);
    if (mr) {
      let num = 0;
      if (
        mr[0].length === title.length ||
        title.search(/自宅|個人|パーソナル|person|private/i) !== -1
      ) {
        num = 0;
      } else if (
        title.search(/会社|勤務先|団体|組織|オフィス|job|work|office/i) !== -1
      ) {
        num = 1;
      } else if (title.search(/その他|予備|extra/i) !== -1) {
        num = 2;
      }
      mfield = `addresses.${num}.station`;
      possibility = pointmax;
    }
  }
  if (!mfield) {
    mr = title.match(/経度|緯度|geo/i);
    if (mr) {
      let num = 0;
      if (
        mr[0].length === title.length ||
        title.search(/自宅|個人|パーソナル|person|private/i) !== -1
      ) {
        num = 0;
      } else if (
        title.search(/会社|勤務先|団体|組織|オフィス|job|work|office/i) !== -1
      ) {
        num = 1;
      } else if (title.search(/その他|予備|extra/i) !== -1) {
        num = 2;
      }
      mfield = `addresses.${num}.geolocation`;
      possibility = pointmax;
    }
  }
  // "telephones.0.number": "TEL(自宅)",
  // "telephones.1.number": "TEL(携帯)",
  // "telephones.2.number": "TEL(会社)",
  // "telephones.3.number": "TEL(仕事携帯)",
  // "telephones.6.number": "TEL(その他1)",
  // "telephones.6.label": "TELその他1の名称",
  // "telephones.7.number": "TEL(その他2)",
  // "telephones.7.label": "TELその他2の名称",
  // "telephones.8.number": "TEL(その他3)",
  // "telephones.8.label": "TELその他3の名称",
  if (!mfield) {
    mr = title.match(/TEL|電話/i);
    if (mr) {
      let num = 0;
      if (
        mr[0].length === title.length ||
        title.search(/自宅|個人|パーソナル|person|private/i) !== -1
      ) {
        num = 0;
      } else if (
        title.search(/会社|勤務先|団体|組織|オフィス|job|work|office/i) !== -1
      ) {
        num = 2;
        if (title.search(/携帯|mobile|cell/i) !== -1) {
          num = 3;
        }
      } else if (title.search(/その他|予備|extra/i) !== -1) {
        num = 6;
      } else {
        num = 0;
        if (title.search(/携帯|mobile|cell/i) !== -1) {
          num = 1;
        }
      }
      mfield = `telephones.${num}.number`;
      possibility = pointmax;
    }
  }
  // "telephones.4.number": "FAX(自宅)",
  // "telephones.5.number": "FAX(会社)",
  if (!mfield) {
    mr = title.match(/FAX|ファクス|ファクシミリ/i);
    if (mr) {
      let num = 4;
      if (
        mr[0].length === title.length ||
        title.search(/自宅|個人|パーソナル|person|private/i) !== -1
      ) {
        num = 4;
      } else if (
        title.search(/会社|勤務先|団体|組織|オフィス|job|work|office/i) !== -1
      ) {
        num = 5;
      }
      mfield = `telephones.${num}.number`;
      possibility = pointmax;
    }
  }
  // "emails.0.address": "メールアドレス",
  // "emails.1.address": "メールアドレス(仕事)",
  // "emails.2.address": "メールアドレス(携帯)",
  // "emails.3.address": "メールアドレス(その他1)",
  // "emails.3.label": "その他1の名称",
  // "emails.4.address": "メールアドレス(その他2)",
  // "emails.4.label": "その他2の名称",
  // "emails.5.address": "メールアドレス(その他3)",
  // "emails.5.label": "その他3の名称",
  if (!mfield) {
    mr = title.match(/mail|メール/i);
    if (mr) {
      let num = 0;
      if (
        mr[0].length === title.length ||
        title.search(/自宅|個人|パーソナル|person|private/i) !== -1
      ) {
        num = 0;
      } else if (title.search(/携帯|mobile|cell/i) !== -1) {
        num = 3;
      } else if (
        title.search(/会社|勤務先|団体|組織|オフィス|job|work|office/i) !== -1
      ) {
        num = 2;
      } else if (title.search(/その他|予備|extra/i) !== -1) {
        num = 4;
      } else {
        num = 0;
      }
      mfield = `emails.${num}.address`;
      possibility = pointmax;
    }
  }
  // "organization.name": "会社名",
  // "organization.kana": "会社名フリガナ",
  // "organization.dept1": "部署名1",
  // "organization.dept2": "部署名2",
  // "organization.title": "役職名",

  //	会社情報
  if (
    !mfield &&
    title.search(/会社|勤務先|団体|組織|オフィス|job|work|office/i) !== -1
  ) {
    mfield = "organization.name";
    possibility = pointmax;
  }
  if (!mfield && title.search(/部署|所属|dept|department/i) !== -1) {
    if (title.search(/2|２/) !== -1) {
      mfield = "organization.dept2";
    } else {
      mfield = "organization.dept1";
    }
    possibility = pointmax;
  }
  if (!mfield && title.search(/役職|POST|POSITION|TITLE/i) !== -1) {
    mfield = "organization.title";
    possibility = pointmax;
  }
  //	備考
  if (!mfield && title.search(/備考/i) !== -1) {
    let num = 1;
    mr = title.match(/([0-9０-９]+)/i);
    if (mr) {
      num = parseInt(toHalfWidthNumber(mr[0]), 10);
    }
    if (1 <= num && num <= 5) {
      mfield = `extendprops.0.data.extra${num}`;
      possibility = 10;
    }
  }

  if (mfield) {
    if (mfield in result === false) {
      result[mfield] = {};
    }
    result[mfield] = { ...result[mfield], [fid]: possibility };
  }
};

// fieldData: { field: <fieldId>, data: <title or data> }
// result:out { fieldId: [{<mfield>: <possibility>},...] }
const analizeField = (
  fid,
  fdata,
  result /*: AResultType*/,
  pointmax /*: number*/
) => {
  let mfield = "";
  let possibility = 0;
  let mr;

  if (!fdata) return;

  // 郵便番号かどうかのチェック
  if (
    fdata.search(/^[0-9]{3}-[0-9]{4}$/) !== -1 ||
    fdata.search(/^[0-9]{7}/) !== -1
  ) {
    possibility = pointmax;
    mfield = "addresses.0.zipcode";
    if (mfield in result) {
      mfield = "addresses.1.zipcode";
      possibility--;
      if (mfield in result) {
        mfield = "addresses.2.zipcode";
        possibility--;
      }
    }
  } else if (
    fdata.search(
      /がいしゃ|ガイシャ|ｶﾞｲｼｬ|ほうじん|ホウジン|ﾎｳｼﾞﾝ|ホールディング|ﾎｰﾙﾃﾞｨﾝｸﾞ/
    ) !== -1 &&
    (fdata.search(/[^ｦｧ-ﾝﾞﾟ･() ]/) === -1 ||
      fdata.search(
        /[^ァ-ンぁ-んゔ゙゚゛゜ゝゞヴヵヶヷヸヹヺ・－ーヽヾ\s()・（）]/
      ) === -1)
  ) {
    mfield = "organization.kana";
    possibility = pointmax;
  } else if (
    fdata.search(/[^ｦｧ-ﾝﾞﾟ ]/) === -1 ||
    fdata.search(/[^ァ-ンぁ-んゔ゙゚゛゜ゝゞヴヵヶヷヸヹヺ・－ーヽヾ\s・]/) ===
      -1
  ) {
    mfield = "lastkana";

    possibility = pointmax;
    let full = false;
    mfield = "lastkana";
    if (fdata.search(/ 　/) !== -1) {
      // fullname
      full = true;
    }

    if (mfield in result) {
      if (full) {
        // fullname
        mfield = "joint_names.0.lastkana";
      } else {
        mfield = "firstkana";
      }
      possibility--;

      if (mfield in result) {
        if (full) {
          // fullname
          mfield = "joint_names.1.lastkana";
        } else {
          mfield = "joint_names.0.firstkana";
        }
        possibility--;
        if (mfield in result) {
          if (full) {
            // fullname
            mfield = "joint_names.2.lastkana";
          } else {
            mfield = "joint_names.1.firstkana";
          }
          possibility--;
          if (mfield in result) {
            if (full) {
              // fullname
              mfield = "joint_names.3.lastkana";
            } else {
              mfield = "joint_names.2.firstkana";
            }
            possibility--;
            if (mfield in result) {
              if (full) {
                // fullname
                mfield = "joint_names.4.lastkana";
              } else {
                mfield = "joint_names.3.firstkana";
              }
              possibility--;
              if (mfield in result) {
                if (full) {
                  // fullname
                  mfield = "joint_names.5.lastkana";
                } else {
                  mfield = "joint_names.4.firstkana";
                }
                possibility--;
                if (mfield in result) {
                  if (!full) {
                    mfield = "joint_names.5.firstkana";
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  // 住所かどうかのチェック
  else if (fdata.search(/[都道府県市郡区町村丁目番地]/) !== -1) {
    mfield = "addresses.0.street";
    possibility = pointmax;
    if (fdata.search(/[都道府県]$/) !== -1) {
      mfield = "addresses.0.region";
    } else if (fdata.search(/[市郡]$/) !== -1) {
      mfield = "addresses.0.city";
    }

    if (mfield in result) {
      possibility--;
      mfield =
        mfield === "addresses.0.region"
          ? "addresses.1.region"
          : mfield === "addresses.0.city"
          ? "addresses.1.city"
          : "addresses.1.street";
      if (mfield in result) {
        possibility--;
        mfield =
          mfield === "addresses.1.region"
            ? "addresses.2.region"
            : mfield === "addresses.1.city"
            ? "addresses.2.city"
            : "addresses.2.street";
      }
    }
  } else if (fdata.search(/友人|親戚|同僚|取引先|[員士師家屋官者業]$/) !== -1) {
    mfield = "tags";
    possibility = pointmax;
  } else if (
    fdata.search(
      /会社|法人|学園|学校|大学|病院|医院|コーポレーション|コーポレイション|\(株\)|㈱|\(有\)|㈲|\(財\)|\(社\)|\(医\)|\(宗\)|\(資\)|\(名\)/
    ) !== -1
  ) {
    mfield = "organization.name";
    possibility = pointmax;
  } else if (
    fdata.search(
      /.+部|.+課|営業|総務|経理|開発|企画|人事|広報|マーケティング|.+係$/
    ) !== -1
  ) {
    possibility = pointmax;
    mfield = "organization.dept1";
    if (mfield in result) {
      possibility--;
      mfield = "organization.dept2";
    }
  } else if (
    fdata.search(
      /CEO|COO|CTO|CFO|ＣＥＯ|ＣＯＯ|ＣＴＯ|ＣＦＯ|会長|社長|理事|乗務|専務|顧問|部長|次長|課長|係長|店長|主任|チーフ|リーダー/
    ) !== -1
  ) {
    mfield = "organization.title";
    possibility = pointmax;
  } else if (
    fdata.search(/^(様|御中|さん|殿|ちゃん|くん|君|陛下|閣下|殿下)$/) !== -1
  ) {
    mfield = "suffix";
    possibility = pointmax;
    if (mfield in result) {
      possibility--;
      mfield = "joint_names.0.suffix";
      if (mfield in result) {
        possibility--;
        mfield = "joint_names.1.suffix";
        if (mfield in result) {
          possibility--;
          mfield = "joint_names.2.suffix";
          if (mfield in result) {
            possibility--;
            mfield = "joint_names.3.suffix";
            if (mfield in result) {
              possibility--;
              mfield = "joint_names.4.suffix";
            }
          }
        }
      }
    }
  } else if (
    fdata.search(
      /レジデンス|ハイツ|マンション|テラスハウス|コーポ|ビル|タワー|.*荘/
    ) !== -1 &&
    fdata.search(/[0-9０-９]/) !== -1
  ) {
    possibility = pointmax;
    mfield = "addresses.0.building";
    if (mfield in result) {
      possibility--;
      mfield = "addresses.1.building";
      if (mfield in result) {
        possibility--;
        mfield = "addresses.2.building";
      }
    }
  } else {
    let maybefullname = false;
    mr = fdata.match(/ 　/);
    if (mr && mr.length === 1) maybefullname = true;

    if (
      (maybefullname && fdata.length <= 6) ||
      (!maybefullname && fdata.length <= 3)
    ) {
      const refn = /.*林|.村|.山|.川|.津|.*森|.田|.沢|.澤|.*谷|.木|高.*|髙.|.本|原.*|.*島|嶋.*/;
      const regn = /雄|.夫|朗|郎|秀|健|洋|太|治|雅|恵|里|莉|凜|祥|紗|香|.子$|.代$/;
      if (!maybefullname && fdata.search(regn) !== -1) {
        mfield = "firstname";
        possibility = pointmax;
        if (mfield in result) {
          possibility--;
          mfield = "joint_names.0.firstname";
          if (mfield in result) {
            possibility--;
            mfield = "joint_names.1.firstname";
            if (mfield in result) {
              possibility--;
              mfield = "joint_names.2.firstname";
              if (mfield in result) {
                possibility--;
                mfield = "joint_names.3.firstname";
                if (mfield in result) {
                  possibility--;
                  mfield = "joint_names.4.firstname";
                }
              }
            }
          }
        }
      } else if (
        (maybefullname &&
          (fdata.search(refn) !== -1 || fdata.search(regn) !== -1)) ||
        (!maybefullname && fdata.search(refn) !== -1)
      ) {
        mfield = "lastname";
        possibility = pointmax;
        if (mfield in result) {
          possibility--;
          mfield = "joint_names.0.lastname";
          if (mfield in result) {
            possibility--;
            mfield = "joint_names.1.lastname";
            if (mfield in result) {
              possibility--;
              mfield = "joint_names.2.lastname";
              if (mfield in result) {
                possibility--;
                mfield = "joint_names.3.lastname";
                if (mfield in result) {
                  possibility--;
                  mfield = "joint_names.4.lastname";
                }
              }
            }
          }
        }
      }
    }
    if (!mfield) {
      if (fdata.search(/^(妻|夫|長男|長女|次男|次女|三男|三女)$/) !== -1) {
        possibility = pointmax;
        mfield = "extendprops.0.family0.relation";
        if (mfield in result) {
          possibility--;
          mfield = "extendprops.0.family1.relation";
          if (mfield in result) {
            possibility--;
            mfield = "extendprops.0.family2.relation";
            if (mfield in result) {
              possibility--;
              mfield = "extendprops.0.family3.relation";
              if (mfield in result) {
                possibility--;
                mfield = "extendprops.0.family4.relation";
                if (mfield in result) {
                  possibility--;
                  mfield = "extendprops.0.family5.relation";
                }
              }
            }
          }
        }
      } else if (fdata.search(/^(A|B|O|AB)$/i) !== -1) {
        possibility = pointmax;
        mfield = "extendprops.0.family0.bloodtype";
        if (mfield in result) {
          possibility--;
          mfield = "extendprops.0.family1.bloodtype";
          if (mfield in result) {
            possibility--;
            mfield = "extendprops.0.family2.bloodtype";
            if (mfield in result) {
              possibility--;
              mfield = "extendprops.0.family3.bloodtype";
              if (mfield in result) {
                possibility--;
                mfield = "extendprops.0.family4.bloodtype";
                if (mfield in result) {
                  possibility--;
                  mfield = "extendprops.0.family5.relationbloodtype";
                }
              }
            }
          }
        }
      } else if (fdata.search(/^(male|female|男|女|♂|♀)$/) !== -1) {
        mfield = "gender";
        possibility = pointmax;
        if (mfield in result) {
          possibility--;
          mfield = "joint_names.0.gender";
          if (mfield in result) {
            possibility--;
            mfield = "joint_names.1.gender";
            if (mfield in result) {
              possibility--;
              mfield = "joint_names.2.gender";
              if (mfield in result) {
                possibility--;
                mfield = "joint_names.3.gender";
                if (mfield in result) {
                  possibility--;
                  mfield = "joint_names.4.gender";
                }
              }
            }
          }
        }
      } else if (
        fdata.search(
          /^[a-zA-Z0-9_.+-]+@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/
        ) !== -1
      ) {
        // "emails.0.address": "メールアドレス",
        // "emails.1.address": "メールアドレス(仕事)",
        // "emails.2.address": "メールアドレス(携帯)",
        // "emails.3.address": "メールアドレス(その他1)",
        // "emails.3.label": "その他1の名称",
        // "emails.4.address": "メールアドレス(その他2)",
        // "emails.4.label": "その他2の名称",
        // "emails.5.address": "メールアドレス(その他3)",
        // "emails.5.label": "その他3の名称",
        mfield = "emails.0.address";
        possibility = pointmax;
        if (mfield in result) {
          possibility--;
          mfield = "emails.1.address";
          if (mfield in result) {
            possibility--;
            mfield = "emails.2.address";
            if (mfield in result) {
              possibility--;
              mfield = "emails.3.address";
              if (mfield in result) {
                possibility--;
                mfield = "emails.4.address";
                if (mfield in result) {
                  possibility--;
                  mfield = "emails.5.address";
                }
              }
            }
          }
        }
      } else if (
        fdata.search(/^\d{4}[-/.年]\d{1,2}[-/.月]\d{1,2}日*/) !== -1 ||
        fdata.search(
          /^(?:jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)[^0-9]+\d{1,2}(?:st|nd|th|)[^0-9]+\d{4}/i
        ) !== -1 ||
        fdata.search(
          /^\d{1,2}(?:st|nd|th|)[^0-9a-zA-Z]+(?:jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)[^0-9]+[^0-9]+\d{4}/i
        ) !== -1 ||
        fdata.search(
          /^\d{4}[^0-9a-zA-Z]+(?:jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)[^0-9]+\d{1,2}(?:st|nd|th|)/i
        ) !== -1
      ) {
        mfield = "birthdate";
        possibility = pointmax;
        if (mfield in result) {
          possibility--;
          mfield = "joint_names.0.birthdate";
          if (mfield in result) {
            possibility--;
            mfield = "joint_names.1.birthdate";
            if (mfield in result) {
              possibility--;
              mfield = "joint_names.2.birthdate";
              if (mfield in result) {
                possibility--;
                mfield = "joint_names.3.birthdate";
                if (mfield in result) {
                  possibility--;
                  mfield = "joint_names.4.birthdate";
                }
              }
            }
          }
        }
      }
      // "telephones.0.number": "TEL(自宅)",
      // "telephones.1.number": "TEL(携帯)",
      // "telephones.2.number": "TEL(会社)",
      // "telephones.3.number": "TEL(仕事携帯)",
      // "telephones.4.number": "FAX(自宅)",
      // "telephones.5.number": "FAX(会社)",
      // "telephones.6.number": "TEL(その他1)",
      // "telephones.6.label": "TELその他1の名称",
      // "telephones.7.number": "TEL(その他2)",
      // "telephones.7.label": "TELその他2の名称",
      // "telephones.8.number": "TEL(その他3)",
      // "telephones.8.label": "TELその他3の名称",
      else if (fdata.search(/^0[1-9]0[-(]*[0-9]{3,4}[-)]*[0-9]{3,4}/)) {
        possibility = pointmax;
        mfield = "telephones.1.number";
        if (mfield in result) {
          possibility--;
          mfield = "telephones.3.number";
          if (mfield in result) {
            possibility--;
            mfield = "telephones.6.number";
            if (mfield in result) {
              possibility--;
              mfield = "telephones.7.number";
              if (mfield in result) {
                possibility--;
                mfield = "telephones.8.number";
              }
            }
          }
        }
      } else if (fdata.search(/^0[0-9]{2,4}[-(]*[0-9]{2,4}[-)]*[0-9]{3,5}/)) {
        possibility = pointmax;
        mfield = "telephones.0.number"; //tel
        if (mfield in result) {
          possibility--;
          mfield = "telephones.4.number"; //fax
          if (mfield in result) {
            possibility--;
            mfield = "telephones.2.number"; //office
            if (mfield in result) {
              possibility--;
              mfield = "telephones.5.number"; //office fax
            }
          }
        }
      }
    }
  }
  if (mfield) {
    if (mfield in result === false) {
      result[mfield] = {};
    }
    result[mfield] = { ...result[mfield], [fid]: possibility };
  }
};

/*
inp:
{
  titles:[{aaa:title1},{bbb:title2},{ccc]title3},...],
  data:[{aaa:data1, bbb:data2, ccc,data3,...}]
}
res:
{
  status:OK / ERROR
  error?:error message
  data?:{
    mfield1:fld1,
    mfield2:fld5,
    ...
  }
}

*/
exports.matchFields = (req /*: any*/) => {
  /*
  {
    inpfield1:[{mfield_c1:5},{mfield_c2:3}]
  }
  */
  let result /*: AResultType*/ = {};

  let pointmax = 10;
  let titles = undefined;
  let data = undefined;
  if ("titles" in req.body) {
    if (typeof req.body.titles === "string") {
      titles = JSON.parse(req.body.titles);
    } else titles = req.body.titles;
  }
  if ("data" in req.body) {
    if (typeof req.body.data === "string") {
      data = JSON.parse(req.body.data);
    } else data = req.body.data;
    if (pointmax < data.length) pointmax = data.length;
  }

  if (titles) {
    //console.log(`---titles---\n${JSON.stringify(titles)}`);
    let fids = Object.keys(titles);
    let count = fids.length;
    fids.forEach((fid, index) => {
      checkMameFieldTitle(fid, titles[fid], result, pointmax + (count - index));
    });
  }

  if (data && Object.keys(result).length < 5) {
    for (const line of data) {
      let lres /*: AResultType*/ = {};
      let fids = Object.keys(line);
      let count = fids.length;
      fids.forEach((fid, index) => {
        analizeField(fid, line[fid], lres, 10 + count - index);
      });

      Object.keys(lres).forEach((fid) => {
        if (fid in result === false) {
          result[fid] = {};
        }
        Object.keys(lres[fid]).forEach((mid) => {
          if (mid in result[fid] === false) {
            result[fid][mid] = 0;
          }
          result[fid][mid] += lres[fid][mid];
        });
      });
    }
  }

  // res:
  // {
  //   statusCode:OK / ERROR
  //   error?:error message
  //   data?:{
  //     mfield1:fld1,
  //     mfield2:fld5,
  //     ...
  //   }
  // }
  let responce /*: ResponceType*/ = {
    statusCode: 300,
    status: "ok",
    data: {}
  };

  Object.keys(result).forEach((mfld) => {
    if (mfld in responce.data === false) {
      const ar = result[mfld];
      let fieldId = "";
      let max = 0;
      Object.keys(ar).forEach((fld) => {
        if (max < ar[fld]) {
          fieldId = fld;
          max = ar[fld];
        }
      });
      responce.data[mfld] = fieldId;
    }
  });
  return responce;
};
