let CookieJDs = [];
if (process.env.JD_COOKIE) {
    if (process.env.JD_COOKIE.indexOf("&") > -1) {
        CookieJDs = process.env.JD_COOKIE.split("&");
    } else if (process.env.JD_COOKIE.indexOf("\n") > -1) {
        CookieJDs = process.env.JD_COOKIE.split("\n");
    } else {
        CookieJDs = [process.env.JD_COOKIE];
    }
}
CookieJDs = [...new Set(CookieJDs.filter((item) => !!item))];
console.log(`\n====================共${CookieJDs.length}个京东账号Cookie=========\n`);
console.log(
    `==================脚本执行- 北京时间(UTC+8)：${new Date(
        new Date().getTime() + new Date().getTimezoneOffset() * 60 * 1000 + 8 * 60 * 60 * 1000
    ).toLocaleString()}=====================\n`
);
for (let i = 0; i < CookieJDs.length; i++) {
    const index = i + 1 === 1 ? "" : i + 1;
    exports["CookieJD" + index] = CookieJDs[i].trim();
}
