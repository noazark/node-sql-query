exports.between = function (a, b) {
	return createSpecialObject({ from: a, to: b }, 'between');
};
exports.like = function (expr) {
	return createSpecialObject({ expr: expr }, 'like');
};

exports.eq = function (v) {
	return createSpecialObject({ val: v }, 'eq');
};
exports.ne = function (v) {
	return createSpecialObject({ val: v }, 'ne');
};
exports.gt = function (v) {
	return createSpecialObject({ val: v }, 'gt');
};
exports.gte = function (v) {
	return createSpecialObject({ val: v }, 'gte');
};
exports.lt = function (v) {
	return createSpecialObject({ val: v }, 'lt');
};
exports.lte = function (v) {
	return createSpecialObject({ val: v }, 'lte');
};

function createSpecialObject(obj, tag) {
	Object.defineProperty(obj, "sql_comparator", {
		configurable : false,
		enumerable   : false,
		value        : function () { return tag; }
	});

	return obj;
}
