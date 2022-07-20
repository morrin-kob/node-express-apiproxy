var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/test/users");
var cabApiRouter = require("./routes/api/cab");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/test/users", usersRouter);
app.use("/api/cab", cabApiRouter);

exports.corsCheck = (req, res) => {
  const origin = req.headers.origin;

  if (
    origin === "http://0.0.0.0:9229" || //process.env.FRONTEND_ORIGIN  // https://front-end.com
    /^https:\/\/.+\.front-end\.com$/.test(origin) ||
    /^https:\/\/efrdcz\.csb\.app/.test(origin)
  ) {
    res.header("Access-Control-Allow-Origin", origin);
    if (req.method === "OPTIONS") {
      res.header(
        "Access-Control-Allow-Headers",
        "X-atk, X-ept, X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept"
      );
      res.header("Access-Control-Allow-Methods", "POST, PUT, DELETE, OPTIONS");
      res.header("Access-Control-Allow-Credentials", true);
    }
    return true;
  }
  return false;
};

app.use((req, res, next) => {
  if (exports.corsCheck(req, res) === false) {
    console.log(`not allowed:${req.headers.origin}`);
  }

  if ("OPTIONS" === req.method) {
    res.send(204); // 204: No Content
  } else {
    next();
  }
});
var listener = app.listen(8080, function () {
  console.log("Listening on port " + listener.address().port);
});

/**
 * OPTIONSメソッドの実装
 */
app.options("*", function (req, res) {
  console.log(`OPTIONS:app.options()`);
  res.sendStatus(204);
});

function reformResponse(resp) {
  //resp.setEncoding("utf8");
  const data = {};
  for (let key of Object.keys(resp)) {
    let type = typeof resp[key];
    if (
      type === "number" ||
      type === "string" ||
      type === "boolean" ||
      (type === "object" && key === "data")
    ) {
      data[key] = resp[key];
    } else {
      //console.log("*" + key + "*:type:" + type);
    }
  }

  let scInMessage = 200;
  if (data.message) {
    if (data.message.match(/status code (\d+)/)) {
      scInMessage = RegExp.$1;
    }
  }
  let statusCode = data.status || data.statusCode || scInMessage;
  if (statusCode >= 400) {
    data["error"] =
      data.statusMessage ||
      data.statusText ||
      data.message ||
      "something is wrong";
  }
  data["statusCode"] = statusCode;
  return data;
}

// ============================
//   HTTP GET　（同期処理）
//   return でresponceを受け取れる
// ============================
exports.httpGet = async (url, params) => {
  const axios = require("axios");

  if (params) {
    let query = "";
    for (let key of Object.keys(params)) {
      if (
        key === "access_token" ||
        key === "refresh_token" ||
        key === "user_agent"
      )
        continue;
      if (query.length) query += "&";
      query += key + "=" + params[key];
    }
    if (query.length) {
      url += "?" + query;
    }
  }

  let headers = {};

  if (params.user_agent) {
    headers["User-Agent"] = params.user_agent;
  }
  if (params.access_token) {
    headers["Authorization"] = "Bearer " + params.access_token;
  }
  headers["Content-Type"] = "application/json; charset=UTF-8";
  //console.log("GET:" + url + " header:" + JSON.stringify(headers));
  try {
    let response = await axios({
      method: "GET",
      url: url,
      headers: headers,
      data: {}
    });
    return reformResponse(response);
  } catch (error) {
    return reformResponse(error);
  }
};

// ============================
//   HTTP POST/PUT/DELETE　（同期処理）
//   return でresponceを受け取れる
// ============================
exports.httpPost = async (url, params, postdata) => {
  const axios = require("axios");

  let contType = "application/json";
  let data = "";
  if (params.hdr_conttype && params.hdr_conttype !== contType) {
    contType = params.hdr_conttype;
    for (let key of Object.keys(postdata)) {
      if (data.length) data += "&";
      data += key + "=" + postdata[key];
    }
  } else {
    data = JSON.stringify(postdata);
  }
  let method = params.method || "POST";

  let headers = {
    "Content-Type": contType
  };
  if (params.user_agent) {
    headers["user-agent"] = params.user_agent;
  }
  if (params.access_token) {
    headers["Authorization"] = "Bearer " + params.access_token;
  }

  let response = { status: "nothing" };

  try {
    response = await axios({
      method: method,
      url: url,
      headers: headers,
      data: data
    });
    return reformResponse(response);
  } catch (error) {
    return reformResponse(error);
  }
};

// =========================================================
