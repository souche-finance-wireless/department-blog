module.exports = {

  // 在每次测试之间自动清除模拟调用和实例
  clearMocks: true,

  // 指示在执行测试时是否应收集覆盖信息
  collectCoverage: true,

  // 一组glob模式，指示应收集覆盖率信息的一组文件
  'collectCoverageFrom': [
    'src/**/*.{js,jsx,ts,tsx}',
    '!**/node_modules/**',
    '!src/**/*.d.ts',
  ],

  // Jest应输出其coverage文件的目录
  'coverageDirectory': '<rootDir>/.coverage-report',

  // 从正则表达式到变换器路径的映射
  'transform': {
    '^.+\\.jsx?$': 'babel-jest',
  },

}