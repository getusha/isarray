function isArray(itm) {
	if(itm === null) return false;
	return typeof itm === "object" && typeof itm.length !== "undefined";
}
 module.exports = isArray;
