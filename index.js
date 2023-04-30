function isArray(itm) {
	return typeof itm === "object" && typeof itm.length !== "undefined";
}
 module.exports = isArray;
