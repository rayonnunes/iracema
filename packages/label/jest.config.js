module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    moduleNameMapper: {
      '^@/(.*)$': '<rootDir>/src/$1',
    },
    transform: {
        '^.+\\.tsx?$': [
            'ts-jest',
            {
                tsconfig: './tsconfig.json'
            }
        ],
    },
    testMatch: ['<rootDir>/src/**/*.(test|spec).(ts|tsx)'],
    collectCoverageFrom: ['<rootDir>/src/**/*.{ts,tsx}'],
    coverageDirectory: 'coverage',
};