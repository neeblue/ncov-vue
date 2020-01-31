<template>
  <div class="dashboard">
    <h2>全国疫情数据</h2>
    <p class="subtitle">截至 2020-01-31 21:25</p>
    <ul class="list">
      <li>
        <strong class="confirmed">9811</strong>
        <div>确诊</div>
      </li>
      <li>
        <strong class="suspect">15238</strong>
        <div>疑似</div>
      </li>
      <li>
        <strong class="dead">213</strong>
        <div>死亡</div>
      </li>
      <li>
        <strong class="cured">211</strong>
        <div>治愈</div>
      </li>
    </ul>
  </div>
</template>

<style lang="less" scoped>
.dashboard {
  margin: 20px 15px;
  padding: 20px;
  background: #fff;
  border-radius: 2px;
  line-height: 1.5;
  h2 {
    font-size: 14px;
  }
  .subtitle {
    font-size: 10px;
    color: #666;
  }
  .list {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: 20px;
    li {
      text-align: center;
      strong {
        font-size: 18px;
      }
      & :last-child {
        font-size: 12px;
        transform: scale(0.8);
        color: #666;
      }
      .confirmed {
        color: @danger;
      }
      .suspect {
        color: @warning;
      }
      .dead {
        color: @gray;
      }
      .cured {
        color: @green;
      }
    }
  }
}
</style>
