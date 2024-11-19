const result = document.querySelector('#results');
const eq = document.querySelector('#equation');
const testStr = '2 * 2 + (18 / 3 + 2) * (2 + 2 + 2 * 3)';
const parenthesisRegEx = new RegExp('\\([\\d\\s+*/\\-.]+\\)', 'g');
const equationRegEx = new RegExp('\\d+\\s*[+*/\\-.]\\s*\\d+|\\(.*?\\)', 'g');
const operatorRegEx = new RegExp('[+*/\\-]', 'g');
const numberRegEx = new RegExp('\\d+', 'g');
const operatorsForEachExpression = new RegExp('[*+/\\-](?=\\s\\d)', 'g');
const operatorsWithinParenthesis = new RegExp(
	'(?<=\\(\\s*\\d.*?)[+*/\\-.](?=\\s*\\d)',
	'g'
);
const everything = new RegExp('.*\\S', 'g');

const operators = {
	'+': (a, b) => a + b,
	'-': (a, b) => a - b,
	'*': (a, b) => a * b,
	'/': (a, b) => a / b,
	calculate(a, b, operator) {
		if (operator in operators) {
			return operators[operator](a, b);
		}
	},
};

document.addEventListener('submit', (e) => {
	if (!e.target.closest('#equation-form')) return;
	if (eq.value) {
		newTest = eq.value;
	}

	e.preventDefault();
});
