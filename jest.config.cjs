module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    // setupFiles: ['./jest.setup.js']
    transform: {
        '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
    },
}