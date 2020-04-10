module.exports = {
    roots: ['./src'],
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
        '^.+\\.svg$': 'jest-svg-transformer',
    },
};
