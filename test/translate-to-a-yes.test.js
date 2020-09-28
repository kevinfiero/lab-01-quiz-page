// IMPORT MODULES under test here:
import { translateToAYes } from '../translate-to-a-yes.js';

const test = QUnit.test;

test('test isYes function yields true', (expect) => {

    const result = translateToAYes('Yepper');
    const expectedVal = true;

    expect.equal(result, expectedVal);
});

test('test isYes function yields false', (expect) => {

    const result = translateToAYes('No ma\'am');
    const expectedVal = false;

    expect.equal(result, expectedVal);
});
