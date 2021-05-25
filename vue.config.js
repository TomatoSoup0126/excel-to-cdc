module.exports = {
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        // Windows 相關設定
        win: {
          legalTrademarks: 'legalTrademarks', // 商標
          icon: 'public/icon.ico', // 安裝檔圖示
          target: [{
            target: 'nsis', // 檔案類型
            arch: ['x64', 'ia32'] // 檔案位元，越多類型檔案越大
          }]
        }
      }
    }
  }
}