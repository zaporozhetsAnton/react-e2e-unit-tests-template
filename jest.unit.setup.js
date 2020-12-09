// file where you can write all mocks

// node module example
// jest.mock(
//     'redux',
//     jest.fn(() => {
//         const moduleMock = jest.requireActual('redux');
//         return {
//             ...moduleMock,
//             applyMiddleware: jest.fn(),
//             createStore: jest.fn(),
//             compose: jest.fn(),
//             combineReducers: jest.fn(),
//         };
//     }),
// );

// local function mock example
// jest.mock('@/utilities/localFunc', () => ({
//     __esModule: true,
//     default: jest.fn(),
//     namedExportFunc: jest.fn(),
// }));
