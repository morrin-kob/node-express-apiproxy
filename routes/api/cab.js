var express = require("express");
var router = express.Router();

var exf = require("../../app.js");

/**
 * OPTIONSメソッドの実装
 */
router.options("/:what", function (req, res) {
  exf.corsCheck(req, res);
  res.sendStatus(204);
});
router.options("/:what/:target", function (req, res) {
  exf.corsCheck(req, res);
  res.sendStatus(204);
});
router.options("/:what/:target/:id", function (req, res) {
  exf.corsCheck(req, res);
  res.sendStatus(204);
});

/*
  get access-token (for test)
  scd, cid, csr, uag, ept
*/
router.get("/token", async function (req, res, next) {
  let resp = { error: "something is wrong" };
  if (!req.query.scd || req.query.scd.length === 0) {
    resp = { error: "no auth-code :" + JSON.stringify(req.query) };
  } else {
    let params = {
      user_agent: req.query.uag,
      hdr_conttype: "application/x-www-form-urlencoded"
    };
    let data = {
      grant_type: "authorization_code",
      code: req.query.scd,
      client_id: req.query.cid,
      client_secret: req.query.csr,
      responce_type: "code",
      redirect_uri: ""
    };
    resp = await exf.httpPost(req.query.ept + "/token", params, data);
  }

  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Content-Type", "application/json");
  res.send(JSON.stringify(resp));
});

/*
  POST: getting access-token
  scd, cid, csr, uag, ept
*/
router.post("/token", async function (req, res, next) {
  let resp = { error: "something is wrong" };

  let ept = req.header("X-ept") || req.body.ept;
  if (!ept) {
    resp = { statusCode: 400, error: "need to set ept" };
  } else if (!req.body.scd) {
    if (req.body.rtk) {
      // refresh token
      let params = {
        user_agent: req.body.uag,
        hdr_conttype: "application/x-www-form-urlencoded"
      };
      let data = {
        grant_type: "refresh_token",
        client_id: req.body.cid,
        client_secret: req.body.csr,
        refresh_token: req.body.rtk,
        redirect_uri: ""
      };
      resp = await exf.httpPost(`${ept}/token`, params, data);
    } else {
      resp = {
        statusCode: 400,
        error: "no auth-code :" + JSON.stringify(req.body)
      };
    }
  } else {
    let params = {
      user_agent: req.body.uag,
      hdr_conttype: "application/x-www-form-urlencoded"
    };
    let data = {
      grant_type: "authorization_code",
      code: req.body.scd,
      client_id: req.body.cid,
      client_secret: req.body.csr,
      responce_type: "code",
      redirect_uri: ""
    };
    //console.log(`POST-${ept}/token\n${JSON.stringify(data)}`);
    resp = await exf.httpPost(`${ept}/token`, params, data);
  }

  //console.log(`get-token:resp():${ept}/token: ${JSON.stringify(resp)}`);
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Content-Type", "application/json");
  if ("statusCode" in resp && resp.statusCode >= 400) {
    res.status(resp.statusCode).send(JSON.stringify(resp));
  } else res.send(JSON.stringify(resp));
});

const apiGet = async (req) => {
  let resp = { error: "something is wrong" };

  let ept = req.header("x-ept") || req.query.ept;
  let a_token = req.header("x-atk") || req.query.atk;
  if (!ept) {
    resp = { error: "need to set ept" };
  } else if (!a_token) {
    resp = { error: "need to set atk" };
  } else {
    let params = {
      access_token: a_token
    };
    if (req.query.uag) {
      params["user_agent"] = req.query.uag;
    }
    let what = req.params.what;
    let target = req.params.target;
    let id = req.params.id;
    let url = `${ept}/${what}`;
    if (target) url += `/${target}`;
    if (id) url += `/${id}`;
    resp = await exf.httpGet(url, params);

    //console.log(`response:${JSON.stringify(resp)}`);
  }
  return resp;
};

const respond = (res, resp) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Content-Type", "application/json");
  res.status(resp.statusCode).send(JSON.stringify(resp));
};

/*
  headers: x-atoken: <ACCESS_TOKEN>
*/
router.get("/:what/:target/:id", async function (req, res, next) {
  let resp = await apiGet(req);
  respond(res, resp);
});

router.get("/:what/:target", async function (req, res, next) {
  let resp = await apiGet(req);
  respond(res, resp);
});

router.get("/:what", async function (req, res, next) {
  let resp = await apiGet(req);
  respond(res, resp);
});

const apiPost = async (req) => {
  let resp = { error: "something is wrong" };

  let ept = req.header("x-ept") || req.query.ept;
  let a_token = req.header("x-atk") || req.query.atk;
  if (!ept) {
    resp = { error: "need to set ept" };
  } else if (!a_token) {
    resp = { error: "need to set atk" };
  } else {
    let params = {
      access_token: a_token
    };
    if (req.query.uag) {
      params["user_agent"] = req.query.uag;
    }
    let what = req.params.what;
    let target = req.params.target;
    let id = req.params.id;
    let url = `${ept}/${what}`;
    if (target) url += `/${target}`;
    if (id) url += `/${id}`;
    resp = await exf.httpPost(url, params, req.body);
  }
  return resp;
};

/*
  POST: 
*/
router.post("/:what/:target/:id", async function (req, res, next) {
  let resp = await apiPost(req);
  respond(res, resp);
});
router.post("/:what/:target", async function (req, res, next) {
  let resp = await apiPost(req);
  respond(res, resp);
});
router.post("/:what", async function (req, res, next) {
  let resp = await apiPost(req);
  respond(res, resp);
});

/*
  PUT: 
*/
router.put("/:what/:target/:id", async function (req, res, next) {
  let resp = await apiPost(req);
  respond(res, resp);
});
router.put("/:what/:target", async function (req, res, next) {
  let resp = await apiPost(req);
  respond(res, resp);
});
router.put("/:what", async function (req, res, next) {
  let resp = await apiPost(req);
  respond(res, resp);
});

/*
  DELETE: 
*/
router.delete("/:what/:target/:id", async function (req, res, next) {
  let resp = await apiPost(req);
  respond(res, resp);
});
router.delete("/:what/:target", async function (req, res, next) {
  let resp = await apiPost(req);
  respond(res, resp);
});
router.delete("/:what", async function (req, res, next) {
  let resp = await apiPost(req);
  respond(res, resp);
});

module.exports = router;
