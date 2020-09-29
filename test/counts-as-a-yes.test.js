// IMPORT MODULES under test here:
import { countsAsAYes } from '../counts-as-a-yes.js';

const test = QUnit.test;

test('test isYes function yields true', (expect) => {

    const result = countsAsAYes('Yepper');
    const expectedVal = true;

    expect.equal(result, expectedVal);
});

test('test isYes function yields false', (expect) => {

    const result = countsAsAYes('No ma\'am');
    const expectedVal = false;

    expect.equal(result, expectedVal);
});
