// ESM : Ecma Script(JS의 표준 명칭) Module. 브라우저 에서의 작동 방식
// import나 export로 Module을 가져오거나 내보냄

// CommonJS : Node.js에서는 ESM이 아닌 CommonJS방식을 지원
// import -> require(),
// export -> module.exports() 로 사용


// .postcssrc.js의 경우 bundler를 통해 변환하는 용도로 사용
// 즉 브라우저가 아닌 Node.js환경에서 사용되며, Common.js방식을 사용

// require를 통해 autoprefixer를 가져옴
// import autoprefixer from "autoprefixer" 와 같은 개념 
const autoprefixer = require("autoprefixer")

// export {plufins: [autoprefixer]} 와 같은 개념
module.exports = {
  plugins: [
    autoprefixer
  ]
}

// 다음과 같이 축약 가능
//module.exports = {plufins: [require("autoprefixer")]}